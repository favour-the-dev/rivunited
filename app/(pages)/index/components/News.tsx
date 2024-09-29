import Card from "./Card";
import head1 from '../../../../assets/headline-1.jpeg'
import LatestFixture from "./Latest";
import LastFixture from "./Last";
import home from "../../../../assets/clublogo.png";
import away from '../../../../assets/awaylogo.png';
function News() {
    return ( 
        <>
            <section className="w-full max-w-[60rem] relative mx-auto mt-8 flex flex-col md:flex-row justify-between md:pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:w-2/3 p-3 md:p-0">
                    <Card
                    imageSrc={head1}
                    NewsHeadline="Finidi George is appointed as Rivers United Manager"
                    Team="Men's Team"
                    />
                    <Card
                    imageSrc={head1}
                    NewsHeadline="Finidi George is appointed as Rivers United Manager"
                    Team="Men's Team"
                    />
                    <Card
                    imageSrc={head1}
                    NewsHeadline="Finidi George is appointed as Rivers United Manager"
                    Team="Men's Team"
                    />
                    <Card
                    imageSrc={head1}
                    NewsHeadline="Finidi George is appointed as Rivers United Manager"
                    Team="Men's Team"
                    />
                    <button className="w-full flex justify-between items-center px-4 py-2 rounded-sm text-sm uppercase text-blue-950 border border-blue-950 hover:scale-105 ease-in-out duration-150 md:hidden">
                        <span className="font-semibold">More News</span>
                        <span className="font-semibold text-xl">→</span>
                    </button>
                </div>
                <div className="flex flex-col gap-2 bg-gray-100 bg-opacity-75 md:bg-transparent p-3 md:p-0">
                    <h2 className="text-blue-950 font-bold text-xl my-4 md:hidden">FIXTURES & RESULTS</h2>
                    <LatestFixture
                    fixtureDate="Sun 30 Sep"
                    competition="NFL"
                    time="15:00"
                    timeZone="WAT"
                    homeClubLogo={home}
                    homeTeamName="Rivers United"
                    awayClubLogo={away}
                    awayTeamName="Enyimba Fc"
                    />
                    <LastFixture
                    fixtureDate="Sun 30 Sep"
                    competition="NFL"
                    homeScore="2"
                    awayScore="1"
                    homeClubLogo={home}
                    homeTeamName="Rivers United"
                    awayClubLogo={away}
                    awayTeamName="Enyimba Fc"
                    />
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