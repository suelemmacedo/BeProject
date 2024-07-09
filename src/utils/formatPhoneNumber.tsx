export const formatPhoneNumber = (phoneNumber: string): string => {
  const phone = phoneNumber.replace(/[^\d]/g, '');
  const match = phone.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    return `+${match[1]}(${match[2]})${match[3]}-${match[4]}`;
  }
  return phoneNumber;
};


