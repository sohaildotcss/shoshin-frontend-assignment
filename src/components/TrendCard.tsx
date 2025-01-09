import { Card } from "@/components/ui/card";
import { TrendCardProps } from "@/Interfaces/LocalInterface";
import { IoIosArrowRoundUp } from "react-icons/io";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  { value: 10 },
  { value: 15 },
  { value: 13 },
  { value: 17 },
  { value: 20 },
  { value: 18 },
  { value: 22 },
];

const TrendCard = ({ 
  title, 
  count, 
  trend, 
  details 
}: TrendCardProps ) => {
  
  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-gray-600 mb-2">{title}</h3>
          <p className="text-4xl font-semibold">{count}</p>
          <div className="mt-2">
            {details.map((detail, idx) => (
              <p key={idx} className="text-sm text-gray-500">{detail}</p>
            ))}
          </div>
        </div>
        <div className="w-32 h-16">
          <div className="flex flex-col text-red-500 items-center justify-center">
            <p className="text-sm rounded-md">
              {trend.slice(0,4)}
            </p>
            <IoIosArrowRoundUp className="h-4 w-4" />
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#FF4D6A" 
                strokeWidth={2} 
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-sm bg-red-50 px-2 py-1 rounded-md text-red-500">{trend}</p>
        </div>
      </div>
    </Card>
  );
}

export default TrendCard;
