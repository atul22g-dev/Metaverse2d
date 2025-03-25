import { Link } from "react-router-dom"
import Header from "../utils/Header"

const Home = () => {
    return (
        <>
            <Header />
            {/* Body */}
            <div className="bg-[var(--body)] h-[calc(100vh-4.69em)]">
                {/* if Not Create Space */}
                <div className="h-full flex items-center justify-center">
                    <p className="text-white font-semibold">
                        You haven't visited any spaces. <Link to={'/Signin'} className="underline cursor-pointer">Create a Space</Link> to get started
                    </p>
                </div>

            </div>
        </>
    )
}

export default Home