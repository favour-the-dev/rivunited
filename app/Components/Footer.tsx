import logo from '../../assets/clublogo.png';
import Image from 'next/image';
import Link from 'next/link';
import { CiGlobe } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
    const thisYear = new Date().getFullYear();
    return ( 
        <>
            <footer className='bg-blue-900 text-blue-200 py-4'>
                <div className='max-w-[80rem] w-full mx-auto p-3 md:p-5 flex flex-col gap-3'>
                    <div className='flex flex-row gap-4 flex-wrap md:flex-nowrap justify-between border-b border-blue-200 border-opacity-55 py-5'>
                        <div className='flex items-center gap-2'>
                            <Image
                            src={logo}
                            alt='footer logo'
                            width={120}
                            height={120}
                            />
                            <p className='md:hidden font-bold text-3xl'>RIVERS UNITED F.C</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-6'>
                            <div className='flex items-center gap-4'>
                                <span className='flex items-center gap-1 text-2xl bg-blue-500 bg-opacity-50 p-2 rounded-full'><CiGlobe /> <span className='text-white'>EN</span></span>
                                <div className='border-l border-white border-opacity-50 px-4 flex flex-wrap items-center gap-2'>
                                    <Link href="/" className='text-2xl bg-blue-500 bg-opacity-50 p-2 rounded-full'><FaYoutube /></Link>
                                    <Link href="/" className='text-2xl bg-blue-500 bg-opacity-50 p-2 rounded-full'><FaInstagram /></Link>
                                    <Link href="/" className='text-2xl bg-blue-500 bg-opacity-50 p-2 rounded-full'><FaXTwitter /></Link>
                                    <Link href="/" className='text-2xl bg-blue-500 bg-opacity-50 p-2 rounded-full'><FaFacebookF /></Link>
                                    <Link href="/" className='text-2xl bg-blue-500 bg-opacity-50 p-2 rounded-full'><FaLinkedinIn /></Link>
                                </div>
                            </div>
                            <div className='flex self-start flex-col md:flex-row flex-wrap md:items-center md:justify-center gap-3 md:w-[70%] md:text-center md:mx-auto'>
                                <Link href='/' className='text-xl font-semibold text-white'>ACCESSIBILITY</Link>
                                <Link href='/' className='text-xl font-semibold text-white'>TICKETS</Link>
                                <Link href='/' className='text-xl font-semibold text-white'>TERMS OF USE</Link>
                                <Link href='/' className='text-xl font-semibold text-white'>COOKIE POLICY</Link>
                                <Link href='/' className='text-xl font-semibold text-white'>CONTACT US</Link>
                                <Link href='/' className='text-xl font-semibold text-white'>PRIVACY POLICY</Link>
                                <Link href='/' className='text-xl font-semibold text-white'>SHOP</Link>
                            </div>
                        </div>
                        <div className='md:text-xl'>
                            <Link href='#top' className='capitalize underline'>Back to top ↑</Link>
                        </div>
                    </div>
                    <div className='w-full flex flex-col md:flex-row gap-2 items-center justify-between mt-4'>
                        <div className='md:text-xl'>
                            <Link href='/' className='capitalize underline'>Fan Support</Link>
                        </div>
                        <div className='font-semibold md:text-xl'>
                            Copyright &copy; {thisYear} Rivers United F.C
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;