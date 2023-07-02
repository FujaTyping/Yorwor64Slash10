<!-- Navbar PHP -->

<nav id="Bigscreenwarn" style="font-size: 10px;" class="py-1 bg-warning">
    <div class="container d-flex flex-wrap">
        <ul class="nav me-auto">
            <li class="nav-item">ตอนนี้หน้า UI บนอุปกรณ์อื่นที่ไม่ใช้ Desktop จะมีการจัดเรียง UI ที่ไม่เป็นระเบียบ
            </li>
        </ul>
    </div>
</nav>
<header style="padding: 20px;background-color: rgb(45, 118, 255);"
    class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
            <img width="40" height="40"
                src="https://cdn.discordapp.com/attachments/1071401485239332864/1109792299539505163/E0B895E0B8A3E0B8B5E0B888E0B8B1E0B881E0B8A3.png">
        </a>
    </div>
    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a style="color: white;" href="/" class="nav-link px-2">หน้าหลัก</a></li>
        <div class="btn-group">
            <button style="color: white;" type="button" class="nav-link px-2 dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false">
                ฝ่ายการเรียน
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/page/homework.html">การบ้าน</a></li>
                <li><a class="dropdown-item" href="/page/classcode.html">รหัสห้องเรียน</a></li>
            </ul>
        </div>
        <div class="btn-group">
            <button style="color: white;" type="button" class="nav-link px-2 dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false">
                ฝ่ายกิจกรรม
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/page/event.html">บันทึกกิจกรรม</a></li>
            </ul>
        </div>
        <div class="btn-group">
            <button style="color: white;" type="button" class="nav-link px-2 dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false">
                ฝ่ายการงาน
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/score.html">ดูคะแนนนักเรียน</a></li>
            </ul>
        </div>
        <li><a style="color: white;" href="/page/record.html" class="nav-link px-2">ความคิดเห็น</a></li>
        <div class="btn-group">
            <button style="color: white;" type="button" class="nav-link px-2 dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false">
                เอกสาร
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/docs/white-classroom.html">ห้องเรียนสีขาว</a></li>
                <li><a class="dropdown-item" href="/about/classroom.html">เกี่ยวกับห้องของเรา</a></li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="/about/webapp.html">เกี่ยวกับไซต์นี้</a></li>
            </ul>
        </div>
    </ul>
    <div class="col-md-3 text-end">
        <button onclick="playmusic()" class="btn rounded-circle p-3 lh-1" type="button">
            <img width="18" height="20"
                src="https://cdn.discordapp.com/attachments/1071401485239332864/1122914481509519480/106-1068121_transparent-music-icon-png-icon-music-.png">
        </button>
        <audio id="audioPlayer" loop hidden controls>
            <source
                src="https://cdn.discordapp.com/attachments/1071401485239332864/1122916594901844089/no_copyright_music_In_Dreamland_background_music.mp3"
                type="audio/mpeg">
        </audio>
        <button onclick="window.location.href = '/auth/v1/login.html';"
            style="background-color: rgb(255, 22, 22);color: white;" type="button" class="btn">ล็อกอิน</button>
    </div>
</header>