import React, { useState, useContext } from "react";
// @ts-ignore
import "./css/languages.css";

export default function Languages(){
    return <>
        <h1>Languages</h1>

        <div className="languages_container">
            <div className="catalan">
                <h2>Catalan</h2>
                <p>It is my native language and when I lived in Barcelona I used to speak it most of the time.</p>
            </div>
            <div className="spanish">
                <h2>Spanish</h2>
                <p>It is also a native language as a spanish citizen, so I am fluent and I also use it all the time.</p>
            </div>
            <div className="english">
                <h2>English</h2>
                <p>I started to study it when I was 3, I passed the FCE in 2021 and obtained a 93/120 in the TOEFL in 2021.</p>
            </div>
            <div className="french">
                <h2>French</h2>
                <p>I sturted to study it when I was 11, and in 2021 I passed the DELF B2 exam</p>
            </div>
        </div>
    </>
}