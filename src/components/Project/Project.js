import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Project = (props) => {
    const {name, description, technologies, live, githubClient, githubServer} = props.info;
    return (
      <div className="col-md-4">
    {/* //         <div className="col-md-4">
    //         <h4>Project Name{name}</h4>
    //         <p>Description{description}</p>
    //         <p>Technologies{technologies}</p>
    //         <p>Live{live}</p>
    //         <p>GitHub Client <a href={live}></a> {githubClient}</p>
    //         <p>GitHub Server{githubServer}</p>
    //     </div> */}
       <CardDeck>
       
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Project Name:{name}</Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle> */}
          <Card.Text>Description: {description}</Card.Text>
          <Card.Text>Technologies: {technologies}</Card.Text>
          <Card.Link href={live}><span style={{color:'black'}}>Live:</span>{live}</Card.Link> <br />
          <Card.Link href=""><span style={{color:'black'}}>Client:</span>{githubClient}</Card.Link> <br />
          <Card.Link href=""><span style={{color:'black'}}>Server:</span>{githubClient}</Card.Link>
        </Card.Body>
      </Card>
       </CardDeck>
      </div>
    );
};

export default Project;