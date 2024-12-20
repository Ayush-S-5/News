import React, { Component } from "react";
import NewsItem from "./news-item";
import PropTypes from "prop-types"
export class News extends Component{
    static defaultProps={
      country:'in',
      category:'Home'
    }
    static propTypes={
      country:PropTypes.string,
      category:PropTypes.string
    }
    articles=[
      {
        "source": {
          "id": "the-washington-post",
          "name": "The Washington Post"
        },
        "author": "Patrick Svitek, Justine McDaniel, Azi Paybarah, Mariana Alfaro, Brianna Tucker, Maegan Vazquez, Abha Bhattarai, Jeff Stein, Tony Romm, Andrew Ackerman, Jacqueline Alemany, Liz Goodwin, Rachel Siegel, Marianna Sotomayor, Theodoric Meyer, Leigh Ann Caldwell, Danielle Douglas-Gabriel, Cristiano Lima-Strong, Dan Diamond, McKenzie Beard, Michael Kranish, Jonathan O'Connell, Shayna Jacobs, Ellen Nakashima, Tyler Pager, Niha Masih, Perry Stein",
        "title": "Live updates: Trump expected to attend SpaceX launch with Elon Musk in Texas - The Washington Post",
        "description": "Get the latest news on the transition to the new administration of President-elect Donald Trump and a new Congress.",
        "url": "https://www.washingtonpost.com/politics/2024/11/19/trump-administration-transition/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/N5FRYXCCEPLDUESR32KPEKXB7Y_size-normalized.jpg&w=1440",
        "publishedAt": "2024-11-19T16:12:15Z",
        "content": "Dan Osborn, the independent candidate for Senate in Nebraska who ran a surprisingly strong but ultimately unsuccessful race, is launching a new group to help working-class people seek office regardle… [+234 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": "Reuters",
        "title": "US envoy in Beirut for talks after Lebanon, Hezbollah approve truce draft - Reuters.com",
        "description": "The visit indicates progress in US-led diplomacy aimed at ending a conflict which spiralled into all-out war in late September.",
        "url": "https://www.reuters.com/world/middle-east/us-envoy-beirut-talks-after-lebanon-hezbollah-approve-truce-draft-2024-11-19/",
        "urlToImage": "https://www.reuters.com/resizer/v2/YDLMO67NWBJGDNBW3GI7B6HD6Y.jpg?auth=4666e2b4ea94d213595c824c532c9a96909ceda34035cc60b98cd955c6afdd72&height=1005&width=1920&quality=80&smart=true",
        "publishedAt": "2024-11-19T16:03:48Z",
        "content": null
      },
      {
        "source": {
          "id": "associated-press",
          "name": "Associated Press"
        },
        "author": "THE ASSOCIATED PRESS",
        "title": "Putin lowers the threshold for using his nuclear arsenal after Biden's arms decision for Ukraine - The Associated Press",
        "description": "President Vladimir Putin formally lowered the threshold for Russia’s use of nuclear weapons, following U.S. President Joe Biden’s decision to let Ukraine strike targets inside Russian territory with American-supplied longer-range missiles. The new doctrine al…",
        "url": "https://apnews.com/article/russia-nuclear-doctrine-putin-91f20e0c9b0f9e5eaa3ed97c35789898",
        "urlToImage": "https://dims.apnews.com/dims4/default/ad7e012/2147483647/strip/true/crop/5548x3121+0+289/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Faf%2Ff7%2Fdb23953e5029be0581325d62610b%2Fdfcaf6d5df7c41a190f3f8950b175a4e",
        "publishedAt": "2024-11-19T15:50:00Z",
        "content": "President Vladimir Putin on Tuesday formally lowered the threshold for Russias use of its nuclear weapons, a move that follows U.S. President Joe Bidens decision to let Ukraine strike targets inside … [+5992 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Christian Edwards, Kostyantyn Gak, Lauren Kent",
        "title": "Ukraine fires US-made longer-range missiles into Russia for the first time, Moscow says - CNN",
        "description": "Ukraine hit a Russian weapons arsenal with US-made ATACMS missiles that it fired across the border for the first time, according to two US officials, in a major escalation on the 1,000th day of war.",
        "url": "https://www.cnn.com/2024/11/19/europe/ukraine-russia-atacms-biden-strike-intl/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24324406682880.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-11-19T15:11:00Z",
        "content": "Ukraine hit a Russian weapons arsenal with US-made ATACMS missiles that it fired across the border for the first time, according to two US officials, in a major escalation on the 1,000th day of war.\r… [+3921 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Barron's"
        },
        "author": "Barron's",
        "title": "Tesla Stock Is Up. Maybe Kim Kardashian Is Helping. - Barron's",
        "description": null,
        "url": "https://www.barrons.com/articles/tesla-stock-kim-kardashian-robot-87231f38",
        "urlToImage": null,
        "publishedAt": "2024-11-19T15:11:00Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "Associated Press Finance",
        "title": "Microsoft pitches AI 'agents' that can perform tasks on their own at Ignite 2024 - Yahoo Finance",
        "description": "Microsoft CEO Satya Nadella is opening a company conference in Chicago with remarks that could set the stage for where it’s taking its artificial...",
        "url": "https://finance.yahoo.com/news/microsoft-pitches-ai-agents-perform-144346230.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Aguyc5LQ.hcnfjoer996tA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap_finance_articles_694/93b2098d9eb4c3eaefca4f2ab40a61dd",
        "publishedAt": "2024-11-19T14:43:46Z",
        "content": "CHICAGO (AP) Microsoft CEO Satya Nadella is opening a company conference in Chicago with remarks that could set the stage for where its taking its artificial intelligence business.\r\nAI developers are… [+1665 chars]"
      },
      {
        "source": {
          "id": "the-verge",
          "name": "The Verge"
        },
        "author": "Victoria Song",
        "title": "Samsung finally starts Wear OS 5 rollout for older Galaxy Watches - The Verge",
        "description": "After a delay, Wear OS 5 and One UI 6 Watch is arriving on older Galaxy Watch models. New features like Energy Score and sleep apnea detection are included.",
        "url": "https://www.theverge.com/2024/11/19/24300468/samsung-wear-os-5-one-ui-6-watch-smartwatch-wearables",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/6EC3XDegoYgwXoqWM1Dy6z2GCrk=/0x0:2550x1700/1200x628/filters:focal(1275x850:1276x851)/cdn.vox-cdn.com/uploads/chorus_asset/file/24816195/236731_Samsung_Galaxy_Watch_6_AKrales_0376.jpg",
        "publishedAt": "2024-11-19T14:03:13Z",
        "content": "Samsung finally starts Wear OS 5 rollout for older Galaxy Watches\r\nSamsung finally starts Wear OS 5 rollout for older Galaxy Watches\r\n / The update will come to the Galaxy Watch 6 first and includes … [+1650 chars]"
      },
      {
        "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
        },
        "author": "Aisha Malik",
        "title": "Google Lens can now check prices and inventory when shopping in the real world - TechCrunch",
        "description": "Google announced on Tuesday that it's updating Google Lens to help people when they're shopping in a physical store.",
        "url": "https://techcrunch.com/2024/11/19/google-lens-new-feature-makes-it-easier-to-shop-products-in-store/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/10/GettyImages-1337403704.jpg?resize=1200,800",
        "publishedAt": "2024-11-19T14:00:00Z",
        "content": "After building out Google Lens to help users shop online more easily, Google is now updating the product to help people shop when they’re in a physical store by offering product insights, price compa… [+2908 chars]"
      },
      {
        "source": {
          "id": "politico",
          "name": "Politico"
        },
        "author": "Rachael Bade",
        "title": "Senate Republicans deliver a message to Trump: Gaetz’s confirmation is in jeopardy - POLITICO",
        "description": "They’re privately hoping Trump doesn’t make them walk the plank.",
        "url": "https://www.politico.com/news/2024/11/19/senate-republicans-matt-gaetz-attorney-general-00190332",
        "urlToImage": "https://static.politico.com/6a/3c/a7330a6447ffa79840c3cb8873cc/election-2024-debate-24728.jpg",
        "publishedAt": "2024-11-19T13:54:10Z",
        "content": "Its not just the politically vulnerable who are fretting. Theres a fear that Trump is going to waste precious political capital trying to push Gaetz through when he could instead be working on advanc… [+2284 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "9to5Mac"
        },
        "author": "Ben Lovejoy",
        "title": "Apple reveals the most popular podcasts of 2024, with nine different Top 10 lists - 9to5Mac",
        "description": "Apple has put together no fewer than nine different Top 10 lists, revealing the most popular podcasts of 2024. The...",
        "url": "https://9to5mac.com/2024/11/19/apple-reveals-the-most-popular-podcasts-of-2024-with-nine-different-top-10-lists/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/11/Most-popular-podcasts-of-2024-–-Apple.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2024-11-19T13:18:00Z",
        "content": "Apple has put together no fewer than nine different Top 10 lists, revealing the most popular podcasts of 2024.\r\nThe lists kick off with the top shows of the year, but go on to list the most popular i… [+4211 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Barron's"
        },
        "author": "Barron's",
        "title": "Lowe’s Stock Falls After Earnings. It's 'Too Early to Call an Inflection Point.' - Barron's",
        "description": null,
        "url": "https://www.barrons.com/articles/lowes-stock-price-earnings-home-depot-08aecee1",
        "urlToImage": null,
        "publishedAt": "2024-11-19T13:16:00Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "IFLScience"
        },
        "author": "Maddy Chapman",
        "title": "“Extraordinary” Mouse Created Using Gene That’s Older Than Animal Life Itself - IFLScience",
        "description": "An ancient gene meets modern science in this unexpected advance.",
        "url": "https://www.iflscience.com/extraordinary-mouse-created-using-gene-thats-older-than-animal-life-itself-76844",
        "urlToImage": "https://assets.iflscience.com/assets/articleNo/76844/aImg/80315/mouse-created-using-stem-cells-derived-from-an-ancient-gene-meta.jpg",
        "publishedAt": "2024-11-19T13:15:55Z",
        "content": "In an incredible breakthrough, scientists have created a mouse using ancient genetic tools older than animal life. By taking a gene from single-celled lifeforms and introducing it into mouse cells, r… [+2904 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "Nauman khan",
        "title": "Walmart Q3 Revenue Hits $169 Billion, EPS Surges by 850% - Yahoo Finance",
        "description": "Inflation Drives Walmart's Success: US Same-Store Sales Jump 5.3% in Q3",
        "url": "https://finance.yahoo.com/news/walmart-q3-revenue-hits-169-123453304.html",
        "urlToImage": "https://media.zenfs.com/en/us.finance.gurufocus/be81ae058eedab2cdd15a43d24285c26",
        "publishedAt": "2024-11-19T12:34:53Z",
        "content": "Walmart (WMT, Financial) reported strong third-quarter earnings results, with revenue and profit smashing analysts' estimates. Net sales increased to $169 billion, 5.4% up from the previous year, whi… [+982 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CBS Sports"
        },
        "author": "",
        "title": "NFL Week 12 Power Rankings: Bills' Super Bowl window remains wide open; Lions new No. 1 after Chiefs loss - CBS Sports",
        "description": "Pete Prisco shares his Power Rankings heading into Week 12 of the 2024 season",
        "url": "https://www.cbssports.com/nfl/news/nfl-week-12-power-rankings-bills-super-bowl-window-remains-wide-open-lions-new-no-1-after-chiefs-loss/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/11/19/ddd94111-891a-4fca-a27b-8f5230c2ba85/thumbnail/1200x675/a2f0d29b28e86426ddb119ec0d4c8409/power-rankings-bills-week-12.jpg",
        "publishedAt": "2024-11-19T12:20:00Z",
        "content": "I guess the window was still open after all. Probably wide open in fact.\r\nRemember all that preseason talk of how the Buffalo Bills' window for winning had closed, how it was over for them, how the r… [+11277 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "POLITICO.eu"
        },
        "author": "Nette Nöstlinger",
        "title": "Germany on mysterious broken cables in Baltic Sea: ‘It is sabotage’ - POLITICO Europe",
        "description": "Damaged undersea infrastructure has sparked political alarm in Berlin and Helsinki.",
        "url": "https://www.politico.eu/article/baltic-sea-cable-damage-germany-sabotage/",
        "urlToImage": "https://www.politico.eu/cdn-cgi/image/width=1200,height=630,fit=crop,quality=80,onerror=redirect/wp-content/uploads/2024/11/19/GettyImages-2184909226-scaled.jpg",
        "publishedAt": "2024-11-19T12:02:00Z",
        "content": "The 1,173 kilometer-long cable follows a similar route to the Russia-to-Germany Nord Stream gas pipelines, which exploded in September 2022 in an apparent act of sabotage.\r\nAlso speaking on the sidel… [+1004 chars]"
      },
      {
        "source": {
          "id": "associated-press",
          "name": "Associated Press"
        },
        "author": "HALLIE GOLDEN, CHRISTOPHER WEBER",
        "title": "‘Bomb cyclone’ threatens Northern California and Pacific Northwest - The Associated Press",
        "description": "Northern California and the Pacific Northwest are bracing for what is expected to be a powerful storm. Heavy rain and winds are set to pummel the region and potentially cause power outages and flash floods. The Weather Prediction Center issued excessive rainf…",
        "url": "https://apnews.com/article/california-oregon-washington-atmospheric-river-bomb-cyclone-d5006d946cda1fc1f4ecb8fe5b94ba59",
        "urlToImage": "https://dims.apnews.com/dims4/default/5b0ba64/2147483647/strip/true/crop/4500x2531+0+234/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F72%2F28%2Fcbf4cd2130674eab088ef795e9ee%2Ff48f956ec04f4b999534656e19a3c1b3",
        "publishedAt": "2024-11-19T11:51:00Z",
        "content": "SEATTLE (AP) Northern California and the Pacific Northwest are bracing for what is expected to be a powerful storm, with heavy rain and winds set to pummel the region and potentially cause power outa… [+4140 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Hollywood Reporter"
        },
        "author": "Patrick Brzeski",
        "title": "Camerimage: ‘Rust’ Premiere Ticket Demand Crashes Festival Ticketing System - Hollywood Reporter",
        "description": "The Alec Baldwin-starring indie Western will finally be unveiled before the public on Wednesday, three years after it was struck by tragedy.",
        "url": "http://www.hollywoodreporter.com/movies/movie-news/camerimage-rust-premiere-ticket-demand-festival-ticketing-system-1236065643/",
        "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2024/10/Rust-2.jpg?w=1296&h=730&crop=1",
        "publishedAt": "2024-11-19T11:37:30Z",
        "content": "Three years after the tragic on-set death of cinematographer Halyna Hutchins, Alec Baldwin’s indie Western Rust will finally be revealed to the public on Wednesday. The movie has been selected to mak… [+2895 chars]"
      },
      {
        "source": {
          "id": "buzzfeed",
          "name": "Buzzfeed"
        },
        "author": "Fabiana Buontempo",
        "title": "This Woman Spent A Year Trying To Figure Out The Cause Of Her Chronic Yeast Infections, And It Turns Out The Culprit Was Something We All Use Everyday - BuzzFeed",
        "description": "\"I no longer feel like clawing my way inside my own body.\"",
        "url": "https://www.buzzfeed.com/fabianabuontempo/household-item-caused-this-woman-chronic-yeast-infections",
        "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2024-11/13/19/enhanced/c3f669d1efff/original-1227-1731525081-9.jpg?crop=3001:1575;0,0%26downsize=1250:*",
        "publishedAt": "2024-11-19T11:31:03Z",
        "content": "\"There are so many substances and synthetics that can disrupt the natural ecosystem and pH balance of the vagina laundry detergent, poor diet or lots of sugar, chronic illness, the fabric of your und… [+401 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Sports Illustrated"
        },
        "author": "Gilberto Manzano",
        "title": "NFL Week 11 Winners and Losers: Chargers May Finally Be a Clutch Team - Sports Illustrated",
        "description": "Los Angeles cleared a big hurdle by recovering from blowing a 21-point lead against Cincinnati on Sunday night. Plus, Mike Tomlin boosts his Coach of the Year credentials and the Commanders fall back to earth.",
        "url": "https://www.si.com/nfl/nfl-week-11-winners-losers-los-angeles-chargers-clutch",
        "urlToImage": "https://images2.minutemediacdn.com/image/upload/c_crop,w_3531,h_1986,x_1922,y_595/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/si/01jd1wy91kvb97eybdbe.jpg",
        "publishedAt": "2024-11-19T10:14:12Z",
        "content": "It was a grand week for defenses as the Los Angeles Chargers and Pittsburgh Steelers defeated the Cincinnati Bengals and Baltimore Ravens, respectively, during two high-profile matchups in Week 11. \r… [+14628 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Rolling Stone"
        },
        "author": "Charisma Madarang",
        "title": "Matt Gaetz Paid Women to Have Sex and Watch ‘Pretty Woman’ on Broadway, Says Lawyer - Rolling Stone",
        "description": "New claims surfaced on Monday that Donald Trump's Attorney General nominee, Matt Gaetz, paid two women in 2019 to travel to New York to have sex.",
        "url": "http://www.rollingstone.com/politics/politics-news/matt-gaetz-paid-women-sex-pretty-women-broadway-1235171420/",
        "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2024/11/matt-gaetz-sex-workers-pretty-woman.jpg?w=1600&h=900&crop=1",
        "publishedAt": "2024-11-19T08:08:22Z",
        "content": "As pressure mounts for the House Ethics Committee to release their report into allegations former Rep. Matt Gaetz had a sexual relationship with a 17-year-old girl, new claims surfaced on Monday that… [+2733 chars]"
      }
    ]
    constructor(){
        super();
        console.log("Constructor from News component");
        this.state={
            articles:this.articles,
            loading:false,
            page:1
        }
    }
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=Business&apiKey=212b67a8a2e046a2ba7de032bb41bd39&page=1&pagesize=9`
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults})
    }
    handleNextClick=async()=>{
      if(this.state.page+1>Math.ceil(this.state.totalResults/10)){
        alert("End of Results");
      }
      else{
      let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=212b67a8a2e046a2ba7de032bb41bd39&pagesize=9&page=${this.state.page+1}`
      let data=await fetch(url);
      let parsedData=await data.json();
      this.setState({
        page: this.state.page+1,
        articles: parsedData.articles
      })
    }}
    handlePrevClick=async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=212b67a8a2e046a2ba7de032bb41bd39&pagesize=9&page=${this.state.page-1}`
      let data=await fetch(url);
      let parsedData=await data.json();
      this.setState({
        page: this.state.page-1,
        articles: parsedData.articles
      })
    }
    render(){
        return(
            <div className="container my-3">
                <h2 className="text-center">Top headlines</h2>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return(
                    <div className="col-md-4"key={element.url}>
                    <NewsItem title={element.title?.slice(0,45)||'No Title'} description={element.description?.slice(0,90)||"No Description"} newsUrl={element.url} imageUrl={element.urlToImage}/>
                    </div>
                    )
                })}
                </div>
                <div className="container d-flex justify-content-between">
                      <button type="button" disabled={this.state.page<=1} className="btn btn-dark"onClick={this.handlePrevClick}>Previous</button>
                      <button type="button" className="btn btn-dark">current</button>
                      <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
                </div>
            </div>

        )}}

export default News;