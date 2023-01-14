//Global variables
var userCharacter;
var comparisonCharacter;
var userClass;
var comparisonClass;

//Button Variables
var btn = $("#test-button");
var submitBtn = $("#submit");

//API used to grab class info
var classesAPI = `https://www.dnd5eapi.co/api/classes/${userClass}`;
//API used to grab class weapon proficiency
var weaponAPI = `https://api.open5e.com/classes/`;

//Event listener to set userClass to the selection of user
submitBtn.on("click", function () {
    userClass = $("#default_select").val();
    console.log(userClass);
});

//Function to get class info
function getInfo(charClass) {
    fetch(classesAPI, (charClass = userClass))
        .then((res) => res.json())
        .then(function (data) {
            for (i = 0; i < data.starting_equipment.length; i++) {
                console.log(data.starting_equipment[i].equipment.name);
            }
            fetch(weaponAPI)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data2) {
                    console.log(data2.results[0].prof_weapons);
                    console.log(data2.results[0].prof_armor);
                });
        });
}

//testing API to grab starting equipment
// fetch(classesAPI)
//     .then(function (response) {
//         console.log(response);
//         return response.json();
//     })
//     .then(function (data) {
//         for (i = 0; i < data.starting_equipment.length; i++) {
//             console.log(data.starting_equipment[i].equipment.name);
//         }
//     });

//testing API to grab proficient weapons and armor
// fetch(weaponAPI)
//     .then(function (response) {
//         console.log(response);
//         return response.json();
//     })
//     .then(function (data2) {
//         console.log(data2.results[0].prof_weapons);
//         console.log(data2.results[0].prof_armor);
//     });

// Background pathways
var forestBG = "./Assets/Images/Backgrounds/landing-page-1.png";
var titleBG = "./Assets/Images/Backgrounds/title-page.png";
var ominousBG = "./Assets/Images/Backgrounds/no-rest.png";
var floodBG = "./Assets/Images/Backgrounds/room-started-flooding.png";
var campfireBG = "./Assets/Images/Backgrounds/well-lit-room.png";

// forloop to change backgrounds on fight page when hitting button

//roll for stats
function roll4d6minusLowest() {
    var roll1 = Math.floor(Math.random() * 6) + 1;
    var roll2 = Math.floor(Math.random() * 6) + 1;
    var roll3 = Math.floor(Math.random() * 6) + 1;
    var roll4 = Math.floor(Math.random() * 6) + 1;
    var rolls = [roll1, roll2, roll3, roll4];
    var lowest = Math.min(...rolls);
    var total = roll1 + roll2 + roll3 + roll4;
    return total - lowest;
}
console.log(roll4d6minusLowest());

var rolledSTR = roll4d6minusLowest();
var rolledDEX = roll4d6minusLowest();
var rolledCON = roll4d6minusLowest();
var rolledCHA = roll4d6minusLowest();
var rolledINT = roll4d6minusLowest();
var rolledWIS = roll4d6minusLowest();

var statsArray = [
    rolledSTR,
    rolledDEX,
    rolledCON,
    rolledCHA,
    rolledINT,
    rolledWIS,
];
var userStats = console.log(statsArray);
// assign stat bonus to classes
// Barbarian +2 Str +1 Con
// Bard      +2 Cha +1 Dex
// Cleric      +2 Wis +1 Cha
// Druid      +2 Int +1 Wis
// Fighter    +2 Str +1 Con
// Monk      +2 Str +1 Dex
// Paladin   +2 Con +1 Str +1 Cha -1Dex
// Ranger    +2 Str +1 Dex
// Rogue     +2 Dex +1 Int
// Sorcerer   +2 Con +1 Cha
// Warlock    +2 Wis +1 Cha
// Wizard     +2 Int +1 Wis
// [str, dex, con, cha, int, wis]
// HP base values
// Barbarian 12
// Bard 8
// Cleric 8
// Druid 8
// Fighter 10
// Monk 8
// Paladin 10
// Ranger 10
// Rogue 8
// Sorcerer 6
// Warlock 8
// Wizard 6
function rollStats(charClass) {
    var character = {
        str: roll4d6minusLowest(),
        dex: roll4d6minusLowest(),
        con: roll4d6minusLowest(),
        cha: roll4d6minusLowest(),
        int: roll4d6minusLowest(),
        wis: roll4d6minusLowest(),
        hp: 0,
        skills: "",
        weapons: "",
        class: charClass,
    };
    if (charClass == "Barbarian") {
        // buff str and con
        character.hp = 12 + modifier(character.con);
        character.str += 2;
        character.con += 1;
        // set hp bsaed on magic formula
    } else if (charClass == "Bard") {
        character.hp = 8 + modifier(character.con);
        character.cha += 2;
        character.dex += 1;
    } else if (charClass == "Cleric") {
        character.hp = 8 + modifier(character.con);
        character.wis += 2;
        character.cha += 1;
    } else if (charClass == "Druid") {
        character.hp = 8 + modifier(character.con);
        character.int += 2;
        character.wis += 1;
    } else if (charClass == "Fighter") {
        character.hp = 10 + modifier(character.con);
        character.str += 2;
        character.con += 1;
    } else if (charClass == "Monk") {
        character.hp = 8 + modifier(character.con);
        character.str += 2;
        character.dex += 1;
    } else if (charClass == "Paladin") {
        character.hp = 10 + modifier(character.con);
        character.con += 2;
        character.dex -= 1;
        character.str += 1;
        character.cha += 1;
    } else if (charClass == "Ranger") {
        character.hp = 10 + modifier(character.con);
        character.str += 2;
        character.dex += 1;
    } else if (charClass == "Rogue") {
        character.hp = 8 + modifier(character.con);
        character.dex += 2;
        character.int += 1;
    } else if (charClass == "Sorcerer") {
        character.hp = 6 + modifier(character.con);
        character.con += 2;
        character.cha += 1;
    } else if (charClass == "Warlock") {
        character.hp = 8 + modifier(character.con);
        character.wis += 2;
        character.cha += 1;
    } else if (charClass == "Wizard") {
        character.hp = 6 + modifier(character.con);
        character.int += 2;
        character.wis += 1;
    }

    userCharacter = character;
}

