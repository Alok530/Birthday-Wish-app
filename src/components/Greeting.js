import React from "react";
import qs from 'query-string';
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Greeting = () => {
    const [name, setname] = useState('')
    const [year, setyear] = useState()
    useEffect(() => {
        const { name } = qs.parse(window.location.search);
        const { year } = qs.parse(window.location.search);
        setname(name);
        setyear(year);
    }, [])

    return (
        <>
            <div className="contact Home greeting">
                <div className="content">
                    <h1>Happy Birthday</h1>
                    <h1 style={{"color":"red"}}>{name} and You are {year}</h1>
                </div>
                <NavLink className="btn formBtn" style={{width:'150px'}} to="/fillform">Again</NavLink>
            </div>
        </>
    )
}

export default Greeting;