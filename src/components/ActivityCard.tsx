import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ActivityCard = () => {
	return (
		<Card className=" ml-24 p-6 pb-0 mr-6 flex flex-col gap-8 bg-[#121843] text-white">
			<h3 className="text-lg font-medium">Recently Activity</h3>
			<div className="flex flex-col gap-2">
				<p className="text-xs font-light text-gray-400">
					10:40 AM, Fri 10 Sept 2021
				</p>
				<h4 className="text-lg  font-medium">You Posted a New Job</h4>
				<p className="text-gray-300 text-sm font-light pr-20">
					Kindly check the requirements and terms of work and make sure
					everything is right.
				</p>
			</div>

			<div className="flex justify-between items-center">
				<p className="text-sm font-light">Today you makes 12 Activity</p>
				<Button variant="secondary" className="text-md text-white ">
					See All Activity
				</Button>
			</div>
		</Card>
	);
};

export default ActivityCard;
