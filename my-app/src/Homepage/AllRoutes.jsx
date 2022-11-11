import Login from "./Login"
import  Services from "./services"
import { Route,Routes } from "react-router-dom"
function AllRoutes(){




    return(

  <Routes>
    <Route path="/Login" element={<Login/>} ></Route>
    <Route path="/services" element={< Services/>}></Route>
</Routes>  

    )
}

export default AllRoutes