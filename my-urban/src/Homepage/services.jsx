import Footer from "./Footer"
import Navbar from "./Navbar"
 import "./Home.css"
 import Policy from "./Policy"
import { Link } from "react-router-dom"
 
function Services(){




    return(
        <div>
            <Navbar/>
{/* .............................................. */}
<div className="mainpage">
     <div className="backImage">
       <img   src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1615375782838-f890f8.jpeg"/>
          </div>
            <div className="back2"> 
                <p> Home services, on demond</p>
              <select>
                <option value="">City</option>
                <option value="">Varansi</option>
                <option value="">Mumbai</option>
                <option value="">Delhi</option>
              </select>
              <input placeholder="Search for services"></input>
              <h6 style={{color:"white", fontSize:"15px" ,fontStyle:"italic",marginTop:"0px",textDecoration:"underline"}}>Men's Therapies,Home Painting,Electrocians etc</h6>
            </div>
     
</div>
{/* ................... */}
<div className="mainMid">
      
    <div>
        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/supply/partner-app-supply/1667537430038-a3e20f.jpeg"/>
    </div>
    <div>
    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1667233651076-c210f8.jpeg"/>
    </div>
    <div>
    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1667313687204-56c812.jpeg"/>
    </div>
    <div>
    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1667233650651-818df5.jpeg"/>
    </div>
</div>

{/* ................... */}
<div className="UC">
<div>
    <p>UC Services</p>
</div>
<div>
    <p>Personal Services</p>
</div>
<div>
    <p>Home Services</p>
</div>
</div>
{/* ..................................... */}
<div className="mainBlank"></div>
{/* .......... */}
 
 

 <div className="card">
    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/images/growth/luminosity/1661747124999-5ae839.png" alt="" />
    </div>
    {/* ........ */}
 <div className="Category">
    <p>New Category Launches</p>
 </div>
{/* ...................... */}
<div className="mainBlank"> </div>
{/* ..................................... */}

 <div className="card2">
 
 <div>
    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1667386493900-1d5e09.jpeg" alt="" />
 </div>
<div>
    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/supply/partner-app-supply/1667472964177-812867.jpeg"  alt=""/>
</div>
<div>
    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1667233651076-c210f8.jpeg" alt="" />
</div>
<div>
    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1667594664089-1b275d.jpeg" alt="" />
</div>
 <div>
    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1667233650651-818df5.jpeg" alt="" />
 </div>


 </div>
{/* .................. */}
{/* ...................... */}
<div className="mainBlank"></div>
{/* ..................................... */}
<div className="learnMore">
    
<img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/categories/category_v2/category_a4e46fa0.png" alt="" />


</div>

{/* ...................... */}
<div className="mainBlank"></div>
{/* ..................................... */}
<div className="learnMore2">
<Link to="/services/policy" >
    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/images/growth/home-screen/1624344861242-558286.png" alt="" />
    </Link>
</div>
{/* ................. */}
{/* ...................... */}
<div className="mainBlank"></div>
{/* ..................................... */}
<div className="learnMore">
<img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/categories/category_v2/category_3cffdf20.png" alt="" />
</div>



            <Footer/>
        </div>
    )
}


export default Services


 