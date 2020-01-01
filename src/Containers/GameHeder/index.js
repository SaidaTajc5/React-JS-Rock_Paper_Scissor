import React, { Component } from 'react';
import { GiRock } from "react-icons/gi";
import './gameHeader.css';
import { FaRegNewspaper } from "react-icons/fa";
import { TiScissorsOutline } from "react-icons/ti";

class GameHeader extends Component {
    state = {  }
    render() { 
        return ( <div className ="Game_Header">
            <GiRock className="RockIcon"/>
            <FaRegNewspaper className ="PaperIcon"/>
            <TiScissorsOutline  className="scissorsIcon"/>
      <h2>ROCK PAPER SCISSORS</h2>
        </div> );
    }
}
 
export default GameHeader;