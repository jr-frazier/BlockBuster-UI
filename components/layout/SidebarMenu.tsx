import NavLink from "@/components/NavLink";
import {Divider} from "@/components/Divider";

export default function SidebarMenu() {

    return <aside className="w-38 mt-24 bg-sky-200 border-blue-900 border-4 text-white flex flex-col h-fit pb-32">
        <nav className="flex-1 p-4 space-y-2 mt-24 ">
            <h3 className="text-black text-lg">Highlights</h3>
            <NavLink link={"/#New Releases"} name={"New Releases"}/>
            <NavLink link={"/#Top Rated"} name={"Top Rated"}/>
            <NavLink link={"/#Upcoming"} name={"Upcoming"}/>
            <Divider/>
            <h3 className="text-black text-lg">Categories</h3>
            <NavLink link={"/?genre=Action"} name={"Action & Adventure"}/>
            <NavLink link={"/?genre=Comedy"} name={"Comedy"}/>
            <NavLink link={"/?genre=Drama"} name={"Drama"}/>
            <NavLink link={"/?genre=Horror"} name={"Horror"}/>
            <NavLink link={"/?genre=Romance"} name={"Romance"}/>
            <NavLink link={"/?genre=Sci-Fi"} name={"Sci-Fi"}/>
            <NavLink link={"/?genre=Thriller"} name={"Thriller"}/>
            <NavLink link={"/?genre=Western"} name={"Western"}/>
            <NavLink link={"/?genre=Mystery"} name={"Mystery"}/>
            <NavLink link={"/?genre=Animation"} name={"Animation"}/>
        </nav>
    </aside>

}