export interface Avatar {
  person?: Person;
  image?: string;
  link?: string;
  tooltip?: string; // remember to deprecate this field when deprecating tooltips altogether
}

export type Person = {
  firstName: string;
  lastName: string;
  preferredFirstName?: string;
  formerLastName?: string;
};
