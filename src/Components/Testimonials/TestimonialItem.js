import React from 'react';
import './Testimonials.scss';

const testimonialItem = ({speaker}) => (
    <div className="testimonial-item">
        <div className="testimonial-item__profile">
            <img src={require(`../../assets/testimonials/${speaker.profileImage}`)} alt={speaker.name}/>
        </div>
        <div className="testimonial-item__name text-underline">
            <span>{speaker.name}</span>
        </div>
        <div className="testimonial-item__role">
            {speaker.role} 
            <div>
                {speaker.additionalInfo}
            </div>
        </div>
        <div className="testimonial-item__info">
            <a href="#testimonial">
                <div className="item-icon"></div>
                Ver más
            </a>
        </div>
    </div>
);

export default testimonialItem;