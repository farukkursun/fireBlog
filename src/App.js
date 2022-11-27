import AuthContext from "./contexts/AuthContext";
import Router from "./router/Router";




function App() {
  return (
    <div>
    <AuthContext>
       <Router/> 
    </AuthContext>
   
    </div>
  );
}

export default App;
