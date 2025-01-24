//To validate the numeric fields to only allow numbers.
export const isNumber = (value: any) => {
  const numberRegex = /^[0-9]+$/;

  return !!value && numberRegex.test(value);
};

//To validate the "GPA" field to only allow numbers and period(.)
export const isGPA = (value: any) => {
  const gpaRegex = /^[0-9]*\.?[0-9]*$/;

  return !!value && gpaRegex.test(value);
};
