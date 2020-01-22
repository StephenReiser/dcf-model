import React, {useState, useEffect} from 'react'
import {useStockContext} from '../../context'
import firebase from '../../firebase'





const CompanyNews = (props) => {
    const [favorites, setFavorites] = useState(false)

    const {favoriteArticles} = useStockContext()

    








    const addFavoriteFunc = () => {
        setFavorites(!favorites)
        console.log('added favorite', props.url)

        // really this needs to be a add request to db
    }

    const removeFavoriteFunc = () => {
        setFavorites(!favorites)
        console.log('removed favorite', props.url)

        // really this needs to be a remove request to db
    }

    // useEffect(() => {
    //     if (favoriteArticles.includes(props.url)) {
    //         setFavorites(true)
    //     }
    // }, [])
    
    return(
    <div className = "col-6 fullCard">
        <div className="card h-100 d-flex flex-column justify-content-between" key = {props.url}>
            <img className="card-img-top newsImage" src={props.image} alt={props.title} />
            <div className="card-body newsBody ">
            <h4 className="card-title"><a href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a></h4>
            <h5 className = "card-title">{props.author} {new Date(props.date).toLocaleDateString()}</h5>
            
            <p className="card-text">{props.content} <a href={props.url} target="_blank" rel="noopener noreferrer">read more </a> </p>
            <div className="card-footer myFooter">
                {props.favorited ? <button className = 'btn-block btn btn-warning' onClick = {() => removeFavoriteFunc()}>Remove from Favorites</button> : <button className = 'btn-block btn btn-success' onClick = {() => addFavoriteFunc()}>Add To Favorites</button>}
                
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