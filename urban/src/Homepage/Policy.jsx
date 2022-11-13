import "./Home.css"
import Navbar from "./Navbar"
function Policy(){



    return(
        <div>
 <Navbar/>

 <div className="policy1">
    <p>Anti Discrimination Policy</p>
    <select>
        <option>IND</option>
        <option>UAE</option>
        <option>AUS</option>
        <option>SGP</option>
    </select>
 </div>
 <div className="mainBlank"></div>
 <div className="read">
   <p>Anti-Discrimination Policy</p>
   <p>Urban Company seeks to empower millions of service professionals across the world safe,
    reliable and high quality services at home Urban Company therefore does not tolerate,
    and prohibits discrimination against custormers or service providers based on religion
    ,caste,rate,national origin,disablity,sexual orientation,sex,marital status, gender identity,
    age,any or any other characteristic that protechted under applicable laws.

   </p>
   <p>
    Such discrimination includes,but is not limited to,refusing to provide or accepts services
    based on any of thesse characteristics.
   </p>
   <p>
    Any custormer or service partner found to have violated this prohibition will lose to the Urboan 
    Company platform.
   </p>
 </div>
        </div>
    )
}
export default Policy