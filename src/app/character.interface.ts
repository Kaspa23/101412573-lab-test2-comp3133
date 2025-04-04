export interface Character {
    id: string,
    name: string;
    house: string;
    image: string;
    species: string;
    wizard: boolean;
    ancestry: string;
    wand: Wand;
    actor: string;
}

export interface Wand {
  wood: string;
  core: string;
  length: string | number; 
}

