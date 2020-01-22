import React from 'react'


const CompanyNews = (props) => {
    
    return(
    <div className = "col-6 fullCard">
        <div className="card h-100 d-flex flex-column justify-content-between" key = {props.url}>
            <img className="card-img-top newsImage" src={props.image} alt={props.title} />
            <div className="card-body newsBody ">
            <h4 className="card-title"><a href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a></h4>
            <h5 className = "card-title">{props.author} {new Date(props.date).toLocaleDateString()}</h5>
            
            <p class="card-text">{props.content} <a href={props.url} target="_blank" rel="noopener noreferrer">read more </a> </p>
            <div className="card-footer myFooter">
                <button>Add To Favorites</button>
                </div>
            </div>
        </div>

        </div>
        
        // {/* <div key = {props.url} className = 'row'>
        //     <div className = 'col-12'>
        //         <h4><a href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a></h4>
        //         <h5>{props.author} {new Date(props.date).toLocaleDateString()}</h5>
        //     </div>
        //     <div className = 'col-4'>
        //         <img src={props.image} alt={props.title} className = 'newsImage' />
        //     </div>
        //     <div className = 'col-8'>
        //         <p>{props.content} <a href={props.url} target="_blank" rel="noopener noreferrer">read more </a> </p>
        //     </div>
            
                
                
                
            
        // </div> */}
    )
}

export default CompanyNews