import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";

function Details({ trip }) {
    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Detalles del Viaje</h1>

            <h2 className="text-xl font-semibold mb-6">Destino: {trip.userSelection?.place}</h2>

            <section>
                <h3 className="text-lg font-bold mb-4">Itinerario</h3>
                <div className="space-y-6">
                    {trip?.trip?.itinerary?.map((day, index) => (
                        <Card key={index} className="shadow-lg">
                            <CardHeader>
                                <CardTitle>{day.day}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {day.schedule.map((activity, index) => (
                                        <div key={index}>
                                            <h4 className="font-semibold">{activity.activity}</h4>
                                            <p className="text-gray-500">{activity.time}</p>
                                            <p>{activity.details}</p>
                                            <a
                                                href={activity.url}
                                                target="_blank"
                                                className="text-blue-500 hover:underline"
                                            >
                                                <Button>
                                                Ver en el mapa
                                                </Button>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <Separator className="my-6" />
            <section>
                <h3 className="text-lg font-bold mb-4">Opciones de Hoteles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {trip?.trip?.hotel_options?.map((hotel, index) => (
                        <Card key={index} className="shadow-lg">
                            <CardHeader>
                                <CardTitle>{hotel.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-500">{hotel.address}</p>
                                <p>Precio: {hotel.price}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Details;
