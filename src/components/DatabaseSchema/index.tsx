import { FC } from "react";
import { getSchema } from "../../services/database.service";

// Define the props for the DatabaseSchema component
interface DatabaseSchemaProps {
  id?: string;
}

/**
 * DatabaseSchema component to display the database schema.
 * @param {DatabaseSchemaProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
export const DatabaseSchema: FC<DatabaseSchemaProps> = ({ id }) => {
  // Fetch the schema based on the provided id
  const schema = id ? getSchema(id) : [];

  // Render a message if no schema is found
  if (!schema.length) return <div>No schema found</div>;

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Field Name</th>
            <th>Data Type</th>
          </tr>
        </thead>
        <tbody>
          {schema.map((field, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{field.name}</td>
              <td>{field.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
