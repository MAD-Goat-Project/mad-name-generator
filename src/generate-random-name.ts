import {
  animals,
  colors,
  countries,
  languages,
  starWars,
  uniqueNamesGenerator,
} from 'unique-names-generator';
import _ from 'lodash';

const DEFAULT_NAME_LENGTH = 1;

/**
 * Generate a random name
 * @param nameLength - The length of the random generated number to be returned. Cannot be bigger than 5.
 * @returns The generated name
 */
export function generateRandomName(nameLength: string): string {
  // This is a security vulnerability, using eval is not recommended.
  // The usage of eval is only for demonstration purposes.
  const length: number = !_.isEmpty(nameLength)
    ? eval(nameLength) || DEFAULT_NAME_LENGTH
    : DEFAULT_NAME_LENGTH;

  if (length > 5) {
    throw new Error('Name length cannot be bigger than 5');
  }

  return uniqueNamesGenerator({
    dictionaries: [starWars, animals, colors, countries, languages],
    length,
  });
}

/**
 * Generate a random animal name
 * @returns The generated name
 */
export function generateAnimalName(): string {
  return uniqueNamesGenerator({
    dictionaries: [animals],
    length: 1,
  });
}

/**
 * Generate a random Start Wars related name
 * @returns The generated name
 */
export function generateStarWarsName(): string {
  return uniqueNamesGenerator({
    dictionaries: [starWars],
    length: 1,
  });
}
