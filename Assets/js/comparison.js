var userCharacter = JSON.parse(localStorage.getItem('savedUser'));
console.log(userCharacter);
//Global variables
var userCharacter = "";
var comparisonCharacter;

var comparisonClass;


//Button Variables
var btn = $("#test-button");
var submitBtn = $("#submit");
var userClass = "";
// character="a"
//API used to grab class info

//API used to grab class weapon proficiency
// var weaponAPI = `https://api.open5e.com/classes/${userClass}`;

//Event listener to set userClass to the selection of user
submitBtn.on("click", function () {
    userClass = $("#default_select").val().toLowerCase();
    console.log(userClass);
    character = {
        str: roll4d6minusLowest(),
        dex: roll4d6minusLowest(),
        con: roll4d6minusLowest(),
        cha: roll4d6minusLowest(),
        int: roll4d6minusLowest(),
        wis: roll4d6minusLowest(),
        hp: 0,
        starter: "",
        armor: "",
        weapon: "",
        class: userClass,
    }
    rollStats();
    console.log(character)
    var classesAPI = `https://www.dnd5eapi.co/api/classes/${userClass}`;
    fetch(classesAPI)
    
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        for (i = 0; i < data.starting_equipment.length; i++) {
            console.log(data.starting_equipment[i].equipment.name);
            character.starter = data.starting_equipment[i].equipment.name
            console.log(character)
        }
        var weaponAPI = `https://api.open5e.com/classes/${userClass}`;
        fetch(weaponAPI)
        .then(function (response2) {
            console.log(response2);
            return response2.json();
        })
        .then(function (data2) {
            console.log(data2);
            console.log(data2.prof_weapons);
            console.log(data2.prof_armor);
            character.weapon = data2.prof_weapons
            character.armor = data2.prof_armor
            console.log(character)
            localStorage.setItem("savedCompare", JSON.stringify(character));
        });
    });
    // getInfo(userClass)
});



function createCharacter() {
    rollStats(userClass);
    
}

// testing API to grab starting equipment

//testing API to grab proficient weapons and armor


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

    // userCharacter = character;
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
