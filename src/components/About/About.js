import React from 'react';
import img from '../../img/img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div style={{backgroundColor:'#0A192F', color:'white' }}>
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img style={{ height:'300px'}} src={img} alt="pic"/>
                </div>
                <div className="col-md-8">
                    <h2>MOYURI AKTHER</h2>
                    <h6>frontend developer, Computer Engineer</h6>
                    <p>I am Junior Web developer able to build a Web presence from the ground up. My skills HTML, CSS, Bootstrap, React Js, Node Js, firebase, MongoDB and etc. Skilled at writing well-designed, testable and efficient code using current best practices in Web development. Fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools.</p>
                    <a href="https://www.facebook.com/moyuriakther"></a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;