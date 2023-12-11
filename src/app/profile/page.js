import './styleProfilePage.scss'
import { getServerSession } from "next-auth/next"
import options from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

export const metadata = {
	title: "Profile page",
}

export default async function ProfilePage() {
    const session = await getServerSession(options);
    if (!session) {
        redirect("/api/auth/signin?callbackUrl=/profile");
    }
    
    return (
        <div className="profile-page">
            <div className="container">
                <h1>Profile Page</h1>
            </div>
        </div>
    )
}
