import React from 'react'
import {Link} from 'react-router-dom'
export default function Table({table}) {
    const {name,slug,images,price} = table;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0]} alt ="single-table"/>
            </div>
        </article>
    )
}
