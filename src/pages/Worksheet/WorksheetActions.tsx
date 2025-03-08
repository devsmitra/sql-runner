import { FC } from "react";
import { WorksheetForm } from "./WorksheetForm";
import TrashSvg from "../../assets/trash-solid.svg";
import SaveSvg from "../../assets/save.svg";
import PlaySvg from "../../assets/play-solid.svg";
import MaximizeSvg from "../../assets/maximize-solid.svg";

export interface WorksheetActionsProps {
  visible: boolean;
  query: string;
  setQuery: (query: string) => void;
  handleQueryRun: (query: string) => void;
  handleQuerySave: () => void;
  handleExpand: () => void;
  handleFormSubmit: (worksheetName: string) => void;
  setVisible: (visible: boolean) => void;
}

export const WorksheetActions: FC<WorksheetActionsProps> = (props) => {
  return (
    <div className="h-[3rem] flex items-center justify-end">
      {props.visible && (
        <WorksheetForm
          visible={props.visible}
          onClose={() => props.setVisible(false)}
          onSubmit={props.handleFormSubmit}
        />
      )}
      <button
        className="btn btn-square mr-2 bg-blue-100"
        onClick={props.handleExpand}
      >
        <img src={MaximizeSvg} alt="Maximize" className="size-5" />
      </button>
      <button
        className="btn btn-square mr-2 bg-orange-100"
        onClick={() => props.setQuery("")}
      >
        <img src={TrashSvg} alt="Clear" className="size-5" />
      </button>
      <button
        className="btn btn-square mr-2 bg-blue-100"
        onClick={props.handleQuerySave}
        disabled={!props.query}
      >
        <img src={SaveSvg} alt="Save" className="size-5" />
      </button>
      <button
        className="btn btn-square bg-green-200"
        onClick={() => props.handleQueryRun(props.query)}
        disabled={!props.query}
      >
        <img src={PlaySvg} alt="Run" className="size-5" />
      </button>
    </div>
  );
};
