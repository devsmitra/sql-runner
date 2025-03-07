import { FC, useEffect, useState } from "react";
import DataGrid from "../../components/DataGrid";
import QueryEditor from "../../components/QueryEditor";
import {
  getGridData,
  getWorksheetQuery,
} from "../../services/database.service";
import { useParams } from "react-router";
import { setQueryByType } from "../../services/query.service";
import { useToast } from "../../contexts/globalContext";
import { WorksheetForm } from "./WorksheetForm";

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

  useEffect(() => {
    const response = getWorksheetQuery(id ?? "", parent);
    if (response) {
      setQuery(response);
    }
  }, [id, parent]);

  return (
    <div className="text-gray-900">
      <div className="h-[3rem] flex items-center justify-end py-4 px-4 sticky bg-base-100 z-10">
        {visible && (
          <WorksheetForm
            visible={visible}
            onClose={() => setVisible(false)}
            onSubmit={handleFormSubmit}
          />
        )}
        <button
          className="btn btn-sm mr-4 w-30 bg-gray-500"
          onClick={handleQuerySave}
          disabled={!query}
        >
          Save
        </button>
        <button
          className="btn btn-sm mr-4 w-30 bg-gray-500"
          onClick={() => setQuery("")}
          disabled={!query}
        >
          Clear
        </button>
        <button
          className="btn btn-primary btn-sm w-30"
          onClick={() => handleQueryRun(query)}
          disabled={!query}
        >
          Run
        </button>
      </div>
      <QueryEditor
        onQueryRun={handleQueryRun}
        query={query}
        onQueryChange={setQuery}
      />
      <DataGrid columns={gridData.columns} data={gridData.data} />
    </div>
  );
};

export default Worksheet;
