import React from "react";
import Mypic from '../../img/my-pic.jpg';

const Home = () => {
  return (
    <div style={{ backgroundColor: "#0A192F", color: "white", height: "700px" }}>
        <div className="container">
        <div className="row">
        <div className="col-md-12">
        <div className="d-flex justify-content-center">
            <img style={{height:'300px', borderRadius:'50px', margin:'10px', padding:'10px'}} src={Mypic} alt="mypic"/>
        </div>
      <div className="d-flex justify-content-center">
        <div>
          <h6>HI THERE!</h6>
          <h3>I'M MOYURI AKTHER</h3>
          <p>
                Hello, My name is Moyuri akther. This is my portfolio website. what <br/>
                 type of projects I have done, shown on the projects page. if anyone <br/>
                 interest he/she can send me a mail from my contact page. from about <br/>
                page, you can know detail about me.          
          </p>
        </div>
      </div>
    </div>
        </div>
    </div>
    </div>
  );
};

export default Home;
