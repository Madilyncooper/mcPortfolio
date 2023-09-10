import Navigation from "./Navigation";
import Hamburger from "../assets/Hamburger.png";


function Home () {
return (
    <>
    <img   src={Hamburger}
  alt="Grapefruit slice atop a pile of other slices"></img>
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