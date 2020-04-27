import React, { Component } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import './Subscription.scss';

class Subscription extends Component {
    constructor() {
        super();

        this.state = {
            subscription: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Informa tu nombre completo',
                        label: 'Nombre'
                    },
                    value: '',
                    validation: {
                        required: false,
                        valid: false,
                        message: "Name is required"
                    },
                    valid: true,
                    touched: false
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Informa tu correo electrônico',
                        label: 'Email'
                    },
                    value: '',
                    validation: {
                        required: true,
                        isEmail: true,
                        valid: false,
                        message: "Este campo es obligatorio"
                    },
                    valid: false,
                    touched: false
                },
                newsletter: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'checkbox',
                        label: 'Sí, acepto recibir los contenidos de Hotmart y intiendo que puedo darme de baja en cualquier momento'
                    },
                    value: false,
                    validation: {
                        required: false,
                        valid: false,
                    },
                    valid: true,
                    touched: false
                }
            },
            formIsValid: false
        }
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    subscriptionTalk = ( event ) => {
        event.preventDefault();
        const formData = {};
        let formIsValid = true;

        for (let formElementIdentifier in this.state.subscription) {
            formData[formElementIdentifier] = this.state.subscription[formElementIdentifier];

            if(!this.state.subscription[formElementIdentifier].valid) {
                formData[formElementIdentifier].validation.valid = true;
                formIsValid = false;
            }
        }

        this.setState({subscription: formData, formIsValid: formIsValid});

    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.subscription
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };

        if(updatedFormElement.elementConfig.type === 'checkbox') {
            updatedFormElement.value = !updatedFormElement.value;
        } else {
            updatedFormElement.value = event.target.value;
        }

        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({subscription: updatedOrderForm, formIsValid: formIsValid});
    }

    render(){
        const formElementsArray = [];

        for (let key in this.state.subscription) {
            formElementsArray.push({
                id: key,
                config: this.state.subscription[key]
            });
        }

        return(
            <div className="subscription">
                <div className="subscription__container container">
                    <div className="article__info ">
                        <div>
                            ¡No te pierdas las novedades!
                        </div>
                        <div>
                            Suscríbete a nuestra newsletter, habilita las 
                            notificaciones y recibe el mejor contenido sobre
                            emprendimiento y marketing digital.
                        </div>
                    </div>
                    <form className="subscription__form" onSubmit={this.subscriptionTalk}>
                        <div className="subscription__form-group">
                        {formElementsArray.map(formElement => (
                        <Input 
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            invalid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            changed={(e) => this.inputChangedHandler(e, formElement.id)}
                            touched={formElement.config.touched}/>
                        ))}
                        </div>
                        <div className="subscription__form-submit">
                            <Button btnType="button-sumit">¡Inscríbeme!</Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Subscription;
