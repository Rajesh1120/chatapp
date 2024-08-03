import axios from "axios"
import { UserContextProvider } from "./UserContext";
import Routes from "./Routes";
import toast ,{Toaster} from "react-hot-toast";

function App() {
  axios.defaults.baseURL = 'http://localhost:5000'
  axios.defaults.withCredentials=true;
  
  return (
    <UserContextProvider>
      <Toaster />
      <Routes />
    </UserContextProvider>
    
  )
}

export default App
