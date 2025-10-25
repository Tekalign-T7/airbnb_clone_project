import "../style/card_style.css"
import image1 from "../images/card_image1.png"
import star from "../images/star.png"
export function Card(){
    return(
        <div className="card">
            <img src={image1} alt="" className="card--image"/>
            <div className="card--stats">
                <img src={star} alt="" className="card--star" />
                <span>5.0</span>
                <span className="grey">(6) .</span>
                <span className="grey">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>

        </div>
    )
}