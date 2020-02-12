### DCF Model

## About

This Project is built with ReactJS, NodeJS, ChartJS and Firebase. For state management, I used Context. The App allows a user to search a company by ticker symbol. The search hits an few different API endpoints from Financial Modeling Prep to pull financial information for the company. The app uses the company's 3 yr growth rates to calculate a 5 year projection and then a valuation for the company. If the growth rates or values look inappropriate, the user can adjust each of the inputs as they see fit.

Additionally, a chart is drawn plotting actual stock price back to 1/1/2017. This chart is built with ChartJS.

Finally, recent news is pulled in from News API to pull in the most recent news articles including either the stock ticker symbol or company name. The user can then add/remove these to/from their favorites if it is an interesting article.

## Next Steps

I'd like to add users. As of now, all favorites are shared amongst all users. So a simple log in would make sense to add. Additionally I'd like to add a notes section for each article or perhaps just articles that were added to favorites so a user can comment on why they think the article is interesting or what it could mean for the stock.

## Link to current version <https://stocks-steve.herokuapp.com/>