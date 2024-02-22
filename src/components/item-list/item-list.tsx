import { twMerge } from "tailwind-merge";

import { IItemList } from "./item-list.types";

export const ItemList = ({ list, title, className }: IItemList) => {
  const hasItemInList = !!list.length;

  if (!hasItemInList) return;

  return (
    <div className="bg-slate-700 p-4 rounded-lg flex-1">
      <h4 className={twMerge("text-xl font-bold mb-6", className)}>{title}</h4>

      <ul className="flex flex-col gap-3 [&>*:nth-child(odd)]:bg-slate-600">
        {list.map((item) => (
          <li key={item.name}>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
