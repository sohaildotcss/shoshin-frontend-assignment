import { Card } from "@/components/ui/card";
import { StatsCardProps } from "@/Interfaces/LocalInterface";

const StatsCard =({ 
  title, 
  count, 
  subtitle, 
  subtitleColor,
  bgColor 
}: StatsCardProps ) => {

  return (
    <Card className={`flex flex-col gap-2 p-4 w-52 ${bgColor}`}>
      <h3 className="text-lg font-medium text-black">
        {title}
      </h3>
      <p className="text-4xl font-medium text-black ">
        {count}
      </p>
      <p className={`text-base font-normal ${subtitleColor}`}>
        {subtitle}
      </p>
    </Card>
  );
}

export default StatsCard;
