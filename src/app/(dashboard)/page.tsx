"use client";
import ActivityCard from "@/components/ActivityCard";
import AnnouncementCard from "@/components/AnnoncementCard";
import Header from "@/components/Header";
import ScheduleCard from "@/components/ScheduleCard";
import Sidebar from "@/components/Sidebar";
import StatsCard from "@/components/StatsCard";
import TrendCard from "@/components/TrendCard";
import { useState } from "react";

const Dashboard = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

	return (
		<div className="min-h-screen">
			<div className="flex">
				<Sidebar
					isOpen={isSidebarOpen}
					onClose={() => setIsSidebarOpen(false)}
				/>

				<div className="flex-1">
					<Header
						isSidebarOpen={isSidebarOpen}
						setIsSidebarOpen={setIsSidebarOpen}
					/>

					<hr className="w-[97%] ml-auto" />

					<main className="p-6 bg-white">
						<div className="max-w-[1920px] mx-auto">
							<h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
								<div>
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 mb-6">
										<StatsCard
											title="Available Position"
											count={24}
											subtitle="4 Urgently needed"
											subtitleColor="text-red-500"
											bgColor="bg-[#ffefe7]"
										/>
										<StatsCard
											title="Job Open"
											count={10}
											subtitle="4 Active hiring"
											subtitleColor="text-blue-500"
											bgColor="bg-blue-100"
										/>
										<StatsCard
											title="New Employees"
											count={24}
											subtitle="4 Department"
											subtitleColor="text-purple-500"
											bgColor="bg-purple-100"
										/>
									</div>
									<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-28  mb-6 ">
										<TrendCard 
											title="Total Employees"
											count={216}
											trend="+2% Past month"
											details={["120 Men", "96 Women"]}
										/>
										<TrendCard
											title="Talent Request"
											count={16}
											trend="+5% Past month"
											details={["6 Men", "10 Women"]}
										/>
									</div>
									<AnnouncementCard />
								</div>
								<div className="grid grid-cols-1 gap-6">
									<ActivityCard />
									<ScheduleCard />
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
