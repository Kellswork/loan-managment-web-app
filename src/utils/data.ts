interface SidebarProp {
  title: string;
  linkList: {
    name: string;
    icon: string;
    link: string;
  }[];
}

export const thead = [
  "organization",
  "username",
  "email",
  "phone number",
  "date joined",
  "status",
];

export const sidebarData: SidebarProp[] = [
  {
    title: "customers",
    linkList: [
      {
        name: "users",
        icon: "user-friends.svg",
        link: "/dashboard/users",
      },
      {
        name: "guarantors",
        icon: "users.svg",
        link: "#",
      },
      {
        name: "loans",
        icon: "sack.svg",
        link: "#",
      },
      {
        name: "decision models",
        icon: "handshake-regular.svg",
        link: "#",
      },
      {
        name: "savings",
        icon: "piggy-bank.svg",
        link: "#",
      },
      {
        name: "loan requests",
        icon: "loan.svg",
        link: "#",
      },
      {
        name: "whitelist",
        icon: "user-check.svg",
        link: "#",
      },
      {
        name: "karma",
        icon: "user-times.svg",
        link: "#",
      },
    ],
  },
  {
    title: "businesses",
    linkList: [
      {
        name: "organization",
        icon: "briefcase.svg",
        link: "#",
      },
      {
        name: "loan products",
        icon: "sack.svg",
        link: "#",
      },
      {
        name: "savings products",
        icon: "bank.svg",
        link: "#",
      },
      {
        name: "fees and charges",
        icon: "coins-solid.svg",
        link: "#",
      },
      {
        name: "transactions",
        icon: "transactions.svg",
        link: "#",
      },
      {
        name: "services",
        icon: "galaxy.svg",
        link: "#",
      },
      {
        name: "service account",
        icon: "user-cog.svg",
        link: "#",
      },
      {
        name: "Settlements",
        icon: "scroll.svg",
        link: "#",
      },
      {
        name: "reports",
        icon: "chart-bar.svg",
        link: "#",
      },
    ],
  },

  {
    title: "settings",
 
    linkList: [
      {
        name: "preferences",
        icon: "sliders.svg",
        link: "#",
      },
      {
        name: "fees and pricing",
        icon: "badge-percent.svg",
        link: "#",
      },
      {
        name: "audit logs",
        icon: "clipboard-list.svg",
        link: "#",
      },
      {
        name: "systems messages",
        icon: "tire.svg",
        link: "#",
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