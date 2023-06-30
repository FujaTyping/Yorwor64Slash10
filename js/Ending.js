var url = window.location.href;
var key = decodeshif("?Xzzbpp=doxkqba", "23")

if (url.indexOf(`${key}`) !== -1) {
    console.log('Access granted !')
} else {
    Swal.fire({
        icon: 'question',
        title: 'ต้องการไปหน้า Ending ไหม ?',
        text: "ถ้าไปกด Let's go",
        showDenyButton: true,
        confirmButtonText: "Let's go",
        denyButtonText: `ไม่อยากไป`,
        /* Custom animation */
        showClass: {
            popup: 'animate__animated animate__zoomInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__zoomOutDown'
        },
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = '/ending.html';
        }
    })
}