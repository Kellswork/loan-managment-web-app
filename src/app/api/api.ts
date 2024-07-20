/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
// TODO: eslint errors 

import { UserDataProps } from "@/utils/userDetails";

const fetchUsersData = async () => {
  try {
    const response = await fetch(
      "https://run.mocky.io/v3/22d8a08a-7940-4f45-a0f8-37567e671dc8",
      { next: { revalidate: 3600 } }
    );
       if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }
    const responseData = (await response.json()) as UserDataProps[];

    const users = responseData
      .reduce((acc: UserDataProps[], curr: UserDataProps) => acc.concat(curr), [])
      .slice(0, 199);
    return users;
  } catch (error) {
    console.error("Error fetching data:", error);
    return `There was a problem fetching the data`;
  }
};

export default fetchUsersData;

// https://run.mocky.io/v3/022c5272-7dc8-44ac-aecd-8c52eaec579b
// use for testing error response 

// working api : https://run.mocky.io/v3/22d8a08a-7940-4f45-a0f8-37567e671dc8