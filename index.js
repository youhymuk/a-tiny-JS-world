/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const dog = {
  species: 'dog',
  name: 'Rick',
  gender: 'male',
  legs: 4,
  hands: 0,
  saying: 'woof-woof',
  friends: '',
};

const cat = {
  species: 'cat',
  name: 'Oscar',
  gender: 'male',
  legs: 4,
  hands: 0,
  saying: 'meow',
  friends: '',
};

const man = {
  species: 'human',
  name: 'Jerry',
  gender: 'male',
  legs: 2,
  hands: 2,
  saying: "Hey, what's up?",
  friends: 'Jenny, Summer',
};

const woman = {
  species: 'human',
  name: 'Summer',
  gender: 'female',
  legs: 2,
  hands: 2,
  saying: 'Hello Jerry',
  friends: '',
};

const catwoman = {
  species: 'cat-woman',
  name: 'Oscar',
  gender: 'male',
  legs: 4,
  hands: 0,
  saying: 'meow',
  friends: '',
};

const inhabitants = new Array(man, woman, cat, dog, catwoman);
// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.
   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */
function listInhabitants(inhabitants) {
  for (const character of inhabitants) {
    let description = `${character.species}; ${character.name}; ${character.gender}; ${character.legs}; ${character.hands}; ${character.saying}; ${character.friends}`;
    print(description);
  }
}
document.addEventListener('DOMContentLoaded', () =>
  listInhabitants(inhabitants)
);
/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */
