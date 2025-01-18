"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaCalendarDay, FaUserPlus, FaUsers } from "react-icons/fa";
import { SiBuiltbybit } from "react-icons/si";
import { BsHeadphones } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { SidebarProps } from "@/Interfaces/LocalInterface";

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
	const menuItems = [
		{
			title: "MAIN MENU",
			items: [
				{ icon: LuLayoutDashboard, label: "Dashboard", href: "/" },
				{ icon: FaUserPlus, label: "Recruitment", href: "/" },
				{ icon: FaCalendarDay, label: "Schedule", href: "/" },
				{ icon: FaUsers, label: "Employee", href: "/" },
				{ icon: SiBuiltbybit, label: "Department", href: "/" },
			],
		},
		{
			title: "OTHER",
			items: [
				{ icon: BsHeadphones, label: "Support", href: "/" },
				{ icon: IoMdSettings, label: "Settings", href: "/" },
			],
		},
	];

	return (
		<aside
			className={cn(
				"fixed inset-y-0 left-0 z-50 w-64 bg-background-customGray border-r transform transition-transform duration-200 ease-in-out lg:relative lg:transform-none",
				!isOpen && "-translate-x-full"
			)}
		>
			<div className="relative p-6">
				<button
					onClick={onClose}
					className="absolute top-4 right-2 text-gray-500 bg-gray-300 p-1 rounded-full lg:hidden"
					aria-label="Close Sidebar"
				>
					<IoClose className="h-4 w-4" />
				</button>
				<Link
					href="/"
					className="flex items-center gap-2 lg:ml-9 font-bold text-2xl"
				>
					<Image src="/logo.png" alt="logo" height={36} width={36} />
					<span className="text-background-customBlue">Vasitum</span>
				</Link>
			</div>

			<nav className="flex flex-col gap-16 px-4">
				{menuItems.map((section, index) => (
					<div key={index} className="flex flex-col gap-4">
						<h2 className="px-4 text-xs font-semibold text-iconColor">
							{section.title}
						</h2>
						<ul className="flex flex-col gap-2">
							{section.items.map((item, itemIdx) => {
								// Calculate the global index
								const globalIndex =
									index === 0 ? itemIdx : menuItems[0].items.length + itemIdx;
								return (
									<li key={itemIdx}>
										<Link
											href={item.href}
											className={`flex items-center gap-6 px-4 py-2 rounded-lg hover:bg-gray-50 ${
												globalIndex === 0 ? "text-red-500" : "text-gray-500"
											}`}
										>
											<item.icon
												className={`h-5 w-5 ${
													globalIndex === 0 ? "text-red-500" : "text-iconColor"
												}`}
											/>
											<span>{item.label}</span>
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				))}
			</nav>
		</aside>
	);
};

export default Sidebar;
