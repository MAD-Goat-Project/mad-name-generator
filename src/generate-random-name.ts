import {
  animals,
  colors,
  countries,
  languages,
  starWars,
  uniqueNamesGenerator,
} from 'unique-names-generator';

const DEFAULT_NAME_LENGTH = 1;

/**
 * Generate a random name based on the given factor.
 * The dictionary used is a combination of Star Wars, animals, colors, countries and languages.
 * Factor 1 will generate a name with 2 words based on the Star Wars dictionary.
 * Factor 2 is Star Wars + animals.
 * Factor 3 is Star Wars + animals + colors.
 * Factor 4 is Star Wars + animals + colors + countries.
 * Factor 5 is Star Wars + animals + colors + countries + languages.
 * @param {string} factor - The length factor for the random name generator library. Cannot be bigger than 5.
 * @returns {string} - The random generated name.
 */
export function generateRandomName(factor: string): string {
  // This is a security vulnerability, using eval is not recommended.
  // The usage of eval is only for demonstration purposes.
  // See https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/eval#never_use_eval! for more information.
  const length: number = eval(factor) || DEFAULT_NAME_LENGTH;

  if (length > 5) {
    throw new Error('Name length cannot be bigger than 5');
  }

  return uniqueNamesGenerator({
    dictionaries: [starWars, animals, colors, countries, languages],
    length,
    separator: ' ',
    style: 'capital',
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
    style: 'capital',
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
    style: 'capital',
  });
}
