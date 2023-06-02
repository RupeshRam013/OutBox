import "../styles/navbar.css";

export default function Navbar(){
   return(
      <>
         <div id="navigation">
{/*             
            <img id="website_icon" src={require("../images/website_icon.png")}></img> */}


            <button id="searchbutton">
                  
               <img id="search_icon" src={require("../images/icons/search.png")} alt="nothing"></img>
            </button>
            <button id="menubutton">

               <img id="menu_icon" src={require("../images/icons/menu.png")} alt="nothing"></img>
            </button>
       

         </div>
      </>
   );
}