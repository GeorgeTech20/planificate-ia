import { Button } from "@/components/ui/button"
import Header from "@/components/ui/header"
import { Link } from "react-router-dom"

function Landing() {
    return (
        <main className="relative bg-dark-gray rounded-xl w-full h-screen  text-white px-2">
            <div className="container grid grid-rows-[0.25fr_2fr] w-full h-full">
                <Header />
                <section className="w-full h-full">
                    <article className=" w-full max-w-[62em] mt-[clamp(4rem,8vw,7rem)]">
                        <img src="/users.png" alt="" className="w-full max-w-[10rem] mobile:mb-2" />
                        <h2 className="font-grotesk text-2xl leading-[1] tracking-[-0.05em]">Organiza tu viaje perfecto sin complicaciones</h2>
                        <p className="mt-5 mb-9 w-full max-w-[40em] leading-[1.3]">Descubre destinos, hoteles y actividades personalizadas según tus preferencias. ¡Organiza todo con solo unos clicks y disfruta de un viaje sin complicaciones!</p>
                        <Link to={"/trip-form"} className="bg-primary text-secondary rounded-full py-3 px-6 inline-block text-[16px]">Prueba ahora</Link>
                    </article>
                </section>

                <img src="/video.png" alt="" className=" cursor-pointer absolute bottom-10 right-10 w-full max-w-[30rem] mobile:max-w-[20rem]" />
            </div>
        </main>
    )
}

export default Landing