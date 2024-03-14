import Link from "../../../node_modules/next/link";

const headingStyle = {
  backgroundColor: 'lightGrey',
  color: 'navy'
};

export default function ProductList() {
  return (
    <div>
      <br/>
      <Link href='/'>Home</Link>

      <div style={headingStyle}>
        <h1>Welcome to Products</h1>
      </div>

      <h2>Product List</h2> <hr/>

      <ul>
        <li><div><span>Product 1</span> <Link href='/products/1'>Details</Link></div><br/></li>
        <li><div><span>Product 2</span> <Link href='/products/2'>Details</Link></div><br/></li>
        <li><div><span>Product 3</span> <Link href='/products/3'>Details</Link></div></li>
      </ul>
    </div>
  );
}