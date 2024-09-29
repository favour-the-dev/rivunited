import Image from "next/image";
import banner from '../../../../assets/Banner.jpeg'
function Banner() {
    return ( 
        <>
            <section className="max-w-[60rem] w-full mx-auto bg-blue-900 text-white md:rounded-sm flex flex-col md:flex-row gap-2 shadow-2xl mt-4 md:mt-8" id="top">
                <div className="p-3 md:p-5 group cursor-pointer order-2 md:order-1">
                    <p className="uppercase text-xl font-semibold text-blue-200 group-hover:underline">Men's Team</p>
                    <p className="text-2xl font-bold uppercase group-hover:underline">Rivers United to Face Enyimba Rangers in the Nigerian Premier League</p>
                </div>
                <div className="flex self-end order-1 md:order-2">
                    <Image
                    src={banner}
                    alt="Banner"
                    width={1800}
                    height={1800}
                    />
                </div>
            </section>    
        </>
    );
}

export default Banner;