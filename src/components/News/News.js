import React, {useState, useEffect} from 'react'
import {useStockContext} from '../../context'
import firebase from '../../firebase'





const CompanyNews = (props) => {
    const [favorites, setFavorites] = useState(false)

    const {favoriteArticles, searchStock, favoriteNews, setFavoriteNews} = useStockContext()

    








    const addFavoriteFunc = () => {
        // setFavorites(!favorites)
        

        const newFav = {
            author: props.author,
            content: props.content,
            date: props.date,
            image: props.image,
            ticker: searchStock.toUpperCase(),
            title: props.title,
            url: props.url
        }
        console.log(newFav)
        firebase.firestore()
        .collection('stockNews')
        .add({
            author: props.author,
            content: props.content,
            date: props.date,
            image: props.image,
            ticker: searchStock.toUpperCase(),
            title: props.title,
            url: props.url
        })
        .then((docRef) => {
            console.log('added a favorite!')
            newFav.id = docRef.id
            const newArticles = favoriteNews
            newArticles.push(newFav)
            setFavorites(true)
            setFavoriteNews(newArticles)
        })
        

        // so weirdly favoriteNews isn't getting updated as expected (forcing a load) however might not really matter????
        

        
    }

    const removeFavoriteFunc = () => {
        // console.log(favoriteNews[favoriteNews.findIndex(x => x.url === props.url)])
        // setFavorites(!favorites)
        // console.log('removed favorite', props.url)
        const myIndex = favoriteNews.findIndex(x => x.url === props.url)

        // console.log(myIndex)
        const myNewFavorites = favoriteNews

        const idToDelete = myNewFavorites[myIndex].id

        console.log(idToDelete)

        firebase.firestore()
        .collection("stockNews")
        .doc(idToDelete)
        .delete()
        .then(function() {
            console.log("Document successfully deleted!");
            myNewFavorites.splice(myIndex,1)
            // console.log(myNewFavorites)
            setFavoriteNews(myNewFavorites)
            setFavorites(false)

        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });


        // console.log(favoriteNews)

        // really this needs to be a remove request to db - and then set state of myFavorites - so we don't need to do another call
    }

    useEffect(() => {
        console.log('favorites isbeing run')
        
                if (favoriteNews.filter(e => e.url === props.url).length > 0) {
                    setFavorites(true)
                  } else {
                      setFavorites(false)
                  }
    }, [favoriteNews])
    
    return(
    <div className = "col-6 fullCard" key={"msft" + props.myKey}>
        <div className="card h-100 d-flex flex-column justify-content-between" key = {props.url}>
            <img className="card-img-top newsImage" src={props.image} alt={props.title} />
            <div className="card-body newsBody ">
            <h4 className="card-title"><a href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a></h4>
            <h5 className = "card-title">{props.author} {new Date(props.date).toLocaleDateString()}</h5>
            
            <p className="card-text">{props.content} <a href={props.url} target="_blank" rel="noopener noreferrer">read more </a> </p>
            <div className="card-footer myFooter">
                {favorites ? <button className = 'btn-block btn btn-warning' onClick = {() => removeFavoriteFunc()}>Remove from Favorites</button> : <button className = 'btn-block btn btn-success' onClick = {() => addFavoriteFunc()}>Add To Favorites</button>}
                
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