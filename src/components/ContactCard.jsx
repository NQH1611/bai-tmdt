import React from 'react'
import PropTypes from 'prop-types'

const ContactCard = props => {
    return (
        <div className="contact-card">
            <div className="contact-card__image">
                <i className={props.image}></i>
            </div>
            <div className="policy-card__info">
                <div className="policy-card__info__title">
                    {props.title}
                </div>
                <div className="policy-card__info__description">
                    {props.description}
                </div>
                <div className="policy-card__info__email">
                    {props.email}
                </div>
                <div className="policy-card__info__phone">
                    {props.phone}
                </div>
                
            </div>
        </div>
    )
}

ContactCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
}

export default ContactCard
