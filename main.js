// The two main characters selection
const hero = ['princess', 'cat', 'knight', 'bird', 'elf'];
const monster = ['dragon', 'pterodactyl', 'ogre', 'demon', 'vampire'];

// The random selection
function random (array) {
    let rdm = array[Math.floor(Math.random() * array.length)];
    return rdm;
}

const currentHero = random(hero);
const currentMonster = random(monster);

// Here a random action based on the hero
function heroAttack () {
    if(currentHero === 'princess' || currentHero === 'cat' || currentHero === 'bird') {
    const heroAttack = ['screamed like hell', 'launched meteors', 'sang a deadly song'];
    return random(heroAttack);
} else if(currentHero === 'knight' || currentHero === 'elf') {
    const heroAttack = ['launched meteors', 'throwed a sharp weapon'];
    return random(heroAttack);
}}
// Here a random action based on the monster
function monsterAttack () {
    if(currentMonster === 'dragon' || currentMonster === 'pterodactyl' || currentMonster === 'ogre') {
    const monsterAttack = ['in its giant mouth'];
    return monsterAttack;
} else if(currentMonster === 'demon' || currentMonster === 'vampire') {
    const monsterAttack = ['on his shoulder'];
    return monsterAttack;
}}

// The story with some attributes changing everytime
console.log(`Long, long time ago, in a land far away, full of magic and surprising creatures, lived a mysterious people. 
Their kingdom streched from the dark and cold forest of the north to the endless sea of the south. 
A day, in a small village, surronded by mountains, a little ${currentHero} was playing with a friend named Elvy, calmly. 
Suddenly, a gigantic ${currentMonster} appeared. He took Elvy ${monsterAttack()} and ran away.
But he didn't know that our little ${currentHero} had magical powers.
Within a second, our hero ${heroAttack()} and killed the monster, Elvy was saved and they returned to their game.
Even now they still hang around as they never got old.`); 
