import grid_image from "../assets/Group_image.png"
import "../style/Hero.css"
export function Hero(){
    return(
        <section>
            <img src={grid_image} alt="" className="Hero_image"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}