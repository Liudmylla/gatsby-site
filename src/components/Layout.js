import React from "react";
import "bulma/css/bulma.min.css"
import "./Layout.css";
const Layout = props => {
    return (
        <div>
            <div className="has-text-centered"
                style={{ marginTop: "2rem", marginBottom: "2rem" }}
            >
                <h1 className="title is-3">I love to make video</h1>
            </div>
            <article className="media">
             
                <div className="media-content">
                    <div className="content">
                        <div className="columns">
                            <div className="column is-6">
                                <p>
                                    <strong>Marina Marishkette</strong>
                                    <br />
                                    <a href="#" className="button is-primary">Contact</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <div className="columns is-centered">
                <div className="column video-column is-8-widescreen is-10-desktop is-11-tablet">
                    <div className="image">
                        {props.children}
                    </div>
                    <br />
                    <div className="box">
                        <div style={{ fontSize: "1.5em", fontWeight: "500" }}> for you
      </div>
                        <br />
                      
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Layout;