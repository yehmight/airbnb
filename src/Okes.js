
import pic1 from "./image/pic1.jpeg";
import star from "./image/Star.png";
import Yemi from "./Yemi.js";
import pic2 from "./image/pic2.jpeg";
import wedding from "./image/wedding.png"
import pic3 from "./image/pic3.jpeg"


export default function Okes(){
    return(
        <div className="yemi">
           

           <Yemi 
                img={pic1}
                star={star}
                rating=" 5.0"
                country="USA"
                lesson="Life Lesson with Katie Zaferes"
                size=" (size 6) "
                des="From $136 person"
           />
           <Yemi 
                img={pic2}
                star={star}    
                rating=" 4.7"
                country="CANADA"
                lesson="Life no balance"
                size=" (size 4.7) "
                des="From $176 person"
           />
           
           <Yemi 
                img={pic3}   
                star={star} 
                rating=" 3.5"
                country="ITALY"
                lesson="To be  honest sir i love react lol"
                size=" (size 3.8) "
                des="From $400 person"
           />
           {/* <Yemi 
               img={football}   
               star={star} 
               rating=" 3.5"
               country="MORROCCO"
               lesson="To be  honest sir i love react lol"
               size=" (size 3.8) "
               des="From $400 person" 
           /> */}

        
        </div>
    )
}