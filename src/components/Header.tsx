import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { HeaderPropsInterface } from "@/Interfaces/LocalInterface";
import { BsBellFill } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";

const Header = ({ 
    isSidebarOpen,
    setIsSidebarOpen 
} : HeaderPropsInterface ) => {

  return (
    <header className="bg-white p-4">
        <div className="flex items-center justify-between max-w-[1920px] mx-auto">
            <div className="flex items-center gap-4">
                <button 
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="lg:hidden flex"
                >
                    <IoIosMenu className="h-6 w-6" />
                </button>
                <div className="relative lg:ml-8 w-40 lg:w-72">
                    <IoSearch className="absolute right-2 top-2.5 h-4 w-4 text-iconColor cursor-pointer" />
                    <Input 
                        placeholder="Search" 
                        className=" bg-background-customGray"
                    />
                </div>
            </div>
            <div className="flex items-center gap-3 lg:gap-6 ">
                <button className="relative">
                    <BsBellFill className="h-6 w-6 text-iconColor"/>
                    <span className="absolute bottom-3.5 left-3.5 border-2 border-white  h-3 w-3 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                        
                    </span>
                </button>
                <button>
                    <LuMessageSquareMore className="h-5 w-5 text-gray-600"/>
                </button>
                <div className="flex items-center gap-2">
                    <Avatar className="w-10 h-10">
                    <AvatarImage 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
                        className="object-cover rounded-full"
                    />
                    <AvatarFallback>AJ</AvatarFallback>
                    </Avatar>
                    <p className="hidden md:block text-sm font-normal">
                        Anchal Raj
                    </p>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;
