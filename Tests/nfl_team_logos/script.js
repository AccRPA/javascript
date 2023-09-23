const rootPathFile = 'logos/';
const file_extension = 'png';
const teamLogos = [
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
        color: '#a0abae'
        // hsl(193,8%,65%)rgb(160,171,174)
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
        color: '#ffffff'
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
]

document.getElementById('start').addEventListener('click',
function(){
    this.style.opacity = 0;
    this.style.visibility = 'hidden';
});
const indexes = getTwoIndexes();
const team1 = teamLogos[indexes.index1];
const team2 = teamLogos[indexes.index2];

document.getElementById('left_side').style.backgroundColor = team1.color;
document.getElementById('img_left').setAttribute('src', `${rootPathFile}${team1.file}.${file_extension}`);
document.getElementById('name_left').innerText = team1.team;

document.getElementById('right_side').style.backgroundColor = team2.color;
document.getElementById('img_right').setAttribute('src', `${rootPathFile}${team2.file}.${file_extension}`);
document.getElementById('name_right').innerText = team2.team;


function getTwoIndexes(){
    const index1 = Math.round(Math.random() * teamLogos.length);
    let index2 = Math.round(Math.random() * teamLogos.length);
    do{
        index2 = Math.round(Math.random() * teamLogos.length);
    }while(index1 === index2);

    return {index1, index2};
}


