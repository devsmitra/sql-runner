import { StorageService } from "./storage.service";

// Prefixes for query history and saved queries
const HISTORY_PREFIX = "qh";
const SAVE_PREFIX = "qs";

const prefixMap = {
  history: HISTORY_PREFIX,
  save: SAVE_PREFIX,
};

// Define the type for query actions
type QueryActionType = "history" | "save";

/**
 * Get queries from storage based on the type.
 * @param {QueryActionType} type - The type of the query action.
 * @returns {Array} The list of queries.
 */
export const getQueryFromType = (type: QueryActionType) => {
  const prefix = prefixMap[type];
  const keys = StorageService.getKeys().filter((key) => key.includes(prefix));

  return keys.map((key) => {
    const value = StorageService.getItem(key);
    return {
      id: key,
      label: value.label,
      value: value.query,
    };
  });
};

/**
 * Save a query to storage based on the type.
 * @param {string} query - The query to save.
 * @param {QueryActionType} type - The type of the query action.
 * @param {string} [label] - The label for the query.
 */
export const setQueryByType = (
  query: string,
  type: QueryActionType,
  label?: string
) => {
  const prefix = prefixMap[type];
  const key = `${prefix}-${new Date().getTime()}`;
  StorageService.setItem(key, {
    query,
    label: label || new Date().toLocaleString(),
  });
};

/**
 * Delete a query from storage based on the id.
 * @param {string} id - The id of the query to delete.
 */
export const deleteQueryByType = (id: string) => {
  StorageService.removeItem(id);
};
