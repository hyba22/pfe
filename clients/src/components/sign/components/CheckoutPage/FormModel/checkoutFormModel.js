export default {
  formId: 'checkoutForm',
  formField: {
    nom: {
      name: 'nom',
      label: 'nom',
      requiredErrorMsg: 'nom est obligatoire'
    },
    prenom: {
      name: 'prenom',
      label: 'prenom',
      requiredErrorMsg: 'prenom est obligatoire',
    },
   dateNaiss: {
      name: 'dateNaiss',
      label: 'date de naissance',
      requiredErrorMsg: 'Address Line 1 is required'
    },
    cin: {
      name: 'cin',
      label: 'cin',
      requiredErrorMsg: 'Address Line 1 is required'
    },
    ville: {
      name: 'ville',
      label: 'ville',
      requiredErrorMsg: 'City is required'
    },
    civilite: {
      name: 'civilite',
      label: 'civilite',
      requiredErrorMsg: 'City is required'
    },
    universite: {
      name: 'universite',
      label: 'universite*',
      requiredErrorMsg: 'universite is required',
      invalidErrorMsg: 'universite is not valid (e.g. 70000)'
    },
    type_stage: {
      name: 'type_stage',
      label: 'type_stage*',
      requiredErrorMsg: 'type_stage is required'
    },
    niveau: {
      name: 'niveau',
      label: 'niveau'
    },
    sujet: {
      name: 'sujet',
      label: 'sujet*',
      requiredErrorMsg: 'Name on card is required'
    },
    specialite: {
      name: 'specialite',
      label: 'specialite*',
      requiredErrorMsg: 'Card number is required',
      invalidErrorMsg: 'Card number is not valid (e.g. 4111111111111)'
    },
    duree: {
      name: 'duree',
      label: 'duree*',
      requiredErrorMsg: 'Expiry date is required',
      invalidErrorMsg: 'Expiry date is not valid'
    },
    email: {
      name: 'email',
      label: 'Email*',
      requiredErrorMsg: 'CVV is required',
      invalidErrorMsg: 'CVV is invalid (e.g. 357)'
    },
    password: {
      name: 'password',
      label: 'password*',
      requiredErrorMsg: 'password is required',
      invalidErrorMsg: 'CVV is invalid (e.g. 357)'
    },
    confirmpass: {
      name: 'confirmpass',
      label: 'confirmpass*',
      requiredErrorMsg: 'CVV is required',
      invalidErrorMsg: 'CVV is invalid (e.g. 357)'
    }
  }
};
