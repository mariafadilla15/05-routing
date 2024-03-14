import Link from "../../../../node_modules/next/link";

const baseUrl = 'https://i.imgur.com/';

const artikel = {
    imageId: 'G0doLms',
    imageSize: 'm',
    judul: "Time For Healing: Finding Peace on the Beach",
    isi: (
        <div>
            <p>
                Liburan ke pantai seringkali dianggap sebagai salah satu cara terbaik untuk melepas penat dan menemukan kedamaian. Dengan deburan ombak yang menenangkan, pasir yang lembut di bawah kaki, dan panorama matahari terbenam yang memukau, pantai menjadi tempat sempurna untuk.
            </p>
            <p>
                Berjalan di tepi pantai sambil mendengarkan suara alam, dapat membantu kita melupakan sejenak hiruk-pikuk kehidupan sehari-hari. Ini adalah waktu untuk menyembuhkan, baik secara fisik maupun emosional, dan untuk mengisi ulang energi kita.
            </p>
            <p>
                Pantai juga menawarkan berbagai aktivitas yang dapat meningkatkan kesehatan mental kita, seperti berjalan kaki di tepi air, berenang, atau sekadar duduk dan membaca buku. Tidak ada yang lebih menyegarkan daripada menghirup udara segar pantai dan merasakan sinar matahari yang hangat di kulit.
            </p>
            <p>
                Jadi, jika Anda merasa lelah dan ingin menyegarkan pikiran, pertimbangkan untuk berwisata ke pantai. Biarkan alam melakukan sihirnya dan bawa pulang kenangan indah serta semangat baru untuk menghadapi tantangan yang akan datang.
            </p>
        </div>
    ),
    headingStyle: {
        backgroundColor: 'lightGrey',
        color: 'navy'
    },
};

type Props = {
    params: {
          blogId: string
    }
}
  
export default function BlogDetails({ params }: Props) {
    const { blogId } = params;
    
    return (
        <div>
            <div style={artikel.headingStyle}>
                <h1>Hello, this is {blogId} Blog</h1>
            </div>
            <div>
                <img
                    className="dinamicBlog"
                    src={`${baseUrl}${artikel.imageId}${artikel.imageSize}.jpeg`}
                    alt="pantai"
                />
            </div>
            <h2>{artikel.judul}</h2>
            {artikel.isi}
            <br/>
            <Link href='/blogs'>Back</Link>
        </div>
    );
}