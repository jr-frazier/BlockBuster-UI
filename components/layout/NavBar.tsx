export default function NavBar() {
    return (
        <header
            className="h-11 mt-[40px] bg-sky-200 border-4 rounded-r-full border-blue-900 flex items-center justify-between px-6">
            <div className="flex gap-4">
                <input type="text" placeholder="Search"
                       className=" bg-white border-2 border-blue-900 rounded-full px-4 block"/>
                <button
                    className="bg-blue-900 text-white rounded-full px-4 cursor-pointer button hover:bg-blue-500">Search
                </button>
            </div>
            <h3 className="flex gap-4 font-bold text-2xl tracking-widest">
                MOVIES
            </h3>
        </header>)
}