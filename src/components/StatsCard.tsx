import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  count: number;
  subtitle: string;
  subtitleColor: string;
  bgColor : string;
}

const StatsCard =({ 
  title, 
  count, 
  subtitle, 
  subtitleColor,
  bgColor 
}: StatsCardProps) => {

  return (
    <Card className={`flex flex-col gap-2 p-4 ${bgColor}`}>
      <h3 className="text-lg font-medium text-background-customBlue">
        {title}
      </h3>
      <p className="text-4xl font-medium text-background-customBlue">
        {count}
      </p>
      <p className={`text-base font-normal ${subtitleColor}`}>
        {subtitle}
      </p>
    </Card>
  );
}

export default StatsCard;
