import React, {useEffect} from 'react'
import {useStockContext} from '../../context'
import CompanyNews from '../News/News'

const News = () => {
    const {news, searchStock} = useStockContext()
    
    return(
        <div>
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