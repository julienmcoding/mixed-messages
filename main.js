// The two main characters selection, as object.
const hero = [
    {
        name: 'princess',
        attack: ['screamed like hell', 'launched meteors', 'sang a deadly song'],
    },
    {
        name: 'cat',
        attack: ['screamed like hell', 'launched meteors', 'sang a deadly song'],
    },
    {
        name: 'knight',
        attack: ['launched meteors', 'throwed a sharp weapon'],
    },
    {
        name: 'bird',
        attack: ['screamed like hell', 'launched meteors', 'sang a deadly song'],
    },
    {
        name: 'elf',
        attack: ['launched meteors', 'throwed a sharp weapon'],
    },
];

const monster = [
    {
        name: 'dragon',
        attack: 'in its giant mouth',
    },
    {
        name: 'pterodactyl',
        attack: 'in its giant mouth',
    },
    {
        name: 'ogre',
        attack: 'in its giant mouth',
    },
    {
        name: 'demon',
        attack: 'on his shoulder',
    },
    {
        name: 'vampire',
        attack: 'on his shoulder',
    },
];


// The random selection
function randomArrayIndex (array) {
    let rdm = array[Math.floor(Math.random() * array.length)];
    return rdm;
}

const currentHero = randomArrayIndex(hero);
const currentMonster = randomArrayIndex(monster);

// The story with some attributes changing everytime
console.log(`Long, long time ago, in a land far away, full of magic and surprising creatures, lived a mysterious people. 
Their kingdom streched from the dark and cold forest of the north to the endless sea of the south. 
A day, in a small village, surronded by mountains, a little ${currentHero.name} was playing with a friend named Elvy, calmly. 
Suddenly, a gigantic ${currentMonster.name} appeared. He took Elvy ${currentMonster.attack} and ran away.
But he didn't know that our little ${currentHero.name} had magical powers.
Within a second, our hero ${randomArrayIndex(currentHero.attack)} and killed the monster, Elvy was saved and they returned to their game.
Even now they still hang around as they never got old.`); 
