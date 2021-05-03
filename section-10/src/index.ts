import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';


const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection .sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('ZmichaelXl');
charactersCollection.sort();
console.log(charactersCollection.data);

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const numberSorter = new Sorter(numbersCollection);
// numberSorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('ZmichaelXl');
// const characterSorter = new Sorter(charactersCollection);
// characterSorter.sort();
// console.log(charactersCollection.data);
