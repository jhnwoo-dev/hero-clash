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


// Background pathways
var forestBG = './Assets/Images/Backgrounds/landing-page-1.png'
var titleBG = './Assets/Images/Backgrounds/title-page.png'
var ominousBG = './Assets/Images/Backgrounds/no-rest.png'
var floodBG = './Assets/Images/Backgrounds/room-started-flooding.png'
var campfireBG = './Assets/Images/Backgrounds/well-lit-room.png'

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

var rolledSTR = roll4d6minusLowest()
var rolledDEX = roll4d6minusLowest()
var rolledCON = roll4d6minusLowest()
var rolledCHA = roll4d6minusLowest()
var rolledINT = roll4d6minusLowest()
var rolledWIS = roll4d6minusLowest()

var statsArray= [rolledSTR, rolledDEX, rolledCON, rolledCHA, rolledINT, rolledWIS]
console.log(statsArray)
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
var statBonusBarbarian = [2, 0, 1, 0, 0, 0]
var statBonusBard = [0, 1, 0, 2, 0, 0]
var statBonusCleric = [0, 0, 0, 1, 0, 2]
var statBonusDruid = [0, 0, 0, 0, 2, 1]
var statBonusFighter = [2, 0, 1, 0, 0, 0]
var statBonusMonk = [2, 1, 0, 0, 0, 0]
var statBonusPaladin = [1, -1, 2, 1, 0, 0]
var statBonusRanger = [2, 1, 0, 0, 0, 0]
var statBonusRogue = [0, 2, 0, 0, 1, 0]
var statBonusSorcerer = [0, 0, 2, 1, 0, 0]
var statBonusWarlock = [0, 0, 0, 1, 0, 2]
var statBonusWizard = [0, 0, 0, 0, 2, 1]

//change basestats to moddedStats
var moddedStatsBarbarian = statsArray.map(function(n, i) {return n + statBonusBarbarian[i];})
var moddedStatsBard = statsArray.map(function(n, i) {return n + statBonusBard[i];})
var moddedStatsCleric = statsArray.map(function(n, i) {return n + statBonusCleric[i];})
var moddedStatsDruid = statsArray.map(function(n, i) {return n + statBonusDruid[i];})
var moddedStatsFighter = statsArray.map(function(n, i) {return n + statBonusFighter[i];})
var moddedStatsMonk = statsArray.map(function(n, i) {return n + statBonusMonk[i];})
var moddedStatsPaladin = statsArray.map(function(n, i) {return n + statBonusPaladin[i];})
var moddedStatsRanger = statsArray.map(function(n, i) {return n + statBonusRanger[i];})
var moddedStatsRogue = statsArray.map(function(n, i) {return n + statBonusRogue[i];})
var moddedStatsSorcerer = statsArray.map(function(n, i) {return n + statBonusSorcerer[i];})
var moddedStatsWarlock = statsArray.map(function(n, i) {return n + statBonusWarlock[i];})
var moddedStatsWizard = statsArray.map(function(n, i) {return n + statBonusWizard[i];})
console.log(moddedStatsBarbarian)
console.log(moddedStatsBard)
console.log(moddedStatsCleric)
console.log(moddedStatsDruid)
console.log(moddedStatsFighter)
console.log(moddedStatsMonk)
console.log(moddedStatsPaladin)
console.log(moddedStatsRanger)
console.log(moddedStatsRogue)
console.log(moddedStatsSorcerer)
console.log(moddedStatsWarlock)
console.log(moddedStatsWizard)

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

var modifierArrayBarbarian = moddedStatsBarbarian.map(function(n) {
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
});

var modifierArrayBard = moddedStatsBard.map(function(n) {
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
});

var modifierArrayCleric = moddedStatsCleric.map(function(n) {
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
});

var modifierArrayDruid = moddedStatsDruid.map(function(n) {
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
});

var modifierArrayFighter = moddedStatsFighter.map(function(n) {
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
});

var modifierArrayMonk = moddedStatsMonk.map(function(n) {
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
});

var modifierArrayPaladin = moddedStatsPaladin.map(function(n) {
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
});

var modifierArrayRanger = moddedStatsRanger.map(function(n) {
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
});

var modifierArrayRogue = moddedStatsRogue.map(function(n) {
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
});

var modifierArraySorcerer = moddedStatsSorcerer.map(function(n) {
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
});

var modifierArrayWarlock = moddedStatsWarlock.map(function(n) {
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
});

