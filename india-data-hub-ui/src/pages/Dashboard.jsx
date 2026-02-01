


import { useState, useMemo } from "react";
import Sidebar from "../components/Sidebar";
import DataTable from "../components/DataTable";
import Navbar from "../components/Navbar";

import response1 from "../data/response1.json";
import response2 from "../data/response2.json";

const Dashboard = () => {
  const [dataset, setDataset] = useState("response1");

  const rawData = dataset === "response1" ? response1 : response2;

  // ✅ categories safe conversion
  const categories = useMemo(() => {
    return rawData?.categories
      ? Object.keys(rawData.categories).map((key) => ({
          name: key,
        }))
      : [];
  }, [rawData]);

  // ✅ frequent list (same in both)
  const frequentData = useMemo(() => {
    return Array.isArray(rawData.frequent) ? rawData.frequent : [];
  }, [rawData]);

  return (
    <>
      <Navbar showDatasetSelect={true} setDataset={setDataset} />

      <div className="dashboard">
        <Sidebar categories={categories} />
        <DataTable data={frequentData} />
      </div>
    </>
  );
};

export default Dashboard;
