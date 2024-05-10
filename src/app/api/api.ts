import { UserDataProps } from "@/utils/userDetails";

export const fetchUsersData = async () => {
  try {
    const response = await fetch(
      "https://run.mocky.io/v3/022c5272-7dc8-44ac-aecd-8c52eaec579b",
      { next: { revalidate: 3600 } }
    );
       if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }
    const responseData = (await response.json()) as UserDataProps[];

    const users = responseData
      .reduce((acc: UserDataProps[], curr: UserDataProps) => {
        return acc.concat(curr);
      }, [])
      .slice(0, 199);
      console.log(response)

    return users;
  } catch (error) {
    console.error("Error fetching data:", error);
    return `There was a problem fetching the data`;
  }
};



// https://run.mocky.io/v3/4a5a47e2-3680-4181-a1d8-b6837f9815fb
//use for testing error response 