// @flow

/**
 * simplify the error message to be rendered to the user
 * @param {string} rawMessage
 * @return {string}
 */
export const toUserFriendly = (rawMessage: string): string => {
  if (/duplicate key error/.exec(rawMessage)) {
    return 'Cet identifiant est unique';
  }
  return "Une erreur s'est produite";
};
