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
                <div className="policy-card__info__decrip">
                    {props.decrip}
                </div>
                <div className="policy-card__info__email">
                    {props.email}
                <div className="policy-card__info__phone">
                    {props.phone}
                </div>
                </div>
            </div>
        </div>
    )
}

ContactCard.propTypes = {
    title: PropTypes.string.isRequired,
    decrip: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
}

export default ContactCard
