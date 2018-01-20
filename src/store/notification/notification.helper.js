// @flow

/**
 * simplify the error message to be rendered to the user
 * @param {string} rawMessage
 * @return {string}
 */
export const toUserFriendly = (rawMessage: string): string => {
  if (/duplicate key error/.test(rawMessage)) {
    return 'Ce champs doit être unique';
  } else if (/invalid old password/.test(rawMessage)) {
    return "L'ancien mot de passe est invalide";
  } else if (/No recipients defined/.test(rawMessage)) {
    return "L'adresse email est invalide";
  } else if (/maps.googleapis.com/.test(rawMessage)) {
    return "Problème lors de la vérification d'adresse";
  } else if (/geometry/.test(rawMessage)) {
    return 'Adresse invalide';
  } else if (/user not found/i.test(rawMessage)) {
    return 'Email ou mot de passe incorrect';
  } else if (/operation not permitted/i.test(rawMessage)) {
    return 'Un compte administrateur est necessaire pour cette action';
  }
  return "Une erreur s'est produite";
};

export const modelNameToMessage = (modelName: string) => {
  switch (modelName) {
    case 'COMPANY':
      return 'Une entreprise ';
    case 'USER':
      return 'Un utilisateur ';
    case 'COMPANYTYPE':
      return "Un type d'entreprise ";
    case 'COMPANY_POPULARITY':
      return 'Un utilisateur a cliqué sur une entreprise';
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
      return `${subject} a été crée`;
    case 'EDIT':
      return `${subject} a été modifié(e)`;
    case 'REMOVE':
      return `${subject} a été supprimé(e)`;
    default:
      return '';
  }
};
