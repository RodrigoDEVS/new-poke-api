export class PokemonDetails {
    id: number | any;
    order: number | any;
    name: string | any;
    height: number | any;
    abilities: Ability[];
    spices: Species | any;
    types: Type[];
    weight: number | any;
    sprites: Sprite | any;
    stats: Stat[] | any;

    constructor() {
        this.abilities  = [];
        this.types = [];
    }
}

class Ability  {
    ability: {
        name: string ;
    } | any

    constructor() {

    }
}

class Species {
    url: string | any;
} 

class Type {
    slot: number | any;
    type: {
        name: string ;
    } | any
}

class Sprite {
    front_default: string | any;
}

class Stat {
    base_stat: number | any;
    stat: {
        name: string;
    } | any
}