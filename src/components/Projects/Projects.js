import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import Project from "../Project/Project";
import Burj from "../../img/burj.PNG";
import Food from "../../img/food.PNG";
import Yoga from "../../img/yoga.PNG";

const Projects = () => {
  // const projectInformation = [
  //     {
  //         name:'Testy Food [Web Application] – [1-3 April 2021]',
  //         description:'it’s an online food-delivered system.To order any item customer must log in.In this system, the admin can add more food item.',
  //         technologies:' html, CSS, React Js, Bootstrap, Node Js, Firebase, Heroku, MongoDB.',
  //         img:'',
  //         githubClient:'https://github.com/moyuriakther/testy-food',
  //         githubServer:'https://github.com/moyuriakther/testy-food-server',
  //         live:'https://complete-website-client-b7a1a.web.app/'
  //     },
  //     {
  //         name:'Burj Al Arab [Web Application] – [18-20 March 2021]',
  //         description:'It’s an online hotel booking system.people can choose their needed room.',
  //         technologies:'html, CSS, React Js, Material Ui, Firebase.',
  //         img:'',
  //         githubClient:'https://github.com/moyuriakther/burj-al-arab-final.git',
  //         githubServer:'https://github.com/moyuriakther/burj-al-arab-server.git',
  //         live:'https://burj-al-arab-cc6b6.web.app/'
  //     },
  //     {
  //         name:'Yoga Fit [Web Application] – [16-18 April 2021]',
  //         description:'It’s an online booking system for a yoga class.customers can choose what type of yoga he/she like.here we provide basic to advance level yoga.',
  //         technologies:'html, CSS, React Js, Bootstrap, Firebase, Heroku, MongoDB.',
  //         img:'',
  //         github:'https://github.com/moyuriakther/Express-Yoga',
  //         live: '<a href="full-stack-client-moyuriakther.web.app/home"></a>'
  //     }
  // ]
  return (
    <div style={{backgroundColor:'#0A192F', color:'black' }}>
      <div className="container">
        <h2 style={{color:'white'}}>Projects</h2>
        <div className="row">
          {/* {
                projectInformation.map(info => <Project info={info} key={info.name}></Project>)
            } */}

          <CardDeck>
            <Card >
              <Card.Img variant="top" src={Food} />
              <Card.Body>
                <Card.Title>Testy Food </Card.Title>
                <Card.Text>
                  it’s an online food-delivered system.To order any item
                  customer must log in.In this system, the admin can add more
                  food item.
                </Card.Text>{" "}
                <br />
                Technologies: html, CSS, React Js, Bootstrap, Node Js, Firebase,
                Heroku, MongoDB.
              </Card.Body>
              <Card.Footer>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://full-stack-client-moyuriakther.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/moyuriakther/testy-food"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Client
                  </a>
                  <a
                    href="https://github.com/moyuriakther/testy-food-server"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Server
                  </a>
                </div>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={Yoga} />
              <Card.Body>
                <Card.Title>Yoga Fit</Card.Title>
                <Card.Text>
                  'It’s an online booking system for a yoga class.customers can
                  choose what type of yoga he/she like.here we provide basic to
                  advance level yoga.
                </Card.Text>{" "}
                <br />
                Technologies: html, CSS, React Js, Bootstrap, Firebase, Heroku,
                MongoDB.
              </Card.Body>
              <Card.Footer>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://complete-website-client-b7a1a.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/moyuriakther/Express-Yoga"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub{" "}
                  </a>
                </div>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={Burj} />
              <Card.Body>
                <Card.Title>Burj Al Arab</Card.Title>
                <Card.Text>
                  It’s an online hotel booking system.people can choose their
                  needed room.
                </Card.Text>{" "}
                <br />
                Technologies: html, CSS, React Js, Material Ui, Firebase.
              </Card.Body>
              <Card.Footer>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://burj-al-arab-cc6b6.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/moyuriakther/burj-al-arab-final.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Client
                  </a>
                  <a
                    href="https://github.com/moyuriakther/burj-al-arab-server.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Server
                  </a>
                </div>
              </Card.Footer>
            </Card>
          </CardDeck>
        </div>
      </div>
    </div>
  );
};

export default Projects;
