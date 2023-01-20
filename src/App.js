import { ToastContainer } from "react-toastify";
import AuthContext from "./contexts/AuthContext";
import Router from "./router/Router";




function App() {
  return (
    <div>
    <AuthContext>
       <Router/> 
       <ToastContainer/>
    </AuthContext>
   
    </div>
  );
}

export default App;
