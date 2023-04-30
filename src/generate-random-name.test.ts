import { describe, expect, test } from '@jest/globals';
import {
  generateAnimalName,
  generateRandomName,
  generateStarWarsName,
} from './generate-random-name';

describe('Generate name function tests', () => {
  test('Can generate a new random name', () => {
    expect(generateRandomName('1')).toBeTruthy();
  });

  test('Can generate a new random animal name', () => {
    expect(generateAnimalName()).toBeTruthy();
  });

  test('Can generate a new random Star Wars name', () => {
    expect(generateStarWarsName()).toBeTruthy();
  });

  test('Cannot generate a name with length bigger then 5', () => {
    expect(() => generateRandomName('6')).toThrowError(
      'Name length cannot be bigger than 5'
    );
  });
});
