import React from "react";
import {Card} from "../../components/card/card";
import Table from "../../components/table/table";
import { fetchUsersData } from "@/app/api/api";

async function Page() {
  const userData = await fetchUsersData();
  return (
    <div className="card-table-layout">
      <h2>Users</h2>
      <Card />
      <Table userData={userData}/>
    </div>
  );
}

export default Page;
