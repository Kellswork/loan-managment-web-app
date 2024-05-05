import React from "react";
import { tableData } from "../../utils/data";
import Image from "next/image";
import "./table.scss";

const thead = [
  "organization",
  "username",
  "email",
  "phone number",
  "date joined",
  "status",
];
const Table = () => {
  return (
    <div className="table-container">

        <table className="resp-table">
          <thead>
            <tr>
              {thead.map((th) => (
                <th key={th}>
                  {th}
                  <span>
                    <Image
                      src="/filter-results-button.svg"
                      alt="filter results button"
                      width={16}
                      height={16}
                      priority
                    />
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr key={data.email}>
                <td>{data.organization}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>{data.phonenumber}</td>
                <td>{data.dateJoined}</td>
                <td>{data.status}</td>
                <td>
                  <Image
                    src="/eclipse.svg"
                    alt="vie actions "
                    width={16}
                    height={16}
                    priority
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
 
    </div>
  );
};

export default Table;
