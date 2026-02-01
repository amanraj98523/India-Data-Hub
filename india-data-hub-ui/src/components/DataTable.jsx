


import { useState } from "react";
import Pagination from "./Pagination";

const DataTable = ({ data = [] }) => {
  const [page, setPage] = useState(1);
  const perPage = 10;

  const start = (page - 1) * perPage;
  const visibleData = data.slice(start, start + perPage);

  return (
    <div style={{ padding: "10px", width: "100%" }}>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Frequency</th>
            <th>Unit</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          {visibleData.map((item, i) => (
            <tr key={i}>
              <td>{item.title}</td>
              <td>{item.cat}</td>
              <td>{item.freq}</td>
              <td>{item.unit}</td>
              <td>{item.src}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        total={data.length}
        perPage={perPage}
        setPage={setPage}
      />
    </div>
  );
};

export default DataTable;
