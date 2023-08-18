import { useEffect, useState } from "react";
import { validEmail, validPassword, validPhone } from "../utils/regexes";
import ErrorMessage from "../components/ErrorMessage";
// import { IUsers } from "../interfaces/IUsers";

export type TData = {
  phone?: string;
  email?: string;
  password?: string;
};

const useValidation = (data) => {
  const { phone, email, password } = data as TData;

  const validE = validEmail.test(email);
  const validPh = validPhone.test(phone);
  const validPa = validPassword.test(password);

  const [errorMessage, setErrorMessage] = useState({
    validE: " ",
    validPh: " ",
    validPa: " ",
  });
  const [isValid, setIsvalid] = useState(false);

  const handleValid = () => {
    if (
      errorMessage.validE.length < 2 ||
      errorMessage.validPh.length < 2 ||
      errorMessage.validPa.length < 2
    ) {
      setIsvalid(true);
    } else {
      setIsvalid(false);
    }
  };

  const handleErrorMessage = () => {
    if (!validE) {
      setErrorMessage({ ...errorMessage, validE: "Invalid email format!" });
    } else {
      setErrorMessage({ ...errorMessage, validE: " " });
    }

    if (!validPh) {
      setErrorMessage({ ...errorMessage, validPh: "Invalid email format!" });
    } else {
      setErrorMessage({ ...errorMessage, validPh: " " });
    }

    if (!validPa) {
      setErrorMessage({
        ...errorMessage,
        validPa:
          "Ensure that password is 8 to 64 characters long and contains a mix  of upper and lower case characters, one numeric and one special character",
      });
    } else {
      setErrorMessage({ ...errorMessage, validPa: " " });
    }

    handleValid();
  };

  useEffect(() => {
    handleErrorMessage();
  }, []);

  let errorMessages = [];

  if (isValid) {
    errorMessages = Object.values(errorMessage).map((messages) => (
      <ErrorMessage
        errorM={messages}
        className={`${messages.length < 2 ? " hidden" : " "}`}
      />
    ));
  }

  return errorMessages;
};

export default useValidation;
