import Details from "@/components/details";
import { db } from "@/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TripDetails() {
    const [trip, setTrip] = useState([]);
    const { tripid } = useParams();

    useEffect(() => {
        tripid && getData();
    }, [])

    const getData = async () => {
        const docRef = doc(db, "TRIPS", tripid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document : ", docSnap.data());
            setTrip(docSnap.data());
        } else {
            console.log("No such");
        }
    }



    return (
        <>
            <Details trip={trip} />
        </>
    );
}

export default TripDetails;
