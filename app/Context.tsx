"use client"
import { ReactNode } from "react"
import { AppState } from "./state/State"
import Loader from "./Components/Loader"

interface AppContextProps{
    children: ReactNode
}

function AppContext({children}: AppContextProps){
    const loading = AppState((state)=> state.loading)
    return (
        <>
        <div className="">
            {loading && <Loader/>}
            {children}
        </div>
        </>
    )
}

export default AppContext