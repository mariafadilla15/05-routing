const baseUrl = 'https://i.imgur.com/';
const biodata = {
    imageId: '5Q2oUMg',
    imageSize: 'b',
    nama: "Maria Fadilla",
    jurusan: "Teknologi Informasi",
    minat: "Seni dan Teknologi",
    kontak: "mariafadilla15@gmail.com",
    headingStyle: {
        backgroundColor: 'lightGrey',
        color: 'navy'
    },
};

export default function Profile() {

    const { headingStyle } = biodata;

    return (
        <div>
            <div style={headingStyle}>
                <h1>Welcome to My Profile</h1>
            </div>
            <div>
                <img
                    className="avatar"
                    src={`${baseUrl}${biodata.imageId}${biodata.imageSize}.jpeg`}
                />
                <p>Nama    : {biodata.nama}</p>
                <p>Jurusan : {biodata.jurusan}</p>
                <p>Minat   : {biodata.minat}</p>
                <p>Kontak  : {biodata.kontak}</p>
            </div>
        </div>
    );
}