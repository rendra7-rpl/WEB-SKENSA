document.addEventListener("DOMContentLoaded", function () {
    // Dapatkan semua elemen gallery-item
    const galleryItems = document.querySelectorAll(".gallery-item");

    // Mapping halaman tujuan berdasarkan urutan gambar
    const blogPages = [
        "https://www.instagram.com/p/DGPsvf-zNLR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // blog2.png
        "https://www.instagram.com/p/DGDbHuky5C3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // blog1.png
        "https://www.instagram.com/p/DFmsIFjym9H/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA== ", // blog3.png
        "https://www.instagram.com/p/DDcEnNJT9se/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // blog4 (2).png
        "https://www.instagram.com/p/DBFeI6dzxYo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // blog5.png
        "https://www.instagram.com/p/DCqTYIVTNSX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="  // blog6.png
    ];

    // Tambahkan event listener pada setiap gallery-item
    galleryItems.forEach((item, index) => {
        item.addEventListener("click", function () {
            // Arahkan ke halaman yang sesuai
            window.location.href = blogPages[index];
        });
    });
});