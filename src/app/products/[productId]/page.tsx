import Link from "next/link";

type Props = {
    params: {
          productId: string
    }
  }
  
export default function ProductDetails({ params }: Props) {
    return (
      <div>
            <h1>Details about product {params.productId}</h1>
            <Link href='/products'>Back</Link>
      </div>
    )
}