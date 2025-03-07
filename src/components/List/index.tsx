import { FC, useMemo } from "react";

// Define the ListItemProps interface
export interface ListItemProps {
  id: string;
  label: string;
  value: string;
  children?: ListItemProps[];
  onItemAction?: (id: string) => void;
  icon?: string;
}

// Define the ListProps interface
interface ListProps {
  items: ListItemProps[];
  activeItemId?: string;
  title: string;
  onItemClick: (id: string) => void;
  onItemAction?: (id: string) => void;
  icon?: string;
}

// Function to create a mapping of parent to child items
const createParentChildMapping = (
  items: ListItemProps[]
): Record<string, Set<string>> => {
  const mapping: Record<string, Set<string>> = {};
  items.forEach((item) => {
    if (item.children && item.children.length > 0) {
      item.children.forEach((child) => {
        if (!mapping[item.id]) {
          mapping[item.id] = new Set();
        }
        mapping[item.id].add(child.id);
      });
    }
  });
  return mapping;
};

// Internal ListItem component for rendering individual items
export const ListItem: FC<
  ListItemProps & {
    activeItemId?: string;
  }
> = ({ label, id, onItemAction, activeItemId, icon }) => {
  // Handle item action button click
  const handleItemActionClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();

    if (onItemAction) {
      onItemAction(id);
    }
  };

  return (
    <div className="flex justify-between">
      <a className={id === activeItemId ? "menu-active" : ""}>{label}</a>
      <div>
        <button
          className="cursor-pointer hover:bg-base-200 p-1 rounded-md"
          onClick={handleItemActionClick}
        >
          {icon && <img src={icon} alt={label} className="size-4" />}
        </button>
      </div>
    </div>
  );
};

// Main List component
export const List: FC<ListProps> = ({
  items = [],
  onItemClick,
  activeItemId,
  onItemAction,
  icon,
  title,
}) => {
  // Handle item click
  const handleItemClick = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    id: string
  ) => {
    e.stopPropagation();
    onItemClick(id);
  };

  // Memoize the mapping to avoid unnecessary recalculations
  const parentChildMapping = useMemo(
    () => createParentChildMapping(items),
    [items]
  );

  return (
    <div className="overflow-y-scroll">
      <h2 className="text-lg font-semibold text-white-900 px-6 pt-2">
        {title}
      </h2>
      <div className="divider p-0 m-0"></div>
      <ul className="menu w-full">
        {items.map((item) => (
          <li key={item.id} onClick={(e) => handleItemClick(e, item.id)}>
            {item.children && item.children.length > 0 ? (
              <details
                open={
                  !!(
                    item.id === activeItemId ||
                    (activeItemId &&
                      parentChildMapping[item.id]?.has(activeItemId))
                  )
                }
              >
                <summary>{item.label}</summary>
                <ul>
                  {item.children.map((child) => (
                    <li
                      key={child.id}
                      onClick={(e) => handleItemClick(e, child.id)}
                    >
                      <ListItem
                        {...child}
                        icon={icon}
                        activeItemId={activeItemId}
                        onItemAction={onItemAction}
                      />
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <ListItem
                {...item}
                icon={icon}
                activeItemId={activeItemId}
                onItemAction={onItemAction}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
