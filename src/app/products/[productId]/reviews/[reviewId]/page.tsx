type Props = {
    params: {
        productId: string;
        reviewId: string
    }
  }
  
  export default function ProductDetails({ params }: Props) {
    return (
          <h1>Details about product {params.productId} review {params.reviewId}</h1>
    )
}