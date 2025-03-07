import { FC } from "react";

// Define the props for the ErrorPage component
interface ErrorPageProps {
  text?: string;
}

/**
 * ErrorPage component to display an error message.
 */
export const ErrorPage: FC<ErrorPageProps> = ({
  text = "Something went wrong",
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100">
      <h1 className="text-4xl font-bold text-red-600">{text}</h1>
      <p className="mt-4 text-lg text-red-500">Please try again later.</p>
    </div>
  );
};

export default ErrorPage;
