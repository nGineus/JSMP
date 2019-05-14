'use strict';

class Heroes {
    heroes = [];

    constructor() {

    }

    addHero(people) {
        this.heroes.push(people);
    }

    removeHero(people) {
        this.heroes = this.heroes.filter(hero => hero.info !== people.info);
    }

    storyAboutHeroes() {
        if (!heroes) {
            console.log('There is no heroes in our fatherland...');
        } else {
            console.log('Our heroes:');
            this.heroes.forEach( hero => console.log(hero.info));
            console.log('ready for battle');

        }
    }

}

module.exports = Heroes;
