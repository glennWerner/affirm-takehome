import { useState } from "react";
import "./CreditCardForm.css";
import InputValidation from "./InputValidation";

const CreditCardForm = () => {
  const [cardInfo, setCardInfo] = useState({
    name: "",
    number: "",
    cvv2: "",
    monthExp: "",
    yearExp: "",
  });
  const [inputErrors, setInputErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  const handleOnSubmit = (e) => {
    setInputErrors(InputValidation(cardInfo));
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    if (
      cardInfo.name &&
      cardInfo.number &&
      cardInfo.cvv2 &&
      cardInfo.monthExp &&
      cardInfo.yearExp
    )
      setIsDisabled(false);

    const { name, value, maxLength } = e.target;
    let numValue;
    if (
      name === "number" ||
      name === "cvv2" ||
      name === "monthExp" ||
      name === "yearExp"
    ) {
      numValue = value.slice(0, maxLength);
      setCardInfo({ ...cardInfo, [name]: numValue });
      return;
    }
    setCardInfo({ ...cardInfo, [name]: value });
  };

  return (
    <form data-testid="form-1" className="Form" onSubmit={handleOnSubmit}>
      <h3>Enter your credit card information</h3>
      <label>
        <input
          className="Input"
          type="text"
          name="name"
          placeholder="Name"
          value={cardInfo.name}
          onChange={handleOnChange}
          title="name-input"
        />
      </label>
      <label>
        <input
          className="Input"
          type="number"
          name="number"
          value={cardInfo.number}
          placeholder="Card Number"
          onChange={handleOnChange}
          maxLength="16"
          title="number-input"
        />
      </label>
      <label>
        <input
          className="Input"
          type="number"
          name="cvv2"
          value={cardInfo.cvv2}
          placeholder="CVV2"
          onChange={handleOnChange}
          maxLength="4"
          title="cvv2-input"
        />
      </label>
      <div className="Date-Div">
        <label>
          <input
            className="Input"
            type="number"
            name="monthExp"
            value={cardInfo.monthExp}
            placeholder="Exp. Month"
            onChange={handleOnChange}
            maxLength="2"
            title="month-input"
          />
        </label>
        <label>
          <input
            className="Input"
            type="number"
            name="yearExp"
            value={cardInfo.yearExp}
            placeholder="Exp. Year"
            onChange={handleOnChange}
            maxLength="4"
            title="year-input"
          />
        </label>
      </div>
      <input
        className="Button"
        type="submit"
        value="Submit"
        disabled={isDisabled}
        title="submit-button"
      />
      {Object.entries(inputErrors).map(([key, value]) => {
        if (value) {
          return (
            <div
              className="Error-Div"
              id={key}
              title="error-div"
            >{`*Please enter a valid ${key} number`}</div>
          );
        }
        return "";
      })}
    </form>
  );
};

export default CreditCardForm;
