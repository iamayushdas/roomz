import React from 'react'
import {Link} from 'react-router-dom'
import defaultImg from "../images/room-1.jpeg"
import PropTypes from 'prop-types'
export default function Table({table}) {
    const {name,slug,images,price} = table;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg } alt ="single-table"/>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per table</p>
                </div>
                <Link to={`/tables/${slug}`} className="btn-primary room-link">
                    Features
                </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}

Table.propTypes = {
    table:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired
    })
}