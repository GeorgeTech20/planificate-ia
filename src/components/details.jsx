import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import Header from "./ui/header";
import HotelCard from "./hotel-card";
import ItineraryCard from "./itinerary-card";

function Details({ trip }) {
    return (
        <main className="relative bg-dark-gray rounded-xl w-full h-full  text-white pb-10 px-2">
            <div className="container w-full h-full">
                <h1 className="sr-only">Detalles  del Viaje</h1>
                <Header />
                <h2 className="text-2xl font-grotesk mt-16 tracking-tighter">{trip.userSelection?.place}</h2>

                <Separator className="mt-5 mb-11 opacity-50" />

                <section>
                    <h3 className="text-xl font-grotesk mb-10">Hoteles</h3>
                    <div className="grid grid-cols-3 tablet:grid-cols-1 gap-4">
                        {trip?.trip?.hotel_options?.map((hotel, index) => (
                            <HotelCard key={index} hotel={hotel} />
                        ))}
                    </div>
                </section>

                <Separator className="mt-24 mb-11 opacity-50" />

                <section>
                    <h3 className="text-xl font-grotesk mb-16">Itinerario</h3>

                    <div>
                        {trip?.trip?.itinerary?.map((day, index) => (
                            <ItineraryCard key={index} day={day} />
                        ))}
                    </div>

                </section>

            </div>

        </main>
    )
}

export default Details;
