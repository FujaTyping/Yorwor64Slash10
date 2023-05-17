window.onload = function() {
    const Load = document.getElementById("loader")
    const App = document.getElementById("app")
    const Bg = document.getElementById("bg")

    Load.style.display = "none";
    Bg.style.display = "block";
    /*window.location.href = '/1020.html';*/
    /*window.location.href = '/401.html';*/
    requestPermission()

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    
    /*
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    
    var time = hours + ":" + minutes;
    
    if (time >= "16:30" && time <= "18:30") {
        console.log('In time')
        window.location.href = '/custom/401.html';
    } else {
        console.log('Not in time')
    }
    */

    var path = window.location.pathname;
    var page = path.split("/").pop();
    console.log(page)
    if (page == "" || page == "index.html" || page == "index") {
        Swal.fire({
            title: 'ประกาศจากโรงเรียน',
            text: 'แจ้งวันหยุด วันที่ 17 พ.ค. 66',
            imageUrl: 'https://scontent.fhdy3-1.fna.fbcdn.net/v/t39.30808-6/347237497_784355869819145_6659912260148751069_n.jpg?stp=dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGFPIW76d4DnMy8PCGRp-dVedzJF7l-ArF53MkXuX4CsXOShh9DEov3-b4NpvyEH6Krx360ZT74bpcA8dZCzTRq&_nc_ohc=Te0FOTorWSkAX_Uh969&_nc_ht=scontent.fhdy3-1.fna&oh=00_AfDYFjQKOL4Tc_dMsRtT3SoG-9on5mx7hNlahsnoFCtecQ&oe=64679FAC',
            imageWidth: 300,
            imageHeight: 200,
            confirmButtonText: 'โอเค ฉันเข้าใจแล้ว !'
        })
    }
};