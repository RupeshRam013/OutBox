

import "../styles/contact.css";

export default function Contact(){
    return(
        <> 
            <div id="footer_bar">

                <div id="extra_info">

                    <div id="involvement">
                        <h2>Creators</h2>
                        <p>Design: @RupeshRam</p>
                        <p>Functionality: @RupeshRam</p>
                        <p>Management: @RupeshRam</p>
                    </div>    
                    
                    <div id="establishment">
                        <h2>Established</h2>
                        <p>08.June.2023</p>
                    </div>

                </div>
 
                <div id="footer_intro">
                    <img src={require("../images/icons/website_icon.png")} alt="nothing">
                    </img>
                </div>
        
                <div id="contact_tab">
                    <div id="social">
                        <h2>Social Sites</h2>
                        <div id="links">
                            <a href="https://twitter.com/rupeshram013" id="twitter"  >
                                <img src={require("../images/icons/2021 Twitter logo - blue.png")}
                                alt="nothing">
                                </img>
                            </a>
                            <a href="https://discord.com" id="discord" >
                                <img src={require("../images/icons/discord-mark-black.png")}
                                alt="nothing">
                                </img>
                            </a>
                        </div>
                    </div>

                    <div id="contact">
                        <h2>Contact Us</h2>
                        <p>Rupeshram00995@gmail.com</p>
                        <p>Phone:9808995387</p>
                        <p>Tel:546345234</p>
                    </div>
                  
                </div>


            </div>
            
        </>
    );
}