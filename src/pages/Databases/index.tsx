import { useNavigate, useParams } from "react-router";
import { List } from "../../components/List";
import { getTableNames } from "../../services/database.service";
import SideBarLayout from "../../components/Layout/SideBarLayout";
import EyeSVG from "../../assets/eye-solid.svg";
import { Modal } from "../../components/Modal";
import { useState } from "react";
import { DatabaseSchema } from "../../components/DatabaseSchema";

const Databases = () => {
  const { id } = useParams();
  const [databaseId, setDatabaseId] = useState<string>();
  const navigate = useNavigate();
  const items = getTableNames();
  const title = "Databases";
  /**
   * Handle item click to navigate to the database details.
   */
  const handleItemClick = (id: string) => {
    navigate(`/databases/${id}`);
  };

  /**
   * Handle item action to show the database schema.
   */
  const handleItemAction = (id: string) => {
    setDatabaseId(id);
  };

  /**
   * Handle modal close action.
   */
  const handleModalClose = () => {
    setDatabaseId(undefined);
  };

  return (
    <>
      <Modal
        visible={!!databaseId}
        onClose={handleModalClose}
        title="Database Schema"
      >
        <DatabaseSchema id={databaseId} />
      </Modal>
      <SideBarLayout
        Sidebar={
          <List
            items={items}
            onItemClick={handleItemClick}
            activeItemId={id}
            title={title}
            onItemAction={handleItemAction}
            icon={EyeSVG}
          />
        }
      />
    </>
  );
};

export default Databases;
