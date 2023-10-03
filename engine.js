//////////////////////////////////////////////////////////////////////////////////////////
// script name = engine.js
// developed by  Ch Arslan
// For creating everyting inside the app
// It Hackers 
// https://www.youtube.com/@pro_pakistani
// Crackit!
/////////////////////////////////////////////////////////////////////////////////////////
//Creating ads container 1
CAI = document.createElement("div");
CAI.setAttribute('id', 'centerAdsCont');
document.body.appendChild(CAI);

//Creating style for center 
document.getElementById('centerAdsCont').innerHTML = "<style>#centerAdsCont {       display: none;        width: 100%;        height: 100vh;        position: fixed;        top: 0px;        right: 0px;        background-color: rgb(0, 0, 0, 0.7)    }        #centerAds {        width: auto;        height: auto;        background-color: white;        border: 3px solid white;        position: absolute;        top: 50%;        left: 50%;        transform: translate(-50%, -50%);    }        #CloseCenterAds {        position: relative;        width: auto%;        height: auto;        background-color: rgba(151, 155, 151, 0)    }        #closeCAds {        position absolute;        top: 0px;        right: 1px;        font-family: sans-serif;        border: 1px solid black;        background-color: black;        font-size: x-large;        color: white;        cursor: pointer;    width: 100%;   }        #closeCAds:hover {        color: red;    }</style>";

//Center ads container 2
CAII = document.createElement("div");
CAII.setAttribute('id', 'centerAds');
CAII.setAttribute('class', 'centerAdsC');
document.getElementById("centerAdsCont").appendChild(CAII);

//Center ads container 3
CAIII = document.createElement("div");
CAIII.setAttribute('id', 'CloseCenterAds');
document.getElementById("centerAds").appendChild(CAIII);

//Creating close button
CAB = document.createElement("input");
CAB.setAttribute('type', 'button');
CAB.setAttribute('id', 'closeCAds');
CAB.setAttribute('onclick', 'closeCAds()');
CAB.setAttribute('value', 'close');
document.getElementById("CloseCenterAds").appendChild(CAB);

//Center Ads script
setTimeout(function() {
    document.getElementById('centerAdsCont').style.display = "block";
}, 5000);

function closeCAds() {
    document.getElementById('centerAdsCont').style.display = "none";

}
////////////////////////////////////////////////////////
//Ads container
kaiad = document.createElement("div");
kaiad.setAttribute('id', 'kaiI');
document.getElementById("centerAds").appendChild(kaiad);

//Include Script
Cmain = document.createElement("script");
Cmain.setAttribute('src', 'https://static.kaiads.com/ads-sdk/ads-sdk.v5.min.js');
document.getElementById("centerAds").appendChild(Cmain);

//Ads Script
getKaiAd({
    publisher: '9c6cc6a7-68c0-4f9d-a31c-36ca94bae25a',
    app: 'ithackers',
    slot: 'ithackers_slot',
    h: 264,
    w: 240,
    container: document.getElementById('kaiI'),
    onerror: err => console.error('Custom catch:', err),
    onready: ad => {
        ad.call('display', {
            tabindex: 0,
            navClass: 'items',
            display: 'block',
        })
    }
})


//Extra styling for unlocking widgets
document.getElementById('header').style.dispaly = "block";
document.getElementById('main').style.display = "block";

//Unblocking if user blocks the ads by css
document.getElementById('centerAdsCont').style.display = "block";
document.getElementById('centerAds').style.display = "block";
document.getElementById('kaiI').style.display = "block";


/*
//checking if location is in pakistan
    if (window.location.href.indexOf("pakistan") !== -1 || window.location.href.indexOf("pk") !== -1) {
        alert("Pakistan");
    } else {
        alert("Not Pakistan");
    }
*/



