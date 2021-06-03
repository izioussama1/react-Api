import React from 'react'
import { Link } from 'react-router-dom'

const List = () => {
    return (
        <>
            <h1>
                Countries you visited
        </h1>
            <Link to='/'>
                <i class="fas fa-arrow-circle-left"></i>
            </Link>
        </>
    )
}

export default List