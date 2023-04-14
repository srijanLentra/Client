export class TermForm {
  fullname!: string;

  // email!: string;

  phone!: string;

  // @JsonFormat(pattern = "dd-MM-yyyy")
  // private LocalDate dateOfBirth;
  dateOfBirth!: Date ;

  annualIncome!:number;

  gender!: string;

  isSmoker!: boolean;

  occupation!: string;

  qualification!: number;

  lifeCover!: number;

  coverTillAge!: number;

  payTillMaturityOrAge!: number;

  // annualPremium!: number;

  // monthlyPremium!: number;

  // packageVarient!: number;
}
