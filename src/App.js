
import "./App.css";
import Header from "./components/headers/header";
import IndexSelect from "./components/selectComponents/index"
import { AppProvider} from "./context/context";

function App() {
  

  return (
    
    <AppProvider >
    <Header/>
 
    <div className="App">
      <IndexSelect/>
    </div>
    </AppProvider>
  
  );
}

export default App;
