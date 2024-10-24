import { Card, CardTitle } from "@/components/ui/card";


function HotelCard({ hotel, index }) {
    return (
        <Card key={index} className="pt-8 pb-5 relative px-10 min-h-[15rem] text-white bg-blur mobile:px-5">
            <div>
                <CardTitle className="text-lg mb-4 leading-[1.3]" >{hotel.name}</CardTitle>
                <p className="text-[0.85rem] text-pale-gray">{hotel.address}</p>
            </div>


            <div className="h-[1px] w-full bg-white opacity-20 mt-6 mb-5"></div>

            <div>
                <div className="flex items-center justify-between gap-5 mobile:flex-col mobile:items-start">
                    <div>
                        <p className="text-[0.85rem] text-pale-gray">Precio</p>
                        <p className="text-lg font-grotesk -mt-1">{hotel.price}</p>
                    </div>
                    <div className="bg-primary rounded-lg py-2 px-5 flex items-center gap-4">
                        <p className="font-grotesk text-secondary">{hotel.rating}</p>
                        <img src="/stars.svg" alt="" />
                    </div>
                </div>
            </div>
        </Card>
    );
}


export default HotelCard;
