import React from 'react';
import '../index.css';
import { Input } from 'semantic-ui-react';

export default function GuessInput(props){
    return(
        <Input type="number" fluid size='massive' placeholder={props.placeholder} onChange={props.onChange} 
            min={1} max={100} value={props.value}/>
    );
}
