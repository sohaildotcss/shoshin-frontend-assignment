import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/formatDate";
import { FiMoreHorizontal } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
const ScheduleCard = () => {
	const schedules = [
		{
			title: "Review candidate applications",
			time: "Today - 11:30 AM",
			priority: true,
		},
		{
			title: "Interview with candidates",
			time: "Today - 10:30 AM",
			priority: false,
		},
		{
			title: "Short meeting with product designer from IT Department",
			time: "Today - 09:15 AM",
			priority: false,
		},
	];

	return (
		<Card className="p-6 flex flex-col lg:ml-24 lg:mr-6 lg:pb-0">
			<div className="flex justify-between items-center">
				<h3 className="font-semibold">Upcoming Schedule</h3>
				<button className="text-sm text-gray-500 border-2 px-1 py-0 rounded-md flex items-center justify-center">
					{formatDate()}
					<RiArrowDropDownLine className="h-10 w-10 font-light cursor-pointer" />
				</button>
			</div>
			<div className="flex flex-col lg:gap-2">
				<p className="text-sm text-gray-500">Priority</p>
				{schedules.map((schedule, idx) => (
					<div
						key={idx}
						className="flex items-center justify-between gap-4 p-4 bg-background-customGray border rounded-lg"
					>
						<div className="flex-1 ">
							<div className="flex items-center gap-2 mb-1 ">
								<p className="font-medium">{schedule.title}</p>
							</div>
							<p className="text-sm text-gray-500">{schedule.time}</p>
						</div>
						<button>
							<FiMoreHorizontal className="h-6 w-6 text-gray-400" />
						</button>
					</div>
				))}
			</div>

			<button className="w-full text-center text-red-500 mt-10 font-semibold">
				Create a New Schedule
			</button>
		</Card>
	);
};

export default ScheduleCard;
