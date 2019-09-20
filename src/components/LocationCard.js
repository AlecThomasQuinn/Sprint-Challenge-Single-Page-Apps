import React from "react";
import { Card, Icon } from 'semantic-ui-react'

export default function LocationCard(props) {
  return(
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Description>
          <span>{props.type} - {props.dimension}</span>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name='user' />
        residents: {props.residents.length}
      </Card.Content>
    </Card>
  );
};