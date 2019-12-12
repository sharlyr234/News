//var search = document.getElementById('search');

//search.addEventListener('keyup', (e) => {

//})

const SportsApiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=3693e5f40dc7432ab8915179b9bde6e5`;
window.fetch(SportsApiUrl).then(data => {
    data.json().then(sportsnews => {
        //console.log(sportsnews)
        let sportsData = sportsnews.articles;
        let output = '';
        for(let sports of sportsData) {
            output += `
            
            <h1 class="h1title">${sports.title}</h1>
            <p>${sports.description}</p>
            <img src = "${sports.urlToImage}" />
            <p>${sports.publishedAt}</p>
            `;
        }

        document.getElementById('left').innerHTML = output;
    }).catch(err => console.log(err))
}).catch(err => console.log(err))


//bussines
const BusinessApiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3693e5f40dc7432ab8915179b9bde6e5`;
window.fetch(BusinessApiUrl).then(data => {
    data.json().then(businessnews => {
        //console.log(sportsnews)
        let businessData = businessnews.articles;
        let output = '';
        for(let business of businessData) {
            output += `
            
            <h1 class="h1title">${business.title}</h1>
            <p>${business.description}</p>
            <img src = "${business.urlToImage}" />
            <p>${business.publishedAt}</p>
            `;
        }

        document.getElementById('middle').innerHTML = output;
    }).catch(err => console.log(err))
}).catch(err => console.log(err))

//entertainment
const EntertainmentApi = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=3693e5f40dc7432ab8915179b9bde6e5`;
window.fetch(EntertainmentApi).then(data => {
    data.json().then(entertainmentnews => {
        //console.log(sportsnews)
        let entertainmentData = entertainmentnews.articles;
        let output = '';
        for(let entertainment of entertainmentData) {
            output += `
            
            <h1 class="h1title">${entertainment.title}</h1>
            <p>${entertainment.description}</p>
            <img src = "${entertainment.urlToImage}" />
            <p>${entertainment.publishedAt}</p>
            `;
        }

        document.getElementById('right').innerHTML = output;
    }).catch(err => console.log(err))
}).catch(err => console.log(err))

//var day = new Date().getDate();
setInterval (() => {
    var time = new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML = time;
},1000);