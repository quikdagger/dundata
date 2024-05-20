import gameRules from '../data/gameRules.json';
import { rollDie, roll3d6, rollAbilityScores } from './diceRoller';
import { getAbilityModifiers } from './modifiers';

export const createCharacter = (name, characterClass, race, alignment, abilityScores) => {
  const modifiers = getAbilityModifiers(abilityScores);
  const hitPoints = Math.max(rollDie(6) + modifiers.Constitution, 1); // Elf uses 1d6 for hit points
  const thac0 = 19; // Default starting THAC0 for elf
  const savingThrows = {
    death: 12,
    wands: 13,
    paralysis: 13,
    breath: 15,
    spells: 15
  };

  const languages = ['Common', alignment, 'Elvish', 'Gnoll', 'Hobgoblin', 'Orcish'];

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
    specialAbilities: gameRules.classes[characterClass].specialAbilities
  };
};
