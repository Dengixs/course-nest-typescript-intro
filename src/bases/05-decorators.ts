class NewPokemon {
    constructor(
        public id: number,
        public name: string,
    ){}

    scream(){
        console.log(`NO QUIERO!!!`);
    }

    speak(){
        console.log(`NO QUIERO EVOLUCIONAR!!!`);
    }

}


const MyDecorator = () => {
    return ( target: Function ) => {
        console.log(target);
        return NewPokemon;
    }
}

@MyDecorator()
export class Pokemon {

    constructor(
        public id: number,
        public name: string,
    ){}

    scream(){
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak(){
        console.log(`${ this.name }, ${ this.name }`);
    }

}

export const charmander = new Pokemon( 4, 'Charmander' );

charmander.scream();
charmander.speak();
