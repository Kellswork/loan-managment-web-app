import { UserDataProps, UserDetailsDataProps } from "@/utils/userDetails";

export const fetchUsersData = async () => {
  try {
    const response = await fetch(
      "https://run.mocky.io/v3/4a5a47e2-3680-4181-a1d8-b6837f9815fb",
      { next: { revalidate: 3600 } }
    );
    const responseData = (await response.json()) as UserDataProps[];

    const users = responseData
      .reduce((acc: UserDataProps[], curr: UserDataProps) => {
        return acc.concat(curr);
      }, [])
      .slice(0, 199);
      console.log(response)

    return users;
  } catch (error) {
    let err: string | undefined;
    if (error instanceof TypeError) {
      err = error.message;
    }
    console.error("Error fetching data:", err);
    return `There was a problem fetching the data`;
  }
};

