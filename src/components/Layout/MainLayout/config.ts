import HomeIcon from "../../../assets/home.svg";
import HistoryIcon from "../../../assets/history.svg";
import DatabaseIcon from "../../../assets/database.svg";
import SaveIcon from "../../../assets/save.svg";

/**
 * Configuration for the main menu items.
 * Each item includes an icon, label, and link.
 */
const mainMenuItems = [
  {
    icon: HomeIcon,
    label: "Dashboard",
    link: "/",
  },
  {
    icon: DatabaseIcon,
    label: "Databases",
    link: "/databases",
  },
  {
    icon: SaveIcon,
    label: "My Work",
    link: "/save",
  },
  {
    icon: HistoryIcon,
    label: "History",
    link: "/history",
  },
];

export default mainMenuItems;
