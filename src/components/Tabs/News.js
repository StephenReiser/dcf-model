import React from 'react'
import {useStockContext} from '../../context'
import CompanyNews from '../News/News'

const News = () => {
    const {news} = useStockContext()
    
    return(
        <div className = "row">
            {news ? news.map(myNews => {
                return(
                    

                    
                    <CompanyNews
                        url = {myNews.url}
                        title = {myNews.title}
                        author = {myNews.author}
                        content = {myNews.content}
                        image = {myNews.urlToImage}
                        date = {myNews.publishedAt}
                    />
                    
                )
            }) : "No News"}
        </div>
    )
}

export default News