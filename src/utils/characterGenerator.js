import gameRules from '../data/gameRules.json';
import { rollDie, roll3d6, rollAbilityScores } from './diceRoller';
import { getAbilityModifiers } from './modifiers';

export const createCharacter = (name, characterClass, race, alignment, abilityScores) => {
  const modifiers = getAbilityModifiers(abilityScores);
  const hitPoints = rollDie(gameRules.classes[characterClass].hitDie.slice(1)) + modifiers.Constitution;
  const thac0 = 19; // Default starting THAC0
  const savingThrows = {
    death: 10,
    wands: 11,
    paralysis: 12,
    breath: 13,
    spells: 14
  };

  const languages = ['Common', alignment];

  if (abilityScores.Intelligence >= 13) {
    const additionalLanguages = ['Elvish', 'Dwarvish', 'Orcish', 'Gnomish']; // Example list
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
    hitPoints: Math.max(hitPoints, 1), // Ensure at least 1 hit point
    level: 1,
    experiencePoints: 0,
    armorClass: 9 + modifiers.Dexterity, // Default unarmored AC
    thac0,
    savingThrows,
    movementRate: "120’ (40’)",
    languages
  };
};
