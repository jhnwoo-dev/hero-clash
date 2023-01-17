const userCharacter = JSON.parse(localStorage.getItem('savedUser'));
var userChaseHero = document.createElement('img');
var userFightHero = document.createElement('img');
var userFightHealthHero = document.createElement('progress');
const appendHeroChaseIMG = document.getElementById("heroChaseAppend");
const appendHeroFightIMG = document.getElementById("heroBattleAppend");
const monsterHealthBar = document.createElement("progress");
const chaseAppendText = document.getElementById('textChaseAppendText');
const fightAppendText = document.getElementById('textFightAppendText');
userChaseHero;
userChaseHero.setAttribute("src", `../Character/Overtop/${userCharacter.class}.png`);
userChaseHero.setAttribute("class", "heroIMGOTpre");
userChaseHero.setAttribute('id', 'heroIMGAppend');
appendHeroChaseIMG.append(userChaseHero);

userFightHealthHero;
userFightHealthHero.setAttribute("class", "nes-progress is-error");
userFightHealthHero.setAttribute('value', userCharacter.hp);
userFightHealthHero.setAttribute('max', "150");
userFightHealthHero.setAttribute('id', "heroHealthBar");
appendHeroFightIMG.append(userFightHealthHero);

userFightHero;
userFightHero.setAttribute("class","heroIMGFVbattle");
userFightHero.setAttribute("src",`../Character/Frontview/${userCharacter.class}.png`);
userFightHero.setAttribute("alt", "Your Hero");
appendHeroFightIMG.append(userFightHero);
console.log(userCharacter.src);

//please push
var monsters = [
    "air-elemental",
    "ape",
    "awakened-tree",
    "bearmit-crab",
    "black-pudding",
    "bone-collective",
    "camel",
    "cave-giant",
    "corpse-worm",
    "deep-troll",
    "dretch",
    "dryad",
    "giant-badger",
    "giant-boar",
    "giant-frog",
    "killer-whale",
    "mold-zombie",
    "owlbear",
    "purple-slime",
    "skeleton",
    "skull-lantern"
];
const randomIndex = Math.floor(Math.random() * monsters.length);
const randomMonster = monsters[randomIndex];
function randomMonsterInfo(){
console.log(randomMonster)

var monsterAPI = `https://api.open5e.com/monsters/${randomMonster}`;
    fetch(monsterAPI)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data3) {
            console.log(data3.slug)
            monsterstats = {
                name:"",
                life:"",
                hitdice: "",
                str:"",
                dex:"",
                con:"",
                cha:"",
                int:"",
                wis:"",
            }
            monsterstats.name = data3.name;
            monsterstats.life = data3.hit_points;
            
            monsterstats.str = data3.strength;
            monsterstats.dex = data3.dexterity;
            monsterstats.con = data3.constitution;
            monsterstats.cha = data3.charisma;
            monsterstats.int = data3.intelligence;
            monsterstats.wis = data3.wisdom;

            var imgCreateChase = document.createElement("img");
            var imgCreateFight = document.createElement("img");
            var textChaseAppend = document.createElement("p");
            var textBattleAppend = document.createElement("p");
            
            imgCreateChase;
            imgCreateChase.setAttribute("class", "owlbearpre")
            imgCreateChase.setAttribute("src", `../Images/Monsters/Chase/${data3.slug}.png`);
            imgCreateChase.setAttribute("alt", `${data3.name}`);
            monsterChase.append(imgCreateChase)
            monsterHealthBar;
            monsterHealthBar.setAttribute("id","monsterHealth");
            monsterHealthBar.setAttribute("class", "nes-progress is-success");
            monsterHealthBar.setAttribute("value", `${data3.hit_points}`);
            monsterHealthBar.setAttribute("max", `${data3.hit_points}`);
            monsterFight.append(monsterHealthBar);
            imgCreateFight;
            imgCreateFight.setAttribute("class", "enemyIMGbattle");
            imgCreateFight.setAttribute("src", `../Images/Monsters/Fight/${data3.slug}.png`);
            imgCreateFight.setAttribute("id", "monsterFight");
            monsterFight.append(imgCreateFight);
            console.log(monsterstats)
            textChaseAppend;
            textChaseAppend.innerHTML = `You are being chased by a ${data3.name}!`;
            chaseAppendText.append(textChaseAppend);
            textBattleAppend;
            textBattleAppend.innerHTML = `You have encountered a ${data3.name}. Fight to continue your adventure!`;
            fightAppendText.append(textBattleAppend);

        }
        )
        //end of fetch^
    }
    //end of random monster function^
    //calling random monster info function to set image and retrieve data asap
randomMonsterInfo();

//empty if statement
// if(randomMonster == "air-elemental"){
// } else if (randomMonster == "ape"){  
// } else if (randomMonster == "awakened-tree"){
// } else if (randomMonster == "bearmit-crab"){              
// } else if (randomMonster == "black-pudding"){                   
// } else if (randomMonster == "bone-collective"){                        
// } else if (randomMonster == "camel"){                           
// } else if (randomMonster == "cave-giant"){                                
// } else if (randomMonster == "corpse-worm"){                                   
// } else if (randomMonster == "deep-troll"){                                       
// } else if (randomMonster == "dretch"){                                          
// } else if (randomMonster == "dryad"){                                              
// } else if (randomMonster == "giant-badger"){                                                   
// } else if (randomMonster == "giant-boar"){                                                      
// } else if (randomMonster == "giant-frog"){   
// } else if (randomMonster == "killer-whale"){      
// } else if (randomMonster == "mold-zombie"){          
// } else if (randomMonster == "owlbear"){              
// } else if (randomMonster == "purple-slime"){                   
// } else if (randomMonster == "skeleton"){                       
// } else if (randomMonster == "skull-lantern"){                          
// };
                            
