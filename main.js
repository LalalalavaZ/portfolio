// menu scroll disappear

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("menu").style.top = "0";
      } else {
        document.getElementById("menu").style.top = "-300px";
      }
      prevScrollpos = currentScrollPos;
    }


//blk button next

// var buttnext = document.getElementById("buttnext");
// buttnext.onclick = function(){
//   document.getElementById("blkcnt");
// }
