'use strict';

class Heroes {
    heroes = [];
    counter = 0;

    constructor() {
    }

    addHero(people) {
        this.heroes.push(people);
    }

    removeHero(people) {
        this.heroes = this.heroes.filter(hero => hero.info !== people.info);
    }

    storyAboutHeroes() {
        if (this.heroes.length === 0) {
            console.log('There is no heroes in our fatherland...\n');
        } else {
            console.log('Our heroes:');
            this.heroes.forEach(hero => console.log(hero.info));
            console.log('ready for battle \n');
        }
    }


    iterateResetCounter() {
        console.log('Reset counter... \n');
        this.counter = 0;
    }

    iterateIsNotLast() {
        return this.counter !== this.heroes.length;
    }

    * iterateHero() {
        while (this.iterateIsNotLast()) {
            yield this.heroes[this.counter];
            this.counter++;
        }
    }

}

module.exports = Heroes;
