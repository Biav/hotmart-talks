import React from 'react';
import './Input.scss';

const input = ( props ) => {
    let inputElement = null, divInputElement,
        messageValidation = '', highlightValidation = '';

    inputElement = <input
        {...props.elementConfig}
        className= {props.elementConfig.type !== 'checkbox'? 'subscription__form-input': (props.value ? 'checked': '')}
        value={props.value}
        onChange={props.changed} />;

    
    if(props.invalid  && props.shouldValidate.valid) {
        messageValidation = props.shouldValidate.message; 
        highlightValidation = 'form-invalid';
    }
    
    divInputElement = (props.elementConfig.type !== 'checkbox') 
                      ? <>
                        <label>{props.elementConfig.label}</label>
                        {inputElement}
                        </> 
                      : <> 
                        {inputElement}
                        <label>{props.elementConfig.label}</label>
                        </>;
    return (
        <div className={highlightValidation}>
            {divInputElement}
            <span> {messageValidation} </span>
        </div>
    );

};

export default input;