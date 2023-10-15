let interval;
const DEFAULT_TIMER = 5; // seconds
const DEFAULT_ANSWER_TIMER = 3; // seconds
const ROOT_PATH_FILE = 'logos/';
const FILE_EXTENSION = 'png';
const TEAM_LOGOS = [
    {   
        team: 'Arizona Cardinals',
        file: 'Arizona_Cardinals',
        color: '#9b2743'
        // hsl(346,60%,38%)rgb(155,39,67)
    },
    {
        team: 'Atlanta Falcons',
        file: 'Atlanta_Falcons',
        color: '#cb2440'
        // hsl(350,70%,47%)rgb(203,36,64)
    },
    {        
        team: 'Baltimore Ravens',
        file: 'Baltimore_Ravens',
        color: '#2c2e8c'
        // hsl(239,52%,36%)rgb(44,46,140)
    },
    {
        team: 'Buffalo Bills',
        file: 'Buffalo_Bills',
        color: '#00328e'
        //hsl(219,100%,28%) rgb(0,50,142)
    },
    {
        team: 'Carolina Panthers',
        file: 'Carolina_Panthers',
        color: '#009ada'
        // hsl(198,100%,43%) rgb(0,154,218)
    },
    {
        team: 'Chicago Bears',
        file: 'Chicago_Bears',
        color: '#0b162a'
        // hsl(219,58%,10%)rgb(11,22,42)
    },
    {
        team: 'Cincinnati Bengals',
        file: 'Cincinnati_Bengals',
        color: '#dc4405'
        // hsl(18,96%,44%)rgb(220,68,5)
    },
    {
        team: 'Cleveland Browns',
        file: 'Cleveland_Browns',
        color: '#311700'
        // hsl(28,100%,10%)rgb(49,23,0)
    },
    {
        team: 'Dallas Cowboys',
        file: 'Dallas_Cowboys',
        color: '#b2b7bb'
        // hsl(207,6%,72%)rgb(178,183,187)
    },
    {
        team: 'Denver Broncos',
        file: 'Denver_Broncos',
        color: '#ff5113'
        // #ff5113  hsl(16,100%,54%)rgb(255,81,19)
    },
    {
        team: 'Detroit Lions',
        file: 'Detroit_Lions',
        color: '#a2aaad'
        // hsl(196,6%,66%)rgb(162,170,173)
    },
    {
        team: 'Green Bay Packers',
        file: 'Green_Bay_Packers',
        color: '#1f3730'
        // hsl(162,28%,17%)rgb(31,55,48)
    },
    {
        team: 'Houston Texans',
        file: 'Houston_Texans',
        color: '#ac1a2f'
        // hsl(351,74%,39%)rgb(172,26,47)
    },
    {
        team: 'Indianapolis Colts',
        file: 'Indianapolis_Colts',
        color: '#003a70'
        // hsl(209,100%,22%)rgb(0,58,112)
    },
    {
        team: 'Jacksonville Jaguars',
        file: 'Jacksonville_Jaguars',
        color: '#006271'
        // hsl(188,100%,22%)rgb(0,98,113)
    },
    {
        team: 'Kansas City Chiefs',
        file: 'Kansas_City_Chiefs',
        color: '#c8102e'
        // hsl(350,85%,42%)rgb(200,16,46)
    },
    {
        team: 'Las Vegas Raiders',
        file: 'Las_Vegas_Raiders',
        color: '#a5acaf'
        // #a5acaf  hsl(198,6%,67%)rgb(165,172,175)
        // #a0abae hsl(193,8%,65%)rgb(160,171,174)
    },
    {
        team: 'Los Angeles Chargers',
        file: 'Los_Angeles_Chargers',
        color: '#0072ce'
        // hsl(207,100%,40%)rgb(0,114,206)
    },
    {
        team: 'Los Angeles Rams',
        file: 'Los_Angeles_Rams',
        color: '#3861aa'
        // #003593 hsl(218,100%,29%)rgb(0,53,147)
    },
    {
        team: 'Miami Dolphins',
        file: 'Miami_Dolphins',
        color: '#008e97'
        // hsl(184,100%,30%)rgb(0,142,151)
    },
    {
        team: 'Minnesota Vikings',
        file: 'Minnesota_Vikings',
        color: '#602788'
        // hsl(275,55%,34%)rgb(96,39,136)
    },
    {
        team: 'New England Patriots',
        file: 'New_England_Patriots',
        color: '#0c2340'
        // hsl(213,68%,15%)rgb(12,35,64)
    },
    {
        team: 'New Orleans Saints',
        file: 'New_Orleans_Saints',
        color: '#d3bc8d'
        // hsl(40,44%,69%)rgb(211,188,141)
    },
    {
        team: 'New York Giants',
        file: 'New_York_Giants',
        color: '#8e8e8e'
        // #8e8e8e  hsl(0,0%,56%)rgb(142,142,142)
        // #001e66 hsl(222,100%,20%)rgb(0,30,102)
    },
    {
        team: 'New York Jets',
        file: 'New_York_Jets',
        color: '#0c5840'
        // hsl(161,76%,20%)rgb(12,88,64)
    },
    {
        team: 'Philadelphia Eagles',
        file: 'Philadelphia_Eagles',
        color: '#004851'
        // hsl(187,100%,16%)rgb(0,72,81)
    },
    {
        team: 'Pittsburgh Steelers',
        file: 'Pittsburgh_Steelers',
        color: '#ffb70f'
        // hsl(42,100%,53%)rgb(255,183,15)
    },
    {
        team: 'San Francisco 49ers',
        file: 'San_Francisco_49ers',
        color: '#a6192e'
        // hsl(351,74%,37%)rgb(166,25,46)
    },
    {
        team: 'Seattle Seahawks',
        file: 'Seattle_Seahawks',
        color: '#002144'
        // hsl(211,100%,13%)rgb(0,33,68)
    },
    {
        team: 'Tampa Bay Buccaneers',
        file: 'Tampa_Bay_Buccaneers',
        color: '#cc092f'
        // hsl(348,92%,42%)rgb(204,9,47)
    },
    {
        team: 'Tennessee Titans',
        file: 'Tennessee_Titans',
        color: '#4891dc'
        // hsl(210,68%,57%)rgb(72,145,220)
    },
    {
        team: 'Washington Commanders',
        file: 'Washington_Commanders',
        color: '#5a1414'
        // hsl(0,64%,22%)rgb(90,20,20)
    }
];

