//Student type with required fields
export type Student = {
  age: number;
  name: string;
  siblings: number;
  gpa: number;
  sex: string;
  uuid: number;
  class: number;
};

//Response for delete and upload records
export type DeleteandUpdateRecord = {
  success: boolean;
};

//Response for post records
export type PostResponse = {
  uuid: number;
};
