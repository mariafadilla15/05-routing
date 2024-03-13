const baseUrl = 'https://www.urbanplus.co.id/wp-content/uploads/2022/08/ikn_sip_02.jpg';

const artikel = {
    headingStyle: {
        backgroundColor: 'lightGrey',
        color: 'navy'
    },
    judul: "A Global City For All: Nusantara Capital City (IKN)",
    isi: (
        <div>
            <p>
                Terletak di pantai timur Kalimantan, Ibu Kota Nusantara (IKN) adalah proyek ambisius Indonesia yang dirancang sebagai kota pintar yang berkelanjutan dan inklusif. Sebagai pusat pemerintahan baru yang juga menjadi simbol identitas nasional, IKN mengintegrasikan teknologi canggih dan prinsip-prinsip ramah lingkungan, dengan visi untuk menjadi kota global yang menjanjikan kemajuan, keberlanjutan, dan harmoni bagi semua warganya.
            </p>
            <p>
                IKN bertujuan untuk menciptakan lingkungan yang ramah, inklusif, dan berkelanjutan bagi penduduknya. Dengan pendekatan yang holistik, IKN tidak hanya memperhatikan infrastruktur fisik, tetapi juga menitikberatkan pada aspek sosial, ekonomi, dan lingkungan. Melalui penggunaan teknologi terkini dan prinsip-prinsip desain yang ramah lingkungan, IKN berusaha menjadi contoh bagi kota-kota lain di dunia.
            </p>
            <p>
                Sebagai pusat pertumbuhan ekonomi dan inovasi, IKN menawarkan peluang tak terbatas bagi para penduduknya. Dengan fokus pada pengembangan sumber daya manusia dan industri kreatif, IKN bertujuan untuk menciptakan ekosistem yang mendukung pertumbuhan ekonomi yang inklusif dan berkelanjutan.
            </p>
        </div>
    )
};

export default function Blog() {
    const { headingStyle } = artikel;
    return (
        <div>
            <div style={headingStyle}>
                <h1>Welcome to My Blog</h1>
            </div>
            <div>
                <img
                    className="imageBlog"
                    src={`${baseUrl}`}
                    alt="IKN"
                    style={{ width: '45%', height: 'auto' }}
                />
            </div>
            <h2>{artikel.judul}</h2>
            {artikel.isi}
        </div>
    );
}