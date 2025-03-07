import { FC } from "react";
import { TableVirtuoso } from "react-virtuoso";
import { toDownloadableCSV, toDownloadableJSON } from "../../utils/files";
import { fileExportOptions } from "./config";

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
  /**
   * Handle export button click.
   * @param {string} fileType - The type of file to export.
   */
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

  // Render a message if no data or columns are provided
  if (columns.length === 0 || data.length === 0) {
    return (
      <h2 className="text-white text-2xl text-center pt-8">
        No data to display
      </h2>
    );
  }

  return (
    <div>
      <div className="bg-base-200 flex justify-end text-primary-content p-2 shadow-md">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn px-16 btn-primary">
            Export
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-300 z-1 shadow-m w-full"
          >
            {fileExportOptions.map((option) => (
              <li
                className="w-full"
                key={option}
                onClick={() => handleExportClick(option)}
              >
                <a>{option}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <TableVirtuoso
        style={{ height: 500 }}
        className="text-white table-x table-zebra text-left"
        data={data}
        fixedHeaderContent={() => (
          <tr>
            {columns.map((column) => (
              <th
                className="bg-base-200 py-2 sticky top-0 z-10 w-40 px-2 shadow-md"
                key={column}
              >
                {column}
              </th>
            ))}
          </tr>
        )}
        itemContent={(_, item) => (
          <>
            {columns.map((column) => (
              <td className="px-2" key={item.id + column}>
                {item[column]}
              </td>
            ))}
          </>
        )}
      />
    </div>
  );
};

export default DataGrid;
