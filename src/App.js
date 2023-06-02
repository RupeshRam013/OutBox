import './App.css';
import Navbar from "./Objects/scripts/navbar.js";
import Intro from "./Objects/scripts/intro.js";
import Items from "./Objects/scripts/items.js";

export default function App() {
  return (
   <div id='Outbox-Content'>
      <Navbar/>
      <Intro/>
      <Items/>
   </div> 
  );
}


