import { FC } from "react";
import { fileExportOptions } from "./config";

interface DataGridActionsProps {
  handleExportClick: (fileType: string) => void;
}

export const DataGridActions: FC<DataGridActionsProps> = ({
  handleExportClick,
}) => {
  return (
    <div className="bg-base-200 flex justify-end text-primary-content p-2 shadow-md h-[3rem]">
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
  );
};