var modifierArrayWizard = moddedStatsWizard.map(function(n) {
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
});


console.log(modifierArrayBarbarian)
//assign base life values for each class
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

var baseLifeBarbarian = 12
var baseLifeBard = 8
var baseLifeCleric = 8
var baseLifeDruid = 8
var baseLifeFighter = 10
var baseLifeMonk = 8
var baseLifePaladin = 10
var baseLifeRanger = 10
var baseLifeRogue = 8
var baseLifeSorcerer = 6
var baseLifeWarlock = 8
var baseLifeWizard = 8


//Add modifier to life stat
var conModdifierBarbarian = modifierArrayBarbarian[2]
var conModdifierBard = modifierArrayBard[2]
var conModdifierCleric = modifierArrayCleric[2]
var conModdifierDruid = modifierArrayDruid[2]
var conModdifierFighter = modifierArrayFighter[2]
var conModdifierMonk = modifierArrayMonk[2]
var conModdifierPaladin = modifierArrayPaladin[2]
var conModdifierRanger = modifierArrayRanger[2]
var conModdifierRogue = modifierArrayRogue[2]
var conModdifierSorcerer = modifierArraySorcerer[2]
var conModdifierWarlock = modifierArrayWarlock[2]
var conModdifierWizard = modifierArrayWizard[2]
var baseModdedLifeBarbarian = baseLifeBarbarian + conModdifierBarbarian
var baseModdedLifeBard = baseLifeBard + conModdifierBard
var baseModdedLifeCleric = baseLifeCleric + conModdifierCleric
var baseModdedLifeDruid = baseLifeDruid + conModdifierDruid
var baseModdedLifeFighter = baseLifeFighter + conModdifierFighter
var baseModdedLifeMonk = baseLifeMonk + conModdifierMonk
var baseModdedLifePaladin = baseLifePaladin + conModdifierPaladin
var baseModdedLifeRanger = baseLifeRanger + conModdifierRanger
var baseModdedLifeRogue = baseLifeRogue + conModdifierRogue
var baseModdedLifeSorcerer = baseLifeSorcerer + conModdifierSorcerer
var baseModdedLifeWarlock = baseLifeWarlock + conModdifierWarlock
var baseModdedLifeWizard = baseLifeWizard + conModdifierWizard

//Multiply life values by 10 and display in life sections in battle/creation/comparison page
var modifiedLifeBarbarian = baseModdedLifeBarbarian * 10;
var modifiedLifeBard = baseModdedLifeBard * 10
var modifiedLifeCleric = baseModdedLifeCleric * 10
var modifiedLifeDruid  = baseModdedLifeDruid * 10
var modifiedLifeFighter = baseModdedLifeFighter * 10
var modifiedLifeMonk = baseModdedLifeMonk * 10
var modifiedLifePaladin = baseModdedLifePaladin * 10
var modifiedLifeRanger = baseModdedLifeRanger * 10
var modifiedLifeRogue  = baseModdedLifeRogue * 10
var modifiedLifeSorcerer = baseModdedLifeSorcerer * 10
var modifiedLifeWarlock = baseModdedLifeWarlock * 10
var modifiedLifeWizard = baseModdedLifeWizard * 10
console.log(modifiedLifeBarbarian)
//Display stats in stat windows in battle/creation/comparison page


//
const titleButton = document.getElementById("title-button");
const titlePage = document.getElementById("title-page"); // needs id in title page section (use "title-page")
const charSelect = document.getElementById("char-sel"); // needs id for character select section (use "char-sel")
const beginAd = document.getElementById("beginAd"); // needs id for begin adventure button (use "beginAd")
const continue = document.getElementById("consinutBtn"); // needs id for character select section (use "char-sel")
const classCompare = document.getElementById("class-compare"); // needs id for character select section (use "char-sel")
const goBack = document.getElementById("return-button");

titleButton.addEventListener("click",startGame);

// start game go to character select
function startGame(){
    titleButton.style.display = "none";
    charSelect.style.display = "block"; // add "style='display: none'" to character-select-container section
}    
beginAd.addEventListener("click",adventureStart);

// go to character comparison
function adventureStart(){
    beginAd.style.display = "none";
    classCompare.style.display = "block"; // add "style='display: none'" to class-compare section
}   
//create event listener for go back button
goBack.addEventListener("click", returnBack);

//send user back one page
function returnBack(){
    goBack.style.display = "none";
    charSelect.style.display = "block"

}