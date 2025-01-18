import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/formatDate";
import { FiMoreHorizontal } from "react-icons/fi";
import { TiPin } from "react-icons/ti";
import { RiArrowDropDownLine } from "react-icons/ri";

const AnnouncementCard = () => {
	const announcements = [
		{
			title: "Outing schedule for every department",
			time: "5 Minutes ago",
			pinned: true,
		},
		{
			title: "Meeting HR Department",
			time: "Yesterday, 12:30 PM",
			pinned: true,
		},
		{
			title: "IT Department need two more talents for UX/UI Designer position",
			time: "Yesterday, 09:15 AM",
			pinned: true,
		},
	];

	return (
		<Card className="p-6 lg:w-[660px]">
			<div className="flex justify-between items-center  ">
				<h3 className="font-semibold">Announcement</h3>
				<button className=" text-sm text-gray-500 border px-2 py-0 rounded-md lg:flex lg:justify-center lg:items-center ">
					{formatDate()}
					<RiArrowDropDownLine className="h-10 w-10 font-light cursor-pointer" />
				</button>
			</div>

			<div className="lg:mt-2 flex flex-col gap-2">
				{announcements.map((announcement, index) => (
					<div
						key={index}
						className="flex border lg:pl-0 p-2 bg-background-customGray rounded-lg w-[610px]"
					>
						<div className="flex-1 p-2 ">
							<p className="font-medium lg:w-96 mb-1">{announcement.title}</p>
							<p className="text-[12px]  text-gray-500">{announcement.time}</p>
						</div>
						<div className="flex items-center gap-2">
							{announcement.pinned && (
								<TiPin
									className={`h-6 w-6 ${
										index === 0 ? "text-gray-500" : "text-gray-400"
									}`}
								/>
							)}
							<button>
								<FiMoreHorizontal className="h-5 w-5 text-gray-400" />
							</button>
						</div>
					</div>
				))}
			</div>
			<button className="w-full text-center text-red-500 mt-4 font-semibold">
				See All Announcement
			</button>
		</Card>
	);
};
export default AnnouncementCard;
