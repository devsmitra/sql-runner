import { FC } from "react";
import { databaseStates } from "./data";

// Define the props for the Stat component
interface StatProps {
  title: string;
  value: string;
  description: string;
  status: "OK" | "WARNING" | "ERROR";
}

/**
 * Get the CSS class for the text based on the status.
 */
const getTextClass = (status: "OK" | "WARNING" | "ERROR"): string => {
  switch (status) {
    case "OK":
      return "text-positive";
    case "WARNING":
      return "text-warning";
    case "ERROR":
      return "text-error";
    default:
      return "";
  }
};

/**
 * Stat component to display individual statistics.
 */
const Stat: FC<StatProps> = ({ title, value, description, status }) => {
  return (
    <div className="stat">
      <div className="stat-title">{title}</div>
      <div className={`stat-value ${getTextClass(status)}`}>{value}</div>
      <div className="stat-desc">{description}</div>
    </div>
  );
};

/**
 * Dashboard component to display database analytics.
 */
const Dashboard: FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white pb-4">Database Analytics</h1>
      <section className="gap-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {databaseStates.map((state) => (
          <div
            className="card card-border bg-base-200 shadow"
            key={state.title}
          >
            <div className="card-body">
              <h2 className="card-title">{state.title}</h2>
              <div
                className="stats stats-vertical lg:stats-horizontal sm:stats-vertical
               shadow bg-base-100"
              >
                {state.stats.map((stat) => (
                  <Stat
                    key={stat.title}
                    title={stat.title}
                    value={stat.value}
                    description={stat.description}
                    status={stat.status}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Dashboard;
