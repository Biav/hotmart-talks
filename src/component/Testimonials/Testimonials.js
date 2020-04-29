import React, { Component } from 'react';
import Button from '../UI/Button/Button';
import TestimonialItem from './TestimonialItem';

class Testimonials extends Component {
    constructor() {
        super();

        this.state = {
            testimonials: [
                {name: 'Raul Maraña', role: 'Business Development Leader', additionalInfo: 'Europe  |  Hotmart', profileImage:  'raul-marana.jpg'},
                {name: 'Alejandro Novás', role: 'Co-fundador de Mundo Entrenamiento y fundador de ', additionalInfo: 'Vivir de tu Pasión ', profileImage: 'alejandro-novas.jpg'},
                {name: 'Borja Montón', role: 'Creador de contenido, Ilusionista profesional y joven emprendedor', additionalInfo: null, profileImage: 'borja-motom.jpg'}
            ]
        }
    }

    render(){
        const listTestimonials = this.state.testimonials.map( (testimonial, index) => {
            return <TestimonialItem  speaker = {testimonial} key = {index} />
        });

        return (
            <div className="testimonials-container">
                <div className="testimonials container">
                    {listTestimonials}
                </div>
                <div className="testimonial-subscription">
                    <Button btnType="button-success">
                        Quiero Inscribirme ahora
                    </Button>
                </div>
            </div>
        )
    }
}

export default Testimonials;