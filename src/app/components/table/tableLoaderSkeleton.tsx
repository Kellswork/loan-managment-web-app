// Loading.tsx

import { thead } from "@/utils/data";
import React from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'



const TableSkeletonLoader= () => {
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
          {Array.from({ length: 9 }).map((_, i) => (
            <tr key={`loading-${i}`}>
              <td><Skeleton width={'70%'} height={20}/></td>
              <td><Skeleton width={'70%'} height={20}/></td>
              <td><Skeleton width={'70%'} height={20}/></td>
              <td><Skeleton width={'70%'} height={20}/></td>
              <td><Skeleton width={'70%'} height={20}/></td>
              <td><Skeleton width={'70%'} height={20}/></td>
              <td>
                <Image
                  src="/eclipse.svg"
                  alt="view actions "
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

export default TableSkeletonLoader;