const header = document.querySelector("header");
const playButton = document.querySelector("[data-play]");
const homeSection = document.querySelector("[data-home]");
const homeLeftSide = homeSection.querySelector("[data-side='leftTop']");
const homeRightSide = homeSection.querySelector("[data-side='rightBottom']");
const gameSection = document.querySelector("[data-game]");
const goBack = gameSection.querySelector("[data-back]");
const config = gameSection.querySelector("[data-config]");

const gameLeftSide = gameSection.querySelector("[data-side='leftTop']");
const gameLeftSideLogo = gameLeftSide.querySelector("[data-logo='team1']");
const gameLeftSideName = gameLeftSide.querySelector("[data-name='team1']");

const gameRightSide = gameSection.querySelector("[data-side='rightBottom']");
const gameRightSideLogo = gameRightSide.querySelector("[data-logo='team2']");
const gameRightSideName = gameRightSide.querySelector("[data-name='team2']");

const seconds = gameSection.querySelector("[data-seconds]");
const milliseconds = gameSection.querySelector("[data-milliseconds]");

let timeout;
let automatic_mode = false;
let timeToGuess = DEFAULT_TIMER;
let answerDisplayTimer = DEFAULT_ANSWER_TIMER;

playButton.addEventListener('mouseup', function(){
    checkAndToggleClass(header, 'header-slide-top-to-bottom', 'header-slide-bottom-to-top');
    checkAndToggleClass(playButton, 'appear', 'dissapear');
    checkAndToggleClass(homeLeftSide, 'left-side-appear', 'left-side-dissapear');
    checkAndToggleClass(homeRightSide, 'right-side-appear', 'right-side-dissapear');
    checkAndToggleClass(homeSection, 'section-appear', 'section-dissapear');

    cleanTimeout();
    //show the teams logos
    const indexes = getTwoTeamsIndexes();
    const team1 = TEAM_LOGOS[indexes.index1];
    const team2 = TEAM_LOGOS[indexes.index2];
    
    gameLeftSideLogo.src = `${ROOT_PATH_FILE}${team1.file}.${FILE_EXTENSION}`;
    gameLeftSide.style.backgroundColor = team1.color;
    
    gameRightSideLogo.src = `${ROOT_PATH_FILE}${team2.file}.${FILE_EXTENSION}`;
    gameRightSide.style.backgroundColor = team2.color;

    const timeout = setTimeout(function(){
        clearTimeout(timeout);
        callInterval(team1, team2);
    }, 1500);
});

