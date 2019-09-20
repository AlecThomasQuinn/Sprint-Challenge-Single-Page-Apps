import React from "react";
import { Card, Image } from 'semantic-ui-react'

export default function CharacterCard(props) {
  return(
    <Card>
      <Image src={props.imageURL} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{props.species} {props.status}</span>
        </Card.Meta>
        <Card.Description>
          <span>Location: {props.location}<br/></span>
          <span>Origin: {props.origin}</span>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

