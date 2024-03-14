import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1>Welcome to Home</h1>
            <ul>
                <li><Link href='/profile'>Profile</Link></li> <br/>
                <li><Link href='/about'>About</Link></li> <br/>
            </ul>
        </div>
    );
}