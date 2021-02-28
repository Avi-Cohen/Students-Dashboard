import React from 'react'
import {Link} from 'react-router-dom'

const Information = () => {
    return(
        <div className="single-info">
            <div className="info dateIcons">
                <div className="dates"></div>
                <div className="icons">
                    <Link to='/'>
                        <i className='fas daa-edit'></i>
                    </Link>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="info">
                <label htmlFor="name">Name</label>
                <p>codito</p>
            </div>
            <div className="info">
                <label htmlFor="attendace">Attendance</label>
                <p>codito</p>
            </div>
        </div>
    )
}

export default Information