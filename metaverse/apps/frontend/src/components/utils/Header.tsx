import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="text-gray-600 body-font bg-[var(--secandary-color)]">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-2xl text-white">MetaVerse2D</span>
                </span>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-4">
                    <Link to={"/Signin"} className="button button-1"> Sign In</Link>
                    <button className="button button-2">Create Space</button>
                </nav>
            </div>
        </header>
    )
}

export default Header