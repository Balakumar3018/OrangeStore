import { LandingPageImage,Iphone13BlueImage,Iphone13RedImage,Iphone13ProGreenImage,SamsungS21UltraImage,SamsungGalaxyZFoldImage,Oneplus10ProImage } from "../../assets"
import { Footer } from "../../components/footer/footer"
import { NavigationTop } from "../../components/navigation-top/navigation-top"
import "./landing-page.css"

export default function LandingPage(){
    return(
        <div>
            <div className="landing-page-container">
                <img className="landing-page-image" src={LandingPageImage} />
                    <button className="landing-page-shopnow-button">shop now</button>
            </div>
            <h2 className="landing-page-text">Frequently purchased items</h2>
            <div className="landing-page-cards">
                <a href="#"><img src={Iphone13BlueImage} alt="iphone13image" /></a>
                <a href="#"><img src={Iphone13RedImage} alt="iphone13image" /></a>
                <a href="#"><img src={Iphone13ProGreenImage} alt="iphone13ProImage" /></a>
                <a href="#"><img src={SamsungS21UltraImage} alt="samsungS21UltraImage" /></a>
                <a href="#"><img src={SamsungGalaxyZFoldImage} alt="samsungGalaxyZFoldImage" /></a>
                <a href="#"></a><img src={Oneplus10ProImage} alt="oneplus10ProImage" />
            </div>
        </div>
    )
}