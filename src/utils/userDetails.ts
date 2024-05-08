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

export const userDetailsData:UserDetailsDataProps = {
  personalInformation: {
    fullName: "Grace Effiom",
    phoneNumber: "07060780922",
    emailAddress: "grace@gmail.com",
    bvn: "07060780922",
    gender: "Female",
    maritalStatus: "Single",
    children: "None",
    typeOfResidence: "Parent’s Apartment"
  },
  educationAndEmployment: {
    levelOfEducation: "B.Sc",
    employmentStatus: "Employed",
    sectorOfEmployment: "FinTech",
    durationOfEmployment: "2 years",
    officeEmail: "grace@lendsqr.com",
    monthlyIncome: "₦200,000.00 - ₦400,000.00",
    loanRepayment: "40,000"
  },
  socials: {
    twitter: "@grace_effiom",
    facebook: "Grace Effiom",
    instagram: "@grace_effiom"
  },
  guarantors: [
    {
      fullName: "Debby Ogana",
      phoneNumber: "07060780922",
      emailAddress: "debby@gmail.com",
      relationship: "Sister"
    },
    {
      fullName: "Debby Ogana",
      phoneNumber: "07060780922",
      emailAddress: "debby@gmail.com",
      relationship: "Sister"
    },
    {
      fullName: "Debby Ogana",
      phoneNumber: "07060780922",
      emailAddress: "debby@gmail.com",
      relationship: "Sister"
    }
  ]
};