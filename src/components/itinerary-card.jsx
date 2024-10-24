import { Card } from "./ui/card";

function ItineraryCard({ day }) {
    return (
        <Card className="shadow-lg py-10 px-12 mobile:px-8 bg-blur text-white my-10">
            <h4 className="text-[2.5rem] font-grotesk mb-7 tracking-tighter">{day.day}</h4>

            <div className="grid  grid-cols-3 tablet:grid-cols-1 gap-x-24 gap-y-16 mobile:gap-y-12 ">
                {day.schedule.map((activity, index) => (
                    <div key={index} className="flex items-start  gap-20 mobile:flex-col mobile:gap-5">
                        <p className="bg-primary text-secondary rounded-full w-full max-w-max py-2 px-4 font-medium text-[0.9rem] text-center">{activity.time}</p>
                        <div>
                            <h4 className="text-[1.05rem] leading-[1.5] font-medium mb-4">{activity.activity}</h4>
                            <p className="text-[0.9rem] text-pale-gray">{activity.details}</p>
                        </div>
                    </div>
                ))}
            </div>

        </Card>
    );
}

export default ItineraryCard;
