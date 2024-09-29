import Image, { StaticImageData } from "next/image";

interface LatestFixtureProps{
    fixtureDate: string
    competition: string
    time: string
    timeZone: string
    homeClubLogo: string | StaticImageData
    homeTeamName: string
    awayClubLogo: string | StaticImageData
    awayTeamName: string
}

function LatestFixture({fixtureDate, competition, time, timeZone, homeClubLogo,homeTeamName, awayClubLogo, awayTeamName}: LatestFixtureProps) {
    return ( 
        <>
            <div className="max-w-[400px] flex flex-col items-center justify-center text-center space-y-4 p-3 gap-3 border border-t-2 border-t-blue-400 bg-white">
                <div className="flex items-center gap-3 w-full justify-between">
                    <span className="text-gray-600 text-sm uppercase font-semibold">Next Fixture</span>
                    <span className="underline text-blue-950 text-sm font-bold">All Fixtures➡</span>
                </div>
                <div>
                    <span className="flex flex-col gap-1 ">
                        <span className="font-bold text-blue-900 text-sm">{fixtureDate}</span>
                        <span className="text-sm">{competition}</span>
                    </span>
                    <div className="flex items-center gap-3">
                            <div>
                            <Image
                                src={homeClubLogo}
                                alt="Home Club Logo"
                                width={70}
                                height={70}
                                />
                                <p className="text-sm font-semibold">{homeTeamName}</p>
                            </div>
                            <span className="p-3 text-sm bg-gray-200 flex flex-col items-center">
                                <span className="font-semibold text-blue-900">{time}</span>
                                <span className="text-xs text-gray-500">{timeZone}</span>
                            </span>
                            <div>
                                <Image
                                src={awayClubLogo}
                                alt="away Club Logo"
                                width={70}
                                height={70}
                                />
                                <p className="text-sm font-semibold">{awayTeamName}</p>
                            </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="w-fit px-3 py-2 rounded-sm text-sm uppercase text-blue-950 border border-blue-950 hover:scale-110 ease-in-out duration-150">Preview</button>
                    <button className=" bg-orange-600 text-white font-bold w-fit px-3 py-2 rounded-sm text-sm uppercase border border-orange-600 hover:scale-110 ease-linear duration-150">Buy Tickets</button>
                </div>
            </div>
        </>
    );
}

export default LatestFixture;