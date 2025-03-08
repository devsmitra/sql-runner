import { createContext, FC, useContext, useReducer, Dispatch } from "react";

// Define the shape of the global state
interface ToastState {
  show: boolean;
  message: string;
  type: "success" | "error" | "info" | "warning";
}

export interface GlobalState {
  toast: ToastState;
  tabHistory: { [key: string]: string };
}

// Define the default state
const defaultState: GlobalState = {
  toast: {
    show: false,
    message: "",
    type: "success",
  },
  tabHistory: {},
};

// Define the action type
type Action = Partial<GlobalState>;

// Create the global context
const GlobalContext = createContext<[GlobalState, Dispatch<Action>]>([
  defaultState,
  () => {},
]);

// Custom hook to use the global context
export const useGlobalContext = (): [GlobalState, Dispatch<Action>] => {
  return useContext(GlobalContext);
};

export const useToast = (): [
  ToastState,
  (toast: Partial<ToastState>) => void
] => {
  const [state, setState] = useGlobalContext();
  const setToast = (toast: Partial<ToastState>) =>
    setState({
      ...state,
      toast: { ...state.toast, ...toast },
    });
  return [state.toast, setToast];
};

export const useTabHistory = (): [
  { [key: string]: string },
  (tabHistory: { [key: string]: string }) => void
] => {
  const [state, setState] = useGlobalContext();
  const setTabHistory = (tabHistory: { [key: string]: string }) =>
    setState({
      ...state,
      tabHistory: {
        ...state.tabHistory,
        ...tabHistory,
      },
    });
  return [state.tabHistory, setTabHistory];
};

// Reducer function to handle state updates
const globalReducer = (state: GlobalState, action: Action): GlobalState => {
  return { ...state, ...action };
};

// Global context provider component
export const GlobalContextProvider: FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(globalReducer, defaultState);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};
