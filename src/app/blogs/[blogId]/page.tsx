type Props = {
    params: {
          blogId: string
    }
}
  
export default function BlogDetails({ params }: Props) {
    return (
        <h1>Hello, this is {params.blogId} Blog</h1>
    )
}