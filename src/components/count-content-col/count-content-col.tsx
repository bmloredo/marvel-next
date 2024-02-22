import { twMerge } from "tailwind-merge";

import { ICountContentCol } from "./count-content-col.types";

export const CountContentCol = ({
  title,
  quantity,
  className,
}: ICountContentCol) => (
  <div className="flex flex-col items-center gap-2">
    <h3 className={twMerge("text_sm", className)}>{title}</h3>
    <span className="text-sm">{quantity}</span>
  </div>
);