function modifier(n) {
    if (n >= 1 && n <= 3) {
        return -5;
    } else if (n >= 4 && n <= 5) {
        return -4;
    } else if (n >= 6 && n <= 7) {
        return -3;
    } else if (n >= 8 && n <= 9) {
        return -2;
    } else if (n >= 10 && n <= 11) {
        return -1;
    } else if (n >= 12 && n <= 13) {
        return 0;
    } else if (n >= 14 && n <= 15) {
        return 1;
    } else if (n >= 16 && n <= 17) {
        return 2;
    } else if (n >= 18 && n <= 19) {
        return 3;
    } else if (n >= 20 && n <= 21) {
        return 4;
    } else if (n >= 22 && n <= 23) {
        return 5;
    } else if (n >= 24) {
        return 6;
    }
}
btn.addEventListener("click", createCharacter);

function createCharacter() {
    rollStats(userClass);
    localStorage.setItem("savedUser", JSON.stringify(userCharacter));
    // getSkills(userClass);
}
// function getSkills(charClass) {
//     fetch(kashefkd charClass = palalding)
//     .then(res => res.json())
//     .then(function(data) {
//         //update skills
//         fetch(weapons)
//         .then(res => res.json())
//         .then(function(data) {
//             // update weapons
//             // save localstorage
//         })
//     })
// }

//get modifier for each stat
// 1     = -5
// 2-3   = -4
// 4-5   = -3
// 6-7   = -2
// 8-9   = -1
// 10-11 =  0
// 12-13 = +1
// 14-15 = +2
// 16-17 = +3
// 18-19 = +4
// 20-21 = +5
// 22-23 = +6

// moddedStatsBarbarian = [4,2,6,7,4,1]
// use modifier to figure out hp, add that in
// modifierArrayBarbarian = [-4,-5,-3,-4,-1]
//Display stats in stat windows in battle/creation/comparison page

const titleButton = document.getElementById("title-button");
const titlePage = document.getElementById("title-page"); // needs id in title page section (use "title-page")
const charSelect = document.getElementById("char-sel"); // needs id for character select section (use "char-sel")
const beginAd = document.getElementById("beginAd"); // needs id for begin adventure button (use "beginAd")
const classCompare = document.getElementById("class-compare"); // needs id for character select section (use "char-sel")
const goBack = document.getElementById("return-button");

titleButton.addEventListener("click", startGame);

// start game go to character select
function startGame() {
    titleButton.style.display = "none";
    charSelect.style.display = "block"; // add "style='display: none'" to character-select-container section
    titlePage.style.display = "none";
}

beginAd.addEventListener("click", adventureStart);

// go to character comparison
function adventureStart() {
    beginAd.style.display = "none";
    classCompare.style.display = "block"; // add "style='display: none'" to class-compare section
    charSelect.style.display = "none";
    goBack.style.display = "block";
}
//create event listener for go back button
goBack.addEventListener("click", returnBack);

//send user back one page
function returnBack() {
    goBack.style.display = "none";
    charSelect.style.display = "block";
    classCompare.style.display = "none";
    beginAd.style.display = "block";
}
$('#submit').on('click',function(){
    var selectedClass = $("#default_select").val();
    console.log(selectedClass);

})
