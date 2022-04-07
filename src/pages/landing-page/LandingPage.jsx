import { Link } from "react-router-dom";
import { LandingPageImage,Iphone13miniImage,Iphone13Image,Iphone13ProImage,SamsungS21UltraImage,SamsungGalaxyZFoldImage,Oneplus10ProImage } from "../../assets";
import "./landing-page.css"

export default function LandingPage(){
    return(
        <div>
            <div className="landing-page-container">
                <img className="landing-page-image" src={LandingPageImage} alt="landing-page"/>
                   <Link to="/products" >
                        <button className="landing-page-shopnow-button">shop now</button>
                   </Link> 
            </div>
            <h2 className="landing-page-text">Frequently purchased items</h2>
            <div className="landing-page-cards">
                <img src={Iphone13miniImage} alt="iphone13mini" />
                <img src={Iphone13Image} alt="iphone13" />
                <img src={Iphone13ProImage} alt="iphone13Pro" />
                <img src={SamsungS21UltraImage} alt="samsungS21Ultra" />
                <img src={SamsungGalaxyZFoldImage} alt="samsungGalaxyZFold" />
                <img src={Oneplus10ProImage} alt="oneplus10Pro" />
            </div>
        </div>
    )
}
