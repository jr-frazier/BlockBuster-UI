import NavLink from "@/components/NavLink";
import {Divider} from "@/components/Divider";

export default function SidebarMenu() {

    return <aside className="w-38 mt-24 bg-sky-200 border-blue-900 border-4 text-white flex flex-col h-fit pb-32">
        <nav className="flex-1 p-4 space-y-2 mt-24 ">
            <h3 className="text-black text-lg">Highlights</h3>
            <NavLink link={"/"} name={"New Releases"}/>
            <NavLink link={"/"} name={"Top Rated"}/>
            <NavLink link={"/"} name={"Upcoming"}/>
            <Divider/>
            <h3 className="text-black text-lg">Categories</h3>
            <NavLink link={"/"} name={"Action & Adventure"}/>
            <NavLink link={"/"} name={"Comedy"}/>
            <NavLink link={"/"} name={"Drama"}/>
            <NavLink link={"/"} name={"Horror"}/>
            <NavLink link={"/"} name={"Romance"}/>
            <NavLink link={"/"} name={"Sci-Fi"}/>
            <NavLink link={"/"} name={"Thriller"}/>
            <NavLink link={"/"} name={"Western"}/>
            <NavLink link={"/"} name={"Mystery"}/>
            <NavLink link={"/"} name={"Animation"}/>
        </nav>
    </aside>

}