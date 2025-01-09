import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/formatDate";
import { FiMoreHorizontal } from "react-icons/fi";
import { TiPin } from "react-icons/ti";

const AnnouncementCard = () => {
  const announcements = [
    {
      title: "Outing schedule for every department",
      time: "5 Minutes ago",
      pinned: true
    },
    {
      title: "Meeting HR Department",
      time: "Yesterday, 12:30 PM",
      pinned: false
    },
    {
      title: "IT Department need two more talents for UX/UI Designer position",
      time: "Yesterday, 09:15 AM",
      pinned: false
    }
  ];

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold">Announcement</h3>
        <button className="text-sm text-gray-500 border-2 px-2 py-1 rounded-md">{formatDate()}</button>
      </div>

      <div className="space-y-4">
        {announcements.map((announcement, index) => (
          <div key={index} className="flex items-start justify-between gap-4 p-4 bg-background-customGray rounded-lg">
            <div className="flex-1">
              <p className="font-medium mb-1">{announcement.title}</p>
              <p className="text-[12px] text-gray-500">{announcement.time}</p>
            </div>
            <div className="flex items-center gap-2">
              {announcement.pinned && (
                <TiPin className="h-5 w-5 text-gray-400" />
              )}
              <button>
              <FiMoreHorizontal className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full text-center text-red-500 mt-4">
        See All Announcement
      </button>
    </Card>
  );
}

export default AnnouncementCard;
