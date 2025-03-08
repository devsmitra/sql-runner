import { FC } from "react";
import { WorksheetForm } from "./WorksheetForm";
import TrashSvg from "../../assets/icons/trash-solid.svg";
import SaveSvg from "../../assets/icons/save.svg";
import PlaySvg from "../../assets/icons/play-solid.svg";
import MaximizeSvg from "../../assets/icons/maximize-solid.svg";

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
        className="btn btn-square mr-2 bg-blue-100 tooltip tooltip-bottom"
        data-tip="Expand Query Editor"
        onClick={props.handleExpand}
      >
        <img src={MaximizeSvg} alt="Maximize" className="size-5" />
      </button>
      <button
        className="btn btn-square mr-2 bg-orange-100 tooltip tooltip-bottom"
        onClick={() => props.setQuery("")}
        data-tip="Clear query"
      >
        <img src={TrashSvg} alt="Clear" className="size-5 " />
      </button>
      <button
        className="btn btn-square mr-2 bg-blue-100 tooltip tooltip-bottom"
        onClick={props.handleQuerySave}
        disabled={!props.query}
        data-tip="Save query"
      >
        <img src={SaveSvg} alt="Save" className="size-5" />
      </button>
      <button
        className="btn btn-square bg-green-200 tooltip tooltip-bottom"
        onClick={() => props.handleQueryRun(props.query)}
        disabled={!props.query}
        data-tip="Run query"
      >
        <img src={PlaySvg} alt="Run" className="size-5" />
      </button>
    </div>
  );
};
