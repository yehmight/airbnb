import katie from "./image/katie.png";
import star from "./image/Star.png";
import Contact from "./Contact";
import football from "./image/footballer.jpeg";
import wedding from "./image/wedding.png"
import mountain from "./image/mountain.png"


export default function Card(){
    return(
        <div className="card">
           

           <Contact 
                img={katie}
                star={star}
                rating=" 5.0"
                country="USA"
                lesson="Life Lesson with Katie Zaferes"
                size=" (size 6) "
                des="From $136 person"
           />
           <Contact 
                img={wedding}
                star={star}    
                rating=" 4.7"
                country="CANADA"
                lesson="Life no balance"
                size=" (size 4.7) "
                des="From $176 person"
           />
           
           <Contact 
                img={mountain}   
                star={star} 
                rating=" 3.5"
                country="ITALY"
                lesson="To be  honest sir i love react lol"
                size=" (size 3.8) "
                des="From $400 person"
           />
           <Contact 
               img={football}   
               star={star} 
               rating=" 3.5"
               country="MORROCCO"
               lesson="To be  honest sir i love react lol"
               size=" (size 3.8) "
               des="From $400 person" 
           />

        
        </div>
    )
}