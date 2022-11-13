import Navbar from "./Navbar"
import "./Home.css"
import Footer from "./Footer"
import Services from "./services"
import Login from "./Login"
import { useState } from "react"
 function Home(){

  const handelClick=()=>{
  alert("We register your Mo. Number We will contect with you")
  }


  return (
    <div>
      {/* <div className="Navbar"> </div> */}
    <Navbar/>
   
  <div className="main"> 
  <div className="docter" >
    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_19be5040.jpeg" alt="" />
    </div> 
    <div className="colorr"></div>
<div className="mainPart2">
  <p style={{color:"rgb(189,189,189)",fontSize:"28px",textAlign:"start"}} >URBAN COMPANY</p>
  
  <p style={{color:"white",fontSize:"32px",textAlign:"start",fontWeight:"bold"}} >Quality home services,on demand</p>
  <p style={{color:"rgb(189,189,189)",fontSize:"22px",textAlign:"start"}} >Experienced,hand-picked Professionals to serve you at your doorStep</p>
  <div className="selctt">
    <label style={{fontSize:"20px",textAlign:"start",marginLeft:"-25px",fontWeight:"bold"}}>Where do you need a servies?</label>
    <br/>
  <select   placeholder='Select option'>
  <option value='option1'>Select your city</option>
  <option  value='option2'> Ahmedabad </option>
  <option value='option3'>Warangal</option>
    <option value='option2'>Panipat</option> 
  <option value='option3'>Madurai</option>
  <option value='option2'>Guntur</option>
  <option value='option3'>jodhpur</option>
  <option value='option2'>Amritsar</option>
  <option value='option3'>Mysore</option>
</select >
  </div>

</div>

     </div>

 {/* .....mid... */}
  <div className="mid"> 
      <div className="mid1">
       <div>
        <p style={{ fontFamily:"axiforma-regular, -apple-system, BlinkMacSystemFont",fontWeight:"bold",fontSize:"32px" ,lineHeight:"48px",textAlign:"start",letterSpacing:"normal"
       ,color:"ffffff"}} >Why Urban Company?</p>
       </div>
       
        <div className="mid1A">
          <div><img style={{width:"70px" , height:"70px"}} src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_29614d40.png" alt="" /> </div>
          <div style={{marginLeft:"10px"}} > 
            <p style={{  marginBottom:"-20px" ,fontSize:"20px",fontWeight:"bold" ,textAlign:"start"  }}  >Transparent pricing</p>
            <p>See fixed prices before you book.No hidden charges</p>
          </div>
        </div>
        <div className="mid1A">
        <div><img style={{width:"70px" , height:"70px"}} src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_2cc7d0d0.png" alt="" /> </div>
        <div style={{marginLeft:"10px"}} > 
            <p style={{  marginBottom:"-20px" ,fontSize:"20px",fontWeight:"bold" ,textAlign:"start"  }}  >Expert Only</p>
            <p>Our professionals are well trained and have an-job expertise</p>
          </div>
        </div>
        <div className="mid1A">
        <div><img style={{width:"70px" , height:"70px"}} src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_2caafa00.png" alt="" /> </div>
        <div style={{marginLeft:"10px"}} > 
            <p style={{  marginBottom:"-20px" ,fontSize:"20px",fontWeight:"bold" ,textAlign:"start"  }}  >Fully qeuipped</p>
            <p>We bring everything needed to get the job done well</p>
          </div>
        </div>
        

      </div>
      <div className="mid2">
       <div className="mid2A">
        
        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_20,f_auto/categories/category_v2/category_cb4d9130.png" alt="" />
        <p style={{textAlign:"start",marginLeft:"30px", fontWeight:"bolder",fontSize:"35px",fontFamily:"axiforma-regular, -apple-system, BlinkMacSystemFont",marginTop:"10px"}} >100% Quality Assured</p>
        <p style={{textAlign:"start",marginLeft:"30px",fontSize:"20px",fontFamily:"axiforma-regular, -apple-system, BlinkMacSystemFont,",marginTop:"-20px",color:"757575"}}>If you don't love our service,we will make it right</p>
       </div>

      </div>
       
  </div>
{/* .....lineing..... */}
 <div className="line" style={{width:"auto",height:"25px", backgroundColor:"rgb(240,240,240)"
}}></div>
{/* .....book professionals */}
       
     
<div className="book">
<div className="fill">
  <div>
    <p  style={{fontSize:"40px",fontWeight:"bold",lineHeight:"normal",textAlign:"start",letterSpacing:"normal"}}  >Book professionals from your phone</p>
    <p style={{fontSize:"20px",textAlign:"start",marginTop:"-30px"}}>Enter your mobile number to get the App download link.</p>
  </div>
  <div className="allinput">
    <select className="input1">
      <option>IND</option>
      <option>USA</option>
      <option>CHAINA</option>
      <option>RUSSIA</option>
    </select >
    <input className="input2" placeholder="Mobile Number" type="number"/>
    <button className="input3" onClick={handelClick}>Send</button>
  </div>
  <div >
     {/* <img className="download" src="https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png"/> */}
 <img className="download" src="https://thewanderingkitchen.co.uk/wp-content/uploads/2019/01/playstore.png" />
 <img className="download2" src="https://logos-download.com/wp-content/uploads/2016/06/Download_on_the_App_Store_logo.png" />
  </div>
</div>
<div className="ph1">
  <img className="ph1a" src="https://res.cloudinary.com/urbanclap/image/upload/w_300,f_auto/categories/category_v2/category_2d7045d0.png"/>
</div>
<div className="ph2">
  <img className="ph2a" src="https://res.cloudinary.com/urbanclap/image/upload/w_350,f_auto/categories/category_v2/category_2d013050.png" alt="" />
</div>
</div>

 <Footer/>
  </div>
  )
 }

 export default Home








 