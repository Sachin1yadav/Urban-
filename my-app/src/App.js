 import AllRoutes from './Homepage/AllRoutes';
import './App.css';
import Login from "./Homepage/Login"
import Home from "./Homepage/Home"
 import Services from "./Homepage/services"
function App() {
  return (
    <div className="App">
      {/* <Login/> */}
     <Home/>
{/* <AllRoutes/> */}
      <Services/>
    </div>
  );
}

export default App;
