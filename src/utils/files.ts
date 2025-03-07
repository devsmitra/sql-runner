/**
 * Download contents as a file
 */
export const toDownloadableFile = (
  content: string,
  filename: string,
  contentType: string
) => {
  // Create a blob
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);

  // Create a link to download it
  const anchore = document.createElement("a");
  anchore.href = url;
  anchore.download = filename;
  // anchore.setAttribute("download", filename);
  anchore.click();
};

export const toDownloadableCSV = (
  data: Record<string, any>[],
  columns: string[],
  fileName?: string
) => {
  const header = columns.join(",") + "\n";
  const rows = data.map((row) => columns.map((col) => row[col]).join(","));
  const content = header + rows.join("\n");
  toDownloadableFile(
    content,
    fileName ?? `data-${Date.now()}.csv`,
    "text/csv;charset=utf-8;"
  );
};

export const toDownloadableJSON = (
  data: Record<string, any>[],
  fileName?: string
) => {
  const content = JSON.stringify(data, null, 2);
  toDownloadableFile(
    content,
    fileName ?? `data-${Date.now()}.json`,
    "application/json;charset=utf-8;"
  );
};
