"use client"
import { ReactNode, useEffect } from "react"
import { AppState } from "./state/State"
import Loader from "./Components/Loader"

interface AppContextProps{
    children: ReactNode
}

function AppContext({children}: AppContextProps){
    const loading = AppState((state)=> state.loading)
    const setLoading = AppState((state)=> state.setLoading)

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 4000)
    }, [])
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