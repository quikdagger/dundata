export const ADVANCE_TIME = 'ADVANCE_TIME';

export const advanceTime = (hours) => ({
  type: ADVANCE_TIME,
  payload: hours,
});
