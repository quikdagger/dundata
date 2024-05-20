export const rollDie = (sides) => Math.floor(Math.random() * sides) + 1;

export const roll3d6 = () => rollDie(6) + rollDie(6) + rollDie(6);

export const rollAbilityScores = () => {
  return {
    Strength: roll3d6(),
    Intelligence: roll3d6(),
    Wisdom: roll3d6(),
    Dexterity: roll3d6(),
    Constitution: roll3d6(),
    Charisma: roll3d6(),
  };
};
