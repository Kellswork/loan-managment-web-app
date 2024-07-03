import React from "react";
import {Card} from "../components/card/card";
import Table from "../components/table/table";
import Pagination from "../components/pagination/pagination";

function Page() {
  return (
    <div className="card-table-layout">
      <h2>Users</h2>
      <Card />
      <Table />
    </div>
  );
}

export default Page;
