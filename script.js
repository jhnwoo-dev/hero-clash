console.log("Hero Clash Time");
requestURL = 'https://www.dnd5eapi.co'
fetch(requestURL)
        .then(function (response) {
            console.log(response);
            return response.json();
        })


// a bunch of awesome code