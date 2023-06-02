

import "../styles/items.css";

export default function Items(){

   return(
      <>
         <div id="item_box">
            <div id="shop_intro">

               <h1 id="title"> Our Selling </h1>
               <p id="description">
                  Products that we sell on this site can be viewed below 
               </p>
            </div>

            <div id="products">
               <div id="filter">

               </div>
               <div id="main_products">
                  <div id="category_1">
                     <h2>Hats</h2>
                     <div className="button_box">
                        <button><p> See more </p></button>

                     </div>
                  </div>
                  <div id="category_2">
                     <h2>Tops</h2>
                     <div  className="button_box">
                        <button><p> See more </p></button>

                     </div>
                  </div>
                  
                  <div id="category_3">
                     <h2>Trousers</h2>
                     <div  className="button_box">
                        <button><p> See more </p></button>

                     </div>
                  </div>
                  <div id="category_4">
                     <h2>Shoes</h2>
                     <div  className="button_box">
                        <button><p> See more </p></button>

                     </div>
                  </div>
                  <div id="category_5">
                     <h2>Bags</h2>
                     <div  className="button_box">
                        <button><p> See more </p></button>

                     </div>
                  </div>

               </div>
            </div>
         </div>
      </>
   );
}