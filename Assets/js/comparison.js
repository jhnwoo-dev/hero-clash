var userCharacter = localStorage.getItem("savedUser");
if (!userCharacter) {
    // userCharacter = default stats
}
var comparisonCharacter;
var comparisonClass = "";

var submitBtn = $("#submit");

//API used to grab class info
var classesAPI = `https://www.dnd5eapi.co/api/classes/${comparisonClass}`;
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
function createChar(charClass) {
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
    };
    if (charClass == barbarian) {
        // buff str and con
        // set hp bsaed on magic formula
    } else if (charClass == paladin) {
        userStats.hp = 12 + 2;
    }

    return character;
}

function getSkills(charClass) {
    // fetch(kashefkd charClass = palalding)
    //.then(update global variable with skills)
}

function getWeapons(charClass) {
    // fetch(kashefkd charClass = palalding)
    //.then(update global variable with weapons)
}

btn.addEventlistener("click", updateCharacter);

function updateCharacter() {
    userCharacter = createChar("mage");
    userCharacter.skills = getSkills("mage");
    getWeapons("mage");
}

userChar = createChar("paladin");
compChar = createChar("rogue");

var selectedClass = $("#default_select").val();
console.log(selectedClass);
