"use client"
import Image from "next/image";
import Link from "next/link";
import logo from '../../../assets/Logo.jpeg'
import authBanner from '../../../assets/authbanner.jpeg'
import { usePathname } from "next/navigation";
function Login() {
    const pathname = usePathname();
    return ( 
        <>
            <section className="fixed top-0 left-0 w-full h-full bg-white">
                <div className="bg-blue-900 w-full p-3 md:p-5">
                    <div className="max-w-[60rem] w-full mx-auto flex items-center">
                        <Link
                        href={'/'}
                        className="rotate-90"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <g fill="#FEF9F2">
                                <path d="M21.508 5.754 23.765 8.01 12.001 19.777 .234 8.01 2.491 5.754 12 15.263"></path>
                                </g>
                            </svg>
                        </Link>
                        <div className="w-2/3 mx-auto flex items-center justify-center">
                            <Image
                            alt="logo"
                            src={logo}
                            width={70}
                            height={70}
                            className="rounded-full hidden md:block"
                            />
                            <Image
                            alt="logo"
                            src={logo}
                            width={50}
                            height={50}
                            className="rounded-full md:hidden"
                            />
                        </div>
                    </div>
                </div>
                <div className="authcont w-full flex flex-col gap-3 h-[200px] md:h-full md:max-h-[400px] relative">
                    <div className="bg-white w-fit mx-auto rounded-md shadow-md flex flex-col mt-[50px] relative">
                        <div className="flex items-center rounded-md border border-gray-700 max-w-[300px] mx-auto mt-5">
                            <Link href={`/login`} 
                            className={`w-1/2 py-3 px-4 md:px-6 text-center uppercase font-bold md:text-2xl ${pathname === "/login" ? "bg-blue-900 text-blue-300" : "bg-white text-blue-900"}`}>
                                SignIn
                            </Link>
                            <Link href={`/signup`} 
                            className={`w-1/2 py-3 px-4 uppercase text-center font-bold  md:text-2xl ${pathname === "/signup" ? "bg-blue-900 text-blue-300" : "bg-white text-blue-900"}`}>
                                Register
                            </Link>
                        </div>
                        <form action="" className="bg-white rounded-md p-3 shadow-md md:min-w-[500px] flex flex-col gap-4">
                            <label htmlFor="email" className="flex flex-col gap-1">
                                <span>Email Address or Supporter Number</span>
                                <input 
                                type="email" 
                                placeholder="Email Address or Supporter Number"  
                                className="border border-blue-900 placeholder:text-opacity-50 rounded-md px-5 py-3 focus:outline-none w-full"
                                />
                            </label>
                            <label htmlFor="email" className="flex flex-col gap-1">
                                <span>Password</span>
                                <input 
                                type="password" 
                                placeholder="Password"  
                                className="border border-blue-900 placeholder:text-opacity-50 rounded-md px-5 py-3 focus:outline-none w-full"
                                />
                            </label>
                            <span className="text-blue-900 underline text-sm font-bold">Forgot Your Password</span>
                            <button type="submit" className="bg-blue-900 text-white uppercase px-5 py-3 rounded-md">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;