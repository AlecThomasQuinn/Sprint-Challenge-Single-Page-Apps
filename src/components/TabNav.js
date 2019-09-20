import React from "react";
import { Tab, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const panes = [
    {
     menuItem: { key: 'homepage', icon: 'chess rook', content: <NavLink to='/'>Homepage</NavLink> },
    },
    {
     menuItem: { key: 'characters', icon: 'chess', content: <NavLink to='/characters'>Characters</NavLink> },
    },
    {
     menuItem: { key: 'locations', icon: 'chess board', content: <NavLink to='/locations'>Locations</NavLink> },
    },
  ]

export default function TabNav() {
    return( 
        <Menu>
            <Tab panes={panes} />
        </Menu>
    );
};
