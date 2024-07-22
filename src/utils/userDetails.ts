export interface UserDataProps {
  personal_information: {
    organization: string;
    username: string;
    full_name: string;
    phone_number: string;
    email: string;
    bvn: number;
    gender: string;
    marital_status: string;
    children: number;
    type_of_residence: string;
  };
  education_and_employment: {
    level_of_education: string;
    employment_status: string;
    sector_of_employment: string;
    duration_of_employment: string;
    office_email: string;
    monthly_income: {
      lower: string;
      upper: string;
    };
    loan_repayment: string;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantor: {
    full_name: string;
    phonenumber: string;
    email_address: string;
    relationship: string;
  };
  general: {
    user_id: string;
    user_tier: number;
    user_status: string;
    loan_amount: string;
    date_joined: string;
  };
}

export interface UserDetailsDataProps {
  personalInformation: {
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
    bvn: string;
    gender: string;
    maritalStatus: string;
    children: string;
    typeOfResidence: string;
  };
  educationAndEmployment: {
    levelOfEducation: string;
    employmentStatus: string;
    sectorOfEmployment: string;
    durationOfEmployment: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: string;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantors: {
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
    relationship: string;
  }[];
}

