import InputValidation from "./InputValidation";

let testData1 = {
  name: "Glenn",
  number: 2222222222222222,
  cvv2: 22,
  monthExp: 13,
  yearExp: 2020,
};

let testData2 = {
  name: "Glenn",
  number: 4222222222222222,
  cvv2: 222,
  monthExp: 11,
  yearExp: 2021,
};

let testData3 = {
  name: "Glenn",
  number: 4222222222222222,
  cvv2: 2222,
  monthExp: 11,
  yearExp: 2021,
};

let testData4 = {
  name: "Glenn",
  number: 342222222222222,
  cvv2: 222,
  monthExp: 11,
  yearExp: 2021,
};

test("Tests if invalid input is handled correctly", () => {
  expect(InputValidation(testData1)).toEqual({
    card: true,
    cvv2: true,
    month: true,
    year: true,
  });
});

test("Tests if valid input is handled correctly", () => {
  expect(InputValidation(testData2)).toEqual({
    card: false,
    cvv2: false,
    month: false,
    year: false,
  });
});

test("Tests if invalid visa cvv2 value is handled correctly", () => {
  expect(InputValidation(testData3)).toEqual({
    card: false,
    cvv2: true,
    month: false,
    year: false,
  });
});

test("Tests if invalid amex cvv2 value is handled correctly", () => {
  expect(InputValidation(testData4)).toEqual({
    card: false,
    cvv2: true,
    month: false,
    year: false,
  });
});
