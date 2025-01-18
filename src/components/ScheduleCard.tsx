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
		<Card className="p-6 flex flex-col gap-10 lg:ml-24 lg:mr-6">
			<div className="flex justify-between items-center">
				<h3 className="font-semibold">Upcoming Schedule</h3>
				<button className="text-sm text-gray-500 border-2 px-1 py-0 rounded-md flex items-center justify-center">
					{formatDate()}
					<RiArrowDropDownLine className="h-10 w-10 font-light cursor-pointer" />
				</button>
			</div>
			<div className="flex flex-col gap-4">
				{schedules.map((schedule, idx) => (
					<div
						key={idx}
						className="flex items-start justify-between gap-4 p-4 bg-background-customGray rounded-lg"
					>
						<div className="flex-1">
							<div className="flex items-center gap-2 mb-1">
								<p className="font-medium">{schedule.title}</p>
								{schedule.priority && (
									<span className="px-2 py-0.5 text-xs bg-red-100 text-red-600 rounded">
										Priority
									</span>
								)}
							</div>
							<p className="text-sm text-gray-500">{schedule.time}</p>
						</div>
						<button>
							<FiMoreHorizontal className="h-4 w-4 text-gray-400" />
						</button>
					</div>
				))}
			</div>

			<button className="w-full text-center text-red-500">
				Create a New Schedule
			</button>
		</Card>
	);
};

export default ScheduleCard;
