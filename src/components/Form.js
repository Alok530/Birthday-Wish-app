import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Login() {
    const [name, setname] = useState('')
    return (
        <>
        // this is form for fill
            <div className="Reg">
                <div className=" p-4 mt-4 mb-4 regestration Login">
                    <div className="Title">Birthday's Wish</div>
                    <div className="row g-3">
                        <div className="col-md-12">
                            <span className="Details">Birthday Boy</span>
                            <input type="text" onChange={(event)=>{setname(event.target.value)}} className="form-control" id="inputEmail4" name="name" placeholder="Enter Birthday Boy Name" autoComplete="off" required="true" />
                        </div>
                        <div className="col-12">
                            <Link onClick={event => (!name) ? event.preventDefault() : null} to={`/geterate?name=${name}&year=${18}`}>
                                <button type="submit" className="btn">Generate Greeting</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
