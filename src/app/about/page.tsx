import Link from "../../../node_modules/next/link";

const headingStyle = {
  backgroundColor: 'lightGrey',
  color: 'navy'
};

export default function About() {
    return (
        <div>
            <br/>
            <Link href='/'>Home</Link>
            <div style={headingStyle}>
                <h1>Welcome to About</h1>
            </div> 
            <span>Get to know Me, please visit </span><Link href='/profile'>My Profile</Link>
        </div>
    );
}