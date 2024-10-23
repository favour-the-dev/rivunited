"use client"

import Card from "./Card";
import head1 from '../../../../assets/headline-1.jpeg'
import LatestFixture from "./Latest";
import LastFixture from "./Last";
import home from "../../../../assets/clublogo.png";
import away from '../../../../assets/awaylogo.png';
import { useState, useEffect } from "react";
import { AppState } from "@/app/state/State";
import axios from 'axios';
import { Key } from "react";
function News() {
    
    const [lastFixtures, setLastFixtures] = useState<any[]>([]);
    const [nextFixture, setNextFixture] = useState<any>([]);
    const [newsHeadlines, setNewsHeadLines] = useState<any[]>([]);
    // const SetAppLoading = AppState((state)=> state.setLoading);
    async function fetchNewsHeadlines(){
        try{
            // SetAppLoading(true)
            const response = await axios.get('https://google-news22.p.rapidapi.com/v1/search', {
                params: {
                    q: 'Rivers United',
                    country: 'ng',
                    language: 'en',
                },
                headers: {
                    'x-rapidapi-key': '788d4c2c7cmsh6d917adc023661ep1519b7jsn94278f9cec63',
                    'x-rapidapi-host': 'google-news22.p.rapidapi.com'
                }
            })
            const data = response.data.data;
            // SetAppLoading(false)
            return data
        }catch(err){
            // SetAppLoading(false)
            console.error(err)
        }
    }

    async function fetchLastFixtures(){
        // 5192
        try{
            // SetAppLoading(true)
            const response = await axios.get(`https://v3.football.api-sports.io/fixtures?team=5192&last=1`, {
                headers: {
                    "x-rapidapi-host": "v3.football.api-sports.io",
                    "x-rapidapi-key": "5f911553d0d0b1c86c3daa2641fe6a71"
                }
            })
            const data = response.data.response;
            // SetAppLoading(false)
            return data;
        }catch(err){
            // SetAppLoading(false)
            console.error(err)
        }
    }
    const fetchNextFixture = async ()=>{
        try{
            // SetAppLoading(true)
            const response = await axios.get(`https://v3.football.api-sports.io/fixtures?team=5192&next=1`, {
                headers: {
                    "x-rapidapi-host": "v3.football.api-sports.io",
                    "x-rapidapi-key": "5f911553d0d0b1c86c3daa2641fe6a71"
                }
            })
            const data = response.data.response;
            // SetAppLoading(false)
            return data;
        }catch(err){
            // SetAppLoading(false)
            console.error(err)
        }
    }

    interface Fixture {
    fixture: {
        date: string;
        timezone: string;
    };
    league: {
        name: string;
    };
    teams: {
        home: {
        logo: string;
        name: string;
        };
        away: {
        logo: string;
        name: string;
        };
    };
    }
    useEffect(()=>{
        fetchNewsHeadlines()
        .then((data)=>{
            setNewsHeadLines(data.slice(0, 4))
        }).catch((err)=>{
            console.error(err)
        })

        fetchNextFixture()
        .then((data)=>{
            setNextFixture(data)
        }).catch((err)=>{
            console.error(err)
        })
        
        fetchLastFixtures()
        .then((data)=>{
            setLastFixtures(data)
        }).catch((err)=>{
            console.error(err)
        })
    }, [])
    return ( 
        <>
            <section className="w-full max-w-[60rem] relative mx-auto mt-8 flex flex-col md:flex-row justify-between md:pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:w-2/3 p-3 md:p-0">
                    {
                        newsHeadlines.map((news, index)=>{
                            return (
                                <Card
                                imageSrc={news.thumbnail}
                                NewsHeadline={news.title}
                                Team="Men's Team"
                                key={index}
                                />
                            )
                        })
                    }
                    <button className="w-full flex justify-between items-center px-4 py-2 rounded-sm text-sm uppercase text-blue-950 border border-blue-950 hover:scale-105 ease-in-out duration-150 md:hidden">
                        <span className="font-semibold">More News</span>
                        <span className="font-semibold text-xl">→</span>
                    </button>
                </div>
                <div className="flex flex-col gap-2 bg-gray-100 bg-opacity-75 md:bg-transparent p-3 md:p-0">
                    <h2 className="text-blue-950 font-bold text-xl my-4 md:hidden">FIXTURES & RESULTS</h2>
                    {
                        nextFixture.map((nextFi:Fixture, index: Key)=>{
                            return(
                                <LatestFixture
                                fixtureDate={new Date(nextFi.fixture.date).toDateString()}
                                competition={nextFi.league.name}
                                time={new Date(nextFi.fixture.date).toTimeString().slice(0, 5)}
                                timeZone={nextFi.fixture.timezone}
                                homeClubLogo={nextFi.teams.home.logo}
                                homeTeamName={nextFi.teams.home.name}
                                awayClubLogo={nextFi.teams.away.logo}
                                awayTeamName={nextFi.teams.away.name}
                                key={index}
                                />
                            )
                        })
                    }
                    {
                        lastFixtures.map((lastFi, index)=>{
                            return (
                                <LastFixture
                                fixtureDate={new Date(lastFi.fixture.date).toDateString()}
                                competition={lastFi.league.name}
                                homeScore={lastFi.goals.home}
                                awayScore={lastFi.goals.away}
                                homeClubLogo={lastFi.teams.home.logo}
                                homeTeamName={lastFi.teams.home.name}
                                awayClubLogo={lastFi.teams.away.logo}
                                awayTeamName={lastFi.teams.away.name}
                                key={index}
                                />
                            )
                        })
                    }
                </div>
                <div className="absolute bottom-0 w-full items-center justify-center hidden md:flex">
                    <button className=" before:w-full before:h-[1px] before:bg-blue-950 before:absolute before:right-[100%] after:w-full after:h-[1px] after:bg-blue-950 after:absolute after:left-[100%] relative w-1/3 flex justify-between items-center px-4 py-2 rounded-sm text-sm uppercase text-blue-950 border border-blue-950 hover:scale-105 ease-in-out duration-150">
                        <span className="font-semibold">More News</span>
                        <span className="font-semibold text-xl">→</span>
                    </button>
                </div>
            </section>
        </>
    );
}

export default News;