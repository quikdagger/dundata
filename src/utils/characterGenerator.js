import gameRules from '../data/gameRules.json';
import { rollDie, roll3d6, rollAbilityScores } from './diceRoller';
import { getAbilityModifiers } from './modifiers';

export const createCharacter = (name, characterClass, race, alignment, abilityScores) => {
  const modifiers = getAbilityModifiers(abilityScores);
  const hitPoints = Math.max(rollDie(6) + modifiers.Constitution, 1); // Cleric uses 1d6 for hit points
  const thac0 = 19; // Default starting THAC0 for cleric
  const savingThrows = {
    death: 11,
    wands: 12,
    paralysis: 14,
    breath: 16,
    spells: 15
  };

  const languages = ['Common', alignment];

  if (abilityScores.Intelligence >= 13) {
    const additionalLanguages = ['Elvish', 'Dwarvish', 'Orcish', 'Gnomish'];
    const numAdditionalLanguages = Math.floor((abilityScores.Intelligence - 12) / 2);
    for (let i = 0; i < numAdditionalLanguages; i++) {
      languages.push(additionalLanguages[i]);
    }
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
    spells: gameRules.classes[characterClass].spells
  };
};
