import Image, { StaticImageData } from "next/image";

interface CardProps{
    imageSrc: string | StaticImageData,
    NewsHeadline: string,
    Team: string
}
function Card({imageSrc, NewsHeadline, Team}: CardProps) {
    return ( 
        <>
            <div className="flex md:flex-col gap-2 md:gap-0 md:items-start md:w-full md:max-w-[350px] py-4 border-b border-opacity-85 md:border-none">
                <Image
                src={imageSrc}
                alt=""
                width={250}
                height={250}
                className="md:w-full"
                />
                <div className="flex flex-col gap-1 w-full mt-2">
                    <p className="text-xs md:text-lg font-semibold text-blue-900 uppercase">{NewsHeadline}</p>
                    <span className="text-gray-600 text-xs md:text-sm uppercase font-semibold">{Team}</span>
                </div>
            </div>    
        </>
    );
}

export default Card;