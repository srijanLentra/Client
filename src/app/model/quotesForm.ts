export class Quote {
  id!: number;

  firstName!: string;

  lastName!: string;

  email!: string;

  phone!: string;

  pinCode!: string;

  // @JsonFormat(pattern = "dd-MM-yyyy")
  // private LocalDate dateOfBirth;
  dateOfBirth!: Date;

  dateOfPurchase!: Date;

  gender!: string;

  occupation!: string;

  maritalStatus!: string;

  dependentCount!: boolean;

  smoker!: boolean;

  hasDiabetes!: boolean;

  heartPatient!: boolean;

  hasExistingMedicalConditions!: boolean;

  hasHazardousOccupation!: boolean;

  hasFamilyHistoryOfIllness!: boolean;

  hasHistoryOfSubstanceAbuse!: boolean;

  hasHistoryOfMentalIllness!: boolean;

  annualPremium!: number;

  monthlyPremium!: number;

  packageVarient!: number;

  checkStatus!: number;

  coverage!: number;

  maturityAge!: number;
}
