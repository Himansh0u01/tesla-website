
var sli = document.getElementsByClassName("backani");
var strt = 0;
if (strt == 0) {
  // var scrollDiv = document.getElementById("myDiv").offsetTop;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  var md = document.getElementsByClassName("mainmodel");
  md[0].style.marginTop = "50px";
  md[0].style.opacity="1";


  var sd = document.getElementsByClassName("linkTd");
  var cd = document.getElementById('para1')
  sd[0].style.marginLeft = "0px";
  sd[0].style.opacity = "1";
  cd.style.opacity="1";
  cd.style.marginTop="0px";
  var bd= document.getElementById('cbtn2');

  bd.style.marginLeft="0px";
  var bds=document.getElementById('cbtns');
  bds.style.opacity="1";



  strt++;
}


function play(id) {
  sli[0].style.display = "block";

  var iid = "Mods" + id;
  var wid = document.getElementById(iid).offsetWidth;
  console.log(wid);

  var nim = document.getElementById(iid).getBoundingClientRect();
  var lf = nim.left;
  console.log(lf);
  sli[0].style.width = wid + 20 + "px";
  sli[0].style.left = lf - 19 + "px";






}
function replay() {
  sli[0].style.display = "none";
  console.log(12);

}
// cars cc animation
var nimi = document.getElementById('gaadi2').getBoundingClientRect();
var lff = nimi.top;
console.log(lff);
var z = 0;
window.onscroll = function () {
  var a = scrollY;

  var scrollDiv = document.getElementById("gaadi2").offsetTop;
  var scrollDiv1 = document.getElementById("gaadi1").offsetTop;
  var scrollDiv3 = document.getElementById("gaadi3").offsetTop;
  var scrollDiv4 = document.getElementById("gaadi4").offsetTop;
  var scrollDiv5 = document.getElementById("gaadi5").offsetTop;
  var scrollDiv6 = document.getElementById("gaadi6").offsetTop;
  var scrollDiv7 = document.getElementById("gaadi7").offsetTop;
  // if(a>=scrollDiv1 &&a<20)
  // {
  //     var g1=document.getElementById('car1');

  //     g1.style.opacity=1
  // }

  if (a <= 340) {
    var g1 = document.getElementById('car1');
    if (a == scrollDiv1) {
      g1.style.opacity = 1
    }
    var opc = 1 - a / 340;
    g1.style.opacity = opc;

    var g2 = document.getElementById('car2');

    g2.style.opacity = 0;
    g2.style.display = "none";

    g1.style.display = "flex";
    // var opc= 

  }

  if (a > 340 && a < scrollDiv) {

    // window.scrollTo({ top: scrollDiv, behavior: 'smooth'});


    var g1 = document.getElementById('car1');
    var k = a - 340;
    var xc = scrollDiv - 340
    var opc = 0 + k / xc;
    var g2 = document.getElementById('car2');
    g2.style.display = "flex";
    g2.style.opacity = opc;
    g1.style.display = "none";


    var g2 = document.getElementById('car2');




    g2.style.display = "flex";




  }
  else if (scrollDiv == a) {
    var g2 = document.getElementById('car2');
    g2.style.display = "flex";
    g2.style.opacity = 1;

  }

  if (a > scrollDiv && a < scrollDiv + 340) {
    var g2 = document.getElementById('car2');
    g2.style.opacity = 1;
    var xcx = a - scrollDiv;
    var opc = 1 - xcx / 340;
    g2.style.opacity = opc;

    var g3 = document.getElementById('car3');

    g3.style.opacity = 0;
    g3.style.display = "none";

    g2.style.display = "flex";
    // var opc= 

  }
  else if (a > scrollDiv + 340 && a <= scrollDiv3) {
    var g2 = document.getElementById('car2');
    var k = a - 340 - scrollDiv;
    var xc = scrollDiv3 - 340 - scrollDiv
    var opc = 0 + k / xc;
    var g3 = document.getElementById('car3');
    g3.style.display = "flex";
    g3.style.opacity = opc;
    g2.style.display = "none";


    var g3 = document.getElementById('car3');


    g3.style.display = "flex";


  }

  if (a > scrollDiv3 && a < scrollDiv3 + 340) {
    var g3 = document.getElementById('car3');
    g3.style.opacity = 1;
    var xcx = a - scrollDiv3;
    var opc = 1 - xcx / 340;
    g3.style.opacity = opc;

    var g4 = document.getElementById('car4');

    g4.style.opacity = 0;
    g4.style.display = "none";

    g3.style.display = "flex";
    // var opc= 

  }
  else if (a > scrollDiv3 + 340 && a <= scrollDiv4) {
    var g3 = document.getElementById('car3');
    var k = a - 340 - scrollDiv3;
    var xc = scrollDiv4 - 340 - scrollDiv3
    var opc = 0 + k / xc;
    var g4 = document.getElementById('car4');
    g4.style.display = "flex";
    g4.style.opacity = opc;
    g3.style.display = "none";


    var g4 = document.getElementById('car4');


    g4.style.display = "flex";


  }



  if (a > scrollDiv4 && a < scrollDiv4 + 340) {
    var g4 = document.getElementById('car4');
    g4.style.opacity = 1;
    var xcx = a - scrollDiv4;
    var opc = 1 - xcx / 340;
    g4.style.opacity = opc;

    var g5 = document.getElementById('car5');

    g5.style.opacity = 0;
    g5.style.display = "none";

    g4.style.display = "flex";

    // var opc= 

  }
  else if (a > scrollDiv4 + 340 && a <= scrollDiv5) {
    var g4 = document.getElementById('car4');
    var k = a - 340 - scrollDiv4;
    var xc = scrollDiv5 - 340 - scrollDiv4
    var opc = 0 + k / xc;
    var g5 = document.getElementById('car5');
    g5.style.display = "flex";
    g5.style.opacity = opc;
    g4.style.display = "none";


    var g5 = document.getElementById('car5');


    g5.style.display = "flex";


  }

  if (a > scrollDiv5 && a < scrollDiv5 + 340) {
    var g5 = document.getElementById('car5');
    g5.style.opacity = 1;
    var xcx = a - scrollDiv5;
    var opc = 1 - xcx / 340;
    g5.style.opacity = opc;

    var g6 = document.getElementById('car6');

    g6.style.opacity = 0;
    g6.style.display = "none";

    g5.style.display = "flex";

    // var opc= 

  }
  else if (a > scrollDiv5 + 340 && a <= scrollDiv6) {
    var g5 = document.getElementById('car5');
    var k = a - 340 - scrollDiv5;
    var xc = scrollDiv6 - 340 - scrollDiv5
    var opc = 0 + k / xc;
    var g6 = document.getElementById('car6');
    g6.style.display = "flex";
    g6.style.opacity = opc;
    g5.style.display = "none"; 6

    var g6 = document.getElementById('car6');


    g6.style.display = "flex";


  }
  // else if (a > scrollDiv5 + 340 && a <= scrollDiv6) {
  //   var g5 = document.getElementById('car5');
  //   var k = a - 340 - scrollDiv5;
  //   var xc = scrollDiv6 - 340 - scrollDiv5
  //   var opc = 0 + k / xc;
  //   var g6 = document.getElementById('car6');
  //   g6.style.display = "flex";
  //   g6.style.opacity = 0;
  //   g5.style.display = "none";


  //   var g6 = document.getElementById('car6');


  //   g6.style.display = "flex";


  // }

  if (a > scrollDiv6 && a < scrollDiv6 + 340) {
    var g6 = document.getElementById('car6');
    g6.style.opacity = 1;
    var xcx = a - scrollDiv6;
    var opc = 1 - xcx / 340;
    g6.style.opacity = opc;

    var g7 = document.getElementById('car7');

    g7.style.opacity = 0;
    g7.style.display = "none";

    g6.style.display = "flex";

    // var opc= 

  }
  else if (a > scrollDiv6 + 340 && a <= scrollDiv7) {
    var g6 = document.getElementById('car6');
    var k = a - 340 - scrollDiv6;
    var xc = scrollDiv7 - 340 - scrollDiv6
    var opc = 0 + k / xc;
    var g7 = document.getElementById('car7');
    g7.style.display = "flex";
    g7.style.opacity = opc;
    g6.style.display = "none"; 6

    var g7 = document.getElementById('car7');


    g7.style.display = "flex";


  }

  console.log(scrollDiv);
  console.log(1 + 2);


}