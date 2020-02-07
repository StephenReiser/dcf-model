import React, {useEffect} from 'react'
import {useStockContext} from '../../context'
import CompanyNews from '../News/News'
import firebase from '../../firebase'

const News = () => {
    const {news, fullData, setFavoriteNews} = useStockContext()
    

    useEffect(() => {
        let myTickerSymbol = ''
        if (fullData) {

            myTickerSymbol = fullData.symbol
        }

        console.log('firebase updating')
        // need to make sure we set a unsubscribe
        const unsubscribe = firebase
        .firestore()
        .collection('stockNews')
        .where("ticker", "==", myTickerSymbol)
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
        fullData
        
    ])

    // I dont think i want fullData here - but right now I need it to make the buttons work correctly

    // I think i only want to run this once-  react is mad because it is and not running when favoriteNews is updated - but by passing in favorite news in the array - this is making an infinite loop

    return(
        <div className = "row newAndFavorites">
            {news ? news.map(myNews => {
                // let myFavorites = false
                // if (favoriteNews.filter(e => e.url === myNews.url).length > 0) {
                //     myFavorites = true
                //   } else {
                //       myFavorites = false
                //   }


                return(
                    

                    
                    <CompanyNews
                        url = {myNews.url}
                        title = {myNews.title}
                        author = {myNews.author}
                        content = {myNews.content}
                        image = {myNews.urlToImage}
                        date = {myNews.publishedAt}
                        // favorited = {myFavorites}
                        myKey = {myNews.url}
                        key = {myNews.url}
                    />
                    
                )
            }) : "No News"}
        </div>
    )
}

export default News