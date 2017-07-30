import React from 'react';
import '../index.css';
import { Input } from 'semantic-ui-react';

export default function GuessOutput(props){
    return(
        <Input fluid  size='massive' disabled placeholder={props.placeholder} value={props.value}/>
    );

}
 GuessOutput.defaultProps = {
     value: ''
 };