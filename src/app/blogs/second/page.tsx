import Link from "../../../../node_modules/next/link";

const baseUrl = 'https://i.imgur.com/';

const artikel = {
    imageId: 'Ck7b5jN',
    imageSize: 'm',
    judul: "Cultivating Creativity: The Art Forms We Must Sustain",
    isi: (
        <div>
            <p>
                Kesenian merupakan warisan berharga yang mencerminkan kekayaan budaya dan sejarah suatu bangsa. Dari tarian tradisional yang anggun hingga seni ukir yang rumit, setiap bentuk kesenian membawa cerita dan nilai-nilai yang telah diwariskan turun-temurun.
            </p>
            <p>
                Di era modern ini, penting bagi kita untuk terus membudidayakan dan melestarikan kesenian agar tidak tergerus oleh arus globalisasi. Kesenian bukan hanya soal estetika, tetapi juga tentang mempertahankan identitas dan memperkaya kehidupan sosial masyarakat.
            </p>
            <p>
                Melalui pembudidayaan kesenian, kita dapat membangun jembatan antara masa lalu dan masa kini, serta menginspirasi generasi yang akan datang untuk terus menghargai dan mengembangkan warisan budaya yang unik ini.
            </p>
            <p>
                Mari kita dukung para seniman dan lembaga kesenian, berpartisipasi dalam kegiatan seni, dan terlibat langsung dalam proses kreatif. Dengan demikian, kita dapat memastikan bahwa keindahan kesenian akan terus hidup dan berkembang, membawa pesona dan pesan bagi banyak generasi yang akan datang.
            </p>
        </div>
    ),
    headingStyle: {
        backgroundColor: 'lightGrey',
        color: 'navy'
    },
};

export default function BlogSecond() {
    const { headingStyle } = artikel;
    return (
        <div>
            <div style={headingStyle}>
                <h1>Blogs: Second</h1>
            </div>
            <div>
                <img
                    className="secondBlog"
                    src={`${baseUrl}${artikel.imageId}${artikel.imageSize}.jpeg`}
                    alt="art"
                />
            </div>
            <h2>{artikel.judul}</h2>
            {artikel.isi}
            <br/>
            <Link href='/blogs'>Back</Link>
        </div>
    );
}