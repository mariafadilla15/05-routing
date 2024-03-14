import Link from "../../../node_modules/next/link";

const headingStyle = {
  backgroundColor: 'lightGrey',
  color: 'navy'
};

export default function Blog() {
  return (
    <div>
      <br/>
      <Link href='/'>Home</Link>

      <div style={headingStyle}>
        <h1>Welcome to My Blog</h1>
      </div>
      
      <ul>
        <li><div><span>First</span> <Link href='/blogs/first'>Details</Link></div><br/></li>
        <li><div><span>Second</span> <Link href='/blogs/second'>Details</Link></div><br/></li>
        <li><div><span>Marfad</span> <Link href='/blogs/marfad'>Details</Link></div></li>
      </ul>
    </div>
  );
}