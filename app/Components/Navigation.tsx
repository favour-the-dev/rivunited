"use client"
import Image from "next/image";
import logo from '../../assets/Logo.jpeg';
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { RiMenu2Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
function Navigation() {
    const [toggleNav, setToggleNav] = useState<boolean>(false);
    return ( 
        <>  
        <nav className="bg-blue-900 p-3 relative">
            <div className="max-w-[60rem] w-full mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image
                    src={logo}
                    alt="logo"
                    width={70}
                    height={70}
                    className="rounded-full hidden lg:block"
                    />
                    <Image
                    src={logo}
                    alt="logo"
                    width={50}
                    height={50}
                    className="rounded-full sm:hidden"
                    />
                    <p className="text-blue-200 font-semibold text-2xl hidden lg:block">RIVERS UNITED F.C</p>
                </div>
                {/* desktop views */}
                <div className="lg:flex items-center gap-12 w-3/4 hidden">
                    <div className="flex items-center gap-3 text-xl uppercase font-semibold text-white">
                        <Link href='/'>News</Link>
                        <Link href='/'>Fixtures</Link>
                        <Link href='/'>Video</Link>
                        <Link href='/'>Tickets</Link>
                        <Link href='/'>Players</Link>
                        <Link href='/'>Club</Link>
                        <Link href='/'>Shop</Link>
                    </div>
                    <div className="flex items-center gap-3 text-blue-200 uppercase font-semibold whitespace-nowrap cursor-pointer">
                        <span className="">EN |</span>
                        <Link className="" href=''>Login |</Link>
                        <span className="">Sponsor |</span>
                    </div>
                </div>
                {/* mobile views */}
                <div className="flex items-center gap-3 lg:hidden">
                    <Link className="uppercase font-bold text-lg text-blue-200 flex items-center gap-2 border-r-2 border-blue-200 border-opacity-75 px-2" href=''>
                    Login <CgProfile className="text-xl"/>
                    </Link>
                    <div>
                        <div className="text-3xl text-blue-200 font-semibold">
                            <RiMenu2Line onClick={()=>{
                                    setToggleNav(true)
                                }}/>
                        </div>
                        <div className={`bg-blue-950 text-blue-200 flex flex-col gap-3 w-full h-screen p-5 ease-in-out duration-150 fixed ${toggleNav ? 'opacity-100 top-0 left-0 z-50' : 'left-[100%] top-0 opacity-0'}`}>
                            <div className="flex items-center justify-between">
                                <Link href='/' className="font-bold text-xl">Rivunited.com</Link>
                                <AiOutlineClose className="text-4xl font-bold bg-blue-500 bg-opacity-35 p-2 rounded-full" onClick={()=>{
                                    setToggleNav(false)
                                }}/>
                            </div>
                            <div className="flex flex-col items-start gap-4 text-xl text-white uppercase font-semibold">
                                <Link href='/' className="border-b border-b-blue-200 border-b-opacity-50 w-full py-2">News</Link>
                                <Link href='/' className="border-b border-b-blue-200 border-b-opacity-50 w-full py-2">Fixtures</Link>
                                <Link href='/' className="border-b border-b-blue-200 border-b-opacity-50 w-full py-2">Video</Link>
                                <Link href='/' className="border-b border-b-blue-200 border-b-opacity-50 w-full py-2">Tickets</Link>
                                <Link href='/' className="border-b border-b-blue-200 border-b-opacity-50 w-full py-2">Players</Link>
                                <Link href='/' className="border-b border-b-blue-200 border-b-opacity-50 w-full py-2">Club</Link>
                                <Link href='/' className="border-b border-b-blue-200 border-b-opacity-50 w-full py-2">Shop</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navigation;