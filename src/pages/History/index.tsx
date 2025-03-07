import { FC } from "react";
import { useNavigate, useParams } from "react-router";
import { List } from "../../components/List";
import {
  getQueryFromType,
  deleteQueryByType,
} from "../../services/query.service";
import SideBarLayout from "../../components/Layout/SideBarLayout";
import { useToast } from "../../contexts/globalContext";
import TrashSvg from "../../assets/trash-solid.svg";

// Define the props for the SaveAndHistory component
interface SaveAndHistoryProps {
  type: "history" | "save";
}

/**
 * SaveAndHistory component to display saved queries or query history.
 */
const SaveAndHistory: FC<SaveAndHistoryProps> = ({ type }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const items = getQueryFromType(type);
  const [, setToastState] = useToast();

  /**
   * Handle delete action for a query.
   */
  const handleDeleteAction = (id: string) => {
    const isConfirmed = window.confirm("Are you sure you want to delete?");
    if (isConfirmed) {
      deleteQueryByType(id);
      setToastState({
        show: true,
        message: "Query deleted successfully",
        type: "success",
      });
    }
  };

  /**
   * Handle item click to navigate to the query details.
   */
  const handleItemClick = (id: string) => {
    navigate(type === "save" ? `/save/${id}` : `/history/${id}`);
  };

  return (
    <SideBarLayout
      Sidebar={
        <List
          items={items}
          onItemClick={handleItemClick}
          activeItemId={id}
          title={type === "save" ? "Saved Queries" : "Query History"}
          onItemAction={handleDeleteAction}
          icon={TrashSvg}
          iconTooltip="Delete Query"
        />
      }
    />
  );
};

export default SaveAndHistory;
