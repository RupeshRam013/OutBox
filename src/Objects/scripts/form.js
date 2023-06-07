
import "../styles/form.css";


export default function Form(){
    return(
        <>
            <div id="form_outbox">
                <div id="importance_box">
                    <div>
                        <h1>Joining us !</h1>
                        <p>
                            We offer various services to those customer who choose to join us and have a good contact with us .We offer the following advantages .
                        </p>

                        <ul>
                            <li>Option for choosing the product and saying them for later purchase</li>
                            <li>Have an opportunity to keep the purchasing records</li>
                            <li>Get notified with new and great profitable offer that we provide  </li>
                        </ul>

                    </div>

                </div>
                <div id="form_box"> 
                    <input type="radio" className="checkbox" name="tabs" id="tab2"></input>
                    <label for="tab2" className="main_label" id="label1">JoinUs</label>
                    <div id="content2" className="content" >
                        <h1>JoinUs</h1>
                        <input placeholder="Name"></input>
                        <input placeholder="Email"></input>
                        <input placeholder="Password"></input>
                        <input placeholder="Re-enter"></input>
                        <a href="/"> Have an acccount?</a>

                        <button>Register</button>
                    </div>
                    
                    <input type="radio" className="checkbox" checked name="tabs" id="tab1"></input>
                    <label for="tab1" className="main_label" id="label2">Login</label>
                    
                    <div id="content1" className="content">
                        <h1>Login</h1>
                        <input placeholder="Email"></input>
                        <input placeholder="Password"></input>
                        <a href="/"> Forgot password?</a>
                        <button>Login</button>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

