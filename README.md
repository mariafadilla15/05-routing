# 05-routing

#### For Others Project, Please Visit: 
https://github.com/mariafadilla15/Pemrograman-Berbasis-Framework.git

<br><br>


# **Laporan Praktikum - #05 React Router**

|  | Pemrograman Berbasis Framework 2024 |
|--|--|
| NIM |  2141720063|
| Nama |  Maria Fadilla |
| Kelas | TI - 3A |

<br>

## **Praktikum 1: Membuat Routing Sederhana**
---

Mempersiapkan project dengan memanfaatkan template repository yang telah dipersiapkan di alamat https://github.com/dhanifudin/routing-demo dan menggunakan tombol Use this template kemudian memilih Create a new repository.

- Nama Reposiotry: `05-routing`

Clone repository

`git clone https://github.com/mariafadilla15/05-routing.git`

Menjalankan dependencies

`npm install`

![Screenshot](assets-report/00.png)

Menambahkan file `page.tsx` di dalam folder app, dan membuat komponen dengan kode berikut:

```bash
export default function Home() {
  return <h1>Welcome to Home</h1> ;
}
```

Menjalankan project

`npm run dev`

![Screenshot](assets-report/01.png)

Membuat halaman routing `/about` dengan NextJS, dengan membuat folder `/about` dalam `/app` dan membuat file dengan nama `page.tsx`. Kemudian membuat function komponen seperti pada kode berikut:

```bash
export default function About() {
  return <h1>Welcome to About</h1> ;
}
```

![Screenshot](assets-report/02.png)

### **To do (1)**

- Membuat halaman `/profile` yang menampilkan isi biodata dengan menggunakan routing di NextJS.

```bash
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
```

- Hasil tampilannya adalah sebagai berikut:

![Screenshot](assets-report/03.png)

## **Praktikum 2: Membuat routing bersarang (Nested Routing)**
---

Menambahkan susunan folder `/blogs/first` dan `/blogs/second`. Kemudian menambahkan masing-masing untuk setiap folder dengan file `page.tsx`.

![Screenshot](assets-report/04.png)

Membuat function component pada file `/blogs/page.tsx`.

```bash
export default function Blog() {
  return (
        <h1>Blog</h1>
  );
}
```

Membuat function component pada file `/blogs/first/page.tsx`.

```bash
export default function FirstBlog() {
  return (
        <h1>First Blog</h1>
  );
}
```

Mengakses halaman `/blogs` dan `/blogs/first` pada browser.

- `/blogs`

![Screenshot](assets-report/05.png)

- `/blogs/first`

![Screenshot](assets-report/06.png)