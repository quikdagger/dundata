import gameRules from '../data/gameRules.json';
import { rollDie, roll3d6, rollAbilityScores } from './diceRoller';
import { getAbilityModifiers } from './modifiers';

export const createCharacter = (name, characterClass, race, alignment, abilityScores) => {
  const modifiers = getAbilityModifiers(abilityScores);
  const hitPoints = Math.max(rollDie(8) + modifiers.Constitution, 1); // Dwarf uses 1d8 for hit points
  const thac0 = 19; // Default starting THAC0 for dwarf
  const savingThrows = {
    death: 8,
    wands: 9,
    paralysis: 10,
    breath: 13,
    spells: 12
  };

  const languages = ['Common', alignment, 'Dwarvish', 'Gnomish', 'Goblin', 'Kobold'];

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
    movementRate: "60’ (20’)",
    languages,
    specialAbilities: gameRules.classes[characterClass].specialAbilities
  };
};
