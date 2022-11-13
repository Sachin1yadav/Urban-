import { Link } from "react-router-dom"
import "./Home.css"

function Sing(){


    const hendlSign=()=>{
        alert("Sign Up succesfull ")
    }



    return(
        <div  className="wholeSIGN">

    <div className="signMain">
        <label >Email</label>
        <input type="email"></input>
        <label >Password</label>
        <input type="password"></input>
        <Link to="/"  >
      <button onClick={hendlSign}>Sign Up</button>
      </Link>
        
    </div>

             
        </div>

    )
}

export default Sing