import Banner from "./components/Banner";
import News from "./components/News";
import Standings from "./components/Standings";
function HomePage() {
    return ( 
        <>
            <div className="w-full md:p-5 overflow-x-hidden">
                <Banner/>
                <News/>
                <Standings/>
            </div>
        </>
    );
}

export default HomePage;