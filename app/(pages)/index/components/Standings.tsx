"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import logo from '../../../../assets/Logo.jpeg'
import axios from "axios"
function Standings(){
    const [standings, setStandings] = useState<any[]>([])
    async function fetchStadnings(){
        const response = await axios.get("https://v3.football.api-sports.io/standings?league=399&season=2022", {
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "5f911553d0d0b1c86c3daa2641fe6a71"
            }
        })
        const data = response.data.response;
        return data
    }
    useEffect(()=>{
        fetchStadnings()
        .then((data)=>{
            setStandings(data[0].league.standings)
        })
        .catch((err)=>{
            console.error(err)
        })
    }, [])
    return(
        <>
            <div className="w-full max-w-[60rem] mx-auto mt-8 flex flex-col items-center justify-center p-3 overflow-x-scroll md:overflow-x-hidden">
                <h2 className="text-blue-900 font-bold text-xl my-4 self-start uppercase">Standings</h2>
                <table className="w-full">
                    <thead className="w-full text-blue-900">
                        <tr className="w-full whitespace-nowrap flex items-start justify-between">
                            <th className="w-1/3 px-2">Club</th>
                            <th className="px-2">MP</th>
                            <th className="px-2">W</th>
                            <th className="px-2">D</th>
                            <th className="px-2">L</th>
                            <th className="px-2">GF</th>
                            <th className="px-2">GA</th>
                            <th className="px-2">GD</th>
                            <th className="px-2">PTS</th>
                            <th className="w-1/5 px-2">Last 5</th>
                        </tr>
                    </thead>
                    <tbody className="w-full text-gray-600">
                        {
                            standings.map((standing, index)=>{
                                return (
                                    <tr className="w-full flex items-center justify-between" key={index}>
                                        <td className="flex items-center gap-2 w-1/3">
                                            <span className="font-bold">{standing.rank}</span> 
                                            <span className="flex items-center gap-1">
                                                <Image
                                                src={standing.team.logo}
                                                alt="logo"
                                                width={25}
                                                height={25}
                                                />
                                                <span>{standing.team.name}</span>
                                            </span>
                                        </td>
                                        <td className="">{standing.all.played}</td>
                                        <td className="">{standing.all.win}</td>
                                        <td className="">{standing.all.draw}</td>
                                        <td className="">{standing.all.draw}</td>
                                        <td className="">{standing.all.goals.for}</td>
                                        <td className="">{standing.all.goals.against}</td>
                                        <td className="">{standing.goalsDiff}</td>
                                        <td className="">{standing.points}</td>
                                        <td className="w-1/5 text-center">{standing.form}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Standings