const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    for ( i=0;i<players.length;i++){
        let playerDetail = {};
        playerDetail.name = players[i];
        playerDetail.strength = getRandomStrength();
        playerDetail.image = `../images/super-${i+1}.png`
         
        if (i%2==0){
            playerDetail.type = "hero"
        }
        else {
            playerDetail.type = "villain"
        }
    
        detailedPlayers.push(playerDetail)
          console.log(detailedPlayers)
    }
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.floor(Math.random()*100)
    // return Math.floor(Math.random()*(max-min)) + min
}

const buildPlayers = (players, type) => {
    let fragment = '';
    // console.log(players[0].type,type)
    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    for ( i=0;i<players.length;i++){
        if (players[i].type === type){
            let item = 
            `<div class="player">
                <img src="${players[i].image}" alt="">
                <div class="name">${players[i].name}</div>
                <div class="strength">${players[i].strength}</div>
            </div>`
            
            fragment += item;
        }
        // console.log(item)
    }
    // console.log(fragment)
    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}