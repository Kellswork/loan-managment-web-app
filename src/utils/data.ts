interface SidebarProp {
  title: string;
  linkList: {
    name: string;
    icon: string;
  }[];
}
export const sidebarData: SidebarProp[] = [
  {
    title: "customers",
    linkList: [
      {
        name: "users",
        icon: "user-friends.svg",
      },
      {
        name: "guarantors",
        icon: "users.svg",
      },
      {
        name: "loans",
        icon: "sack.svg",
      },
      {
        name: "decision models",
        icon: "handshake-regular.svg",
      },
      {
        name: "savings",
        icon: "piggy-bank.svg",
      },
      {
        name: "loan requests",
        icon: "loan.svg",
      },
      {
        name: "whitelist",
        icon: "user-check.svg",
      },
      {
        name: "karma",
        icon: "user-times.svg",
      },
    ],
  },
  {
    title: "businesses",
    linkList: [
      {
        name: "organization",
        icon: "briefcase.svg",
      },
      {
        name: "loan products",
        icon: "sack.svg",
      },
      {
        name: "savings products",
        icon: "bank.svg",
      },
      {
        name: "fees and charges",
        icon: "coins-solid.svg",
      },
      {
        name: "transactions",
        icon: "transactions.svg",
      },
      {
        name: "services",
        icon: "galaxy.svg",
      },
      {
        name: "service account",
        icon: "user-cog.svg",
      },
      {
        name: "Settlements",
        icon: "scroll.svg",
      },
      {
        name: "reports",
        icon: "chart-bar.svg",
      },
    ],
  },

  {
    title: "settings",
    linkList: [
      {
        name: "preferences",
        icon: "sliders.svg",
      },
      {
        name: "fees and pricing",
        icon: "badge-percent.svg",
      },
      {
        name: "audit logs",
        icon: "clipboard-list.svg",
      },
      {
        name: "systems messages",
        icon: "tire.svg",
      },
    ],
  },
];

interface TableDataProp {
  organization: string;
  username: string;
  email: string;
  phonenumber: string;
  dateJoined: string;
  status: "Inactive" | "Active" | "Blacklisted" | "Pending"
}

export const tableData:TableDataProp[] = [
  {
    organization: 'Lendsqr',
    username: "Adedeji",
    email: 'adedeji@lendsqr.com',
    phonenumber:" 08078903721",
    dateJoined: "May 15, 2020 10:00 AM",
    status: "Inactive"
  },

  {
    organization: 'Irorun',
    username: "Debby Ogana",
    email: 'debby2@irorun.com',
    phonenumber: "08160780928",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Pending"
  },
  {
    organization: 'Lendsqr',
    username: "Grace Effiom",
    email: 'grace@lendstar.com',
    phonenumber: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Blacklisted"
  },
  {
    organization: 'Lendsqr',
    username: "Tosin Dokunmu",
    email: 'yusuf@lendsqr.com',
    phonenumber: "09011223344",
    dateJoined: "July 5, 2021 9:45 AM",
    status: "Active"
  },
  {
    organization: 'Lendstar',
    username: "Tosin Dokunmu",
    email: 'tosin@lendsqr.com',
    phonenumber: "08060780900",
    dateJoined: "March 20, 2021 7:30 AM",
    status: "Active"
  },
  {
    organization: 'Lendsqr',
    username: "Debby Ogana",
    email: 'debby@lendstar.com',
    phonenumber: "08033221100",
    dateJoined: "March 20, 2021 7:30 AM",
    status: "Active"
  },
  {
    organization: 'Lendstar',
    username: "Grace Effiom",
    email: 'grace@lendstar.com',
    phonenumber: "08033221100",
    dateJoined: "March 20, 2021 7:30 AM",
    status: "Active"
  },
  {
    organization: 'Lendstar',
    username: "Fatima",
    email: 'fatima@lendstar.com',
    phonenumber: "08134567890",
    dateJoined: "October 8, 2020 4:15 PM",
    status: "Inactive"
  },
  {
    organization: 'Lendstar',
    username: "Emeka",
    email: 'emeka@lendstar.com',
    phonenumber: "08033221100",
    dateJoined: "March 20, 2021 7:30 AM",
    status: "Active"
  }

]