import {
  generateAnimalName,
  generateRandomName,
  generateStarWarsName,
} from './generate-random-name';

console.log(generateRandomName('3'));
export const nameGenerator = {
  randomName: generateRandomName,
  animalName: generateAnimalName,
  starWarsName: generateStarWarsName,
};
