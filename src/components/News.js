import React, { Component } from "react";
import Newsitems from "./Newsitems.js";

export default class News extends Component {
  /*articles =  [
    {
        "source": {
            "id": null,
            "name": "Barca Blaugranes"
        },
        "author": "Renato Gonçalves",
        "title": "Barcelona vs Celta Vigo, La Liga: Final Score 1-0, Barça score early, survive second half, win nail-biter at … - Barca Blaugranes",
        "description": "Somehow, someway, Barça have taken all three points",
        "url": "https://www.barcablaugranes.com/2022/10/9/23395137/barcelona-celta-vigo-la-liga-final-score-match-report-recap-reactions",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/CndRyi0Ds5G7EzeelpK0bxtSbwA=/0x0:4000x2094/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24095425/1432023847.jpg",
        "publishedAt": "2022-10-09T21:01:37Z",
        "content": "Barcelona have won a seventh consecutive La Liga game and will finish the weekend top of the table for the second straight week thanks to a hard-fought 1-0 win over Celta Vigo at the Spotify Camp Nou… [+4194 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Manchester Evening News"
        },
        "author": "Samuel Luckhurst",
        "title": "Cristiano Ronaldo responds perfectly to Man United teammate and Everton fans - Manchester Evening News",
        "description": "Cristiano Ronaldo scored his 700th club goal against Everton as Manchester United secured a 2-1 win in the Premier League.",
        "url": "https://www.manchestereveningnews.co.uk/sport/football/man-united-goals-everton-ronaldo-25218357",
        "urlToImage": "https://i2-prod.manchestereveningnews.co.uk/incoming/article25218958.ece/ALTERNATES/s1200/0_GettyImages-1432010884.jpg",
        "publishedAt": "2022-10-09T20:13:10Z",
        "content": "Back at the scene where Merseyside police had investigated a phone-smashing incident, there was additional evidence Cristiano Ronaldo had been at Goodison Park.\r\nDowngraded to a substitute again, Ron… [+5463 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Manchester Evening News"
        },
        "author": "Samuel Luckhurst",
        "title": "Manchester United player ratings vs Everton as Ronaldo and Antony good - Manchester Evening News",
        "description": "Man Utd beat Everton 2-1 at Goodison Park and here are the player ratings from the match.",
        "url": "https://www.manchestereveningnews.co.uk/sport/football/man-united-player-ratings-everton-25218341",
        "urlToImage": "https://i2-prod.manchestereveningnews.co.uk/incoming/article25218980.ece/ALTERNATES/s1200/0_JS280029537.jpg",
        "publishedAt": "2022-10-09T19:53:24Z",
        "content": "David de Gea\r\nHad no chance with Alex Iwobi's sweet strike. Came out of his area to clear and handled the ball carefully. Important save late on from James Garner. 7\r\nDiogo Dalot\r\nHis sloppiness inad… [+1930 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Arsenal vs Liverpool reaction: 'Liverpool are ALL OVER THE PLACE!' - Nicol | ESPN FC - ESPN UK",
        "description": "Steve Nicol gives his assessment of Arsenal's 3-2 victory over Liverpool as the Gunners return to the top of the table, while Jurgen Klopp's side stay 6 poin...",
        "url": "https://www.youtube.com/watch?v=cdKkWhudCgk",
        "urlToImage": "https://i.ytimg.com/vi/cdKkWhudCgk/maxresdefault.jpg",
        "publishedAt": "2022-10-09T18:41:44Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Stoinis and Buttler weigh in on Wade, Wood collision | Alinta News Wrap - cricket.com.au",
        "description": "Alinta News Wrap: After a controversial collision between Matthew Wade and Mark Wood late in Australia's chase against England in the opening T20 in Perth, M...",
        "url": "https://www.youtube.com/watch?v=4VhnMFuPdZE",
        "urlToImage": "https://i.ytimg.com/vi/4VhnMFuPdZE/maxresdefault.jpg",
        "publishedAt": "2022-10-09T17:30:47Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "England clinch tight win despite Warner, Ellis heroics | Australia v England 2022 - cricket.com.au",
        "description": "Download our app: https://app.cricket.com.au/Australia fell just short of England’s mammoth 208 in Perth despite brilliant efforts from both Nathan Ellis (3-...",
        "url": "https://www.youtube.com/watch?v=YKlXNHEHTjo",
        "urlToImage": "https://i.ytimg.com/vi/YKlXNHEHTjo/maxresdefault.jpg",
        "publishedAt": "2022-10-09T16:00:40Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "News18"
        },
        "author": "Sports Desk",
        "title": "ISL 2022-23, Hyderabad FC vs Mumbai City FC Highlights: HFC 3-3 MCFC - News18",
        "description": "Indian Super League 2022-23, Hyderabad FC vs Mumbai City FC Highlights: HFC and MCFC played out 3-3 draw in the ISL at the Shree Shiv Chhatrapati Sports Complex in Pune",
        "url": "https://www.news18.com/news/football/live-score-hyderabad-fc-vs-mumbai-city-fc-live-streaming-isl-2022-23-hfc-vs-mcfc-match-live-coverage-on-live-tv-match-online-livenews-6130819.html",
        "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/10/sports-33-166531742416x9.png",
        "publishedAt": "2022-10-09T15:56:12Z",
        "content": "Chhatrapati Sports Complex in Pune.Hyderabad FC defeated Kerala Blasters on penalties in last seasons ISL finals to win their first ISL. Expectations will be sky high as Hyderabad FC attempt to defen… [+3241 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Cricbuzz"
        },
        "author": null,
        "title": "Ex-Odisha cricketer to represent Association of Indian Universities at BCCI AGM, Lalitendu Bidyadhar Mohapatra | Cricbuzz.com - Cricbuzz - Cricbuzz",
        "description": "Lalitendu Bidyadhar Mohapatra will be representing the Association of Indian Universities at the AGM of the BCCI",
        "url": "https://www.cricbuzz.com/cricket-news/124068/ex-odisha-cricketer-to-represent-association-of-indian-universities-at-bcci-agm-lalitendu-bidyadhar-mohapatra-cricbuzzcom",
        "urlToImage": "//m.cricbuzz.com/a/img/v1/600x400/i1/c244229/mohapatra-is-largely-considered-responsible-for-the-odisha-teams-rise-in-the-ranji-trophy-at-the-turn-of-the-century.jpg",
        "publishedAt": "2022-10-09T15:49:53Z",
        "content": "Addendum to the Draft Electoral Roll list has come and it has a surprise. Lalitendu Bidyadhar Mohapatra, a former Odisha cricketer, will be representing the Association of Indian Universities at the … [+2162 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Sports Desk",
        "title": "Iyer joins Kohli in unique ODI list after sensational century vs South Africa - Hindustan Times",
        "description": "Shreyas Iyer smashed 15 boundaries in his unbeaten knock of 113 runs in 111 balls as India won by 7 wickets in Ranchi. | Cricket",
        "url": "https://www.hindustantimes.com/cricket/shreyas-iyer-joins-virat-kohli-in-unique-odi-list-after-sensational-century-against-south-africa-101665328947969.html",
        "urlToImage": "https://images.hindustantimes.com/img/2022/10/09/1600x900/New_Project_-_2022-10-09T205346143_1665329125898_1665329126058_1665329126058.jpg",
        "publishedAt": "2022-10-09T15:40:54Z",
        "content": "India batter Shreyas Iyer continued his ravishing form in ODI format as he scored a sensational century against South Africa on Sunday at the JSCA International Stadium Complex in Ranchi in just 103 … [+1572 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": "NDTV Sports Desk",
        "title": "India vs South Africa, 2nd ODI Highlights: Shreyas Iyer Century, Ishan Kishan 93 Help India Level Series vs South Africa - NDTV Sports",
        "description": "India vs South Africa, Highlights: Shreyas Iyer's 113 not out and Ishan Kishan's 93 helped India chase down 279 runs with 7 wickets in hand in Ranchi on Sunday.",
        "url": "https://sports.ndtv.com/india-vs-south-africa-2022-23/ind-vs-sa-live-cricket-score-2nd-odi-match-india-vs-south-africa-live-score-updates-3415108",
        "urlToImage": "https://c.ndtvimg.com/2022-10/eim43jio_shreyas-iyer-bcci_625x300_09_October_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
        "publishedAt": "2022-10-09T15:40:10Z",
        "content": "India vs South Africa, 2nd ODI Highlights: Shreyas Iyer's second ODI century and Ishan Kishan's flamboyant 93 saw India making mockery of a 279-run target set by South Africa in the second ODI at JSC… [+1080 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "International Cricket Council"
        },
        "author": "ICC",
        "title": "All the highest run-scorers in Men's T20 World Cup history - ICC Cricket",
        "description": "Headlined by batting greats, every edition of the T20 World Cup has been graced by batting brilliance at the grandest of stages.",
        "url": "https://www.icc-cricket.com/news/2844600",
        "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2022/10/09/414ba0e4-cfa8-4b83-954e-8886c32b55fb/Most-runs-T20-WC-all-time.jpg",
        "publishedAt": "2022-10-09T14:48:45Z",
        "content": "Headlined by batting greats, every edition of the T20 World Cup has been graced by batting brilliance at the grandest of stages.Since its inception, the marquee event has witnessed a new star rise in… [+5874 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Sports Desk",
        "title": "Watch - Siraj argues with umpire after conceding four overthrows during 2nd ODI - Hindustan Times",
        "description": "Spearheading the Indian attack, Mohammed Siraj finished his ten overs quota with three wickets, while conceding just 38 runs. | Cricket",
        "url": "https://www.hindustantimes.com/cricket/mohammed-siraj-argues-with-umpire-after-conceding-four-overthrows-during-ind-vs-sa-2nd-odi-video-101665317359589.html",
        "urlToImage": "https://images.hindustantimes.com/img/2022/10/09/1600x900/argument_1665322606258_1665322616362_1665322616362.jpg",
        "publishedAt": "2022-10-09T13:43:25Z",
        "content": "Mohammed Siraj had an exceptional day in the field in the second ODI between India and South Africa in Ranchi. Spearheading the Indian attack, the pacer finished his ten overs quota with three wicket… [+1703 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "India Today"
        },
        "author": "India Today Web Desk",
        "title": "Former Real Madrid captain Iker Casillas comes out as gay: I hope you respect me - India Today",
        "description": "Former Real Madrid captain Iker Casillas took to social media to announce that he is gay. With the announcement, the 41-year-old has become one of the most high-profile players to confirm his homosexuality.",
        "url": "https://www.indiatoday.in/sports/football/story/former-real-madrid-captain-iker-casillas-comes-out-as-gay-i-hope-you-respect-me-2283113-2022-10-09",
        "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/rtx6ukca-sixteen_nine.jpg?VersionId=yTA3RGPp_srVPMY6KRLbKqsvudvfkwaK",
        "publishedAt": "2022-10-09T13:28:20Z",
        "content": "By India Today Web Desk: Former Real Madrid captain Iker Casillas took to social media to announce that he is gay. With the announcement, the 41-year-old has become one of the most high-profile playe… [+1775 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": "NDTV Sports Desk",
        "title": "\"Siraj Seriously Pushing Shami\": Sanjay Manjrekar On Jasprit Bumrah's Spot In T20 World Cup 2022 - NDTV Sports",
        "description": "Mohammed Siraj put in a fine display of pace bowling in the 2nd ODI between India and South Africa. Courtesy of Siraj's performance,  Sanjay Manjrekar feels the pacer is 'really pushing' Mohammed Shami for a spot in India's T20 World Cup squad as Jasprit Bumr…",
        "url": "https://sports.ndtv.com/india-vs-south-africa-2022-23/siraj-seriously-pushing-shami-sanjay-manjrekar-on-jasprit-bumrahs-spot-in-t20-world-cup-2022-3416005",
        "urlToImage": "https://c.ndtvimg.com/2022-10/790v1kuo_mohammed-siraj_625x300_09_October_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
        "publishedAt": "2022-10-09T12:43:17Z",
        "content": "The suspense of Jasprit Bumrah's replacement in the T20 World Cup 2022 still remains. Mohammed Shami, Deepak Chahar and Mohammed Siraj all remain in the fray but the Board of Control for Cricket in I… [+2173 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "Rishabh Pant Deserves A Good Advocate, Tweets Abhishek Manu Singhvi - NDTV",
        "description": "Congress leader and senior advocate Abhishek Manu Singhvi wrote that Rishabh deserves a good advocate and a restraining order in his favour.",
        "url": "https://www.ndtv.com/offbeat/rishabh-pant-deserves-a-good-advocate-tweets-abhishek-manu-singhvi-3415998",
        "urlToImage": "https://c.ndtvimg.com/2022-07/q3rcnlug_rishabh-pant-afp_625x300_17_July_22.jpg",
        "publishedAt": "2022-10-09T12:42:00Z",
        "content": "Rishabh Pant is in Australia with Team India to take part in the T20 World Cup 2022.\r\nRohit Sharma-led Team India is in Australia for the upcoming ICC Men's T20 World. The 2007 champions will look to… [+1775 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Tennis World USA"
        },
        "author": "Jovica Ilic",
        "title": "ATP Astana: Novak Djokovic tops Stefanos Tsitsipas for milestone title - Tennis World USA",
        "description": "Tennis - Novak Djokovic is the fifth player with 90 ATP titles",
        "url": "https://www.tennisworldusa.org/tennis/news/On_the_ATP_results_with/122033/atp-astana-novak-djokovic-tops-stefanos-tsitsipas-for-milestone-title/",
        "urlToImage": "https://www.tennisworldusa.org/imgb/126147/atp-astana-novak-djokovic-tops-stefanos-tsitsipas-for-milestone-title.webp",
        "publishedAt": "2022-10-09T12:39:36Z",
        "content": "The 21-time Major champion Novak Djokovic will be a player to beat for the rest of the season! As often, Novak has shown his indoor skills in the previous two weeks, winning Tel Aviv and Astana and c… [+2229 chars]"
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": null,
        "title": "Novak Djokovic Defeats Stefanos Tsitsipas, Triumphs In Astana - ATP Tour",
        "description": null,
        "url": "https://news.google.com/__i/rss/rd/articles/CBMiRGh0dHBzOi8vd3d3LmF0cHRvdXIuY29tL2VuL25ld3MvZGpva292aWMtdHNpdHNpcGFzLWFzdGFuYS0yMDIyLWZpbmFs0gEA?oc=5",
        "urlToImage": null,
        "publishedAt": "2022-10-09T12:14:16Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Cricbuzz"
        },
        "author": null,
        "title": "Northern Cape vs South Africa U19, Final, CSA Provincial T20 Cup 2022 - Cricbuzz",
        "description": "Get Live Cricket Score, Scorecard, Schedules of International and Domestic cricket matches along with Latest News, Videos and ICC Cricket Rankings of Players on Cricbuzz.",
        "url": "https://www.cricbuzz.com/live-cricket-scores/53833/ncape-vs-rsau19-final-csa-provincial-t20-cup-2022",
        "urlToImage": null,
        "publishedAt": "2022-10-09T11:52:31Z",
        "content": "Rensburg to G Van Heerden, 1 run\r\nRensburg to G Van Heerden, FOUR\r\nRensburg to G Van Heerden, wide\r\nBenjamin Van Rensburg [2.0-0-2-1] is back into the attack\r\n Ntuli to Dewan Marais, 2 runs\r\nNtuli to… [+479 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Sports Desk",
        "title": "Team India stars enjoy AUS vs ENG clash in Perth amid T20 World Cup preparations - Hindustan Times",
        "description": "Amid their T20 World Cup preparations, few members of the team were spotted inside the Perth Stadium on Sunday to catch the home team in action against England in a T20I game. | Cricket",
        "url": "https://www.hindustantimes.com/cricket/r-ashwin-and-3-other-team-india-stars-enjoy-australia-vs-england-clash-in-perth-amid-t20-world-cup-preparations-101665314177399.html",
        "urlToImage": "https://images.hindustantimes.com/img/2022/10/09/1600x900/New_Project_-_2022-10-09T165414319_1665314778028_1665314778162_1665314778162.jpg",
        "publishedAt": "2022-10-09T11:39:41Z",
        "content": "Team India have already reached Australia to begin their preparations for the 2022 T20 World Cup and have already had couple of practice sessions. After having beaten Australia and South Africa in th… [+1881 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": "S Sudarshanan",
        "title": "Shafali repays India's faith in her with typical youthful exuberance - ESPNcricinfo",
        "description": "At 18 years, she is already just the fifth Indian woman to 1000 T20I runs, and the youngest to do so in all of women's cricket",
        "url": "https://www.espncricinfo.com/story/women-s-asia-cup-shafali-verma-repays-india-s-faith-in-her-with-typical-youthful-exuberance-1338896",
        "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/347200/347287.6.jpg",
        "publishedAt": "2022-10-09T11:35:34Z",
        "content": "Match AnalysisAt 18 years, she is already just the fifth Indian woman to 1000 T20I runs, and the youngest to do so in all of women's cricket"
    }
]*/
  constructor() {
    console.log("constructor");
    super();
    this.state = { 
    articles: [] ,
    loading : false,
     page:1
    };
  }
  prevClick=async()=>
  {
    console.log("previous");
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2b058c7de11845f2a8c9ba319cbbcd95&page=${this.state.page-1}&pageSize=10`;
    let data= await fetch(url);
    let parseData= await data.json();

    this.setState({articles:parseData.articles,
    page:this.state.page-1
    })



  }
  nextClick=async()=>
  {
    console.log("next");
    if(this.state.page > Math.ceil(this.state.totalsResults/10))
    {

    }
    else
    {
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2b058c7de11845f2a8c9ba319cbbcd95&page=${this.state.page+1}&pageSize=10`;
        let data= await fetch(url);
        let parseData= await data.json();
    
        this.setState({articles:parseData.articles,
        page:this.state.page+1
        })
    
        
    }
   
  }
  async componentDidMount()
  {
    console.log("componentDidMount Function")
    let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2b058c7de11845f2a8c9ba319cbbcd95&page=1&pageSize=10";
    let data= await fetch(url);
    let parseData= await data.json();

   this.setState({articles:parseData.articles,
          totalsResults:parseData.totalsResults
})

  }
  render() {
    console.log("render function")
    return (
      <>
      <h1>News AllOver Headings</h1>
        <div className="container my-3">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitems
                    title={element.title ? element.title:" "}
                    description={element.description ? element.description:" "}
                    imageUrl={element.urlToImage ? element.urlToImage:"https://www.deccanherald.com/sites/dh/files/vnvnn-1152341-1665403506.jpg "}
                    newsUrl={element.url ? element.url:" "}
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-info " onClick={this.prevClick}>
              Previous
            </button>
            <button disabled={this.state.page > Math.ceil(this.state.totalsResults/10)}type="button" className="btn btn-info" onClick={this.nextClick}>
              Next
            </button>
          </div>

                  </div>
      </>
    );
  }
}
