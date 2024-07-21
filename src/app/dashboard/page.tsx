import React, {  } from "react";
import Card from "../components/card/card";
import Table from "../components/table/table";

/**
 * Renders the users dashboard page.
 *
 * @returns {JSX.Element} The users dashboard page.
 */
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
