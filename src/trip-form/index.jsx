import { Button } from "@/components/ui/button";
import { chatSession, PROMPT } from "@/service/AI";
import { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useGoogleLogin } from "@react-oauth/google";
import axios from 'axios';
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import { useNavigate } from "react-router-dom";
import Header from "@/components/ui/header";

function TripForm() {
    const [data, setData] = useState({ place: "", days: "", money: "" });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    const navigateTo = useNavigate();

    const validateForm = () => {
        const Errors = {};
        if (!data.place.match(/^[a-zA-Z\s]+$/)) {
            Errors.place = "El nombre del lugar debe contener solo letras.";
        }
        if (data.days > 30 || data.days < 1) {
            Errors.days = "La estancia como maximo es de 30 dias.";
        }
        if (data.money > 10000 || data.money <= 100) {
            Errors.money = "El presupuesto minimo es de 100 y maximo de 10000 soles.";
        }
        return Errors;
    };

    const handleInputChange = (name, value) => {
        setData({
            ...data,
            [name]: value
        });
    };

    const onGenerateTripPlan = async () => {
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        setErrors({});
        const user = localStorage.getItem("user");

        if (!user) {
            setOpenDialog(true);
            return;
        }

        setLoading(true);

        const mainPrompt = PROMPT.replace("{location}", data?.place)
            .replaceAll("{days}", data?.days)
            .replace("{money}", data?.money);

        const result = await chatSession.sendMessage(mainPrompt);

        saveTrip(result?.response?.text());
        setLoading(false);
    };

    const login = useGoogleLogin({
        onSuccess: (token) => getUserProfile(token),
        onError: (err) => console.log(err)
    });

    const getUserProfile = (token) => {
        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token?.access_token}`, {
            headers: {
                Authorization: `Bearer ${token?.access_token}`,
                Accept: "Application/json"
            }
        }).then((res) => {
            localStorage.setItem("user", JSON.stringify(res.data));
            setOpenDialog(false);
            onGenerateTripPlan();
        });
    };

    const saveTrip = async (trip) => {
        setLoading(true);

        const id = Date.now().toString();
        const user = JSON.parse(localStorage.getItem("user"));

        await setDoc(doc(db, "TRIPS", id), {
            userSelection: data,
            trip: JSON.parse(trip),
            userEmail: user?.email,
            id: id
        });

        setLoading(false);
        navigateTo(`/trip-detail/${id}`);
    };

    return (
        <main className="relative bg-dark-gray rounded-xl w-full  text-white pb-10 px-2 h-screen">
            <div className="container">
                <Header />
                <section>
                    <h1 className="text-2xl font-grotesk mb-6 tracking-tighter mt-12">Detalla tu Viaje</h1>

                    <div className="mb-10">
                        <Label htmlFor="place" className="mb-4 block text-pale-gray">¿A dónde vas a ir?</Label>
                        <Input
                            id="place"
                            type="text"
                            value={data.place}
                            onChange={(e) => handleInputChange("place", e.target.value)}
                            placeholder="Ingresa el destino"
                            className="bg-blur text-white placeholder:text-white py-3 h-auto focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:outline-primary"
                        />
                        {errors.place && <p className="text-red-500 text-sm mt-2">{errors.place}</p>}
                    </div>

                    <div className="mb-10">
                        <Label htmlFor="days" className="mb-4 block text-pale-gray">¿Cuántos días te vas a quedar?</Label>
                        <Input
                            id="days"
                            type="number"
                            value={data.days}
                            onChange={(e) => handleInputChange("days", e.target.value)}
                            placeholder="Ingresa la cantidad de días"
                            className="bg-blur text-white placeholder:text-white py-3 h-auto focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:outline-primary"
                        />
                        {errors.days && <p className="text-red-500 text-sm mt-2">{errors.days}</p>}
                    </div>

                    <div className="mb-10">
                        <Label htmlFor="money" className="mb-4 block text-pale-gray">¿Cuánto puedes gastar?</Label>
                        <Input
                            id="money"
                            type="number"
                            value={data.money}
                            onChange={(e) => handleInputChange("money", e.target.value)}
                            placeholder="Ingresa el presupuesto"
                            className="bg-blur text-white placeholder:text-white py-3 h-auto focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:outline-primary"
                        />
                        {errors.money && <p className="text-red-500 text-sm mt-2">{errors.money}</p>}
                    </div>

                    <button disabled={loading} onClick={onGenerateTripPlan} className="w-full bg-primary rounded-full py-3 text-[16px] px-5 text-secondary hover:">
                        {loading ? "Generando..." : "Crear Itinerario"}
                    </button>

                </section>
            </div>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent>
                    <DialogTitle>Regístrate con tu cuenta de Google</DialogTitle>
                    <DialogDescription>
                        Regístrate en la aplicación para poder tener un registro de los itinerarios.
                    </DialogDescription>
                    <Button onClick={login}>Registro</Button>
                </DialogContent>
            </Dialog>

        </main>
    );
}

export default TripForm;
