import { FC, useState } from "react";

import Modal from "../../components/Modal";

/**
 * WorksheetForm component to handle the form for saving a worksheet.
 */
export const WorksheetForm: FC<{
  visible: boolean;
  onClose: () => void;
  onSubmit: (worksheetName: string) => void;
}> = ({ visible, onClose, onSubmit }) => {
  const [worksheetName, setWorksheetName] = useState("");

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(worksheetName);
  };

  const handleCloseModal = (event: React.FormEvent) => {
    event.preventDefault();
    onClose();
  };

  return (
    <Modal visible={visible} title="Save Query" onClose={onClose}>
      <form className="py-4">
        <input
          type="text"
          name="worksheetName"
          className="input bg-slate-200 w-full"
          placeholder="Worksheet Name"
          value={worksheetName}
          onChange={(event) => setWorksheetName(event.target.value)}
        />
        <div className="flex justify-end mt-4">
          <button className="btn btn-soft mr-2" onClick={handleCloseModal}>
            Cancel
          </button>
          <button
            className="btn btn-primary"
            disabled={!worksheetName}
            type="submit"
            onClick={handleFormSubmit}
          >
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
};
