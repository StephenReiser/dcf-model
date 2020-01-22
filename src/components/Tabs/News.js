import React, {useEffect, useState} from 'react'
import {useStockContext} from '../../context'
import CompanyNews from '../News/News'
import firebase from '../../firebase'

const News = () => {
    const {news} = useStockContext()
    const [favoriteNews, setFavoriteNews] = useState(null)
    useEffect(() => {
        
        // need to make sure we set a unsubscribe
        const unsubscribe = firebase
        .firestore()
        .collection('stockNews')
        // .where("positive", "==", myPositive)
        // idea here is to then have a filter that allows sort on pos/neg news
        .onSnapshot((snapshot) => {
            
            setFavoriteNews(snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            })))

            // console.log(newTrends)

            // newTrends.forEach((trend) => {
            //     // console.log(trend.date)

            //     const date = new Date( trend.date).toLocaleDateString()
            //     trend.newDate = date
            //     console.log(date)

                
            //     if (stock.symbol === 'UpdateMe') {

            //     } else if (stock["Time Series (Daily)"][date]){
            //         stock["Time Series (Daily)"][date].positive = trend.positive
            //         stock["Time Series (Daily)"][date].details = trend.details
            //     }

                

          
            // })
            
            // newTrends is an array - can loop through it, convert date to a date that will match up with the stock table and then update the stock table - stock table doesn't need sort options but woudl be good to add clases and such as well as the details - from there up top we can show jsut stuff with a trend and then show the trend impact
            // console.log(newTrends, stock)
            // setStock(stock)
            // setTrends(newTrends)
        })
        return () => unsubscribe()
        // this forces the component to unsubscribe when it unmounts
    }, [
        // when stock changes need a rerender
        news, favoriteNews
    ])

    return(
        <div className = "row">
            {news ? news.map(myNews => {
                let myFavorites = false
                if (favoriteNews.filter(e => e.url === myNews.url).length > 0) {
                    myFavorites = true
                  } else {
                      myFavorites = false
                  }


                return(
                    

                    
                    <CompanyNews
                        url = {myNews.url}
                        title = {myNews.title}
                        author = {myNews.author}
                        content = {myNews.content}
                        image = {myNews.urlToImage}
                        date = {myNews.publishedAt}
                        favorited = {myFavorites}
                    />
                    
                )
            }) : "No News"}
        </div>
    )
}

export default News