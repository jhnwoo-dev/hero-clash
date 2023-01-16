var userCharacter = JSON.parse(localStorage.getItem("savedUser"));
var userHero = document.createElement("img");
console.log(userCharacter);
$("#selectedHeroComparisonHP").html("HP: " + userCharacter.hp);
$("#selectedHeroComparisonSTR").attr("value", userCharacter.str);
$("#selectedHeroComparisonDEX").attr("value", userCharacter.dex);
$("#selectedHeroComparisonCON").attr("value", userCharacter.con);
$("#selectedHeroComparisonCHA").attr("value", userCharacter.cha);
$("#selectedHeroComparisonINT").attr("value", userCharacter.int);
$("#selectedHeroComparisonWIS").attr("value", userCharacter.wis);
$("#weaponProfUser").text(userCharacter.weapon);
$("#armorProfUser").text(userCharacter.armor);
$("#startingEqProfUser").text(userCharacter.starter);
userHero;
userHero.setAttribute("src", userCharacter.src);
userHero.setAttribute("class", "heroIMGFV lx-row");
userHero.setAttribute("id", "heroIMGAppend");
appendHeroIMG.append(userHero);
console.log(userCharacter.src);
//Global variables
var userCharacter = "";
var comparisonCharacter;

var comparisonClass;

//Button Variables
var btn = $("#test-button");
var submitBtn = $("#submit");
var compClass = "";
// character="a"
//API used to grab class info

//API used to grab class weapon proficiency
// var weaponAPI = `https://api.open5e.com/classes/${userClass}`;

//Event listener to set userClass to the selection of user
submitBtn.on("click", function () {
    compClass = $("#default_select").val().toLowerCase();
    console.log(compClass);

    rollStats(compClass);
    console.log(character);
    var classesAPI = `https://www.dnd5eapi.co/api/classes/${compClass}`;
    fetch(classesAPI)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            for (i = 0; i < data.starting_equipment.length; i++) {
                console.log(data.starting_equipment[i].equipment.name);
                character.starter = data.starting_equipment[i].equipment.name;
                console.log(character);
            }
            var weaponAPI = `https://api.open5e.com/classes/${compClass}`;
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
                        "savedCompare",
                        JSON.stringify(character)
                    );
                    var comparedChar = JSON.parse(
                        localStorage.getItem("savedCompare")
                    );
                    console.log(comparedChar);
                    character.hp *= 10;
                    $("#comparisonStatHP").html("HP: " + character.hp);
                    $("#comparisonStatSTR").attr("value", character.str);
                    $("#comparisonStatDEX").attr("value", character.dex);
                    $("#comparisonStatCON").attr("value", character.con);
                    $("#comparisonStatCHA").attr("value", character.cha);
                    $("#comparisonStatINT").attr("value", character.int);
                    $("#comparisonStatWIS").attr("value", character.wis);
                    $("#weaponProfCompare").text(character.weapon);
                    $("#armorProfCompare").text(character.armor);
                    $("#startingEqCompare").text(character.starter);
                });
        });
    // getInfo(userClass)
});

