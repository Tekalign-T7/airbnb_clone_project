import "../style/card_style.css"
// import image1 from "../public/card_image1.png"
import star from "../assets/Star.png"
export function Card(props){
    return(
        <div className="card">
            <img src={props.image1} alt="" className="card--image"/>
            <div className="card--stats">
                <img src={star} alt="" className="card--star" />
                <span>{props.rating}</span>
                <span className="grey">{props.reviewCount} .</span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">{props.price}%</span> / person</p>
        </div>
    )
}