goBack.addEventListener('click', function(){
    checkAndToggleClass(header, 'header-slide-bottom-to-top',  'header-slide-top-to-bottom');
    checkAndToggleClass(playButton, 'dissapear', 'appear');
    checkAndToggleClass(homeLeftSide, 'left-side-dissapear', 'left-side-appear');
    removeClassSecondsLater(homeLeftSide, 'left-side-appear', 1000);
    checkAndToggleClass(homeRightSide, 'right-side-dissapear', 'right-side-appear');
    removeClassSecondsLater(homeRightSide, 'right-side-appear', 1000);
    checkAndToggleClass(homeSection, 'section-dissapear', 'section-appear');
});

function checkAndToggleClass(element, previousClass, newClass){
    if (!!previousClass && element.classList.contains(previousClass)){
        element.classList.remove(previousClass)
    }
    element.classList.add(newClass);
}

// this function is because if the 'appear' class is applied when changing from landscape to portrait 
// it is going to be executed again, creating a non desired effect, so remove it after it is executed
function removeClassSecondsLater(element, targetClass, seconds){
    const timeout = setTimeout(function(){
        element.classList.remove(targetClass);
        clearTimeout(timeout);
    }, seconds);    
}

function getTwoTeamsIndexes(){
    const index1 = randomNumber();
    let index2 = randomNumber();
    do{
        index2 = randomNumber();
    }while(index1 === index2);

    return {index1, index2};
}

function randomNumber(){
    return Math.floor(Math.random() * TEAM_LOGOS.length);
}

function cleanTimeout(){
    if (!!interval){
        clearInterval(interval);
    }
    if(!!timeout){
        clearTimeout(timeout);
    }
}

function callInterval(team1, team2){
    let timerSeconds = timeToGuess;
    let timerMilliseconds = 0;

    seconds.innerText = String(timerSeconds).padStart(2,'0');
    milliseconds.innerText = String(timerMilliseconds).padStart(2,'0');

    displayDeciSeconds();
    interval = setInterval(() => {
        if (timerSeconds == 0){
            clearInterval(interval);
            // display the teams names
            gameLeftSideName.innerText = team1.team;
            gameRightSideName.innerText = team2.team
            seconds.innerText = '--';
            milliseconds.innerText = '--';            
        }else{
            displayDeciSeconds();
            timerSeconds = timerSeconds - 1;            
            seconds.innerText = String(timerSeconds).padStart(2,'0');
        }
    }, 1000);
}

