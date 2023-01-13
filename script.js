var classesAPI = `https://www.dnd5eapi.co/api/classes/`;
fetch(classesAPI)
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
var classes2API = `https://api.open5e.com/classes/`;
fetch(classes2API)
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data3) {
        console.log(data3);
    });

var monsterAPI = `https://api.open5e.com/monsters/`;
fetch(monsterAPI)
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data2) {
        console.log(data2);
    });

// document.getElementById(".owlbearpre").classList.add("visible");
