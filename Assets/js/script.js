//Global variables
var userCharacter = "";
var comparisonCharacter;
var comparisonClass;
var createImgEl = document.createElement("img");

//Button Variables
var btn = $("#test-button");
var submitBtn = $("#submit");
var userClass = "";

//API used to grab class info
// var classesAPI = `https://www.dnd5eapi.co/api/classes/${userClass}`
//API used to grab class weapon proficiency
// var weaponAPI = `https://api.open5e.com/classes/${userClass}`

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

var rolledSTR = roll4d6minusLowest();
var rolledDEX = roll4d6minusLowest();
var rolledCON = roll4d6minusLowest();
var rolledCHA = roll4d6minusLowest();
var rolledINT = roll4d6minusLowest();
var rolledWIS = roll4d6minusLowest();
var rolledHP = roll4d6minusLowest();

var statsArray = [
    rolledSTR,
    rolledDEX,
    rolledCON,
    rolledCHA,
    rolledINT,
    rolledWIS,
    rolledHP,
];
console.log(statsArray);
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

function rollStats(userClass) {
    var createImgEl = document.createElement("img");
    var imgAppend = $("#heroImgContainer");
    character = {
        str: rolledSTR,
        dex: rolledDEX,
        con: rolledCON,
        cha: rolledCHA,
        int: rolledINT,
        wis: rolledWIS,
        hp: rolledHP,
        starter: "",
        armor: "",
        weapon: "",
        class: userClass,
    };
    if (userClass == "barbarian") {
        character.hp = 12 + modifier(character.con);
        character.hp *= 10;
        character.str += 2;
        character.con += 1;
        createImgEl;
        createImgEl.setAttribute(
            "src",
            "./Assets/Images/Character/Frontview/Barbarian.png"
        );
        createImgEl.setAttribute("class", "heroIMGFV lx-row");
        createImgEl.setAttribute("id", "heroIMG");
        imgAppend.append(createImgEl);
        character.src = "'../Images/Character/Frontview/Barbarian.png";
        // document.getElementById("#heroIMG").src =
        //     "./Assets/Images/Character/Frontview/Barbarian.png";
        // set hp bsaed on magic formula
    } else if (userClass == "bard") {
        character.hp = 8 + modifier(character.con);
        character.hp *= 10;
        character.cha += 2;
        character.dex += 1;
        createImgEl;
        createImgEl.setAttribute(
            "src",
            "./Assets/Images/Character/Frontview/Bard.png"
        );
        createImgEl.setAttribute("class", "heroIMGFV lx-row");
        createImgEl.setAttribute("id", "heroIMG");
        imgAppend.append(createImgEl);
        character.src = "../Images/Character/Frontview/Bard.png";
    } else if (userClass == "cleric") {
        character.hp = 8 + modifier(character.con);
        character.hp *= 10;
        character.wis += 2;
        character.cha += 1;
        createImgEl;
        createImgEl.setAttribute(
            "FVsrc",
            "./Assets/Images/Character/Frontview/Cleric.png"
        );
        createImgEl.setAttribute("class", "heroIMGFV lx-row");
        createImgEl.setAttribute("id", "heroIMG");
        imgAppend.append(createImgEl);
        character.src = "../Images/Character/Frontview/Cleric.png";
    } else if (userClass == "druid") {
        character.hp = 8 + modifier(character.con);
        character.hp *= 10;
        character.int += 2;
        character.wis += 1;
        createImgEl;
        createImgEl.setAttribute(
            "src",
            "./Assets/Images/Character/Frontview/Druid.png"
        );
        createImgEl.setAttribute("class", "heroIMGFV lx-row");
        createImgEl.setAttribute("id", "heroIMG");
        imgAppend.append(createImgEl);
        character.src = "../Images/Character/Frontview/Druid.png";
    } else if (userClass == "fighter") {
        character.hp = 10 + modifier(character.con);
        character.hp *= 10;
        character.str += 2;
        character.con += 1;
        createImgEl;
        createImgEl.setAttribute(
            "src",
            "./Assets/Images/Character/Frontview/Fighter.png"
        );
        createImgEl.setAttribute("class", "heroIMGFV lx-row");
        createImgEl.setAttribute("id", "heroIMG");
        imgAppend.append(createImgEl);
        character.src = "../Images/Character/Frontview/Fighter.png";
    } else if (userClass == "monk") {
        character.hp = 8 + modifier(character.con);
        character.hp *= 10;
        character.str += 2;
        character.dex += 1;
        createImgEl;
        createImgEl.setAttribute(
            "src",
            "./Assets/Images/Character/Frontview/Monk.png"
        );
        createImgEl.setAttribute("class", "heroIMGFV lx-row");
        createImgEl.setAttribute("id", "heroIMG");
        imgAppend.append(createImgEl);
        character.src = "../Images/Character/Frontview/Monk.png";
    } else if (userClass == "paladin") {
        character.hp = 10 + modifier(character.con);
        character.hp *= 10;
        character.con += 2;
        character.dex -= 1;
        character.str += 1;
        character.cha += 1;
        createImgEl;
        createImgEl.setAttribute(
            "src",
            "./Assets/Images/Character/Frontview/Paladin.png"
        );
        createImgEl.setAttribute("class", "heroIMGFV lx-row");
        createImgEl.setAttribute("id", "heroIMG");
        imgAppend.append(createImgEl);
        character.src = "../Images/Character/Frontview/Paladin.png";
    } else if (userClass == "ranger") {
        character.hp = 10 + modifier(character.con);
        character.hp *= 10;
        character.str += 2;
        character.dex += 1;
        createImgEl;
        createImgEl.setAttribute(
            "src",
            "./Assets/Images/Character/Frontview/Ranger.png"
        );
        createImgEl.setAttribute("class", "heroIMGFV lx-row");
        createImgEl.setAttribute("id", "heroIMG");
        imgAppend.append(createImgEl);
        character.src = "../Images/Character/Frontview/Ranger.png";
    } else if (userClass == "rogue") {
        character.hp = 8 + modifier(character.con);
        character.hp *= 10;
        character.dex += 2;
        character.int += 1;
        createImgEl;
        createImgEl.setAttribute(
            "src",
            "./Assets/Images/Character/Frontview/Rogue.png"
        );
        createImgEl.setAttribute("class", "heroIMGFV lx-row");
        createImgEl.setAttribute("id", "heroIMG");
        imgAppend.append(createImgEl);
        character.src = "../Images/Character/Frontview/Rogue.png";
    } else if (userClass == "sorcerer") {
        character.hp = 6 + modifier(character.con);
        character.hp *= 10;
        character.con += 2;
        character.cha += 1;
        createImgEl;
        createImgEl.setAttribute(
            "src",
            "./Assets/Images/Character/Frontview/Sorcerer.png"
        );
        createImgEl.setAttribute("class", "heroIMGFV lx-row");
        createImgEl.setAttribute("id", "heroIMG");
        imgAppend.append(createImgEl);
        character.src = "../Images/Character/Frontview/Sorcerer.png";
    } else if (userClass == "warlock") {
        character.hp = 8 + modifier(character.con);
        character.hp *= 10;
        character.wis += 2;
        character.cha += 1;
        createImgEl;
        createImgEl.setAttribute(
            "src",
            "./Assets/Images/Character/Frontview/Warlock.png"
        );
        createImgEl.setAttribute("class", "heroIMGFV lx-row");
        createImgEl.setAttribute("id", "heroIMG");
        imgAppend.append(createImgEl);
        character.src = "../Images/Character/Frontview/Warlock.png";
    } else if (userClass == "wizard") {
        character.hp = 6 + modifier(character.con);
        character.hp *= 10;
        character.int += 2;
        character.wis += 1;
        createImgEl;
        createImgEl.setAttribute(
            "src",
            "./Assets/Images/Character/Frontview/Wizard.png"
        );
        createImgEl.setAttribute("class", "heroIMGFV lx-row");
        createImgEl.setAttribute("id", "heroIMG");
        imgAppend.append(createImgEl);
        character.src = "../Images/Character/Frontview/Wizard.png";
    }
    console.log(character);
}

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
//Event listener to set userClass to the selection of user
submitBtn.on("click", function () {
    userClass = $("#default_select").val().toLowerCase();
    $("img").remove();
    console.log(userClass);
    rollStats(userClass);
    // console.log(character);
    var classesAPI = `https://www.dnd5eapi.co/api/classes/${userClass}`;
    fetch(classesAPI)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            for (i = 0; i < data.starting_equipment.length; i++) {
                console.log(data.starting_equipment[i].equipment.name);
                character.starter = data.starting_equipment[i].equipment.name;
                // console.log(character);
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
                    character.weapon = data2.prof_weapons;
                    character.armor = data2.prof_armor;
                    console.log(character);
                    localStorage.setItem(
                        "savedUser",
                        JSON.stringify(character)
                    );
                    var userCharacter = JSON.parse(
                        localStorage.getItem("savedUser")
                    );

                    $("#lifeDisplay").text("HP: " + userCharacter.hp);
                    $("#strDisplay").text("STR: " + userCharacter.str);
                    $("#dexDisplay").text("DEX: " + userCharacter.dex);
                    $("#conDisplay").text("CON: " + userCharacter.con);
                    $("#chaDisplay").text("CHA: " + userCharacter.cha);
                    $("#intDisplay").text("INT: " + userCharacter.int);
                    $("#wisDisplay").text("WIS: " + userCharacter.wis);
                });
        });
});

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
