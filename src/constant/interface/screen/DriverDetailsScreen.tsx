export interface DriverDetails {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

export interface ConstructorDetails {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

export interface UserDetailsField {
  Driver: DriverDetails; // Correctly type the Driver object
  points: string;
  Constructors: ConstructorDetails[];
}
