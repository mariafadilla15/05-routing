const baseUrl = 'https://i.imgur.com/';

const artikel = {
    imageId: 'G0doLms',
    imageSize: 'm',
    judul: "Time For Healing: Finding Peace on the Beach",
    isi: (
        <div>
            <p>
                Liburan ke pantai seringkali dianggap sebagai salah satu cara terbaik untuk melepas penat dan menemukan kedamaian. Dengan deburan ombak yang menenangkan, pasir yang lembut di bawah kaki, dan panorama matahari terbenam yang memukau, pantai menjadi tempat sempurna untuk refreshing.
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

export default function BlogFirst() {
    const { headingStyle } = artikel;
    return (
        <div>
            <div style={headingStyle}>
                <h1>Blogs: First</h1>
            </div>
            <div>
                <img
                    className="firstBlog"
                    src={`${baseUrl}${artikel.imageId}${artikel.imageSize}.jpeg`}
                    alt="pantai"
                />
            </div>
            <h2>{artikel.judul}</h2>
            {artikel.isi}
        </div>
    );
}