import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const CompanyNews = (props) => {
    
    return(
        
        <div key = {props.url} className = 'row'>
            <div className = 'col-12'>
                <h4><a href={props.url} target="_blank">{props.title}</a></h4>
                <h5>{props.author}</h5>
            </div>
            <div className = 'col-4'>
                <img src={props.image} alt={props.title} className = 'newsImage' />
            </div>
            <div className = 'col-8'>
                <p>{props.content} <a href={props.url} target="_blank">read more </a> </p>
            </div>
            
                
                
                
            
        </div>
    )
}

export default CompanyNews