let sites = [
    'www.youtube.com',
    'www.netflix.com',
    'www.open.spotify.com',
    'www.animeflv.net',
    'www.desicinemas.tv',
    'www.disneyplus.com',
    'www.hotstar.com/',
    'www.facebook.com',
    'www.instagram.com',
    'www.twitter.com',
    'www.tiktok.com',
    'www.linkedin.com',
    'www.reddit.com/',
    'www.onlinekhabar.com',
    'www.nagariknews.nagariknetwork.com',
    'www.setopati.com',
    'www.kathmandupost.com',
    'www.nayapatrikadaily.com',
    'www.ratopati.com',
    'www.ekantipur.com',
    'www.espn.com',
    'www.gamingtoday.com', 
    'www.cricbuzz.com',
    'www.espncricinfo.com',
    'www.sports.ndtv.com',
    'www.skysports.com',
    'www.talksports.com',
];


const getSitesFromBackend = async () => {
    try{
        const response = await fetch('http://127.0.0.1:8000/blocksite/sites/',{
        method : 'GET',
        })
        data = await response.json();
        
    }catch(error){
        console.log(error);
    }
}

const generateSTYLES = () => {
    return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
    body {
      background: #33cc99;
      color: #fff;
      font-family: "Open Sans", sans-serif;
      max-height: 700px;
      overflow: hidden;
    }
    .c {
      text-align: center;
      display: block;
      position: relative;
      width: 80%;
      margin: 100px auto;
    }
    ._404 {
      font-size: 80px;
      position: relative;
      display: inline-block;
      z-index: 2;
      height: 250px;
      letter-spacing: 15px;
    }
    ._1 {
      text-align: center;
      display: block;
      position: relative;
      letter-spacing: 12px;
      font-size: 4em;
      line-height: 80%;
    }
    ._2 {
      text-align: center;
      display: block;
      position: relative;
      font-size: 20px;
    }
    .text {
      font-size: 70px;
      text-align: center;
      position: relative;
      display: inline-block;
      margin: 19px 0px 0px 0px;
      /* top: 256.301px; */
      z-index: 3;
      width: 100%;
      line-height: 1.2em;
      display: inline-block;
    }
    
   
    .right {
      float: right;
      width: 60%;
    }
    
    hr {
      padding: 0;
      border: none;
      border-top: 5px solid #fff;
      color: #fff;
      text-align: center;
      margin: 0px auto;
      width: 420px;
      height: 10px;
      z-index: -10;
    }
    
    hr:after {
      display: inline-block;
      position: relative;
      top: -0.75em;
      font-size: 2em;
      padding: 0 0.2em;
      background: #33cc99;
    }
    
    .cloud {
      width: 350px;
      height: 120px;
    
      background: #fff;
      background: linear-gradient(top, #fff 100%);
      background: -webkit-linear-gradient(top, #fff 100%);
      background: -moz-linear-gradient(top, #fff 100%);
      background: -ms-linear-gradient(top, #fff 100%);
      background: -o-linear-gradient(top, #fff 100%);
    
      border-radius: 100px;
      -webkit-border-radius: 100px;
      -moz-border-radius: 100px;
    
      position: absolute;
      margin: 120px auto 20px;
      z-index: -1;
      transition: ease 1s;
    }
    
    .cloud:after,
    .cloud:before {
      content: "";
      position: absolute;
      background: #fff;
      z-index: -1;
    }
    
    .cloud:after {
      width: 100px;
      height: 100px;
      top: -50px;
      left: 50px;
    
      border-radius: 100px;
      -webkit-border-radius: 100px;
      -moz-border-radius: 100px;
    }
    
    .cloud:before {
      width: 180px;
      height: 180px;
      top: -90px;
      right: 50px;
    
      border-radius: 200px;
      -webkit-border-radius: 200px;
      -moz-border-radius: 200px;
    }
    
    .x1 {
      top: -50px;
      left: 100px;
      -webkit-transform: scale(0.3);
      -moz-transform: scale(0.3);
      transform: scale(0.3);
      opacity: 0.9;
      -webkit-animation: moveclouds 15s linear infinite;
      -moz-animation: moveclouds 15s linear infinite;
      -o-animation: moveclouds 15s linear infinite;
    }
    
    .x1_5 {
      top: -80px;
      left: 250px;
      -webkit-transform: scale(0.3);
      -moz-transform: scale(0.3);
      transform: scale(0.3);
      -webkit-animation: moveclouds 17s linear infinite;
      -moz-animation: moveclouds 17s linear infinite;
      -o-animation: moveclouds 17s linear infinite;
    }
    
    .x2 {
      left: 250px;
      top: 30px;
      -webkit-transform: scale(0.6);
      -moz-transform: scale(0.6);
      transform: scale(0.6);
      opacity: 0.6;
      -webkit-animation: moveclouds 25s linear infinite;
      -moz-animation: moveclouds 25s linear infinite;
      -o-animation: moveclouds 25s linear infinite;
    }
    
    .x3 {
      left: 250px;
      bottom: -70px;
    
      -webkit-transform: scale(0.6);
      -moz-transform: scale(0.6);
      transform: scale(0.6);
      opacity: 0.8;
    
      -webkit-animation: moveclouds 25s linear infinite;
      -moz-animation: moveclouds 25s linear infinite;
      -o-animation: moveclouds 25s linear infinite;
    }
    
    .x4 {
      left: 470px;
      botttom: 20px;
    
      -webkit-transform: scale(0.75);
      -moz-transform: scale(0.75);
      transform: scale(0.75);
      opacity: 0.75;
    
      -webkit-animation: moveclouds 18s linear infinite;
      -moz-animation: moveclouds 18s linear infinite;
      -o-animation: moveclouds 18s linear infinite;
    }
    
    .x5 {
      left: 200px;
      top: 300px;
    
      -webkit-transform: scale(0.5);
      -moz-transform: scale(0.5);
      transform: scale(0.5);
      opacity: 0.8;
    
      -webkit-animation: moveclouds 20s linear infinite;
      -moz-animation: moveclouds 20s linear infinite;
      -o-animation: moveclouds 20s linear infinite;
    }
    
    @-webkit-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
    @-moz-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
    @-o-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
     </style>`;
  };
  
  const generateHTML = () => {
    return `
     
     <div id="clouds">
        <div class="cloud x1"></div>
        <div class="cloud x1_5"></div>
        <div class="cloud x2"></div>
        <div class="cloud x3"></div>
        <div class="cloud x4"></div>
        <div class="cloud x5"></div>
    </div>
    <div class='c'>
        <div class='_404'>Already Giving Up?</div>
        <div class='_1'>GET BACK TO WORK</div>
    </div>
     `;
  };

//   for(let site in sites){
//     console.log(site);
//     if(window.location.hostname === site){
//         document.head.innerHTML = generateSTYLES();
//         document.body.innerHTML = generateHTML();
//     }
//   }

//   if(window.location.hostname === "www.youtube.com"){
//     document.head.innerHTML = generateSTYLES();
//     document.body.innerHTML = generateHTML();
// }

    switch (window.location.hostname) {
      case 'www.youtube.com':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to YouTube
        break;
      case 'www.netflix.com':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to Netflix
        break;
      case 'www.open.spotify.com':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to Spotify
        break;
      case 'www.animeflv.net':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to Animeflv
        break;
      case 'www.desicinemas.tv':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to DesiCinemas
        break;
      case 'www.disneyplus.com':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to Disney+
        break;
      case 'www.hotstar.com':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to Hotstar
        break;
      case 'www.facebook.com':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to Facebook
        break;
      case 'www.instagram.com':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to Instagram
        break;
      case 'www.twitter.com':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to Twitter
        break;
      case 'www.tiktok.com':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to TikTok
        break;
      case 'www.linkedin.com':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to LinkedIn
        break;
      case 'www.reddit.com/':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to Reddit
        break;
      case 'www.onlinekhabar.com':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to OnlineKhabar
        break;
      case 'www.nagariknews.nagariknetwork.com':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to Nagarik News
        break;
      case 'www.setopati.com':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to Setopati
        break;
      case 'www.kathmandupost.com':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to The Kathmandu Post
        break;
      case 'www.nayapatrikadaily.com':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to Nayapatrika Daily
        break;
      case 'www.ratopati.com':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to Ratopati
        break;
      case 'www.ekantipur.com':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to Ekantipur
        break;
      case 'www.espn.com':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to ESPN
        break;
      case 'www.gamingtoday.com':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to Gaming Today
        break;
      case 'www.cricbuzz.com':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to Cricbuzz
        break;
      case 'www.espncricinfo.com':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to ESPN Cricinfo
        break;
      case 'www.sports.ndtv.com':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to NDTV Sports
        break;
      case 'www.skysports.com':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to Sky Sports
        break;
      case 'www.talksports.com':
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();
        // code to navigate to Talk Sports
        break;
      default:
        // code to handle unknown or unsupported URL
        break;
    }