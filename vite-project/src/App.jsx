import axios from "axios"
import { UserContextProvider } from "./UserContext";
import Routes from "./Routes";
import toast ,{Toaster} from "react-hot-toast";

function App() {
  axios.defaults.baseURL = 'http://localhost:4040'
  axios.defaults.withCredentials=true;
  
  return (
    <UserContextProvider>
      <Toaster />
      <Routes />
    </UserContextProvider>
    
  )
}

export default App
