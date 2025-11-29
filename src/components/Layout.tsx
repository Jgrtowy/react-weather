import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { NavigationSidebar } from "./NavigationSidebar";
import { Input } from "./ui/input";
import ThemeToggle from "./ThemeToggle";

export default function Layout() {
    return (
        <div className="flex flex-col">
            <SidebarProvider>
                <NavigationSidebar />
                <div className="w-full p-2">
                    <div className="flex items-center justify-between">
                        <SidebarTrigger />
                        <Input placeholder="Search city"/>
                        <ThemeToggle />
                    </div>
                    <main className='w-full h-full'>
                        <Outlet />
                    </main>
                    </div>
            </SidebarProvider>
        </div>
    )
}