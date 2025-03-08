import { FC } from "react";
import { fileExportOptions } from "./config";
import SearchSVG from "../../assets/icons/search.svg";

interface DataGridActionsProps {
  handleExportClick: (fileType: string) => void;
  onSearch: (searchText: string) => void;
  totalRecords: number;
  recordsShown: number;
}

export const DataGridActions: FC<DataGridActionsProps> = ({
  handleExportClick,
  onSearch,
  totalRecords,
  recordsShown,
}) => {
  return (
    <div className="bg-base-200 flex justify-between align-center text-primary-content p-2 shadow-md h-[3rem]">
      <p className="flex items-center">
        Showing: {recordsShown} of {totalRecords} records
      </p>
      <div className="flex justify-end">
        <label className="input mr-2">
          <img
            src={SearchSVG}
            alt="search"
            className="h-[1em] opacity-50"
            style={{ filter: "invert(0.9)" }}
          />
          <input
            type="search"
            placeholder="Search"
            onChange={(e) => onSearch(e.target.value)}
          />
        </label>
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
    </div>
  );
};
