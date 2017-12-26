// @flow

/**
 * simplify the error message to be rendered to the user
 * @param {string} rawMessage
 * @return {string}
 */
export const toUserFriendly = (rawMessage: string): string => {
  if (/duplicate key error/.test(rawMessage)) {
    return 'Cet identifiant est unique';
  } else if (/invalid old password/.test(rawMessage)) {
    return "L'ancien mot de passe est invalide";
  } else if (/No recipients defined/.test(rawMessage)) {
    return "L'adresse email est invalide";
  } else if (/maps.googleapis.com/.test(rawMessage)) {
    return "Probleme lors de la verification d'adresse";
  }
  return "Une erreur s'est produite";
};

/**
 * determine if tthe action type has an associated message
 * @param {string} actionType
 * @return {boolean}
 */
export const isHandledActionType = (actionType: string): boolean => {
  const apiActionRegex = /([A-Z]+)_([A-Z]+)_([A-Z]+)/.exec(actionType);
  if (!apiActionRegex || apiActionRegex.length < 4) return false;
  if (apiActionRegex[2] !== 'COMPANY') return false;
  return true;
};

export const modelNameToMessage = (modelName: string) => {
  switch (modelName) {
    case 'COMPANY':
      return 'Une entreprise ';
    case 'USER':
      return 'Un utilisateur ';
    case 'COMPANYTYPE':
      return 'Une entreprise ';
    case 'COMPANY_POPULARITY':
      return 'Un utilisateur a clique sur une entreprise';
    default:
      return '';
  }
};

/**
 * convert an action type into a message for the user
 * @param {string} actionType
 * @return {string}
 */
export const toMessage = (actionType: string): string => {
  const apiActionRegex = /([A-Z]+)_([A-Z]+)_([A-Z]+)/.exec(actionType);
  if (!apiActionRegex || apiActionRegex.length < 4) return '';
  const [, action, modelName] = apiActionRegex;
  const subject = modelNameToMessage(modelName);
  if (subject.length === 0 || subject.length > 25) return subject;
  switch (action) {
    case 'CREATE':
      return `${subject} a ete cree`;
    case 'EDIT':
      return `${subject} a ete modifiee`;
    case 'REMOVE':
      return `${subject} a ete supprimee`;
    default:
      return '';
  }
};
