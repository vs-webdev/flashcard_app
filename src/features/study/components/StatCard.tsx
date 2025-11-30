import type { FC } from "react";

interface StatsCardProps {
  title: string;
  count: number;
  image: string;
}
const StatCard: FC<StatsCardProps> = ({title, count, image}) => {
  return (
    <div className="flex border rounded-lg w-min-[300px] overflow-hidden shadow-[1px_1px_1px_1px_var(--color-maroon)]">
      <div className="w-full border-r p-4 text-left">
        <h2 className="text-md font-semibold mb-2">{title}</h2>
        <span className="text-5xl font-bold">{count}</span>
      </div>
      <div className="flex items-center justify-center bg-[var(--color-skyBlue)]">
        <img src={image} alt="Icon" className="w-20 h-20"/>
      </div>
    </div>
  )
}

export default StatCard
