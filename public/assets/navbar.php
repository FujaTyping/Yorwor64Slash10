<!-- Navbar PHP -->

<nav id="Bigscreenwarn" style="font-size: 10px;" class="py-1 bg-warning">
    <div class="container d-flex flex-wrap">
        <ul class="nav me-auto">
            <li class="nav-item">ตอนนี้หน้า UI บนอุปกรณ์อื่นที่ไม่ใช้ Desktop จะมีการจัดเรียง UI ที่ไม่เป็นระเบียบ
            </li>
        </ul>
    </div>
</nav>
<nav id="Olddomain" style="font-size: 10px;" class="py-1 bg-warning">
    <div class="container d-flex flex-wrap">
        <ul class="nav me-auto">
            <li class="nav-item">ดูเหมือนว่าคุณยังใช้โดเมนแบบเก่าอยู่ ตอนนี้ย้ายไปใช้ชื่อ : <a style="color: black;cursor: pointer;text-decoration: underline;" onclick='ChangeDomain()' >yorwor.fujatyping.dev</a> แล้ว <span class="badge rounded-pill text-bg-danger">ฟีเจอร์ใหม่จะเพิ่มให้กับโดเมนใหม่เท่านั้น คือ : การแจ้งเตือน</span></li>
        </ul>
    </div>
</nav>
<!--
<nav id="cdnwarn" style="font-size: 10px;" class="py-1 bg-danger">
    <div class="container d-flex flex-wrap">
        <ul class="nav me-auto">
            <li class="nav-item" style="color:white ;">ตอนนี้ระบบ CDN มีปัญหากำลังกู้คืนรูปภาพทั้งหมด จาก <a style="text-decoration: underline;">cdn.discordapp.com</a> มายัง <a style="text-decoration: underline;">yorwor.fujatyping.dev/cdn</a>
            </li>
        </ul>
    </div>
</nav>
-->
<nav id="Nolonger" style="font-size: 10px;" class="py-1 bg-danger">
    <div class="container d-flex flex-wrap">
        <ul class="nav me-auto">
            <li class="nav-item" style="color:white ;">โปรเจคนี้หยุดการพัฒนาแล้ว <b>ณ วันที่ 21 มีนาคม 2567</b>
                ข้อมูลทุกอย่างจะถูกจัดเก็บไว้อย่างดี</a>
            </li>
        </ul>
    </div>
</nav>
<nav style="padding: 20px;background-color: rgb(45, 118, 255) !important;" class="navbar navbar-dark bg-dark navbarmobile">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><img width="40" height="40"
                src="/cdn/Yorwor.png"> ม.3/10 (Talent)</a>
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse collapse" id="navbarsExample01" style="">
        <ul class="navbar-nav me-auto mb-2">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">หน้าหลัก</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle active" href="#" data-bs-toggle="dropdown" aria-expanded="false">ฝ่ายการเรียน</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/page/homework.html">การบ้าน</a></li>
                <li><a class="dropdown-item" href="/page/classcode.html">รหัสห้องเรียน</a></li>
                <li><a class="dropdown-item" href="/page/lesson.html">ห้องเรียนออนไลน์</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle active" href="#" data-bs-toggle="dropdown" aria-expanded="false">ฝ่ายกิจกรรม</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/ending.html">บันทึกกิจกรรม</a></li>
                <li><a class="dropdown-item" href="/maharaj.html">กิจกรรมกีฬาสี</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle active" href="#" data-bs-toggle="dropdown" aria-expanded="false">ฝ่ายการงาน</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/score.html">ดูคะแนนนักเรียน</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/page/record.html">ความคิดเห็น</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle active" href="#" data-bs-toggle="dropdown" aria-expanded="false">เอกสาร</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/docs/white-classroom.html">ห้องเรียนสีขาว</a></li>
                <li><a class="dropdown-item" href="/about/classroom.html">เกี่ยวกับห้องของเรา</a></li>
                <li><a class="dropdown-item" href="/about/webapp.html">เกี่ยวกับไซต์นี้</a></li>
            </ul>
          </li>
        </ul>
        <div>
            <button onclick="playmusic()" class="btn rounded-circle p-3 lh-1" type="button">
                <img width="18" height="20"
                    src="/cdn/Headphone.png">
            </button>
            <button onclick="window.location.href = '/auth/login.html';"
                style="background-color: rgb(255, 22, 22);color: white;" type="button" class="btn"><span class="material-symbols-outlined Gicon">
login
</span> ล็อกอิน</button>
        </div>
      </div>
    </div>
</nav>
<header style="padding: 20px;background-color: rgb(45, 118, 255);"
    class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom navall headder headderTop">
    <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
            <img width="40" height="40"
                src="/cdn/Yorwor.png">
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
                <li><a class="dropdown-item" href="/page/lesson.html">ห้องเรียนออนไลน์</a></li>
            </ul>
        </div>
        <div class="btn-group">
            <button style="color: white;" type="button" class="nav-link px-2 dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false">
                ฝ่ายกิจกรรม
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/ending.html">บันทึกกิจกรรม</a></li>
                <li><a class="dropdown-item" href="/maharaj.html">กิจกรรมกีฬาสี</a></li>
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
                src="/cdn/Headphone.png">
        </button>
        <audio id="audioPlayer" loop hidden controls>
            <source
                src="https://cdn.discordapp.com/attachments/1071401485239332864/1122916594901844089/no_copyright_music_In_Dreamland_background_music.mp3"
                type="audio/mpeg">
        </audio>
        <button onclick="window.location.href = '/auth/login.html';"
            style="background-color: rgb(255, 22, 22);color: white;" type="button" class="btn"><span class="material-symbols-outlined Gicon">
login
</span> ล็อกอิน</button>
    </div>
</header>
<img class='headderTop' height="32.5px" width='100%' src='/cdn/assets/Header-divider.png'>