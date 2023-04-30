import {
  generateAnimalName,
  generateRandomName,
  generateStarWarsName,
} from './nameGenerator/generate-random-name';

export const nameGenerator = {
  randomName: generateRandomName,
  animalName: generateAnimalName,
  starWarsName: generateStarWarsName,
};
