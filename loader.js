window.onload = function() {
    const Load = document.getElementById("loader")
    const App = document.getElementById("app")
    const Bg = document.getElementById("bg")

    Load.style.display = "none";
    Bg.style.display = "block";

    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page == "index.html") {
        Swal.fire({
            title: 'ตารางกิจกรรม',
            text: 'สามารถกดค้างแล้วกดเปิดรูปภาพได้',
            imageUrl: 'https://cdn.discordapp.com/attachments/1024635780360056883/1085491294668861470/103776.jpg',
            imageWidth: 450,
            imageHeight: 600,
            confirmButtonText: 'โอเค ฉันเข้าใจแล้ว !'
        })
    }
};