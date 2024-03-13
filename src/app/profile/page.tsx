export default function Profile() {
    const biodata = {
        nama: "Maria Fadilla",
        jurusan: "Teknologi Informasi",
        minat: "Seni dan Teknologi",
        kontak: "mariafadilla15@gmail.com",
    };

    return (
        <div>
            <h1>Welcome to My Profile</h1>
            <p>Nama    : {biodata.nama}</p>
            <p>Jurusan : {biodata.jurusan}</p>
            <p>Minat   : {biodata.minat}</p>
            <p>Kontak  : {biodata.kontak}</p>
        </div>
    );
}