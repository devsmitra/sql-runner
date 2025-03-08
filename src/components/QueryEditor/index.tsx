import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { FC } from "react";

// Define the props for the QueryEditor component
interface QueryEditorProps {
  onQueryRun: (query: string) => void;
  query: string;
  onQueryChange: (val: string) => void;
  height?: string;
}

/**
 * QueryEditor component to edit and run SQL queries.
 */
const QueryEditor: FC<QueryEditorProps> = ({
  onQueryRun,
  query,
  onQueryChange,
  height,
}) => {
  /**
   * Handle the query run action.
   */
  const handleQueryRun = () => {
    onQueryRun(query);
  };

  return (
    <article>
      <CodeMirror
        value={query}
        height={height ?? "20rem"}
        extensions={[sql()]}
        onChange={onQueryChange}
        autoFocus
        placeholder="Enter your query here, SELECT * FROM table"
        onKeyDown={(e) => {
          if (e.metaKey && e.key === "Enter") {
            handleQueryRun();
          }
        }}
      />
    </article>
  );
};

export default QueryEditor;
