import './App.css';
import Navbar from "./Objects/scripts/navbar.js";
import Intro from "./Objects/scripts/intro.js";
import Items from "./Objects/scripts/items.js";
import Form from "./Objects/scripts/form.js";
import Contact from "./Objects/scripts/contact.js";

export default function App() {
  return (
   <div id='Outbox-Content'>
      <Navbar/>
      <Intro/>
      <Items/>
      <Form/>
      <Contact/>
   </div>
  );
}


