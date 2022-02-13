
import {
  
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Chat from "./components/chat/Chat";
import Join from "./components/join/Join";

function App() {
  return (
    <Routes>
  
      <Route path="/" element={<Join/>}/>
      <Route path="/chat" element={<Chat/>}/>
   
   
   
  </Routes>
  );
}

export default App;
