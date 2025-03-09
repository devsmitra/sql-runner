import { FC, useCallback, useEffect, useState } from "react";
import { TableVirtuoso } from "react-virtuoso";
import { toDownloadableCSV, toDownloadableJSON } from "../../utils/files";
import { DataGridActions } from "./DataGridActions";
import { debounce } from "../../utils/debounce";

// Define the props for the DataGrid component
interface DataGridProps {
  columns: string[];
  data: Record<string, any>[];
}

/**
 * DataGrid component to display data in a table with export options.
 * @param {DataGridProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
const DataGrid: FC<DataGridProps> = ({ columns = [], data = [] }) => {
  const [searchText, setSearchText] = useState("");
  const [tableData, setTableData] = useState(data);

  useEffect(() => {
    if (searchText === "") {
      setTableData(data);
      return;
    }
    const filteredData = data.filter((item) => {
      return Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setTableData(filteredData);
  }, [searchText, data]);

  // Handle export button click.
  const handleExportClick = (fileType: string) => {
    if (fileType === "CSV") {
      toDownloadableCSV(data, columns);
      return;
    }
    if (fileType === "JSON") {
      toDownloadableJSON(data);
      return;
    }
  };

  const onSearchTextChange = useCallback(
    debounce((searchText: string) => {
      setSearchText(searchText);
    }),
    []
  );

  // Render a message if no data or columns are provided
  if (columns.length === 0 || data.length === 0) {
    return (
      <h2 className="text-base-content text-2xl text-center pt-8">
        No data to display
      </h2>
    );
  }

  return (
    <div>
      <DataGridActions
        handleExportClick={handleExportClick}
        onSearch={onSearchTextChange}
        totalRecords={data.length}
        recordsShown={tableData.length}
      />
      <div className="divider m-0 bg-base-200"></div>
      <TableVirtuoso
        style={{ height: "calc(100vh - 27rem)" }}
        className="text-base-content table-x text-left"
        data={tableData}
        fixedHeaderContent={() => (
          <tr>
            {columns.map((column) => (
              <th
                className="bg-base-300 py-2 sticky top-0 z-10 w-40 px-2 shadow-md"
                key={column}
              >
                {column}
              </th>
            ))}
          </tr>
        )}
        itemContent={(_, item) => (
          columns.map((column) => (
            <td className="px-2" key={item.id + column}>
              {item[column]}
            </td>
          ))
        )}
      />
    </div>
  );
};

export default DataGrid;
