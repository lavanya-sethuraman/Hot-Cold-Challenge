import React from 'react';
import { Button } from 'semantic-ui-react'

export default function GuessButton(props){
    return(
        <Button size='massive' color='green' fluid type="submit" onClick={props.onClick}>
            {props.value} 
        </Button>
    );

}