const continueBtnEl = document.getElementById("continueBtnPre");
const prestoryPageEl = document.getElementById("prestory");
const fightPageEl = document.getElementById("fightscene");
const attackEl = document.getElementById("attack-button");
const healEl = document.getElementById("heal-button");
const lostEl = document.getElementById("lost-button");
const goBackEl = document.getElementById("goback-button");
const fightAgainEl = document.getElementById("again-button");
const monsterFightIMG =  document.getElementById("mosterFight")
const monsterChase = document.getElementById("monsterChaseAppend")
const monsterFight = document.getElementById("monsterBattleAppend")

//grab button id
continueBtnEl.addEventListener("click", startFight);


    

attackEl.addEventListener('click', attack);

function attack(){
    var roll1d20 = Math.floor(Math.random() * 20) + 1
    roll1d20;
    console.log(roll1d20)
    attackEl.classList.toggle("hiddenbtns")
    setTimeout(function(){
        attackEl.classList.toggle("hiddenbtns")
    }, 2000)
    monsterFight.classList.toggle("enemy-ani-battle");
    setTimeout(function(){
        monsterFight.classList.toggle("enemy-ani-battle");
    }, 3000)
    appendHeroFightIMG.classList.toggle("hero-ani-battle");
    setTimeout(function(){
        appendHeroFightIMG.classList.toggle("hero-ani-battle");
    }, 3000)
    setTimeout(function(){

console.log(randomMonster)
        var currentHP = userFightHealthHero.value
        var dmgHP = currentHP - roll1d20;
        // console.log(dmgHP)
        userFightHealthHero.setAttribute('value', dmgHP);
        console.log(userCharacter.str)
        // console.log(currentHP)
        // console.log(monsterHealthBar.value)
        var currentMonsterHP = monsterHealthBar.value;
        // console.log(currentMonsterHP)
        var dmgMonsterHP = currentMonsterHP - userCharacter.str;
        // console.log(dmgMonsterHP)
        monsterHealthBar.setAttribute('value', dmgMonsterHP)
        // console.log(monsterHealthBar.value)

        if (userFightHealthHero.value == 0) {
            //display lost button and hide other buttons
            lostEl.classList.toggle("hiddenbtns")
            attackEl.classList.toggle("hiddenbtns")
            goBackEl.classList.toggle("hiddenbtns")
            healEl.style.display = "none";
        } else if (monsterHealthBar.value == 0){        
            //display fight again button
            fightAgainEl.classList.toggle("hiddenbtns")
            attackEl.classList.toggle("hiddenbtns")
            goBackEl.classList.toggle("hiddenbtns")
            userCharacter.hp = userFightHealthHero.value;
            localStorage.setItem("savedUser", JSON.stringify(userCharacter));
            healEl.style.display = "none";
            
    
        }else if (userFightHealthHero.value <= 40) {
            //display heal button
            healEl.style.display = "block";
        }
        console.log(userFightHealthHero.value)
    }, 1800)
    console.log(userFightHealthHero.value)
}

healEl.addEventListener('click', heal);

function heal(){
    //heal based off stat? right now randomized
    var roll1d25 = Math.floor(Math.random() * 25) + 1
    var damagedHP = userFightHealthHero.value
    var healedHP = damagedHP + roll1d25;
    userFightHealthHero.setAttribute('value', healedHP)
    localStorage.setItem("savedUser", JSON.stringify(userCharacter));
    healEl.style.display = "none";

}  

goBackEl.addEventListener('click', goback);

function goback(){
    //go back to index html
    window.location.href = "../../index.html"
}

fightAgainEl.addEventListener('click', fightagain);

function fightagain(){
    // go to fight page
    window.location.href = "fight.html"
    //save user health to local
}

lostEl.addEventListener('click', lost);

function lost(){
    // go back to index html
    window.location.href = "../../index.html"
}



//set display of monster and hero to none on chase page
function hideimage(){
continueBtnEl.classList.toggle("hiddenbtns")
setTimeout(function(){
    appendHeroChaseIMG.classList.toggle("hiddenbtns")
    monsterChase.classList.toggle("hiddenbtns")
    continueBtnEl.classList.toggle("hiddenbtns")
}, 5000)}

hideimage()

// start fight scene with randomized backgrounds
function startFight() {
    continueBtnEl.style.display = "none";
    fightPageEl.style.display = "block";
    prestoryPageEl.style.display = "none";
    const forestBG = "../Images/Backgrounds/landing-page-1.png";
    const titleBG = "../Images/Backgrounds/title-page.png";
    const ominousBG = "../Images/Backgrounds/no-rest.png";
    const floodBG = "../Images/Backgrounds/room-started-flooding.png";
    const campfireBG = "../Images/Backgrounds/well-lit-room.png";
    
    var randomBGNumber = Math.floor(Math.random() * 5) + 1;
    if (randomBGNumber == 1){
        fightPageEl.style.backgroundImage = `url(${forestBG})`
    } else if (randomBGNumber == 2){
        fightPageEl.style.backgroundImage = `url(${titleBG})`
    } else if (randomBGNumber == 3){
        fightPageEl.style.backgroundImage = `url(${ominousBG})`
    } else if (randomBGNumber == 4){
        fightPageEl.style.backgroundImage =`url(${floodBG})`
    } else if (randomBGNumber == 5){
        fightPageEl.style.backgroundImage = `url(${campfireBG})`
    };
}