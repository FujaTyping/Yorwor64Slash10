window.onload = function() {

    var path = window.location.pathname;
    var page = path.split("/").pop();
    console.log(page)
    if (page == "401.html" || page == "401") {
        var encodedMessage = "Fr fhf tgw wtw yhkvxw fx mh zh mh mnbmbhg tgw B wbwg'm ptgm mh lmnwr tm tee uxvtnlx B ptl ptlmbgz fr mbfx. Whbgz fr phkd/whbgz tgw by rhn ptgm fx mh lmnwr matm fnva maxg zh taxtw. By rhn'kx ehhdbgz yhk lhfxmabgz mh ptlmx, maxg wh bm rhnklxey. By rhn vtg'm axei bm, cnlm ehhd tm bm rhnklxey.";
        var shift = '19';
        var decodedMessage = '';
  
        for (var i = 0; i < encodedMessage.length; i++) {
          var charCode = encodedMessage.charCodeAt(i);
  
          if (charCode >= 65 && charCode <= 90) {
            decodedMessage += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
          } else if (charCode >= 97 && charCode <= 122) {
            decodedMessage += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
          } else {
            decodedMessage += encodedMessage.charAt(i);
          }
        }
  
        console.log("The real reson is : "+decodedMessage+" (Try to translate)"+"\n\nถ้าผมเดือดร้อน คนอื่นก็ต้องเดือดร้อนด้วย ไม่ยอมเดือดร้อนคนเดี่ยวหรอนะ :P")
    }

};