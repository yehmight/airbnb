// import img from "./image/katie.png";
// import star from "./image/Star.png";


export default function Contact(props){
    return(
        <div className="content">
                <img src={props.img} alt="katie" className="card-img"></img>
                <div>
                    <img src={props.star} alt="star-logo" className="star"></img>
                    <span>{props.rating}</span>
                    <span>{props.size}</span>
                    <span>{props.country}</span>
                </div>
                    <p>{props.lesson}</p>
                    <p>{props.des}</p>
           </div>
    )
}