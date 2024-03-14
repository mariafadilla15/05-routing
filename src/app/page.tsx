import Link from "../../node_modules/next/link";

const headingStyle = {
    backgroundColor: 'lightGrey',
    color: 'navy'
};

export default function Home() {
    return (
        <div>
            <div style={headingStyle}>
                <h1>Welcome to Home</h1>
            </div>
            <ul>
                <li><Link href='/profile'>Profile</Link></li> <br/>
                <li><Link href='/about'>About</Link></li> <br/>
                <li><Link href='/blogs'>Blogs</Link></li> <br/>
                <li><Link href='/products'>Products</Link></li> <br/>
            </ul>
        </div>
    );
}