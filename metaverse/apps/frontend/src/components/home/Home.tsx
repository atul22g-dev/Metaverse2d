import { Link } from "react-router-dom"
import Header from "../utils/Header"
import Footer from "../utils/Footer"

const Home = () => {
    return (
        <>
            <Header />
            {/* Body */}
            <div className="bg-[var(--primary-color)] h-[calc(100vh-4.69em)]">
                {/* if Not Create Space */}
                <div className="h-full flex items-center justify-center">
                    <p className="text-white font-semibold">
                        You haven't visited any spaces. <Link to={'/'} className="underline cursor-pointer">Create a Space</Link> to get started
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home