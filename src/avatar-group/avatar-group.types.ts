export interface Avatar {
  person?: Person;
  image?: string;
  link?: string;
  tooltip?: string;
}

export type Person = {
  firstName: string;
  lastName: string;
  preferredFirstName?: string;
  formerLastName?: string;
}
