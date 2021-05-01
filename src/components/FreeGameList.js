// import { render } from "@testing-library/react"
import React, { Component } from "react";

function FreeGameList (props){
    
    return <div>
        {props.FreeGameList.map((freegame, index) => {
            return <h1>{freegame.name}</h1>
        })}
    </div>
    
    
}

export default FreeGameList