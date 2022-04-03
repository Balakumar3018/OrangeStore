import { LandingPageImage,Iphone13BlueImage,Iphone13RedImage,Iphone13ProGreenImage,SamsungS21UltraImage,SamsungGalaxyZFoldImage,Oneplus10ProImage } from "../../assets"
import "./landing-page.css"

export default function LandingPage(){
    return(
        <div>
            <div className="landing-page-container">
                <img className="landing-page-image" src={LandingPageImage} alt="landing-page"/>
                    <button className="landing-page-shopnow-button">shop now</button>
            </div>
            <h2 className="landing-page-text">Frequently purchased items</h2>
            <div className="landing-page-cards">
                <img src={Iphone13BlueImage} alt="iphone13image" />
                <img src={Iphone13RedImage} alt="iphone13image" />
                <img src={Iphone13ProGreenImage} alt="iphone13ProImage" />
                <img src={SamsungS21UltraImage} alt="samsungS21UltraImage" />
                <img src={SamsungGalaxyZFoldImage} alt="samsungGalaxyZFoldImage" />
                <img src={Oneplus10ProImage} alt="oneplus10ProImage" />
            </div>
        </div>
    )
}
