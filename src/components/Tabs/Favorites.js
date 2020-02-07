import React, { useEffect } from 'react'
import { useStockContext } from '../../context'
import News from '../News/News'


const Favorites = () => {

    const { favoriteNews } = useStockContext()

    useEffect(() => {
        console.log(favoriteNews)
    }, [favoriteNews])
    return(
        <div className = "row newAndFavorites">
        {favoriteNews ? favoriteNews.map(myNews => {
            // let myFavorites = false
            // if (favoriteNews.filter(e => e.url === myNews.url).length > 0) {
            //     myFavorites = true
            //   } else {
            //       myFavorites = false
            //   }


            return(
                

                
                <News
                    url = {myNews.url}
                    title = {myNews.title}
                    author = {myNews.author}
                    content = {myNews.content}
                    image = {myNews.image}
                    date = {myNews.date}
                    // favorited = {myFavorites}
                    myKey = {myNews.url}
                    key = {myNews.url}
                />
                
            )
        }) : "No News"}
        </div>
    )
}

export default Favorites