var audio = document.getElementById("track01");
var tabs = document.getElementsByTagName("button");
var text = document.getElementById("text");
// var tab01 = document.getElementById("01");
// var tab02 = document.getElementById("02");
// var tab03 = document.getElementById("03");
// var tab04 = document.getElementById("04");
// var tab05 = document.getElementById("05");
// var tab06 = document.getElementById("06");
// var tab07 = document.getElementById("07");
// var tab08 = document.getElementById("08");
// var tab09 = document.getElementById("09");
// var tab10 = document.getElementById("10");
// var tab11 = document.getElementById("11");
//
// var tabs = new Array(tab01, tab02, tab03, tab04, tab05, tab06, tab07, tab08, tab09, tab10, tab11)
//console.log($(tabs[0]).attr('aria-expanded'));
//tabs[1].click();

var desc = ["111Bacon ipsum dolor amet drumstick porchetta kevin",
            "222Bacon ipsum dolor amet drumstick porchetta kevin",
            "333Bacon ipsum dolor amet drumstick porchetta kevin",
            "444Bacon ipsum dolor amet drumstick porchetta kevin",
            "555Bacon ipsum dolor amet drumstick porchetta kevin",
            "666Bacon ipsum dolor amet drumstick porchetta kevin",
            "777Bacon ipsum dolor amet drumstick porchetta kevin",
            "888Bacon ipsum dolor amet drumstick porchetta kevin",
            "999Bacon ipsum dolor amet drumstick porchetta kevin",
            "101010Bacon ipsum dolor amet drumstick porchetta kevin",
            "111111Bacon ipsum dolor amet drumstick porchetta kevin"
          ]

audio.play();

var x = 0

for (i = 0; i < tabs.length; i++ ){
  tabs[i].addEventListener("click", function(){
    console.log(this.value);
    var toks = this.value.split("-");
    audio.currentTime = parseInt(toks[0]);
    x = parseInt(this.id) - 1;
    text.innerHTML = desc[x];
  });
}

var display = function(){
  console.log(x)
  text.innerHTML = desc[x];
}
