import React from "react";
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="contact Home">
                <div className="content">
                    <h1>Wellcome</h1>
                    <p>Lorem ipsum dolor sit amet consectetur,Nemo impedit quia qui amet earum quis nisi, nulla fuga asperiores, ad minus laboriosam laudantium dolor ipsum commodi.</p>
                    <NavLink className="btn formBtn" to="/fillform" ria-disabled="true">Geterate Greeting</NavLink>
                </div>
            </div>
        </>
    )
}

export default Home;