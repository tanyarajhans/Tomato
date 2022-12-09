export const Header = () =>{
    return(
        <nav id = "header" className="bg-black text-white">
            {/* header container */}
            <div className="w-full container mx-auto flex flex-wrap items-center justify-content-between mt-0 py-2">
                {/* logo */}
                <div className="logo-wrapper py-4 flex items-center">
                    <img src = {"/"} alt = "logo"/>
                </div>
                {/* menu for all links */}
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                    <div>Home</div>
                    <div>About</div>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <div>Cart</div>
                    <div>login</div>
                    <div>signup</div>
                </div>
            </div>
        </nav>
    )
}