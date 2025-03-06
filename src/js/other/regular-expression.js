// Email
let emailRegularExpression = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

// Password 8 characters long, but no more than 32
const passwordRegularExpression = new RegExp(
  "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]).{8,32}$"
);

// Name, Surname
const nameRegularExpression = new RegExp("[a-zA-Zа-яА-ЯёЁЇїІіЄєҐґ].*");

// Phone
const phoneRegularExpression = new RegExp(
  "/d//d//d/" - "/d//d//d/" - "/d//d/" - "/d//d/"
);
