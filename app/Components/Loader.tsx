import loader from '../../assets/loaders/loaderact.gif';
import Logo from "../../assets/Logo.jpeg";
import Image from 'next/image';
function Loader(){
    return (
        <>
            <div className="fixed z-50 top-0 left-0 w-full h-full flex flex-col gap-2 items-center justify-center bg-white text-pblue-800">
                <Image
                alt='logo'
                src={Logo}
                width={150}
                height={150}
                className='animate-pulse'
                />
            </div>
        </>
    )
}

export default Loader