import gameRules from '../data/gameRules.json';
import { rollDie, roll3d6, rollAbilityScores } from './diceRoller';
import { getAbilityModifiers } from './modifiers';

export const createCharacter = (name, characterClass, race, alignment, abilityScores) => {
  const modifiers = getAbilityModifiers(abilityScores);
  let hitPoints;
  let thac0;
  let savingThrows;
  let languages;
  let specialAbilities;

  switch (characterClass) {
    case 'Magic-User':
      hitPoints = Math.max(rollDie(4) + modifiers.Constitution, 1); // Magic-User uses 1d4 for hit points
      thac0 = 19; // Default starting THAC0 for Magic-User
      savingThrows = {
        death: 13,
        wands: 14,
        paralysis: 13,
        breath: 16,
        spells: 15
      };
      languages = ['Common', alignment];
      specialAbilities = gameRules.classes[characterClass].specialAbilities;
      break;
    // Add other classes as needed
    default:
      hitPoints = Math.max(rollDie(6) + modifiers.Constitution, 1); // Default to 1d6 for hit points
      thac0 = 19; // Default starting THAC0
      savingThrows = {
        death: 12,
        wands: 13,
        paralysis: 14,
        breath: 15,
        spells: 16
      };
      languages = ['Common', alignment];
      specialAbilities = [];
      break;
  }

  return {
    name,
    class: characterClass,
    race,
    alignment,
    abilityScores,
    abilityModifiers: modifiers,
    hitPoints,
    level: 1,
    experiencePoints: 0,
    armorClass: 9 + modifiers.Dexterity, // Default unarmored AC
    thac0,
    savingThrows,
    movementRate: "120’ (40’)",
    languages,
    specialAbilities
  };
};
