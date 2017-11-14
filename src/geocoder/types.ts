export type Address = {
  city: string;
  country: {
    code: string;
  };
  line1: string;
  line2?: string;
  postalCode: string;
  subdivision: {
    code: string;
  };
};
