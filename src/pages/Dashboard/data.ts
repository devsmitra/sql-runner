interface Stat {
  title: string;
  value: string;
  description: string;
  status: "OK" | "WARNING" | "ERROR";
}

interface DatabaseState {
  title: string;
  stats: Stat[];
}

export const databaseStates: DatabaseState[] = [
  {
    title: "Storage",
    stats: [
      {
        title: "Total Storage",
        value: "1.00TB",
        status: "OK",
        description: "Last Week: 1.00TB",
      },
      {
        title: "Used Storage",
        value: "0.75TB",
        status: "OK",
        description: "Last Week: 0.75TB",
      },
      {
        title: "Free Storage",
        value: "0.25TB",
        status: "WARNING",
        description: "Last Week: 0.25TB",
      },
    ],
  },
  {
    title: "Usage",
    stats: [
      {
        title: "Read Operations",
        value: "1.2M",
        status: "OK",
        description: "Last Week: 1.2M",
      },
      {
        title: "Write Operations",
        value: "0.6M",
        status: "OK",
        description: "Last Week: 0.6M",
      },
      {
        title: "Other Operations",
        value: "0.3M",
        status: "OK",
        description: "Last Week: 0.3M",
      },
    ],
  },
  {
    title: "Performance",
    stats: [
      {
        title: "Latency",
        value: "0.5ms",
        status: "OK",
        description: "Last Week: 0.5ms",
      },
      {
        title: "Throughput",
        value: "1.2M",
        status: "OK",
        description: "Last Week: 1.2M",
      },
      {
        title: "Errors",
        value: "0.1%",
        status: "OK",
        description: "Last Week: 0.1%",
      },
    ],
  },
  {
    title: "Connections",
    stats: [
      {
        title: "Active Connections",
        value: "1.2K",
        status: "OK",
        description: "Last Week: 1.2K",
      },
      {
        title: "Idle Connections",
        value: "0.6K",
        status: "WARNING",
        description: "Last Week: 0.6K",
      },
      {
        title: "Blocked Connections",
        value: "0.3K",
        status: "ERROR",
        description: "Last Week: 0.3K",
      },
    ],
  },
  {
    title: "Operations",
    stats: [
      {
        title: "Read Operations",
        value: "1.2M",
        status: "OK",
        description: "Last Week: 1.2M",
      },
      {
        title: "Write Operations",
        value: "0.6M",
        status: "OK",
        description: "Last Week: 0.6M",
      },
      {
        title: "Other Operations",
        value: "0.3M",
        status: "OK",
        description: "Last Week: 0.3M",
      },
    ],
  },
  {
    title: "Errors",
    stats: [
      {
        title: "Read Errors",
        value: "0.1%",
        status: "ERROR",
        description: "Last Week: 0.1%",
      },
      {
        title: "Write Errors",
        value: "0.1%",
        status: "ERROR",
        description: "Last Week: 0.1%",
      },
      {
        title: "Other Errors",
        value: "0.01%",
        status: "OK",
        description: "Last Week: 0.01%",
      },
    ],
  },
  {
    title: "Cost",
    stats: [
      {
        title: "Total Cost",
        value: "$1.2K",
        status: "OK",
        description: "Last Week: $1.2K",
      },
      {
        title: "Storage Cost",
        value: "$0.6K",
        status: "OK",
        description: "Last Week: $0.6K",
      },
      {
        title: "Operation Cost",
        value: "$0.3K",
        status: "OK",
        description: "Last Week: $0.3K",
      },
    ],
  },
];
