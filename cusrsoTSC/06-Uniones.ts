//? las interfaces de ahuevo necestian tener las mismas caracterisitacs no pueden difereir   
interface Bird{
    swimm(): void
    layEggs(): void
}


interface fish{
    fly(): void;
    layEggs(): void;
}

declare function getSammllPet():fish & Bird    

const Pet = getSammllPet();

Pet.swimm

