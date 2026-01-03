import type { ElementType, FC } from "react";

interface StatsCardProps {
  title: string;
  count: number;
  icon: ElementType;
  bg: string
}
const StatCard: FC<StatsCardProps> = ({title, count, icon: Icon, bg}) => {
  return (
    <div className="flex border rounded-lg min-w-[300px] overflow-hidden shadow-[1px_1px_0_1px_var(--color-maroon)]">
      <div className="w-full border-r p-4 text-left">
        <h2 className="text-md font-semibold mb-2">{title}</h2>
        <span className="text-5xl font-bold">{count}</span>
      </div>
      <div className="flex items-center justify-center px-10 bg-[var(--color-skyBlue)]"
        style={{backgroundColor: bg}}
      >
        <Icon size={30}/>
      </div>
    </div>
  )
}

export default StatCard
