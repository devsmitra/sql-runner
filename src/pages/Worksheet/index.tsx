import { FC, useEffect, useState } from "react";
import DataGrid from "../../components/DataGrid";
import QueryEditor from "../../components/QueryEditor";
import {
  getGridData,
  getWorksheetQuery,
} from "../../services/database.service";
import { useParams } from "react-router";
import { setQueryByType } from "../../services/query.service";
import { useTabHistory, useToast } from "../../contexts/globalContext";
import { Tabs } from "../../components/Tabs";
import { WorksheetActions } from "./WorksheetActions";

/**
 * Worksheet component to display and manage SQL queries.
 * @param {WorksheetProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
const Worksheet: FC<{ parent: "databases" | "history" | "save" }> = ({
  parent,
}) => {
  const { id } = useParams();
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(false);
  const [, setToastState] = useToast();
  const [tab, setTab] = useState("0");
  const [queries, setQueries] = useTabHistory();
  const [expanded, setExpanded] = useState(false);

  const [gridData, setGridData] = useState<{
    columns: string[];
    data: Record<string, unknown>[];
  }>({ columns: [], data: [] });

  /**
   * Handle running the query.
   * @param {string} _query - The query to run.
   */
  const handleQueryRun = (_query: string) => {
    const data = getGridData(_query);
    setGridData(data);
  };

  /**
   * Handle saving the query.
   */
  const handleQuerySave = () => {
    setVisible(true);
  };

  /**
   * Handle form submission for saving the worksheet.
   * @param {string} worksheetName - The name of the worksheet.
   */
  const handleFormSubmit = (worksheetName: string) => {
    setVisible(false);
    setQueryByType(query, "save", worksheetName);
    setToastState({
      show: true,
      message: "Query saved successfully",
      type: "success",
    });
  };

  const handleTabChange = (id: string) => {
    if (typeof queries === "object") {
      setQuery(queries[id] ?? "");
    }
    setTab(id);
  };

  useEffect(() => {
    const response: string = getWorksheetQuery(id ?? "", parent);
    if (response) {
      setQuery(response);
      setQueries({ [tab]: response });
    }
  }, [id, parent]);

  return (
    <div className="text-gray-100">
      <div className="flex items-center justify-between  px-4">
        <Tabs onTabChange={handleTabChange} />
        <WorksheetActions
          query={query}
          setQuery={setQuery}
          handleQueryRun={handleQueryRun}
          handleQuerySave={handleQuerySave}
          handleFormSubmit={handleFormSubmit}
          visible={visible}
          setVisible={setVisible}
          handleExpand={() => {
            setExpanded(!expanded);
          }}
        />
      </div>
      <div className="text-gray-900 ">
        <QueryEditor
          onQueryRun={handleQueryRun}
          query={query}
          onQueryChange={(query: string) => {
            setQueries({ [tab]: query });
            setQuery(query);
          }}
          height={expanded ? "40rem" : "20rem"}
        />
      </div>
      <DataGrid columns={gridData.columns} data={gridData.data} />
    </div>
  );
};

export default Worksheet;
