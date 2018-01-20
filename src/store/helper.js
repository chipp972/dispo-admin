// @flow

export const createAsyncActionType = (actionName: string) => ({
  PENDING: `${actionName}_PENDING`,
  FAILURE: `${actionName}_FAILURE`,
  SUCCESS: `${actionName}_SUCCESS`
});

