export const getAbilityModifiers = (abilityScores) => {
    const modifiers = {};
    for (const score in abilityScores) {
      const value = abilityScores[score];
      if (value <= 3) modifiers[score] = -3;
      else if (value <= 5) modifiers[score] = -2;
      else if (value <= 8) modifiers[score] = -1;
      else if (value <= 12) modifiers[score] = 0;
      else if (value <= 15) modifiers[score] = 1;
      else if (value <= 17) modifiers[score] = 2;
      else modifiers[score] = 3;
    }
    return modifiers;
  };
  