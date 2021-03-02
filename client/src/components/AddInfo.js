import React from 'react'
import Information from './Information'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios'

const AddInfo = () => {
    return(
        <div className="add_product">
            <div className="inside-container">
                <h1>Add - Get student</h1>
            </div>
            <div className="add_product-center">
                {/*form*/}
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Student Name" name='' className="inputs"/>
                    <label htmlFor="attendance">Attendance</label>
                    <input type="number" attendance='' className="inputs"/>
                    <button type="submit">Add</button>
                </form>
                <div className="information">
                    <h4 className="postedMsg">Student posted</h4>
                    <h4 className="deletedMsg">Student deleted</h4>
                    <div className="information-center">
                        <Information/>
                        <Information/>
                        <Information/>
                        <Information/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddInfo