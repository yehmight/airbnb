import logo from "./image/Group.png"

 
 export default function Gallery (){
    return(
        <div className="gallery">
            <img src={logo} alt="img-gallery"></img>
            <div className="gallery-text">
                <h1>Online Experience</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    )
}

