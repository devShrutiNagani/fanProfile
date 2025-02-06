export interface Driver {
  driverId: string;
  givenName: string;
  familyName: string;
  nationality: string;
  dateOfBirth: string; // assuming it's a string, but could be a Date if you prefer
  permanentNumber: string;
  url: string;
  code: string;
}
