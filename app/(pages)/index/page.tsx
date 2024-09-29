import Banner from "./components/Banner";
import News from "./components/News";
function HomePage() {
    return ( 
        <>
            <div className="w-full md:p-5">
                <Banner/>
                <News/>
            </div>
        </>
    );
}

export default HomePage;