function displayDeciSeconds(){
    let timerMilliseconds = 0;
    let interval2 = setInterval(() => {
        timerMilliseconds = timerMilliseconds == 0 ? 99 : timerMilliseconds - 1;
        milliseconds.innerText = String(timerMilliseconds).padStart(2,'0');
        if(timerMilliseconds == 0){
            clearInterval(interval2);
        }
    }, 10);
}
/* 
let interval;
let timeout;
let automatic_mode = false;
let timeToGuess = DEFAULT_TIMER;
let answerDisplayTimer = DEFAULT_ANSWER_TIMER;

const menu = document.getElementById('menu');
const submenu = document.getElementById('submenu');
const automatic_check = document.getElementById('automatic');
const guessingTimer = document.getElementById('guessingTimer');
const answerTimer = document.getElementById('answerTimer');

const applyButton = document.getElementById('apply');

const startText = document.getElementById('startText');
const startButton = document.getElementById('start');
const timerLayer = document.getElementById('timer');

const leftSide = document.getElementById('left_side');
const leftImage = document.getElementById('img_left');
const leftName = document.getElementById('name_left');

const rightSide = document.getElementById('right_side');
const rightImage = document.getElementById('img_right');
const rightName = document.getElementById('name_right');

guessingTimer.value = DEFAULT_TIMER;
answerTimer.value = DEFAULT_ANSWER_TIMER;

menu.addEventListener('click', function(){
    if (submenu.style.display === 'block'){
        submenu.style.display = 'none';
    }else{
        submenu.style.display = 'block';
    }
});

applyButton.addEventListener('click', function(){    
    automatic_mode = automatic_check.checked;
    timeToGuess = getValue(guessingTimer.value, DEFAULT_TIMER);
    answerDisplayTimer = getValue(answerTimer.value, DEFAULT_ANSWER_TIMER);

    // updating the values in case they were no valid
    guessingTimer.value = timeToGuess;
    answerTimer.value = answerDisplayTimer;

    // close the submenu
    submenu.style.display = 'none';
    if (!!interval){
        clearInterval(interval);
    }
    if(!!timeout){
        clearTimeout(timeout);
    }

    if (automatic_mode){
        start();
    }else{
        resetPlayButton();

        // deleting the data from both sides
        startText.style.display = 'block';
        leftImage.src = '';
        leftSide.style.backgroundColor = 'initial';
        rightImage.src = '';
        rightSide.style.backgroundColor = 'initial';
        leftName.innerText = '';
        rightName.innerText = '';
    }
});

startButton.addEventListener('click',
function(){
    start();
});

function getTwoIndexes(){
    const index1 = randomNumber();
    let index2 = randomNumber();
    do{
        index2 = randomNumber();
    }while(index1 === index2);

    return {index1, index2};
}

function randomNumber(){
    return Math.floor(Math.random() * TEAM_LOGOS.length);
}

function getValue(valueText, defaultValue){
    if(!valueText){
        return defaultValue;
    }
    return +valueText <= 0 ? defaultValue : +valueText;
}

function resetPlayButton(){    
    startButton.style.display = 'block';
    startButton.style.visibility = 'visible';
    timerLayer.style.display = 'none';
    timerLayer.innerText = '';
}

function start(){
    // toggle the play button and time layer
    startText.style.display = 'none';
    startButton.style.display = 'none';
    startButton.style.visibility = 'hidden';
    timerLayer.style.display = 'block';
    timerLayer.innerText = '';

    // remove the teams names
    leftName.innerText = null;
    rightName.innerText = null;
    
    //show the teams logos
    const indexes = getTwoIndexes();
    const team1 = TEAM_LOGOS[indexes.index1];
    const team2 = TEAM_LOGOS[indexes.index2];
    
    leftImage.src = `${ROOT_PATH_FILE}${team1.file}.${FILE_EXTENSION}`;
    leftSide.style.backgroundColor = team1.color;
    
    rightImage.src = `${ROOT_PATH_FILE}${team2.file}.${FILE_EXTENSION}`;
    rightSide.style.backgroundColor = team2.color;

    // start the timer
    callInterval(team1, team2);
}
// Interval for guessing the teams names in 5 seconds
function callInterval(team1, team2){
    let timerStart = timeToGuess;
    timerLayer.innerText = timerStart;
    interval = setInterval(() => {
        if (timerStart == 1){
            clearInterval(interval);
            // display the teams names
            leftName.innerText = team1.team;
            rightName.innerText = team2.team;

            if (automatic_mode){
                timerLayer.innerText = '-';
                (() => {
                    timeout = setTimeout(() => {
                        start();
                    }, answerDisplayTimer * 1000);
                })();
            }else{
                resetPlayButton();
            }      
        }else{
            timerStart--;
            timerLayer.innerText = timerStart;
        }
    }, 1000);
} */