function createCharacter() {
    rollStats(compClass);
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
// var rolledLife = roll4d6minusLowest();

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
function rollStats(compClass) {
    var createImgElComp = document.createElement("img");
    var imgAppend = $("#heroCompareIMG");
    $("#compIMG").remove();
    character = {
        str: roll4d6minusLowest(),
        dex: roll4d6minusLowest(),
        con: roll4d6minusLowest(),
        cha: roll4d6minusLowest(),
        int: roll4d6minusLowest(),
        wis: roll4d6minusLowest(),
        hp: "",
        starter: "",
        armor: "",
        weapon: "",
        class: compClass,
        src: "",
    };
    if (compClass == "barbarian") {
        character.hp = 12 + modifier(character.con);
        character.hp *= 10;
        character.str += 2;
        character.con += 1;
        createImgElComp;
        createImgElComp.setAttribute(
            "src",
            "../Images/Character/Frontview/Barbarian.png"
        );
        createImgElComp.setAttribute("class", "heroCompareBig lx-row");
        createImgElComp.setAttribute("id", "compIMG");
        imgAppend.append(createImgElComp);
    } else if (compClass == "bard") {
        character.hp = 8 + modifier(character.con);
        character.hp *= 10;
        character.cha += 2;
        character.dex += 1;
        createImgElComp;
        createImgElComp.setAttribute(
            "src",
            "../Images/Character/Frontview/Bard.png"
        );
        createImgElComp.setAttribute("class", "heroCompareBig lx-row");
        createImgElComp.setAttribute("id", "compIMG");
        imgAppend.append(createImgElComp);
    } else if (compClass == "cleric") {
        character.hp = 8 + modifier(character.con);
        character.hp *= 10;
        character.wis += 2;
        character.cha += 1;
        createImgElComp;
        createImgElComp.setAttribute(
            "src",
            "../Images/Character/Frontview/Cleric.png"
        );
        createImgElComp.setAttribute("class", "heroCompareBig lx-row");
        createImgElComp.setAttribute("id", "compIMG");
        imgAppend.append(createImgElComp);
    } else if (compClass == "druid") {
        character.hp = 8 + modifier(character.con);
        character.hp *= 10;
        character.int += 2;
        character.wis += 1;
        createImgElComp;
        createImgElComp.setAttribute(
            "src",
            "../Images/Character/Frontview/Druid.png"
        );
        createImgElComp.setAttribute("class", "heroCompareBig lx-row");
        createImgElComp.setAttribute("id", "compIMG");
        imgAppend.append(createImgElComp);
    } else if (compClass == "fighter") {
        character.hp = 10 + modifier(character.con);
        character.hp *= 10;
        character.str += 2;
        character.con += 1;
        createImgElComp;
        createImgElComp.setAttribute(
            "src",
            "../Images/Character/Frontview/Fighter.png"
        );
        createImgElComp.setAttribute("class", "heroCompareBig lx-row");
        createImgElComp.setAttribute("id", "compIMG");
        imgAppend.append(createImgElComp);
    } else if (compClass == "monk") {
        character.hp = 8 + modifier(character.con);
        character.hp *= 10;
        character.str += 2;
        character.dex += 1;

        createImgElComp;
        createImgElComp.setAttribute(
            "src",
            "../Images/Character/Frontview/Monk.png"
        );
        createImgElComp.setAttribute("class", "heroCompareBig lx-row");
        createImgElComp.setAttribute("id", "compIMG");
        imgAppend.append(createImgElComp);
    } else if (compClass == "paladin") {
        character.hp = 10 + modifier(character.con);
        character.hp *= 10;
        character.con += 2;
        character.dex -= 1;
        character.str += 1;
        character.cha += 1;
        createImgElComp;
        createImgElComp.setAttribute(
            "src",
            "../Images/Character/Frontview/Paladin.png"
        );
        createImgElComp.setAttribute("class", "heroCompareBig lx-row");
        createImgElComp.setAttribute("id", "compIMG");
        imgAppend.append(createImgElComp);
    } else if (compClass == "ranger") {
        character.hp = 10 + modifier(character.con);
        character.hp *= 10;
        character.str += 2;
        character.dex += 1;
        createImgElComp;
        createImgElComp.setAttribute(
            "src",
            "../Images/Character/Frontview/Ranger.png"
        );
        createImgElComp.setAttribute("class", "heroCompareBig lx-row");
        createImgElComp.setAttribute("id", "compIMG");
        imgAppend.append(createImgElComp);
    } else if (compClass == "rogue") {
        character.hp = 8 + modifier(character.con);
        character.hp *= 10;
        character.dex += 2;
        character.int += 1;
        createImgElComp;
        createImgElComp.setAttribute(
            "src",
            "../Images/Character/Frontview/Rogue.png"
        );
        createImgElComp.setAttribute("class", "heroCompareBig lx-row");
        createImgElComp.setAttribute("id", "compIMG");
        imgAppend.append(createImgElComp);
    } else if (compClass == "sorcerer") {
        character.hp = 6 + modifier(character.con);
        character.hp *= 10;
        character.con += 2;
        character.cha += 1;
        createImgElComp;
        createImgElComp.setAttribute(
            "src",
            "../Images/Character/Frontview/Sorcerer.png"
        );
        createImgElComp.setAttribute("class", "heroCompareBig lx-row");
        createImgElComp.setAttribute("id", "compIMG");
        imgAppend.append(createImgElComp);
    } else if (compClass == "warlock") {
        character.hp = 8 + modifier(character.con);
        character.hp *= 10;
        character.wis += 2;
        character.cha += 1;
        createImgElComp;
        createImgElComp.setAttribute(
            "src",
            "../Images/Character/Frontview/Warlock.png"
        );
        createImgElComp.setAttribute("class", "heroCompareBig lx-row");
        createImgElComp.setAttribute("id", "compIMG");
        createImgElComp.setAttribute("draggable", "true");
        createImgElComp.setAttribute("ondragstart", "dragStart(event)");
        imgAppend.append(createImgElComp);
    } else if (compClass == "wizard") {
        character.hp = 6 + modifier(character.con);
        character.hp *= 10;
        character.int += 2;
        character.wis += 1;
        createImgElComp;
        createImgElComp.setAttribute(
            "src",
            "../Images/Character/Frontview/Wizard.png"
        );
        createImgElComp.setAttribute("class", "heroCompareBig lx-row");
        createImgElComp.setAttribute("id", "compIMG");
        imgAppend.append(createImgElComp);
    }
    console.log(character);
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

function updateCharacter() {
    userCharacter = createChar("mage");
    userCharacter.skills = getSkills("mage");
    getWeapons("mage");
}

var selectedClass = $("#default_select").val();
console.log(selectedClass);

// //grab all img tags
// var images = document.querySelectorAll("img");

// //for loop to make it swap on drag and drop
// for (var i = 0; i < images.length; i++) {
//     images[i].setAttribute("draggable", "true");
//     images[i].addEventListener("dragstart", function(event) {
//         event.dataTransfer.setData("imgCompare", event.target.id);
//     });
//     images[i].addEventListener("drop", function(event) {
//         event.preventDefault();
//         var dragtop = event.dataTransfer.getData("imgCompare");
//         event.target.appendChild(document.getElementById(dragtop));
//     });
//     images[i].addEventListener("dragover", function(event) {
//         event.preventDefault();
//     });
//     images[i].addEventListener("dragenter", function(event) {
//         event.preventDefault();
//     });
// }

function dragStart(event) {
    event.dataTransfer.setData("dragsrc", event.target.src);
    event.dataTransfer.setData("class", event.target.alt);
    $("#compIMG").remove();
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();

    var transfersrc = event.dataTransfer.getData("dragsrc");
    console.log(transfersrc);
    var transferclass = event.dataTransfer.getData("class");
    console.log(transferclass);
    rollStats(transferclass);
    console.log(character);
    localStorage.setItem("savedCompareDrop", JSON.stringify(character));
    var comparedCharDrop = JSON.parse(localStorage.getItem("savedCompareDrop"));
    console.log(comparedCharDrop);
    $("#comparisonStatHP").html("HP: " + character.hp);
    $("#comparisonStatSTR").attr("value", character.str);
    $("#comparisonStatDEX").attr("value", character.dex);
    $("#comparisonStatCON").attr("value", character.con);
    $("#comparisonStatCHA").attr("value", character.cha);
    $("#comparisonStatINT").attr("value", character.int);
    $("#comparisonStatWIS").attr("value", character.wis);

    var classesAPI = `https://www.dnd5eapi.co/api/classes/${transferclass}`;
    fetch(classesAPI)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            for (i = 0; i < data.starting_equipment.length; i++) {
                console.log(data.starting_equipment[i].equipment.name);
                character.starter = data.starting_equipment[i].equipment.name;
                console.log(character);
            }
            var weaponAPI = `https://api.open5e.com/classes/${transferclass}`;
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
                        "savedCompare",
                        JSON.stringify(character)
                    );
                    var comparedChar = JSON.parse(
                        localStorage.getItem("savedCompare")
                    );
                    console.log(comparedChar);
                    $("#weaponProfCompare").text(character.weapon);
                    $("#armorProfCompare").text(character.armor);
                    $("#startingEqCompare").text(character.starter);
                });
        });
    var imgDrop = document.createElement("img");
    imgDrop.src = transfersrc;
    imgDrop.setAttribute("class", "heroCompareBig lx-row");
    imgDrop.setAttribute("id", "compIMG");
    imgDrop.setAttribute("value", "compIMG");
    event.target.appendChild(imgDrop);
}
