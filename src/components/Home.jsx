import Navigation from "./Navigation";
import Hamburger from "../components/Hamburger";



function Home() {
    return (
        <>
            <div className="homePage">
                <h1 className="name">Madilyn Cooper</h1>
                <div className="nav">
                    <Navigation />
                </div>
            </div>
        </>
    )
}

export default Home;