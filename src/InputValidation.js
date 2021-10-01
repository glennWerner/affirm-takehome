const InputValidation = (info) => {
  let inputErrors = {
    card: false,
    cvv2: false,
    month: false,
    year: false,
  };
  console.log("Input Validation info: " + info.name);
  const cardNumber = info.number.toString();
  const firstDigits = cardNumber.slice(0, 2);
  const cvv2Number = info.cvv2.toString();

  if (cardNumber.length < 15) {
    inputErrors.card = true;
  }

  if (cardNumber.length === 15) {
    if (firstDigits !== "37" && firstDigits !== "34") inputErrors.card = true;
    if (cvv2Number.length !== 4) inputErrors.cvv2 = true;
  }

  if (cardNumber.length === 16) {
    if (firstDigits.slice(0, 1) !== "4") inputErrors.card = true;
    if (cvv2Number.length !== 3) inputErrors.cvv2 = true;
  }

  const today = new Date();
  if (info.monthExp > 12 || info.monthExp < 1) {
    inputErrors.month = true;
  }
  if (info.yearExp < today.getFullYear()) {
    inputErrors.year = true;
  } else if (info.yearExp === today.getFullYear()) {
    if (info.monthExp <= today.getMonth()) {
      inputErrors.month = true;
    }
  }

  return inputErrors;
};

export default InputValidation;
