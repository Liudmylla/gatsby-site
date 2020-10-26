import React from "react";
import "bulma/css/bulma.min.css";
import {  Link } from "gatsby";
import "./Layout.css";

const Layout = props => {
    return (
        <div>
                <Link to={`/`}>
                        <div className="has-text-centered"
                            style={{ marginTop: "2rem", marginBottom: "2rem" }}
                        >
                            <h1 className="title is-2">I love to make video for you</h1>
                        </div>
                </Link>
               
                
                        <div className="columns is-centered is-desktop" >
                <Link to={`/about`}>
                    <div class="column is-centered">
                                <h3 >
                                    Marina Marishkette
                                </h3>
                            </div>
                </Link>
                 <Link to={`/contact`}>
                    <div class="column is-centered "
                        style={{ marginLeft: "8rem" }}
                    >

                                 <div className="button is-primary">
                                     Contact
                                 </div>
                             </div>
                                 
                 </Link>
                              
                        </div>
    
            
           

            <div className="columns is-centered">
                <div className="column video-column is-8-widescreen is-10-desktop is-11-tablet">
                    <div className="image">
                        {props.children}
                    </div>
                               
                </div>
            </div>
        </div>
    )
}
export default Layout;