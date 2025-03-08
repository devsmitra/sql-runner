import HomeIcon from "../../../assets/icons/home.svg";
import HistoryIcon from "../../../assets/icons/history.svg";
import DatabaseIcon from "../../../assets/icons/database.svg";
import SaveIcon from "../../../assets/icons/save.svg";

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
