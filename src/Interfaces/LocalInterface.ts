import { Dispatch, SetStateAction } from "react";

export interface HeaderPropsInterface {
    isSidebarOpen : boolean;
    setIsSidebarOpen : Dispatch<SetStateAction<boolean>>
}

export interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export interface StatsCardProps {
    title: string;
    count: number;
    subtitle: string;
    subtitleColor: string;
    bgColor : string;
}

export interface TrendCardProps {
    title: string;
    count: number;
    trend: string;
    details: string[];
    bgColor : string;
}
