import { getQueryFromType, setQueryByType } from "./query.service";

/**
 * Generate sample table data.
 * @returns {Array} The generated table data.
 */
export const getTableData = () => {
  const user = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    job: "Software Engineer",
    company: "Facebook",
    location: "California",
    lastLogin: "12/16/2020",
    phone: "123-456-7890",
    email: "dummy@gmail.com",
  };

  return Array.from({ length: 1000 }, (_, i) => ({
    ...user,
    id: i + 1,
    firstName: `${user.firstName} ${i + 1}`,
  }));
};

/**
 * Get the columns of a table.
 * @param {any} row - A row of the table.
 * @returns {string[]} The columns of the table.
 */
export const getTableColumns = (row: any) => {
  return Object.keys(row);
};

/**
 * Get grid data based on a query.
 * @param {string} query - The query to run.
 * @returns {Object} The grid data.
 */
export const getGridData = (query: string) => {
  const data = getTableData();
  setQueryByType(query, "history");

  return {
    columns: data ? getTableColumns(data[0]) : [],
    data,
  };
};

/**
 * Get the names of the tables.
 * @returns {Array} The table names.
 */
export const getTableNames = () => {
  return [
    {
      id: "1",
      label: "Users",
      value: "",
      children: [
        {
          id: "11",
          label: "Users",
          value: "SELECT * FROM Users",
        },
        {
          id: "12",
          label: "Admins",
          value: "SELECT * FROM Admins",
        },
      ],
    },
    {
      id: "2",
      label: "Products",
      value: "",
      children: [
        {
          id: "21",
          label: "Products",
          value: "SELECT * FROM Products",
        },
        {
          id: "22",
          label: "Categories",
          value: "SELECT * FROM Categories",
        },
      ],
    },
    {
      id: "3",
      label: "Orders",
      value: "",
      children: [
        {
          id: "31",
          label: "Orders",
          value: "SELECT * FROM Orders",
        },
        {
          id: "32",
          label: "Order Details",
          value: "SELECT * FROM OrderDetails",
        },
      ],
    },
  ];
};

/**
 * Get the schema of a table.
 * @param {string} _tableId - The id of the table.
 * @returns {Array} The schema of the table.
 */
export const getSchema = (_tableId: string) => {
  return [
    {
      name: "id",
      type: "int",
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "email",
      type: "string",
    },
    {
      name: "phone",
      type: "string",
    },
    {
      name: "address",
      type: "string",
    },
    {
      name: "city",
      type: "string",
    },
  ];
};

/**
 * Convert a list to a map.
 * @param {any[]} list - The list to convert.
 * @param {Object} defaultValue - The default value for the map.
 * @returns {Object} The converted map.
 */
const listToMap = (list: any[], defaultValue = {}) => {
  return list.reduce((acc, item) => {
    acc[item.id] = item;
    if (item.children) {
      listToMap(item.children, acc);
    }
    return acc;
  }, defaultValue);
};

/**
 * Normalize the query based on the type.
 * @param {"databases" | "history" | "save"} type - The type of the query.
 * @returns {Object} The normalized query.
 */
const normalizeQuery = (type: "databases" | "history" | "save") => {
  if (type === "databases") {
    const tables = getTableNames();
    return listToMap(tables);
  }
  if (type === "history") {
    const history = getQueryFromType("history");
    return listToMap(history);
  }

  if (type === "save") {
    const save = getQueryFromType("save");
    return listToMap(save);
  }
};

/**
 * Get the worksheet query based on the id and type.
 * @param {string} id - The id of the worksheet.
 * @param {"databases" | "history" | "save"} type - The type of the worksheet.
 * @returns {string} The worksheet query.
 */
export const getWorksheetQuery = (
  id: string,
  type: "databases" | "history" | "save"
) => {
  if (!id) {
    return "";
  }
  const normalizedData = normalizeQuery(type);
  return normalizedData[id]?.value;
};
