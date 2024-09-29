import Image, { StaticImageData } from "next/image";

interface LastFixtureProps{
    fixtureDate: string
    competition: string
    homeScore: string
    awayScore: string
    homeClubLogo: string | StaticImageData
    homeTeamName: string
    awayClubLogo: string | StaticImageData
    awayTeamName: string
}

function LastFixture({fixtureDate, competition, homeScore, awayScore, homeClubLogo,homeTeamName, awayClubLogo, awayTeamName}: LastFixtureProps) {
    return ( 
        <>
            <div className="max-w-[400px] flex flex-col items-center justify-center text-center space-y-4 p-3 gap-3 border bg-white">
                <div className="flex items-center gap-3 w-full justify-between">
                    <span className="text-gray-600 text-sm uppercase font-semibold">Last Result</span>
                    <span className="underline text-blue-950 text-sm font-bold">All Fixtures➡</span>
                </div>
                <div>
                    <span className="flex flex-col gap-1">
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
                            <span className="flex items-center gap-2">
                                <span className="font-bold bg-blue-900 text-white p-2 text-3xl">{homeScore}</span>
                                <span className="font-bold bg-blue-900 text-white p-2 text-3xl">{awayScore}</span>
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
                <div className="w-full">
                    <button className="w-full px-3 py-2 rounded-sm text-sm uppercase text-blue-950 border border-blue-950 hover:scale-105 ease-in-out duration-150">Match Report</button>
                </div>
            </div>
        </>
    );
}

export default LastFixture;