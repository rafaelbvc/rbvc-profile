export const validEmail = new RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-])$/
);
export const validPassword = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
);
export const validPhone = new RegExp(
  /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/
);



      // const vEmail = !validEmail.test(newUser.email)
      //   ? "Invalid email format!"
      //   : setError({ ...errors, emailError: " " });

      // const vPassword = !validPassword.test(newUser.password)
      //   ? "Ensure that password is 8 to 64 characters long and contains a mix  of upper and lower case characters, one numeric and one special character"
      //   : setError({ ...errors, passwordError: " " });

      // const vPhone = !validPhone.test(newUser.phone)
      //   ? "Ensure that password is 8 to 64 characters long and contains a mix  of upper and lower case characters, one numeric and one special character"
      //   : setError({ ...errors, phoneError: " " });