import React from 'react';
import Avatarone from "./Avatarone.jpg"

function Description (){
    return <div className="row row-land">
        <div className="col-lg-6 Intro">
        <h1>Hi, I'm Victor Eyo & I'm a fullstack web developer</h1>
        </div>
        <div className="col-lg-6">
        <img src={Avatarone} alt="Avatarone"/>
        </div>
    </div>
}

export default Description;