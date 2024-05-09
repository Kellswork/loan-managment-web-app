import React from "react";
import {Card} from "../../components/card/card";
import Table from "../../components/table/table";
import Pagination from "../../components/pagination/pagination";
import { getUsersData } from "@/app/api/api";

async function Page() {
  const userData = await getUsersData()
  return (
    <div className="card-table-layout">
      <h2>Users</h2>
      <Card />
      <Table data={userData} />
      <Pagination />
    </div>
  );
}

export default Page;
