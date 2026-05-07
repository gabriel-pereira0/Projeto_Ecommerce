export const handlePhoneMask = (e) => {
  let value = e.target.value.replace(/\D/g, '');

  value = value.replace(/^(\d{2})(\d)/g, '($1) $2');

  value = value.replace(/(\d{5})(\d)/, '$1-$2');

  e.target.value = value.slice(0, 15);
};

export const handleCardMask = (e) => {
  let value = e.target.value.replace(/\D/g, '');

  value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

  e.target.value = value.slice(0, 19);
};

export const handleCvvMask = (e) => {
  let value = e.target.value.replace(/\D/g, '');

  e.target.value = value.slice(0, 4);
};

export const handleExpirationMask = (e) => {
  let value = e.target.value.replace(/\D/g, '');

  value = value.replace(/(\d{2})(\d)/, '$1/$2');

  e.target.value = value.slice(0, 5);
};

export const handleCepMask = (e) => {
  let value = e.target.value.replace(/\D/g, '');

  value = value.replace(/(\d{5})(\d)/, '$1-$2');

  e.target.value = value.slice(0, 9);
};
