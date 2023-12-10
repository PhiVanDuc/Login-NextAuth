import './styleHomePage.scss'
import { getServerSession } from "next-auth/next"
import options from "./api/auth/[...nextauth]/options"

export default async function HomePage() {
    const session = await getServerSession(options);

    return (
        <div className="home-page">
            <div className="container">
                <h1>
                    Home Page
                    {
                        !session ? <span>Login required</span> : <span className='done'>Logged</span> 
                    }
                </h1>
            </div>
        </div>
    )
}