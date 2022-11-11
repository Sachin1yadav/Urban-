 import Navbar from "./Navbar"
import "./Home.css"
import Footer from "./Footer"
import Services from "./services"
import Login from "./Login"
import { useState } from "react"
 function Home(){

  


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
    <button className="input3">Send</button>
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

{/* ........footer.... */}

{/* <div className="footer">
<div className="about" >
  <p>About</p>
  <p>UC Import</p>
  <p>Terms&Condition</p>
  <p>Privacy Policy</p>
  <p>Intrest-Based Adverting</p>
  <p>Anti Discimination</p>
  <p>Partner Welfare Policy</p>
  <p>Blog</p>
  <p>Reviews</p>
  <p>Near Me</p>
  <p>Careers</p>
  <p>Gift Cards</p>
  <p>Contact Us</p>
  <p>Quick Links</p>
</div>
<hr style={{marginTop:"30px",color:"gray",height:"0px"}} />
<p style={{color:"white",fontWeight:"bold", fontFamily:"axiforma-regular, -apple-system, BlinkMacSystemFont",fontSize:"18px",marginLeft:"-1150px" }}>Serving</p>

<div className="country"  style={{color:"white"}}>
 <ul>
  <li>
    <span style={{marginLeft:"-1180px"}} >USA</span>
    <ul className="city">
      <li>Austin</li>
      <li>Dollas</li>
      <li>New York City</li>
    </ul>
  </li>
  

  <li>
    <span style={{marginLeft:"-1180px"}}  >IND</span>
    <ul className="city">
      <li>Agra</li>
      <li>Ahmedabad</li>
      <li>Alwar</li>
      <li>Amritsar</li>
      <li>Aurangabad</li>
      <li>Banglore</li>
      <li>Bhopal</li>
      <li>Bhubanswer</li>
      <li>Chandigarh Tricity</li>
      <li>Chennai</li>
      <li>Coimbatore</li>
      <li>Cuttack</li>
      <li>Dehradun</li>
      <li>Delhi NCR</li>
      <li>Guntur</li>
      <li>Guwahti</li>
      <li>Agra</li>
      <li>Ahmedabad</li>
      <li>Alwar</li>
      <li>Amritsar</li>
      <li>Aurangabad</li>
      <li>Banglore</li>
      <li>Bhopal</li>
      <li>Bhubanswer</li>
      <li>Chandigarh Tricity</li>
      <li>Chennai</li>
      <li>Coimbatore</li>
      <li>Cuttack</li>
      <li>Dehradun</li>
      <li>Delhi NCR</li>
      <li>Guntur</li>
      <li>Guwahti</li>
      <li>Agra</li>
      <li>Ahmedabad</li>
      <li>Alwar</li>
      <li>Amritsar</li>
      <li>Aurangabad</li>
      <li>Banglore</li>
      <li>Bhopal</li>
      <li>Bhubanswer</li>
      <li>Chandigarh Tricity</li>
      <li>Chennai</li>
      <li>Coimbatore</li>
      <li>Cuttack</li>
      <li>Dehradun</li>
      <li>Delhi NCR</li>
      <li>Guntur</li>
      <li>Guwahti</li>
      <li>Agra</li>
      <li>Ahmedabad</li>
      <li>Alwar</li>
      <li>Amritsar</li>
      <li>Aurangabad</li>
      <li>Banglore</li>
      <li>Bhopal</li>
      <li>Bhubanswer</li>
      <li>Chandigarh Tricity</li>
      <li>Chennai</li>
      <li>Coimbatore</li>
      <li>Cuttack</li>
      <li>Dehradun</li>
      <li>Delhi NCR</li>
      <li>Guntur</li>
      <li>Guwahti</li>
      <li>Agra</li>
      <li>Ahmedabad</li>
      <li>Alwar</li>
      <li>Amritsar</li>
      <li>Aurangabad</li>
      <li>Banglore</li>
      <li>Bhopal</li>
      <li>Bhubanswer</li>
      <li>Chandigarh Tricity</li>
      <li>Chennai</li>
      <li>Coimbatore</li>
      <li>Cuttack</li>
      <li>Dehradun</li>
      <li>Delhi NCR</li>
      <li>Guntur</li>
      <li>Guwahti</li>
    </ul>
  </li>
   


  <li>
    <span  style={{marginLeft:"-1180px"}} >USE</span>
    <ul className="city">
      <li>Abu Dhabi</li>
      <li>Dubai</li>
      <li>Sharjah</li>
    </ul>
  </li>
  
  

  <li>
    <span  style={{marginLeft:"-1180px"}} >AUS</span>
    <ul className="city">
      <li>Melbourm</li>
      <li>Sydney</li>
    </ul>
  </li>
  
  

  <li>
    <span style={{marginLeft:"-1180px"}}  >SGP</span>
    <ul className="city">
      <li>Singapore</li>
    </ul>
  </li>
  
  

  <li>
    <span style={{marginLeft:"-1180px" }}  >KSA</span>
    <ul className="city">
      <li>Jeddah</li>
      <li>Riyadh</li>
    </ul>
  </li>
 </ul>
</div>
 <hr/>
 
<div className="endfooter">
  <div className="logo" >
    <img src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png" alt="img" />
 <p style={{color:"white"}}>@ 2014-22 UrbonClap Technologies Inida Pvt Ltd</p>
  </div>
  <div className="socal" color="red">
    <a href="https://twitter.com/urbancompany_UC" >
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAYFBMVEUAAAD////19fVWVlY5OTnMzMyWlpa8vLxfX18aGhro6OgvLy/r6+vv7+8kJCT7+/t+fn7a2tqioqKKiooPDw9ra2tNTU3i4uJ3d3fDw8Ovr6+oqKgfHx+1tbU/Pz9FRUU+aMuRAAADUUlEQVRoge2b15KDIBRAUWyxxF6T6P//5VqSjbEBF5QXzsvuTBxPgHCBCyDtjWnhG7qEG7bMjxVNf2zjGvUHw57pdeda+YCjf/Sud70dIc+d9LoUe+/XR72Emp9wBr0ty46Q3esv/s3PMTRkyrOjXm7J1FsIy9RjdFGk3UaqXKFQKBQKhYKVp5Mmtmk/Uud5uTvDtf9ZuGq+3f1+es/Oteex9strJrwlL8g7Ldrln2dqK4Li/WHx0rQUYPc0/071YL6WDwyrx9YqhyU8wI6sfvFNMxdOt+1aWDVuOP4HKTwampPCH+3Yv8QQ+5R48Ulr0IJoh2UQ7u8qJKzD/GN3b2+Hx5hDAf40YXT0VEKyB30IyPKaOY/g/L/hcfAUyV52OK0DQBLlq9fM3dYj/u7iqXHY4w6evUSvdh6qSfoJl9mOnr+l2KyAe3CWfdmsobUxbBhUdli/LxdvKavVF8CbugU1bLhb96ly2QedDduSBCTfHkn0x08UpCh9CbTvBTTX+sbBlqyHNfyAtfPG0LcjPPaEu07UwzOH3lG3cuP6Ea0mOWtqsH63+CzwJI03JlGsHA0YRwy9laJtSUDTtoXZTxYNuqh6AHi/QAvjJnfIP65j6GarW3ohQO2rmA8CNNiNNCL0oPXNCHkGTQFoij+Shfz2sCB79njx60HLqzcdf/E5Ij7FJJ7I4RqBRMYbcwK+bULemMu7TUg5k96Dq+5HP8+YK2J3PIVXQMNv7+dcCXTUF7U/XYGaQMT+dKyXrq6DApCIkwk7aauLCs8ResTsjkOLzxXuZ1CmEBaErSA9AnV87oD3Twfo9yIPhRTs5QfPr7doWX/+e6koKClTA0AzGkdfgL4GzjkK1UWv2KWwm6cdSfEoqiA+zR5RDD3wXBKBgqb1zzoFhm0KOTiZccw9j6mGfHGh9kuW18Q9ixGfY0X3izFFTc9JG+r+LrDin8yr+7gjv5UBg2mcX2Wb+cHU81s3OmWPuKDqbKbo8e1LZhEyTGUidGhf0zZ7fd6v05PdI1lb9WPdbMTXAzduquLK89XPwsmjtCfKncI4+TiCQqFQKBQKhRgkX4yRfC1I8qUoyVfCJF+Ik30dUPJlSNlXQSVfhJV9DViTfAl6zBBIuQL+B+6dJCkfxgnMAAAAAElFTkSuQmCC" alt="" />
    </a>
    <a href="https://www.facebook.com/UrbanCompany/">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUAAAD////d3d3p6el0dHTW1tY0NDS3t7fR0dHa2tqVlZXBwcGqqqrMzMwsLCx8fHz5+fmFhYWPj49VVVVnZ2ecnJyxsbGkpKTv7+85OTlGRka7u7s/Pz9hYWFLS0sfHx+MjIwNDQ0XFxe4dxQDAAACY0lEQVR4nO3d23KCMBRAUYsWBcQ7amtbtf//kX3oZRhNIAiZ5Jzu/aw5s6bUVsQwGhEREREREREREREREREREREREf3flkWWhCwr1l59k9VTBC39AavQtp/mvoCT0LK/fB2pURyi3/kBLkOzam28CIvQrFqlF2EWmlVr7EWYhGbVQogQYfgQIkQYPoQIEYZPqDAp94cqz/PqMJ9PizJLjoqEq2L9Yhy6eFUhLHcNYxUIT4vGseKFSdoyVrowbx0rXLhtHytb2HaEihe6AEULHQ5R2cLKbaxcYeI4Vq7wTbuwcB0rVtj8r5oCofuHR1KFTe8mVAhX7mOFCp1fZ8QKO1wwIlTY8Er6Xk3LWS2hQuuQqdvzoxdmlhEfrgtELzyZJ5ydF4heeDBPKPUIL8YBV/cFohea/1h0uOgqeuHEOGCuXtjhsjKhwmeECBEiRIgQIUKECBEi7JT5HXCHAZEJF+ltn8YB949L07N5amTCXlPNV+9pEpqXVCRM1Qt36oUX9ULLGUZFQsuJfkVCy1BFQsv3x/UIr5Yl9QjNV+prEtq2cdAjzNUL9+qFts+99QjH6oW2JRE+VgDhVr3QuqtRZMLpbSfzNy2q0+0DrRvGRCa8z3y+tMMGOEKFms4II0SIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChL0b8N55kQoHvP9hb+HMi3AdkbD9hgMPFZHQD3DAG5H2FXr6EXbaFM+r0LJ15hAN9avYT+jnRrK/bcpx/47mva4Ll+eW3o5QIiIiIiIiIiIiIiIiIiIiIiIiAX0BPL5NLMb8j/cAAAAASUVORK5CYII=" alt="" />
    </a>
    <a href="https://www.linkedin.com/company/urbancompany/" >
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5y4KTEC55KH5YDHh4foRDHG3OpR4zmFvVrw&usqp=CAU" alt="linkedned"/>
   </a>
    <a href="https://www.instagram.com/urbancompany/"  > 
   
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTOSRiTuIRegyFjQRglUqeW9MgI1V2cqxtvKtZlkk&s" alt="" />     </a>
    <a href="https://www.youtube.com/channel/UCjNJe0jgLP257X9LsSuyIpg" >
    
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC8YEc62PMTXKFOIY1yXHZaYU9NSJskOVhqQ&usqp=CAU" alt="" />
    </a>
    <a href="https://www.pinterest.com/UrbanCompanyOfficial/">
 <img src="data:image/png;base64,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" alt="" />
  </a>
  </div>
  <div className="app">
    <img src="https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png" alt="" />
  </div>
</div>



</div>
 

 <Footer /> */}
 <Footer/>
{/* ...End */}
  </div>
  )
 }

 export default Home








 