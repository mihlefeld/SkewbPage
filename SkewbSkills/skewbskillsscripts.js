// default behaviour should be white,not transparent;
// --> especially when starting with dark BG theme
document.getElementById("colourlabel").style.background = 'white';

// show or hide the corresponding div's
function toggleFLT() {
  var x = document.getElementById("FLT");
  var y = document.getElementById("AlgT");
  var y2 = document.getElementById("OLT");
  var xx = document.getElementById("additionalFLT");
  var yy = document.getElementById("additionalAlgT");
  var yy2 = document.getElementById("additionalOLT");
  var z = document.getElementById("timing");
  var d = document.getElementById("skskDEFAULT");

  if (x.style.display === "none") {
	  z.style.display = "block";
    x.style.display = "block";
    y.style.display = "none";
    y2.style.display = "none";
    xx.style.display = "block";
    yy.style.display = "none";
    yy2.style.display = "none";
    d.style.display = "none";
    document.getElementById("toggleFLTbut").style.color = "green";
    if (document.body.classList.contains("dark")) {
      document.getElementById("toggleAlgTbut").style.color = "white";
      document.getElementById("toggleOLTbut").style.color = "white";
    }
    else {
      document.getElementById("toggleAlgTbut").style.color = "black";
      document.getElementById("toggleOLTbut").style.color = "black";
    }

  } else {
    z.style.display = "none";
	  x.style.display = "none";
    xx.style.display = "none";
    d.style.display = "block";
    if (document.body.classList.contains("dark")) {
        document.getElementById("toggleFLTbut").style.color = "white";
    }
    else {
        document.getElementById("toggleFLTbut").style.color = "black";
    }
  }
}
function toggleAlgT() {
  var x = document.getElementById("AlgT");
  var y = document.getElementById("FLT");
  var y2 = document.getElementById("OLT");
  var xx = document.getElementById("additionalAlgT");
  var yy = document.getElementById("additionalFLT");
  var yy2 = document.getElementById("additionalOLT");
  var z = document.getElementById("timing");
  var d = document.getElementById("skskDEFAULT");
  if (x.style.display === "none") {
	  z.style.display = "block";
    x.style.display = "block";
    y.style.display = "none";
    y2.style.display = "none";
    xx.style.display = "block";
    yy.style.display = "none";
    yy2.style.display = "none";
    d.style.display = "none";
    document.getElementById("toggleAlgTbut").style.color = "green";
    if (document.body.classList.contains("dark")) {
      document.getElementById("toggleFLTbut").style.color = "white";
      document.getElementById("toggleOLTbut").style.color = "white";
    }
    else {
      document.getElementById("toggleFLTbut").style.color = "black";
      document.getElementById("toggleOLTbut").style.color = "black";
    }
  } else {
	  z.style.display = "none";
    x.style.display = "none";
    xx.style.display = "none";
    d.style.display = "block";
    if (document.body.classList.contains("dark")) {
      document.getElementById("toggleAlgTbut").style.color = "white";
    }
    else {
      document.getElementById("toggleAlgTbut").style.color = "black";
    }
  }
}
function toggleOLT() {
  var x = document.getElementById("OLT");
  var y = document.getElementById("FLT");
  var y2 = document.getElementById("AlgT");
  var xx = document.getElementById("additionalOLT");
  var yy = document.getElementById("additionalAlgT");
  var yy2 = document.getElementById("additionalFLT");
  var z = document.getElementById("timing");
  var d = document.getElementById("skskDEFAULT");
  if (x.style.display === "none") {
	  z.style.display = "block";
    x.style.display = "block";
    y.style.display = "none";
    y2.style.display = "none";
    xx.style.display = "block";
    yy.style.display = "none";
    yy2.style.display = "none";
    d.style.display = "none";
    document.getElementById("toggleOLTbut").style.color = "green";
    if (document.body.classList.contains("dark")) {
      document.getElementById("toggleFLTbut").style.color = "white";
      document.getElementById("toggleAlgTbut").style.color = "white";
    }
    else {
      document.getElementById("toggleFLTbut").style.color = "black";
      document.getElementById("toggleAlgTbut").style.color = "black";
    }
    changescrlenOL();
  } else {
	  z.style.display = "none";
    x.style.display = "none";
    xx.style.display = "none";
    d.style.display = "block";
    if (document.body.classList.contains("dark")) {
      document.getElementById("toggleOLTbut").style.color = "white";
    }
    else {
      document.getElementById("toggleOLTbut").style.color = "black";
    }
  }
}
// show or hide all alg sets available
function toggleSelectAlgs() {
  var x = document.getElementById("selectAlgs");
  var xx = document.getElementById("selAlgCat");
  var yy = document.getElementById("selAlgID");
  if (x.style.display === "none") {
    x.style.display = "block";
    xx.style.color = "green";
    if (document.body.classList.contains("dark")) {
      yy.style.color = "white";
    } else {
      yy.style.color = "black";
    }
    document.getElementById("selectAlgsbyID").style.display = "none";
  } else {
    x.style.display = "none";
    if (document.body.classList.contains("dark")) {
      xx.style.color = "white";
    } else {
      xx.style.color = "black";
    }
  }
}
// show or hide all alg sets available
function toggleSelectAlgsbyID() {
  var x = document.getElementById("selectAlgsbyID");
  var yy = document.getElementById("selAlgCat");
  var xx = document.getElementById("selAlgID");
  if (x.style.display === "none") {
    x.style.display = "block";
    xx.style.color = "green";
    if (document.body.classList.contains("dark")) {
      yy.style.color = "white";
    } else {
      yy.style.color = "black";
    }
    document.getElementById("selectAlgs").style.display = "none";
  } else {
    x.style.display = "none";
    if (document.body.classList.contains("dark")) {
      xx.style.color = "white";
    } else {
      xx.style.color = "black";
    }
  }
}

// select multiple alg sets at once or unselect them
function whattodowitht() {
     if (document.getElementById("l4c").checked == false
     || document.getElementById("l5c").checked == false
     || document.getElementById("pi3s").checked == false
     || document.getElementById("pihu").checked == false
     || document.getElementById("pihz").checked == false
     || document.getElementById("pio").checked == false
     || document.getElementById("piswirl").checked == false
     || document.getElementById("pivu").checked == false
     || document.getElementById("piwat").checked == false
     || document.getElementById("pix").checked == false
     || document.getElementById("pizconj").checked == false
     || document.getElementById("p3s").checked == false
     || document.getElementById("phu").checked == false
     || document.getElementById("phzpure").checked == false
     || document.getElementById("po").checked == false
     || document.getElementById("pswirl").checked == false
     || document.getElementById("pvu").checked == false
     || document.getElementById("pwat").checked == false
     || document.getElementById("px").checked == false
     || document.getElementById("pzconj").checked == false) {
        document.getElementById("l4c").checked = true;
        document.getElementById("l5c").checked = true;
        document.getElementById("pi3s").checked = true;
        document.getElementById("pihu").checked = true;
        document.getElementById("pihz").checked = true;
        document.getElementById("pio").checked = true;
        document.getElementById("piswirl").checked = true;
        document.getElementById("pivu").checked = true;
        document.getElementById("piwat").checked = true;
        document.getElementById("pix").checked = true;
        document.getElementById("pizconj").checked = true;
        document.getElementById("p3s").checked = true;
        document.getElementById("phu").checked = true;
        document.getElementById("phzpure").checked = true;
        document.getElementById("po").checked = true;
        document.getElementById("pswirl").checked = true;
        document.getElementById("pvu").checked = true;
        document.getElementById("pwat").checked = true;
        document.getElementById("px").checked = true;
        document.getElementById("pzconj").checked = true;
     } else {
        document.getElementById("l4c").checked = false;
        document.getElementById("l5c").checked = false;
        document.getElementById("pi3s").checked = false;
        document.getElementById("pihu").checked = false;
        document.getElementById("pihz").checked = false;
        document.getElementById("pio").checked = false;
        document.getElementById("piswirl").checked = false;
        document.getElementById("pivu").checked = false;
        document.getElementById("piwat").checked = false;
        document.getElementById("pix").checked = false;
        document.getElementById("pizconj").checked = false;
        document.getElementById("p3s").checked = false;
        document.getElementById("phu").checked = false;
        document.getElementById("phzpure").checked = false;
        document.getElementById("po").checked = false;
        document.getElementById("pswirl").checked = false;
        document.getElementById("pvu").checked = false;
        document.getElementById("pwat").checked = false;
        document.getElementById("px").checked = false;
        document.getElementById("pzconj").checked = false;
     }
     changescrlenAlg();
}
function whattodowithi() {
     if (document.getElementById("pi3s").checked == false
     || document.getElementById("pihu").checked == false
     || document.getElementById("pihz").checked == false
     || document.getElementById("pio").checked == false
     || document.getElementById("piswirl").checked == false
     || document.getElementById("pivu").checked == false
     || document.getElementById("piwat").checked == false
     || document.getElementById("pix").checked == false
     || document.getElementById("pizconj").checked == false) {
        document.getElementById("pi3s").checked = true;
        document.getElementById("pihu").checked = true;
        document.getElementById("pihz").checked = true;
        document.getElementById("pio").checked = true;
        document.getElementById("piswirl").checked = true;
        document.getElementById("pivu").checked = true;
        document.getElementById("piwat").checked = true;
        document.getElementById("pix").checked = true;
        document.getElementById("pizconj").checked = true;
     } else {
        document.getElementById("pi3s").checked = false;
        document.getElementById("pihu").checked = false;
        document.getElementById("pihz").checked = false;
        document.getElementById("pio").checked = false;
        document.getElementById("piswirl").checked = false;
        document.getElementById("pivu").checked = false;
        document.getElementById("piwat").checked = false;
        document.getElementById("pix").checked = false;
        document.getElementById("pizconj").checked = false;
     }
     changescrlenAlg();
}
function whattodowithu() {
     if (document.getElementById("p3s").checked == false
     || document.getElementById("phu").checked == false
     || document.getElementById("phzpure").checked == false
     || document.getElementById("po").checked == false
     || document.getElementById("pswirl").checked == false
     || document.getElementById("pvu").checked == false
     || document.getElementById("pwat").checked == false
     || document.getElementById("px").checked == false
     || document.getElementById("pzconj").checked == false) {
        document.getElementById("p3s").checked = true;
        document.getElementById("phu").checked = true;
        document.getElementById("phzpure").checked = true;
        document.getElementById("po").checked = true;
        document.getElementById("pswirl").checked = true;
        document.getElementById("pvu").checked = true;
        document.getElementById("pwat").checked = true;
        document.getElementById("px").checked = true;
        document.getElementById("pzconj").checked = true;
     } else {
        document.getElementById("p3s").checked = false;
        document.getElementById("phu").checked = false;
        document.getElementById("phzpure").checked = false;
        document.getElementById("po").checked = false;
        document.getElementById("pswirl").checked = false;
        document.getElementById("pvu").checked = false;
        document.getElementById("pwat").checked = false;
        document.getElementById("px").checked = false;
        document.getElementById("pzconj").checked = false;
     }
     changescrlenAlg();
}
function whattodowithl() {
     if (document.getElementById("l4c").checked == false
     || document.getElementById("l5c").checked == false) {
        document.getElementById("l4c").checked = true;
        document.getElementById("l5c").checked = true;
     } else {
        document.getElementById("l4c").checked = false;
        document.getElementById("l5c").checked = false;
     }
     changescrlenAlg();
}

// produces all scrambles for the first layer / saves the L2L algs as arrays
var posschars = ["R", "R'", "L", "L'", "U", "U'", "B", "B'"];
// onemovers
var newscramble1list = [];
for (var i = 0; i < posschars.length; i++) {
    newscramble1list.push(posschars[i]);
}
var scramblelist = newscramble1list.slice(0);

//twomovers
var newscramble2list = [];
for (j = 0; j < newscramble1list.length; j++) {
    for (i = 0; i < posschars.length; i++) {
        if (posschars[i].indexOf(newscramble1list[j]) != -1) {
            continue;
        } else if (newscramble1list[j].indexOf(posschars[i]) != -1) {
            continue;
        } else {
            newscramble2list.push(newscramble1list[j]+" "+posschars[i]);
        }
    }
}
//threemovers
var newscramble3list = [];
for (j = 0; j < newscramble2list.length; j++) {
    for (i = 0; i < posschars.length; i++) {
        if ((newscramble2list[j]).charAt(newscramble2list[j].length - 2) == " ") {
            if ((newscramble2list[j]).charAt(newscramble2list[j].length - 1) == (posschars[i]).charAt(0)) {
                continue;
            }
        } else {
            if ((newscramble2list[j]).charAt(newscramble2list[j].length - 2) == (posschars[i]).charAt(0)) {
                continue;
            }
        }
        newscramble3list.push(newscramble2list[j]+" "+posschars[i]);
    }
}
//fourmovers
var newscramble4list = [];
for (j = 0; j < newscramble3list.length; j++) {
    for (i = 0; i < posschars.length; i++) {
        if ((newscramble3list[j]).charAt(newscramble3list[j].length - 2) == " ") {
            if ((newscramble3list[j]).charAt(newscramble3list[j].length - 1) == (posschars[i]).charAt(0)) {
                continue;
            }
        } else {
            if ((newscramble3list[j]).charAt(newscramble3list[j].length - 2) == (posschars[i]).charAt(0)) {
                continue;
            }
        }
        newscramble4list.push(newscramble3list[j]+" "+posschars[i]);
    }
}
//fivemovers
var newscramble5list = [];
for (j = 0; j < newscramble4list.length; j++) {
    for (i = 0; i < posschars.length; i++) {
        if ((newscramble4list[j]).charAt(newscramble4list[j].length - 2) == " ") {
            if ((newscramble4list[j]).charAt(newscramble4list[j].length - 1) == (posschars[i]).charAt(0)) {
                continue;
            }
        } else {
            if ((newscramble4list[j]).charAt(newscramble4list[j].length - 2) == (posschars[i]).charAt(0)) {
                continue;
            }
        }
        newscramble5list.push(newscramble4list[j]+" "+posschars[i]);
    }
}
//sixmovers
var newscramble6list = [];
for (j = 0; j < newscramble5list.length; j++) {
    for (i = 0; i < posschars.length; i++) {
        if ((newscramble5list[j]).charAt(newscramble5list[j].length - 2) == " ") {
            if ((newscramble5list[j]).charAt(newscramble5list[j].length - 1) == (posschars[i]).charAt(0)) {
                continue;
            }
        } else {
            if ((newscramble5list[j]).charAt(newscramble5list[j].length - 2) == (posschars[i]).charAt(0)) {
                continue;
            }
        }
        newscramble6list.push(newscramble5list[j]+" "+posschars[i]);
    }
}
//sevenmovers
var newscramble7list = [];
for (j = 0; j < newscramble6list.length; j++) {
    for (i = 0; i < posschars.length; i++) {
        if ((newscramble6list[j]).charAt(newscramble6list[j].length - 2) == " ") {
            if ((newscramble6list[j]).charAt(newscramble6list[j].length - 1) == (posschars[i]).charAt(0)) {
                continue;
            }
        } else {
            if ((newscramble6list[j]).charAt(newscramble6list[j].length - 2) == (posschars[i]).charAt(0)) {
                continue;
            }
        }
        newscramble7list.push(newscramble6list[j]+" "+posschars[i]);
    }
}


var scrpiswirl = ["r' R' r R' r z' r z r R'",
        "r R r R' z R r' R' r z2 R' r' R' r",
        "R r' b' r' R r' R r",
        "r' B R r R' z R b' R'",
        "R' B R' B' r' R r z R r R'",
        "R r' R r z R r' R' z' r' R' r",
        "r' R r R b' r R' b'",
        "R r R' z R B r' R' r'"];
var scrpiwat = ["B' R' r R' B' r' R' r'",
        "R' r' R r R B R' B' R' B R B'",
        "r R' r B r' z r R' r' R' r",
        "R r' R' r' R B' r z R r' R",
        "R' r B' r' R r' z R r' R r",
        "r' R' r B' R' z R r' R' r R r'",
        "R' r R' r' B R B' r R r'",
        "r' R r R r' R' r B R B' R"];
var scrpix = ["R' r R' r' z' r' R' r z R' r",
        "R r' R r z2 R r' R' r b",
        "R r R' r z2 r' R r z r R r",
        "B R r' R' r z2 R r R' r",
        "b R r' R' r z y l r' R r",
        "B' r' R r z r' R' z R r' R'",
        "R r R' r z2 R r' R' r B",
        "r' R' r z r' R' B R B' r'"];
var scrpihu = ["r B' r' R r R' r f'",
        "R' b R r' R' r R' b",
        "B r' R r' R' r B r'",
        "l' B b' r B r' R' r",
        "r R' r b' B' R r' R",
        "r' R r' B R B' r' R",
        "R' r R' B b r' R r'",
        "r' B R B' z' r' R r B'"];
var scrpivu = ["R r' R r B' R' B r' R' r",
        "B' r' R r z B R B' r'",
        "R B R r' R' B'",
        "b' r' R' r y r B"];
var scrpio = ["r' R' r z R r' R' r R r R'",
        "R r R' z' r' R r R' r' R' r",
        "R r' R' r' R r R' z' r' R r",
        "r' R r R r' R' r B R' B'",
        "B' R' r B' r' R r'",
        "r R B' r z R r' R",
        "r R' r B r' R B",
        "R' r R' z' r' B R' r'"];
var scrpizconj = ["B' r' R' r B r' R r",
        "r B R B' r' B R' B'",
        "B R B' r B R' B' r'",
        "r' R' r B' r' R r B",
        "r' R r R' z R r' R' r z' R r' R' r",
        "r' R r R' z r' R r R' z' R r' R' r",
        "R r' R' r z' r' R r R' z r' R r R'",
        "R r' R' r z' R r' R' r z r' R r R'"];
var scrpi3s = ["r R' r' z' r' R' r z r R' r' R' r",
        "r' R r R r' z' r' R r z r R r'"];
var scrpihz = ["R' r' R' r' B R' B' r'",
        "r' R' r z r R r' R' z' r' R r",
        "R r R' z' r' R' r R z R r' R'"];
var scrpswirl = ["r R r R' z R r' R' r b",
        "b' r' R r R' z' R r' R' r'",
        "R r' R r B' r' R r B",
        "R' r' R' r z R r R' r",
        "r' R' r R' z' R r' R' r B'",
        "R r' R r R' z' R r' R' r B'",
        "r' R r' R' z' r' R r R",
        "R r' R r z R r' R' r'"];
var scrpwat = ["r R r R' z R r' R' r' z' r R'",
        "r' R r' z' r' R' r z r' R r R",
        "R r B R B' r' R",
        "B R B' r' R r R",
        "r R' B' l r' y r R r'",
        "R' r R z B' b r' R' r",
        "r' R r' R' r' z' r' R' r R",
        "R r' R r R z R r R' r'"];
var scrpx = ["R r' R' r z' R r' R' r",
        "r' B r' R r R' r' B",
        "r' R r R' z r' R r R'",
        "B' r R r' R' r B' r",
        "r' R' r z' r' R r R' B",
        "B' R r' R' r z r' R r",
        "B' r' R r R' z R r' R' r R",
        "b r' R r R' z' R r' R'"];
var scrphu = ["r' l r R r' l' r R'",
        "r R' B R r' y' r' R' r",
        "r R' r' B' r R r' B",
        "B' r R' r' B r R r'",
        "R r' z' r' R r z r R r' R",
        "R r R' r' R' z' r' R' r z R r",
        "R r' R' z R r y r R' B R",
        "r R' r z r R r R' r' z' r"];
var scrpvu = ["r' R r R' z' R r R' r'",
        "R r' R' r z r' R' r R",
        "r R' r' z' r' R' r z r R",
        "R' r R z R r R' z' R' r'"];
var scrpo = ["r' R' r R z R r R' r'",
        "R r R' r' z' r' R' r R",
        "r R r' R' z' R' r' R r",
        "R' r' R r z r R r' R'",
        "r R B R B' R' r' R'",
        "R r R B R' B' R' r'",
        "R' r' R' r l r' R r",
        "r' R' r z r' R' r R r"];
var scrpzconj = ["r' R' r z r' R r' R' r R r' R'",
        "R r R' z' R r' R r R' r' R r",
        "R r R' r' R r R' z' R r' R r",
        "r' R' r R r' R' r z r' R r' R'",
        "R r' R' r z R r' R' r z' R r' R' r",
        "R r' R' r z' R r' R' r z R r' R' r",
        "r' R r R' z' r' R r R' z r' R r R'",
        "r' R r R' z r' R r R' z' r' R r R'"];
var scrp3s = ["r' R r R' r' R r R' z R r' R' r",
        "R r' R' r z' R r' R' r R r' R' r",
        "r' R r R' r' R r R' z r' R r R'",
        "r' R r R' z r' R r R' r' R r R'"];
var scrphzpure = ["r' R r R' z B R r' R' r B'",
        "R r' R' r z r' R' r x R r R'",
        "r R r' R' z' r' R' r z r' R r' R'",
        "B L' r B' l' r' y r' R' r"];
var scrl4c = ["r' R' r y x' R r y R r' R'",  //30a
        "r' R' r z B r B r' B'",  //30b
        "r' R r z B r B' r' z' b'",  //31
        "b' r' R r R' z2 r' R r", // U-Perm
        "r' l r' l' B' l' B l r'",  //32
        "B' r R' B x R r' R r'",  //33
        "R' r' R' r z2 R r' R' r b'",  //34a
        "r' R r' R' r z2 R r' R' r B"];  //34b
var scrl5c = ["R' b R r' R' r R' b R r' R' r",
        "r' R B R' r B R' z b' r R'",
        "R' r B' r' R r R' r B' r' R r",
        "r B' r' R r R' r z2 r' R r' R' r",
        "R' r R B' r B R' B r' R r",
        "r' B R r R' B r' z r' R' r"];


var allAlgs = scrpiswirl.concat(scrpiwat, scrpix, scrpihu, scrpivu, scrpio, scrpizconj, scrpi3s,
            scrpihz, scrpswirl, scrpwat, scrpx, scrphu, scrpvu, scrpo, scrpzconj, scrp3s,
            scrphzpure, scrl4c, scrl5c);

var scramblelistAlg = ["R R'"];
var scramblelistOL = ["R R'"];

function transftoWCA(scr){
    // define list carrying all stickers of the skewb and the color that is placed there initially

    // note that for this subprogram of SkewbSkills, we only need the centers and can therefore
    // use arbitrary letters for all other facelets

    // might be improved in the future so that there are only 6 elements in the list
    // but right know it does not matter (we only have to do it once and never again, in principle)
    var stickercol = ["o", "a", "a", "a", "a", "g", "a", "a", "a", "a", "y", "a", "a", "a", "a",
                      "w", "a", "a", "a", "a", "r", "a", "a", "a", "a", "b", "a", "a", "a", "a"];

    // define a string carrying the WCA notation scramble
    var finalscr = "";

    // split the scramble sequence into distinct moves (default split character space)
    var scrsplit = scr.split(" ");

    // store all the cycled centers (as in: all permutations of three centers) in one list
    var allcycles = [];

    // go through all elements (moves) and find out what centers they permute
    for (var i of scrsplit) {
        // ensure we can compare the current with previous list
        var previous = stickercol.slice();

        // for each move, store the permuted centers
        var thecycledcolors = [];

        // use a lighter version of the code in MainWindow.py, so just permute centers as they are
        // sufficient to describe the notation (abbreviations for moves) or in other words the
        // centers implicate unambiguous move sequence
        if (i == "x") {
            fourswap(stickercol, 15, 25, 10, 5);

        } else if (i == "x'") {
            fourswap(stickercol, 5, 10, 25, 15);

        } else if (i == "x2") {
            fourswap(stickercol, 5, 10, 25, 15);
            fourswap(stickercol, 5, 10, 25, 15);

        } else if (i == "y") {
            fourswap(stickercol, 25, 20, 5, 0);

        } else if (i == "y'") {
            fourswap(stickercol, 0, 5, 20, 25);

        } else if (i == "y2") {
            fourswap(stickercol, 0, 5, 20, 25);
            fourswap(stickercol, 0, 5, 20, 25);

        } else if (i == "z") {
            fourswap(stickercol, 15, 20, 10, 0);

        } else if (i == "z'") {
            fourswap(stickercol, 0, 10, 20, 15);

        } else if (i == "z2") {
            fourswap(stickercol, 0, 10, 20, 15);
            fourswap(stickercol, 0, 10, 20, 15);

        } else if (i == "r" || i == "r'2") {
            threeswap(stickercol, 10, 20, 25);

        } else if (i == "r'" || i == "r2") {
            threeswap(stickercol, 25, 20, 10);

        } else if (i == "R" || i == "R'2") {
            threeswap(stickercol, 15, 25, 20);

        } else if (i == "R'" || i == "R2") {
            threeswap(stickercol, 20, 25, 15);

        } else if (i == "l" || i == "L" || i == "l'2" || i == "L'2") {
            threeswap(stickercol, 0, 5, 10);

        } else if (i == "l'" || i == "L'" || i == "l2" || i == "L2") {
            threeswap(stickercol, 10, 5, 0);

        } else if (i == "f" || i == "f'2") {
            threeswap(stickercol, 5, 20, 10);

        } else if (i == "f'" || i == "f2") {
            threeswap(stickercol, 10, 20, 5);

        } else if (i == "B" || i == "U" || i == "B'2" || i == "U'2") {
            threeswap(stickercol, 0, 25, 15);

        } else if (i == "B'" || i == "U'" || i == "B2" || i == "U2") {
            threeswap(stickercol, 15, 25, 0);

        } else if (i == "b" || i == "b'2") {
            threeswap(stickercol, 0, 10, 25);

        } else {
            threeswap(stickercol, 25, 10, 0);
        }

        // "read the previous" "compare with current" only if i = real move (no rotations)

        if (["x", "x'", "x2", "y", "y'", "y2", "z", "z'", "z2"].includes(i) === false) {
            // check all centers (if they changed or not)
            for (var j of [0, 5, 10, 15, 20, 25]) {
                if (previous[j] == stickercol[j]) {
                    continue;
                } else {
                    // store the previous and the current color
                    thecycledcolors.push([previous[j], stickercol[j]]);
                }
            }
            // after all centers have been checked, store the list of the three varied centers
            // in one bigger list
            allcycles.push(thecycledcolors);

            // whole process is repeated for all moves in the Rubiksskewb notation scramble sequence
        }
    }
    // find out the WCA moves that permute the exact same 3-tuples of centers

    /*# store the corresponding permuted INDICES for each move; find out, beginning
    # with the initial state, which INDICES need to be permuted with each move
    # for that: transform the cycle of colors to a cycle of indices (knowing where the three cycled
    # colors were in the previous and the current stickercol list is necessary, and then you go
    # back to their indices)*/

    /*# go through all the cycled centers
    # move them either directly (rather: their indices) with WCA moves
    # or move the opposite indices with WCA moves*/

    // find the indices on the WCA skewb, starting with the initial = solved state

    var stickercolWCA = ["o", "a", "a", "a", "a", "g", "a", "a", "a", "a", "y", "a", "a", "a", "a",
                         "w", "a", "a", "a", "a", "r", "a", "a", "a", "a", "b", "a", "a", "a", "a"];

    // go through all real moves changing three centers, for in means go through all indices of allcycles, while
    // for of means all elements in allcycles --> here, for in is correct
    for (var o in allcycles) {
        /*# find out the indices of the three premuted colors on the WCA-scrambled cube
        # for this I take the two colors of the first entry (one transposition) and find the
        # third one by checking if the remaining entrys are already covered by the variables
        # "first" and "second" or not -> then I use the third and last color that is affected
        # by the move*/
        var first = stickercolWCA.indexOf(allcycles[o][0][1]);
        var second = stickercolWCA.indexOf(allcycles[o][0][0]);
        var third;
        if ((stickercolWCA.indexOf(allcycles[o][1][0]) == first) || (stickercolWCA.indexOf(allcycles[o][1][0]) == second)) {
            third = stickercolWCA.indexOf(allcycles[o][2][0]);
        } else {
            third = stickercolWCA.indexOf(allcycles[o][1][0]);
        }

        /*# find out which WCA move corresponds to the permuted centers (or if this is not possible,
        # I check if the permuted centers are opposite to the normally affected centers by
        # standard WCA moves)

        # in either case, print the corresponding WCA move and swap the corresponding centers
        # to proceed with the next real move*/
        if ([first, second, third].every(function(element, index) {
            return element === [20,25,10][index];}) ||
             [first, second, third].every(function(element, index) {
            return element === [25,10,20][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [10,20,25][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [0,15,5][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [15,5,0][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [5,0,15][index];}) ){
           /*([first, second, third] == [20,25,10] || [first, second, third] == [25,10,20]
        || [first, second, third] == [10,20,25] || [first, second, third] == [0,15,5]
        || [first, second, third] == [15,5,0] || [first, second, third] == [5,0,15])*/
            finalscr = finalscr + "R ";
            threeswap(stickercolWCA, 10, 20, 25);
        } else if ([first, second, third].every(function(element, index) {
            return element === [10,25,20][index];}) ||
             [first, second, third].every(function(element, index) {
            return element === [20,10,25][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [25,20,10][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [5,15,0][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [0,5,15][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [15,0,5][index];}) ){
            /*([first, second, third] == [10,25,20]|| [first, second, third] == [20,10,25]
        || [first, second, third] == [25,20,10] || [first, second, third] == [5,15,0]
        || [first, second, third] == [0,5,15] || [first, second, third] == [15,0,5])*/
            finalscr += "R' ";
            threeswap(stickercolWCA, 25, 20, 10);
        } else if ([first, second, third].every(function(element, index) {
            return element === [0,5,10][index];}) ||
             [first, second, third].every(function(element, index) {
            return element === [5,10,0][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [10,0,5][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [15,25,20][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [25,20,15][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [20,15,25][index];}) ){
            /*([first, second, third] == [0,5,10] || [first, second, third] == [5,10,0]
        || [first, second, third] == [10,0,5] || [first, second, third] == [15,25,20]
        || [first, second, third] == [25,20,15] || [first, second, third] == [20,15,25])*/
            finalscr += "L ";
            threeswap(stickercolWCA, 0, 5, 10);
        } else if ([first, second, third].every(function(element, index) {
            return element === [10,5,0][index];}) ||
             [first, second, third].every(function(element, index) {
            return element === [0,10,5][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [5,0,10][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [20,25,15][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [15,20,25][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [25,15,20][index];}) ){
            /*([first, second, third] == [10,5,0] || [first, second, third] == [0,10,5]
        || [first, second, third] == [5,0,10] || [first, second, third] == [20,25,15]
        || [first, second, third] == [15,20,25] || [first, second, third] === [25,15,20])*/
            finalscr += "L' ";
            threeswap(stickercolWCA, 10, 5, 0);
        } else if ([first, second, third].every(function(element, index) {
            return element === [15,0,25][index];}) ||
             [first, second, third].every(function(element, index) {
            return element === [0,25,15][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [25,15,0][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [5,20,10][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [20,10,5][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [10,5,20][index];}) ){
            /*([first, second, third] == [15,0,25] || [first, second, third] == [0,25,15]
        || [first, second, third] == [25,15,0] || [first, second, third] == [5,20,10]
        || [first, second, third] == [20,10,5] || [first, second, third] == [10,5,20])*/
            finalscr += "U ";
            threeswap(stickercolWCA, 0, 25, 15);
        } else if ([first, second, third].every(function(element, index) {
            return element === [25,0,15][index];}) ||
             [first, second, third].every(function(element, index) {
            return element === [15,25,0][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [0,15,25][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [10,20,5][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [5,10,20][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [20,5,10][index];}) ){
            /*([first, second, third] == [25,0,15] || [first, second, third] == [15,25,0]
        || [first, second, third] == [0,15,25] || [first, second, third] == [10,20,5]
        || [first, second, third] == [5,10,20] || [first, second, third] == [20,5,10])*/
            finalscr += "U' ";
            threeswap(stickercolWCA, 15, 25, 0);
        } else if ([first, second, third].every(function(element, index) {
            return element === [25,0,10][index];}) ||
             [first, second, third].every(function(element, index) {
            return element === [0,10,25][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [10,25,0][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [15,20,5][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [20,5,15][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [5,15,20][index];}) ){
            /*([first, second, third] == [25,0,10] || [first, second, third] == [0,10,25]
        || [first, second, third] == [10,25,0] || [first, second, third] == [15,20,5]
        || [first, second, third] == [20,5,15] || [first, second, third] == [5,15,20])*/
            finalscr += "B ";
            threeswap(stickercolWCA, 0, 10, 25);
        } else if ([first, second, third].every(function(element, index) {
            return element === [10,0,25][index];}) ||
             [first, second, third].every(function(element, index) {
            return element === [25,10,0][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [0,25,10][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [5,20,15][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [15,5,20][index];}) ||
            [first, second, third].every(function(element, index) {
            return element === [20,15,5][index];}) ){
            /*([first, second, third] == [10,0,25] || [first, second, third] == [25,10,0]
        || [first, second, third] == [0,25,10] || [first, second, third] == [5,20,15]
        || [first, second, third] == [15,5,20] || [first, second, third] == [20,15,5])*/
            finalscr += "B' ";
            threeswap(stickercolWCA, 25, 10, 0);
        }
    }

    return(finalscr);

}

function doubleMoveRemover(scramble) {
  var newScr = [];
  var newScrString = "";
  var scrSplit = [];
  scrSplit = (scramble.split(" ")).slice(0,-1);

  for (var i = 0; i < scrSplit.length; i++) {
    if (newScr.length >= 1) {
      if (newScr[newScr.length-1] == scrSplit[i]) {
        if ((scrSplit[i]).length == 1) {
          newScr.pop();
          newScr.push(scrSplit[i] + "'");
        } else {
          newScr.pop();
          newScr.push(scrSplit[i].charAt(0));
        }
      } else {
        if (newScr[newScr.length-1].charAt(0) == scrSplit[i].charAt(0)) {
          newScr.pop();
        } else {
          newScr.push(scrSplit[i]);
        }
      }
    } else {
      newScr.push(scrSplit[i]);
    }
  }
  for (move of newScr) {
    newScrString += move + " ";
  }
  return (newScrString);
}


// (de/in-)crement the number of moves for the first layer trainer scrambles
function decrMoves() {
    var scrlen = parseInt(document.getElementById("scrlenlabel").innerHTML);
    if (scrlen > 1) {
        scrlen -= 1;
        document.getElementById("scrlenlabel").innerHTML = scrlen;
        changescrlen();
    }
}
function incrMoves() {
    var scrlen = parseInt(document.getElementById("scrlenlabel").innerHTML);
    if (scrlen < 7) {
        scrlen += 1;
        document.getElementById("scrlenlabel").innerHTML = scrlen;
        changescrlen();
    }
}
function decrMovesOL() {
    var scrlenOL = parseInt(document.getElementById("scrlenlabelOL").innerHTML);
    if (scrlenOL > 1) {
        scrlenOL -= 1;
        document.getElementById("scrlenlabelOL").innerHTML = scrlenOL;
    }
    changescrlenOL();
}
function incrMovesOL() {
    var scrlenOL = parseInt(document.getElementById("scrlenlabelOL").innerHTML);
    if (scrlenOL < 7) {
        scrlenOL += 1;
        document.getElementById("scrlenlabelOL").innerHTML = scrlenOL;
    }
    changescrlenOL();
}

// when a change of the selected algs has been made by (un-)selecting a set or a whole bunch of sets
// change the style of the toggle buttons and save the correct combination of scrambles as auxscrl
// shuffle them and save them as the scramblelist to be used in further functions
function changescrlen() {
    var scrlen = parseInt(document.getElementById("scrlenlabel").innerHTML);

    if (scrlen === 1) {
        var auxscr1 = newscramble1list.slice(0);
        if (document.getElementById("shufflescrchecker").checked === true) {
            shuffle(auxscr1);
            scramblelist = auxscr1;
        } else {
            scramblelist = auxscr1;
        }
    }
    if (scrlen === 2) {
        var auxscr2 = newscramble2list.slice(0);
        if (document.getElementById("shufflescrchecker").checked === true) {
            shuffle(auxscr2);
            scramblelist = auxscr2;
        } else {
            scramblelist = auxscr2;
        }
    }
    if (scrlen === 3) {
        var auxscr3 = newscramble3list.slice(0);
        if (document.getElementById("shufflescrchecker").checked === true) {
            shuffle(auxscr3);
            scramblelist = auxscr3;
        } else {
            scramblelist = auxscr3;
        }
    }
    if (scrlen === 4) {
        var auxscr4 = newscramble4list.slice(0);
        if (document.getElementById("shufflescrchecker").checked === true) {
            shuffle(auxscr4);
            scramblelist = auxscr4;
        } else {
            scramblelist = auxscr4;
        }
    }
    if (scrlen === 5) {
        var auxscr5 = newscramble5list.slice(0);
        if (document.getElementById("shufflescrchecker").checked === true) {
            shuffle(auxscr5);
            scramblelist = auxscr5;
        } else {
            scramblelist = auxscr5;
        }
    }
    if (scrlen === 6) {
        var auxscr6 = newscramble6list.slice(0);
        if (document.getElementById("shufflescrchecker").checked === true) {
            shuffle(auxscr6);
            scramblelist = auxscr6;
        } else {
            scramblelist = auxscr6;
        }
    }
    if (scrlen === 7) {
        var auxscr7 = newscramble7list.slice(0);
        if (document.getElementById("shufflescrchecker").checked === true) {
            shuffle(auxscr7);
            scramblelist = auxscr7;
        } else {
            scramblelist = auxscr7;
        }
    }
}
function changescrlenAlg() {
    // style of the buttons according to the
    // states of the checkboxes
    if (document.getElementById("l4c").checked == false
     || document.getElementById("l5c").checked == false
     || document.getElementById("pi3s").checked == false
     || document.getElementById("pihu").checked == false
     || document.getElementById("pihz").checked == false
     || document.getElementById("pio").checked == false
     || document.getElementById("piswirl").checked == false
     || document.getElementById("pivu").checked == false
     || document.getElementById("piwat").checked == false
     || document.getElementById("pix").checked == false
     || document.getElementById("pizconj").checked == false
     || document.getElementById("p3s").checked == false
     || document.getElementById("phu").checked == false
     || document.getElementById("phzpure").checked == false
     || document.getElementById("po").checked == false
     || document.getElementById("pswirl").checked == false
     || document.getElementById("pvu").checked == false
     || document.getElementById("pwat").checked == false
     || document.getElementById("px").checked == false
     || document.getElementById("pzconj").checked == false) {
       if (document.body.classList.contains("dark")) {
         document.getElementById("toggleAll").style.color = 'white';
       } else {
        document.getElementById("toggleAll").style.color = 'black';
      }
    } else {
        document.getElementById("toggleAll").style.color = 'green';

     }
    if (document.getElementById("pi3s").checked == false
     || document.getElementById("pihu").checked == false
     || document.getElementById("pihz").checked == false
     || document.getElementById("pio").checked == false
     || document.getElementById("piswirl").checked == false
     || document.getElementById("pivu").checked == false
     || document.getElementById("piwat").checked == false
     || document.getElementById("pix").checked == false
     || document.getElementById("pizconj").checked == false) {
       if (document.body.classList.contains("dark")) {
         document.getElementById("togglePi").style.color = 'white';
       } else {
        document.getElementById("togglePi").style.color = 'black';
      }
    } else {
        document.getElementById("togglePi").style.color = 'green';

     }
    if (document.getElementById("p3s").checked == false
     || document.getElementById("phu").checked == false
     || document.getElementById("phzpure").checked == false
     || document.getElementById("po").checked == false
     || document.getElementById("pswirl").checked == false
     || document.getElementById("pvu").checked == false
     || document.getElementById("pwat").checked == false
     || document.getElementById("px").checked == false
     || document.getElementById("pzconj").checked == false) {
       if (document.body.classList.contains("dark")) {
         document.getElementById("togglePeanut").style.color = 'white';
       } else {
        document.getElementById("togglePeanut").style.color = 'black';
      }
    } else {
        document.getElementById("togglePeanut").style.color = 'green';

     }
    if (document.getElementById("l4c").checked == false
     || document.getElementById("l5c").checked == false) {
       if (document.body.classList.contains("dark")) {
         document.getElementById("toggleL").style.color = 'white';
       } else {
        document.getElementById("toggleL").style.color = 'black';
      }
    } else {
        document.getElementById("toggleL").style.color = 'green';

     }

    // get the correct scrambles
    var auxscrl = [];
    if (document.getElementById("l4c").checked == false
     && document.getElementById("l5c").checked == false
     && document.getElementById("pi3s").checked == false
     && document.getElementById("pihu").checked == false
     && document.getElementById("pihz").checked == false
     && document.getElementById("pio").checked == false
     && document.getElementById("piswirl").checked == false
     && document.getElementById("pivu").checked == false
     && document.getElementById("piwat").checked == false
     && document.getElementById("pix").checked == false
     && document.getElementById("pizconj").checked == false
     && document.getElementById("p3s").checked == false
     && document.getElementById("phu").checked == false
     && document.getElementById("phzpure").checked == false
     && document.getElementById("po").checked == false
     && document.getElementById("pswirl").checked == false
     && document.getElementById("pvu").checked == false
     && document.getElementById("pwat").checked == false
     && document.getElementById("px").checked == false
     && document.getElementById("pzconj").checked == false) {
        var buttons = document.getElementsByName("btngroup");
        var atleastonechecked = false;
        for (var i=0; i<buttons.length; i++) {
            if (buttons[i].checked === true) {
                atleastonechecked = true;
                break;
            }
        }
        if (atleastonechecked === false) {
            auxscrl.push("R R'");
            }
    }

    if (document.getElementById("l4c").checked === true) {
        for (var i = 0; i < scrl4c.length; i++) {
            auxscrl.push((scrl4c.slice(0))[i]);
        }
    }
    if (document.getElementById("l5c").checked === true) {
        for (var i = 0; i < scrl5c.length; i++) {
            auxscrl.push((scrl5c.slice(0))[i]);
        }
    }
    if (document.getElementById("p3s").checked === true) {
        for (var i = 0; i < scrp3s.length; i++) {
            auxscrl.push((scrp3s.slice(0))[i]);
        }
    }
    if (document.getElementById("phu").checked === true) {
        for (var i = 0; i < scrphu.length; i++) {
            auxscrl.push((scrphu.slice(0))[i]);
        }
    }
    if (document.getElementById("phzpure").checked === true) {
        for (var i = 0; i < scrphzpure.length; i++) {
            auxscrl.push((scrphzpure.slice(0))[i]);
        }
    }
    if (document.getElementById("pi3s").checked === true) {
        for (var i = 0; i < scrpi3s.length; i++) {
            auxscrl.push((scrpi3s.slice(0))[i]);
        }
    }
    if (document.getElementById("pihu").checked === true) {
        for (var i = 0; i < scrpihu.length; i++) {
            auxscrl.push((scrpihu.slice(0))[i]);
        }
    }
    if (document.getElementById("pihz").checked === true) {
        for (var i = 0; i < scrpihz.length; i++) {
            auxscrl.push((scrpihz.slice(0))[i]);
        }
    }
    if (document.getElementById("pio").checked === true) {
        for (var i = 0; i < scrpio.length; i++) {
            auxscrl.push((scrpio.slice(0))[i]);
        }
    }
    if (document.getElementById("piswirl").checked === true) {
        for (var i = 0; i < scrpiswirl.length; i++) {
            auxscrl.push((scrpiswirl.slice(0))[i]);
        }
    }
    if (document.getElementById("pivu").checked === true) {
        for (var i = 0; i < scrpivu.length; i++) {
            auxscrl.push((scrpivu.slice(0))[i]);
        }
    }
    if (document.getElementById("piwat").checked === true) {
        for (var i = 0; i < scrpiwat.length; i++) {
            auxscrl.push((scrpiwat.slice(0))[i]);
        }
    }
    if (document.getElementById("pix").checked === true) {
        for (var i = 0; i < scrpix.length; i++) {
            auxscrl.push((scrpix.slice(0))[i]);
        }
    }
    if (document.getElementById("pizconj").checked === true) {
        for (var i = 0; i < scrpizconj.length; i++) {
            auxscrl.push((scrpizconj.slice(0))[i]);
        }
    }
    if (document.getElementById("po").checked === true) {
        for (var i = 0; i < scrpo.length; i++) {
            auxscrl.push((scrpo.slice(0))[i]);
        }
    }
    if (document.getElementById("pswirl").checked === true) {
        for (var i = 0; i < scrpswirl.length; i++) {
            auxscrl.push((scrpswirl.slice(0))[i]);
        }
    }
    if (document.getElementById("pvu").checked === true) {
        for (var i = 0; i < scrpvu.length; i++) {
            auxscrl.push((scrpvu.slice(0))[i]);
        }
    }
    if (document.getElementById("pwat").checked === true) {
        for (var i = 0; i < scrpwat.length; i++) {
            auxscrl.push((scrpwat.slice(0))[i]);
        }
    }
    if (document.getElementById("px").checked === true) {
        for (var i = 0; i < scrpx.length; i++) {
            auxscrl.push((scrpx.slice(0))[i]);
        }
    }
    if (document.getElementById("pzconj").checked === true) {
        for (var i = 0; i < scrpzconj.length; i++) {
            auxscrl.push((scrpzconj.slice(0))[i]);
        }
    }
    var group = document.getElementsByName("btngroup");
        for (var i=0; i<group.length; i++) {
            if (group[i].checked === true) {
                auxscrl.push((allAlgs.slice(0))[i]);
            }
        }
    shuffle(auxscrl);
    scramblelistAlg = auxscrl;
}

function changescrlenOL() {
    var scrlenOL = parseInt(document.getElementById("scrlenlabelOL").innerHTML);
    // grab random L2L scramble
    var auxscrlOL1 = [allAlgs[Math.floor(Math.random() * allAlgs.length)]];
    // grab random FL scramble
    var auxscrlOL2 = [];
    if (scrlenOL === 1) {
        var auxscr1OL = [newscramble1list[Math.floor(Math.random() * newscramble1list.length)]];
        //var auxscr1OL = newscramble1list.slice(0);
        auxscrlOL2 = auxscr1OL;
    }
    if (scrlenOL === 2) {
      var auxscr2OL = [newscramble2list[Math.floor(Math.random() * newscramble2list.length)]];
        //var auxscr2OL = newscramble2list.slice(0);
        auxscrlOL2 = auxscr2OL;
    }
    if (scrlenOL === 3) {
        var auxscr3OL = [newscramble3list[Math.floor(Math.random() * newscramble3list.length)]];
        //var auxscr3OL = newscramble3list.slice(0);
        auxscrlOL2 = auxscr3OL;
    }
    if (scrlenOL === 4) {
        var auxscr4OL = [newscramble4list[Math.floor(Math.random() * newscramble4list.length)]];
        //var auxscr4OL = newscramble4list.slice(0);
        auxscrlOL2 = auxscr4OL;
    }
    if (scrlenOL === 5) {
        var auxscr5OL = [newscramble5list[Math.floor(Math.random() * newscramble5list.length)]];
        //var auxscr5OL = newscramble5list.slice(0);
        auxscrlOL2 = auxscr5OL;
    }
    if (scrlenOL === 6) {
        var auxscr6OL = [newscramble6list[Math.floor(Math.random() * newscramble6list.length)]];
        //var auxscr6OL = newscramble6list.slice(0);
        auxscrlOL2 = auxscr6OL;
    }
    if (scrlenOL === 7) {
        var auxscr7OL = [newscramble7list[Math.floor(Math.random() * newscramble7list.length)]];
        //var auxscr7OL = newscramble7list.slice(0);
        auxscrlOL2 = auxscr7OL;
    }
    // add both together
    var completeScr = [];
    completeScr.push(transftoWCA(auxscrlOL1[0]) + auxscrlOL2[0]);
    /*
    for (var k = 0; k < auxscrlOL1.length; k++) {
      for (var l = 0; l < auxscrlOL2.length; l++) {
          completeScr.push(transftoWCA(auxscrlOL1[k]) + auxscrlOL2[l]);
      }
    }*/

    /*
    // grab all L2L scrambles
    var auxscrlOL1 = [];
    for (var i = 0; i < allAlgs.length; i++) {
        auxscrlOL1.push((allAlgs.slice(0))[i]);
    }

    // grab out of the possible FL scrambles corresponding to scrlenlabelOL
    var auxscrlOL2 = [];
    if (scrlenOL === 1) {
        var auxscr1OL = newscramble1list.slice(0);
        auxscrlOL2 = auxscr1OL;
    }
    if (scrlenOL === 2) {
        var auxscr2OL = newscramble2list.slice(0);
        auxscrlOL2 = auxscr2OL;
    }
    if (scrlenOL === 3) {
        var auxscr3OL = newscramble3list.slice(0);
        auxscrlOL2 = auxscr3OL;
    }
    if (scrlenOL === 4) {
        var auxscr4OL = newscramble4list.slice(0);
        auxscrlOL2 = auxscr4OL;
    }
    if (scrlenOL === 5) {
        var auxscr5OL = newscramble5list.slice(0);
        auxscrlOL2 = auxscr5OL;
    }
    if (scrlenOL === 6) {
        var auxscr6OL = newscramble6list.slice(0);
        auxscrlOL2 = auxscr6OL;
    }
    if (scrlenOL === 7) {
        var auxscr7OL = newscramble7list.slice(0);
        auxscrlOL2 = auxscr7OL;
    }

    var completeScr = [];
    for (var k = 0; k < auxscrlOL1.length; k++) {
      for (var l = 0; l < auxscrlOL2.length; l++) {
          completeScr.push(transftoWCA(auxscrlOL1[k]) + auxscrlOL2[l]);
      }
    }
    shuffle(completeScr);*/
    scramblelistOL = completeScr;
}
// grab new scrambles when button is clicked, if array is empty, get new ones; write scramble and
// colour into corresponding labels
function ScramblePlusColour() {
    if (scramblelist.length == 0) {
        changescrlen();
    }

    var scramblezumanzeigen = scramblelist[scramblelist.length - 1];
    scramblelist.pop();
    document.getElementById("scramblelabel").innerHTML = scramblezumanzeigen;

    if (showscrimageFLT.checked == true) {
        document.getElementById("scrDrawing").style.display = "block";
    } else {
        document.getElementById("scrDrawing").style.display = "none";
    }

    ShowScramble(scramblezumanzeigen);

    if (document.getElementById("anycolourchecker").checked === true) {
        var cl = ["w", "y", "g", "r", "b", "o"][Math.floor(Math.random() * 6)];
        if (cl === "w") {
            document.getElementById("colourlabel").style.background = 'white';
        } else if (cl === "y") {
            document.getElementById("colourlabel").style.background = 'yellow';
        } else if(cl === "g") {
            document.getElementById("colourlabel").style.background = 'green';
        } else if(cl === "r") {
            document.getElementById("colourlabel").style.background = 'red';
        } else if(cl === "b") {
            document.getElementById("colourlabel").style.background = 'blue';
        } else {
            document.getElementById("colourlabel").style.background = 'orange';
        }
    } else {
        document.getElementById("colourlabel").style.background = 'white';
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  

function ScramblePlusColourAlg() {
    if (scramblelistAlg.length == 0) {
        changescrlenAlg();
    }

    var scramblezumanzeigenAlg = scramblelistAlg[scramblelistAlg.length - 1];
    scramblelistAlg.pop();
    // get random int for top site color: 0, 1, 2, 3: /, x, x2, x' | 4, 5: z, z'
    // get random int for side color: 0, 1, 2, 3: /, y, y2, y'
    // if x2y2 do z2 instead
    var firstRotations = ["", "x ", "x2 ", "x' ", "z ", "z' ", "z2 "]
    var firstRotationsInv = ["", " x'", " x2", " x", " z'", " z", " z2"]
    var secondRotations = ["", "y ", "y2 ", "y' "]
    var secondRotationsInv = ["", " y'", " y2", " y"]
    var firstRotationIndex = getRandomInt(6);
    var secondRotationIndex = getRandomInt(4);
    if (firstRotationIndex == 2 && secondRotationIndex == 2) {
        firstRotationIndex = 6;
        secondRotationIndex = 0;
    }
    var firstRotation = firstRotations[firstRotationIndex];
    var secondRotation = secondRotations[secondRotationIndex];
    var firstRotationInv = firstRotationsInv[firstRotationIndex];
    var secondRotationInv =  secondRotationsInv[secondRotationIndex];
    var rotations = firstRotation + secondRotation;
    var backRotations = secondRotationInv + firstRotationInv;
    scramblezumanzeigenAlg = rotations + scramblezumanzeigenAlg + backRotations;

    document.getElementById("scramblelabelAlg").innerHTML = doubleMoveRemover(transftoWCA(scramblezumanzeigenAlg));

    if (showscrimageAlg.checked == true) {
        document.getElementById("scrDrawingAlg").style.display = "block";
    } else {
        document.getElementById("scrDrawingAlg").style.display = "none";
    }
    ShowScramble(scramblezumanzeigenAlg);
}

function ScramblePlusColourOL() {
  if (scramblelistOL.length == 0) {
      changescrlenOL();
  }

  var scramblezumanzeigenOL = scramblelistOL[scramblelistOL.length - 1];
  scramblelistOL.pop();
  document.getElementById("scramblelabelOL").innerHTML = doubleMoveRemover(scramblezumanzeigenOL + " ");

  if (showscrimageOLT.checked == true) {
      document.getElementById("scrDrawingOL").style.display = "block";
  } else {
      document.getElementById("scrDrawingOL").style.display = "none";
  }
  ShowScramble(scramblezumanzeigenOL);
}


// manipulates the initial order of coloured stickers, assigns swaps to moves, displays polygons
// filled with the correct colours
function ShowScramble(scramble) {
    const stickercol = ["o", "o", "o", "o", "o", "g", "g", "g", "g", "g", "y", "y", "y", "y", "y",
                      "w", "w", "w", "w", "w", "r", "r", "r", "r", "r", "b", "b", "b", "b", "b"];
    var scrsplit = scramble.split(" ");
    if (document.getElementById("AlgT").style.display == "block") {
        for (var i = 0; i < scrsplit.length; i++) {
            if (scrsplit[i] == "x") {
                fourswap(stickercol, 15, 25, 10, 5);
                fourswap(stickercol, 24, 21, 22, 23);
                fourswap(stickercol, 2, 1, 4, 3);
                fourswap(stickercol, 17, 29, 12, 7);
                fourswap(stickercol, 6, 16, 28, 11);
                fourswap(stickercol, 9, 19, 27, 14);
                fourswap(stickercol, 18, 26, 13, 8);
            } else if (scrsplit[i] == "x'") {
                fourswap(stickercol, 5, 10, 25, 15);
                fourswap(stickercol, 23, 22, 21, 24);
                fourswap(stickercol, 3, 4, 1, 2);
                fourswap(stickercol, 7, 12, 29, 17);
                fourswap(stickercol, 11, 28, 16, 6);
                fourswap(stickercol, 14, 27, 19, 9);
                fourswap(stickercol, 8, 13, 26, 18);
            } else if (scrsplit[i] == "x2") {
                fourswap(stickercol, 5, 10, 25, 15);
                fourswap(stickercol, 23, 22, 21, 24);
                fourswap(stickercol, 3, 4, 1, 2);
                fourswap(stickercol, 7, 12, 29, 17);
                fourswap(stickercol, 11, 28, 16, 6);
                fourswap(stickercol, 14, 27, 19, 9);
                fourswap(stickercol, 8, 13, 26, 18);
                fourswap(stickercol, 5, 10, 25, 15);
                fourswap(stickercol, 23, 22, 21, 24);
                fourswap(stickercol, 3, 4, 1, 2);
                fourswap(stickercol, 7, 12, 29, 17);
                fourswap(stickercol, 11, 28, 16, 6);
                fourswap(stickercol, 14, 27, 19, 9);
                fourswap(stickercol, 8, 13, 26, 18);
            } else if (scrsplit[i] == "y") {
                fourswap(stickercol, 19, 16, 17, 18);
                fourswap(stickercol, 14, 13, 12, 11);
                fourswap(stickercol, 25, 20, 5, 0);
                fourswap(stickercol, 21, 6, 1, 26);
                fourswap(stickercol, 29, 24, 9, 4);
                fourswap(stickercol, 23, 8, 3, 28);
                fourswap(stickercol, 27, 22, 7, 2);
            } else if (scrsplit[i] == "y'") {
                fourswap(stickercol, 18, 17, 16, 19);
                fourswap(stickercol, 11, 12, 13, 14);
                fourswap(stickercol, 0, 5, 20, 25);
                fourswap(stickercol, 26, 1, 6, 21);
                fourswap(stickercol, 4, 9, 24, 29);
                fourswap(stickercol, 28, 3, 8, 23);
                fourswap(stickercol, 2, 7, 22, 27);
            } else if (scrsplit[i] == "y2") {
                fourswap(stickercol, 18, 17, 16, 19);
                fourswap(stickercol, 11, 12, 13, 14);
                fourswap(stickercol, 0, 5, 20, 25);
                fourswap(stickercol, 26, 1, 6, 21);
                fourswap(stickercol, 4, 9, 24, 29);
                fourswap(stickercol, 28, 3, 8, 23);
                fourswap(stickercol, 2, 7, 22, 27);
                fourswap(stickercol, 18, 17, 16, 19);
                fourswap(stickercol, 11, 12, 13, 14);
                fourswap(stickercol, 0, 5, 20, 25);
                fourswap(stickercol, 26, 1, 6, 21);
                fourswap(stickercol, 4, 9, 24, 29);
                fourswap(stickercol, 28, 3, 8, 23);
                fourswap(stickercol, 2, 7, 22, 27);
            } else if (scrsplit[i] == "z") {
                fourswap(stickercol, 15, 20, 10, 0);
                fourswap(stickercol, 9, 6, 7, 8);
                fourswap(stickercol, 29, 28, 27, 26);
                fourswap(stickercol, 18, 24, 11, 2);
                fourswap(stickercol, 17, 23, 14, 1);
                fourswap(stickercol, 19, 21, 12, 3);
                fourswap(stickercol, 16, 22, 13, 4);
            } else if (scrsplit[i] == "z'") {
                fourswap(stickercol, 0, 10, 20, 15);
                fourswap(stickercol, 8, 7, 6, 9);
                fourswap(stickercol, 26, 27, 28, 29);
                fourswap(stickercol, 2, 11, 24, 18);
                fourswap(stickercol, 1, 14, 23, 17);
                fourswap(stickercol, 3, 12, 21, 19);
                fourswap(stickercol, 4, 13, 22, 16);
            } else if (scrsplit[i] == "z2") {
                fourswap(stickercol, 0, 10, 20, 15);
                fourswap(stickercol, 8, 7, 6, 9);
                fourswap(stickercol, 26, 27, 28, 29);
                fourswap(stickercol, 2, 11, 24, 18);
                fourswap(stickercol, 1, 14, 23, 17);
                fourswap(stickercol, 3, 12, 21, 19);
                fourswap(stickercol, 4, 13, 22, 16);
                fourswap(stickercol, 0, 10, 20, 15);
                fourswap(stickercol, 8, 7, 6, 9);
                fourswap(stickercol, 26, 27, 28, 29);
                fourswap(stickercol, 2, 11, 24, 18);
                fourswap(stickercol, 1, 14, 23, 17);
                fourswap(stickercol, 3, 12, 21, 19);
                fourswap(stickercol, 4, 13, 22, 16);
            } else if (scrsplit[i] == "r" || scrsplit[i] == "r'2") {
                threeswap(stickercol, 3, 7, 16);
                threeswap(stickercol, 10, 20, 25);
                threeswap(stickercol, 11, 21, 27);
                threeswap(stickercol, 12, 22, 28);
                threeswap(stickercol, 13, 23, 29);
             } else if (scrsplit[i] == "r'" || scrsplit[i] == "r2") {
                threeswap(stickercol, 16, 7, 3);
                threeswap(stickercol, 25, 20, 10);
                threeswap(stickercol, 27, 21, 11);
                threeswap(stickercol, 28, 22, 12);
                threeswap(stickercol, 29, 23, 13);
            } else if (scrsplit[i] == "R" || scrsplit[i] == "R'2") {
                threeswap(stickercol, 15, 25, 20);
                threeswap(stickercol, 16, 29, 21);
                threeswap(stickercol, 17, 26, 22);
                threeswap(stickercol, 24, 19, 28);
                threeswap(stickercol, 6, 4, 12);
            } else if (scrsplit[i] == "R'" || scrsplit[i] == "R2") {
                threeswap(stickercol, 20, 25, 15);
                threeswap(stickercol, 21, 29, 16);
                threeswap(stickercol, 22, 26, 17);
                threeswap(stickercol, 28, 19, 24);
                threeswap(stickercol, 12, 4, 6);
            } else if (scrsplit[i] == "l" || scrsplit[i] == "L" || scrsplit[i] == "l'2" || scrsplit[i] == "L'2") {
                threeswap(stickercol, 0, 5, 10);
                threeswap(stickercol, 1, 7, 13);
                threeswap(stickercol, 2, 8, 14);
                threeswap(stickercol, 3, 9, 11);
                threeswap(stickercol, 18, 23, 27);
            } else if (scrsplit[i] == "l'" || scrsplit[i] == "L'" || scrsplit[i] == "l2" || scrsplit[i] == "L2") {
                threeswap(stickercol, 10, 5, 0);
                threeswap(stickercol, 13, 7, 1);
                threeswap(stickercol, 14, 8, 2);
                threeswap(stickercol, 11, 9, 3);
                threeswap(stickercol, 27, 23, 18);
            } else if (scrsplit[i] == "f" || scrsplit[i] == "f'2") {
                threeswap(stickercol, 5, 20, 10);
                threeswap(stickercol, 7, 23, 11);
                threeswap(stickercol, 17, 28, 2);
                threeswap(stickercol, 24, 12, 8);
                threeswap(stickercol, 6, 22, 14);
            } else if (scrsplit[i] == "f'" || scrsplit[i] == "f2") {
                threeswap(stickercol, 10, 20, 5);
                threeswap(stickercol, 11, 23, 7);
                threeswap(stickercol, 2, 28, 17);
                threeswap(stickercol, 8, 12, 24);
                threeswap(stickercol, 14, 22, 6);
            } else if (scrsplit[i] == "B" || scrsplit[i] == "U" || scrsplit[i] == "B'2" || scrsplit[i] == "U'2") {
                threeswap(stickercol, 0, 25, 15);
                threeswap(stickercol, 1, 27, 16);
                threeswap(stickercol, 3, 29, 18);
                threeswap(stickercol, 4, 26, 19);
                threeswap(stickercol, 9, 13, 21);
            } else if (scrsplit[i] == "B'" || scrsplit[i] == "U'" || scrsplit[i] == "B2" || scrsplit[i] == "U2") {
                threeswap(stickercol, 15, 25, 0);
                threeswap(stickercol, 16, 27, 1);
                threeswap(stickercol, 18, 29, 3);
                threeswap(stickercol, 19, 26, 4);
                threeswap(stickercol, 21, 13, 9);
            } else if (scrsplit[i] == "b" || scrsplit[i] == "b'2") {
                threeswap(stickercol, 0, 10, 25);
                threeswap(stickercol, 2, 12, 26);
                threeswap(stickercol, 3, 13, 27);
                threeswap(stickercol, 4, 14, 28);
                threeswap(stickercol, 8, 22, 19);
            } else {
                threeswap(stickercol, 25, 10, 0);
                threeswap(stickercol, 26, 12, 2);
                threeswap(stickercol, 27, 13, 3);
                threeswap(stickercol, 28, 14, 4);
                threeswap(stickercol, 19, 22, 8);
            }
        }
    } else {
        for (var i = 0; i < scrsplit.length; i++) {
            if (scrsplit[i] == "R") {
                threeswap(stickercol, 3, 7, 16);
                threeswap(stickercol, 10, 20, 25);
                threeswap(stickercol, 11, 21, 27);
                threeswap(stickercol, 12, 22, 28);
                threeswap(stickercol, 13, 23, 29);
             } else if (scrsplit[i] == "R'") {
                threeswap(stickercol, 16, 7, 3);
                threeswap(stickercol, 25, 20, 10);
                threeswap(stickercol, 27, 21, 11);
                threeswap(stickercol, 28, 22, 12);
                threeswap(stickercol, 29, 23, 13);
            } else if (scrsplit[i] == "L") {
                threeswap(stickercol, 0, 5, 10);
                threeswap(stickercol, 1, 7, 13);
                threeswap(stickercol, 2, 8, 14);
                threeswap(stickercol, 3, 9, 11);
                threeswap(stickercol, 18, 23, 27);
            } else if (scrsplit[i] == "L'") {
                threeswap(stickercol, 10, 5, 0);
                threeswap(stickercol, 13, 7, 1);
                threeswap(stickercol, 14, 8, 2);
                threeswap(stickercol, 11, 9, 3);
                threeswap(stickercol, 27, 23, 18);
            } else if (scrsplit[i] == "U") {
                threeswap(stickercol, 0, 25, 15);
                threeswap(stickercol, 1, 27, 16);
                threeswap(stickercol, 3, 29, 18);
                threeswap(stickercol, 4, 26, 19);
                threeswap(stickercol, 9, 13, 21);
            } else if (scrsplit[i] == "U'") {
                threeswap(stickercol, 15, 25, 0);
                threeswap(stickercol, 16, 27, 1);
                threeswap(stickercol, 18, 29, 3);
                threeswap(stickercol, 19, 26, 4);
                threeswap(stickercol, 21, 13, 9);
            } else if (scrsplit[i] == "B") {
                threeswap(stickercol, 0, 10, 25);
                threeswap(stickercol, 2, 12, 26);
                threeswap(stickercol, 3, 13, 27);
                threeswap(stickercol, 4, 14, 28);
                threeswap(stickercol, 8, 22, 19);
            } else {
                threeswap(stickercol, 25, 10, 0);
                threeswap(stickercol, 26, 12, 2);
                threeswap(stickercol, 27, 13, 3);
                threeswap(stickercol, 28, 14, 4);
                threeswap(stickercol, 19, 22, 8);
            }
        }
    }

    if (document.getElementById("AlgT").style.display == "block") {
        var canvas = document.getElementById("scrDrawingAlg");
    } else if (document.getElementById("OLT").style.display == "block") {
        var canvas = document.getElementById("scrDrawingOL");
    } else {
        var canvas = document.getElementById("scrDrawing");
    }
    var ctx = canvas.getContext('2d');
    ctx.translate(10, 10);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.fillStyle = corrcol(stickercol, 0);
    ctx.beginPath();
    ctx.moveTo(0.0, 75.0);
    ctx.lineTo(60, 30);
    ctx.lineTo(120, 135);
    ctx.lineTo(60, 180);
    ctx.lineTo(0, 75);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 1);
    ctx.beginPath();
    ctx.moveTo(60, 30);
    ctx.lineTo(120, 135);
    ctx.lineTo(120, 60);
    ctx.lineTo(60, 30);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 2);
    ctx.beginPath();
    ctx.moveTo(120, 135);
    ctx.lineTo(120, 210);
    ctx.lineTo(60, 180);
    ctx.lineTo(120, 135);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 3);
    ctx.beginPath();
    ctx.moveTo(0, 75);
    ctx.lineTo(60, 180);
    ctx.lineTo(0, 150);
    ctx.lineTo(0, 75);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 4);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(60, 30);
    ctx.lineTo(0, 75);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 5);
    ctx.beginPath();
    ctx.moveTo(120, 135);
    ctx.lineTo(180, 90);
    ctx.lineTo(240, 195);
    ctx.lineTo(180, 240);
    ctx.lineTo(120, 135);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 6);
    ctx.beginPath();
    ctx.moveTo(180, 90);
    ctx.lineTo(240, 120);
    ctx.lineTo(240, 195);
    ctx.lineTo(180, 90);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 7);
    ctx.beginPath();
    ctx.moveTo(240, 195);
    ctx.lineTo(240, 270);
    ctx.lineTo(180, 240);
    ctx.lineTo(240, 195);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 8);
    ctx.beginPath();
    ctx.moveTo(120, 135);
    ctx.lineTo(180, 240);
    ctx.lineTo(120, 210);
    ctx.lineTo(120, 135);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 9);
    ctx.beginPath();
    ctx.moveTo(120, 60);
    ctx.lineTo(180, 90);
    ctx.lineTo(120, 135);
    ctx.lineTo(120, 60);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 10);
    ctx.beginPath();
    ctx.moveTo(180, 240);
    ctx.lineTo(240, 345);
    ctx.lineTo(180, 390);
    ctx.lineTo(120, 285);
    ctx.lineTo(180, 240);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 11);
    ctx.beginPath();
    ctx.moveTo(180, 240);
    ctx.lineTo(240, 270);
    ctx.lineTo(240, 345);
    ctx.lineTo(180, 240);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 12);
    ctx.beginPath();
    ctx.moveTo(240, 345);
    ctx.lineTo(240, 420);
    ctx.lineTo(180, 390);
    ctx.lineTo(240, 345);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 13);
    ctx.beginPath();
    ctx.moveTo(120, 285);
    ctx.lineTo(180, 390);
    ctx.lineTo(120, 360);
    ctx.lineTo(120, 285);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 14);
    ctx.beginPath();
    ctx.moveTo(120, 210);
    ctx.lineTo(180, 240);
    ctx.lineTo(120, 285);
    ctx.lineTo(120, 210);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 15);
    ctx.beginPath();
    ctx.moveTo(180, 90);
    ctx.lineTo(180, 30);
    ctx.lineTo(300, 30);
    ctx.lineTo(300, 90);
    ctx.lineTo(180, 90);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 16);
    ctx.beginPath();
    ctx.moveTo(300, 30);
    ctx.lineTo(360, 60);
    ctx.lineTo(300, 90);
    ctx.lineTo(300, 30);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 17);
    ctx.beginPath();
    ctx.moveTo(180, 90);
    ctx.lineTo(300, 90);
    ctx.lineTo(240, 120);
    ctx.lineTo(180, 90);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 18);
    ctx.beginPath();
    ctx.moveTo(120, 60);
    ctx.lineTo(180, 30);
    ctx.lineTo(180, 90);
    ctx.lineTo(120, 60);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 19);
    ctx.beginPath();
    ctx.moveTo(180, 30);
    ctx.lineTo(240, 0);
    ctx.lineTo(300, 30);
    ctx.lineTo(180, 30);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 20);
    ctx.beginPath();
    ctx.moveTo(240, 195);
    ctx.lineTo(300, 90);
    ctx.lineTo(360, 135);
    ctx.lineTo(300, 240);
    ctx.lineTo(240, 195);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 21);
    ctx.beginPath();
    ctx.moveTo(300, 90);
    ctx.lineTo(360, 60);
    ctx.lineTo(360, 135);
    ctx.lineTo(300, 90);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 22);
    ctx.beginPath();
    ctx.moveTo(300, 240);
    ctx.lineTo(360, 135);
    ctx.lineTo(360, 210);
    ctx.lineTo(300, 240);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 23);
    ctx.beginPath();
    ctx.moveTo(240, 195);
    ctx.lineTo(300, 240);
    ctx.lineTo(240, 270);
    ctx.lineTo(240, 195);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 24);
    ctx.beginPath();
    ctx.moveTo(240, 120);
    ctx.lineTo(300, 90);
    ctx.lineTo(240, 195);
    ctx.lineTo(240, 120);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 25);
    ctx.beginPath();
    ctx.moveTo(360, 135);
    ctx.lineTo(420, 30);
    ctx.lineTo(480, 75);
    ctx.lineTo(420, 180);
    ctx.lineTo(360, 135);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 26);
    ctx.beginPath();
    ctx.moveTo(420, 30);
    ctx.lineTo(480, 0);
    ctx.lineTo(480, 75);
    ctx.lineTo(420, 30);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 27);
    ctx.beginPath();
    ctx.moveTo(420, 180);
    ctx.lineTo(480, 75);
    ctx.lineTo(480, 150);
    ctx.lineTo(420, 180);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 28);
    ctx.beginPath();
    ctx.moveTo(360, 135);
    ctx.lineTo(420, 180);
    ctx.lineTo(360, 210);
    ctx.lineTo(360, 135);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 29);
    ctx.beginPath();
    ctx.moveTo(360, 60);
    ctx.lineTo(420, 30);
    ctx.lineTo(360, 135);
    ctx.lineTo(360, 60);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.translate(-10, -10);
}

// permute the selected entries of the list cyclically
function threeswap(listname,i,j,k) {
    [listname[j], listname[k]] = [listname[k], listname[j]];
    [listname[i], listname[j]] = [listname[j], listname[i]];
}
function fourswap(listname,i,j,k,l) {
    [listname[k], listname[l]] = [listname[l], listname[k]];
    [listname[j], listname[k]] = [listname[k], listname[j]];
    [listname[i], listname[j]] = [listname[j], listname[i]];
}

function corrcol(list,i) {
    if (list[i] == "o") {
        return 'orange';
    } else if (list[i] == "g") {
        return 'green';
    } else if (list[i] == "r") {
        return 'red';
    } else if (list[i] == "b") {
        return 'blue';
    } else if (list[i] == "w") {
        return 'white';
    } else {
        return 'yellow';
    }
}

function shuffle(array) {
   for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

// timer
var x;
var startstop = 0;

function startStop() { /* Toggle StartStop */

  startstop = startstop + 1;

  if (startstop === 1) {
    start();
    document.getElementById("start").innerHTML = "Stop";
  } else if (startstop === 2) {
    document.getElementById("start").innerHTML = "Start";
    startstop = 0;
    stop();
  }

}


function start() {
  x = setInterval(timer, 10);
  document.getElementById("reset").style.visibility = "hidden";
} /* Start */

function stop() {
  clearInterval(x);
  document.getElementById("reset").style.visibility = "visible";
  checkPB();
} /* Stop */

var milisec = 0;
var sec = 0; /* holds incrementing value */
var min = 0;

/* Contains and outputs returned value of  function checkTime */

var miliSecOut = 0;
var secOut = 0;
var minOut = 0;

/* Output variable End */

function timer() {
  /* Main Timer */

  miliSecOut = checkTime(milisec);
  secOut = checkTime(sec);
  minOut = checkTime(min);

  milisec = ++milisec;

  if (milisec === 100) {
    milisec = 0;
    sec = ++sec;
  }
  if (sec == 60) {
    min = ++min;
    sec = 0;
  }

  document.getElementById("milisec").innerHTML = miliSecOut;
  document.getElementById("sec").innerHTML = secOut;
  document.getElementById("min").innerHTML = minOut;
}

/* Adds 0 when value is <10 */

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function reset() {
  /*Reset*/
  milisec = 0;
  sec = 0;
  min = 0

  document.getElementById("milisec").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("pbLabel").style.visibility = "hidden";
  document.getElementById("reset").style.visibility = "hidden";
}

// prompt if you get a pb on a l2l case
var dict = {};

function checkPB() {
    if (document.getElementById("AlgT").style.display != "none") {
        if (dict.hasOwnProperty(document.getElementById("scramblelabelAlg").innerHTML)) {
            if (miliSecOut + secOut * 100 + minOut * 60 * 100 <= dict[document.getElementById("scramblelabelAlg").innerHTML]) {
                dict[document.getElementById("scramblelabelAlg").innerHTML] = miliSecOut + secOut * 100 + minOut * 60 * 100;
                document.getElementById("pbLabel").innerHTML = "That's a PB!";
				document.getElementById("pbLabel").style.visibility = "visible";
            } else {
				document.getElementById("pbLabel").innerHTML = "&nbsp;";
                document.getElementById("pbLabel").visibility = "hidden";
            }
        } else {
            dict[document.getElementById("scramblelabelAlg").innerHTML] = miliSecOut + secOut * 100 + minOut * 60 * 100;
            document.getElementById("pbLabel").innerHTML = "That's a PB!";
			document.getElementById("pbLabel").style.visibility = "visible";
        }
    }
}

function key(event) {
    let key = event.key;

    if ( document.getElementById("FLT").style.display != "none" ) {
        if (key == " ") {
            event.preventDefault();
            startStop();
        }

        if (key == "r") {
            event.preventDefault();
            reset();
        }

        if (key == "Enter") {
            event.preventDefault();
            ScramblePlusColour();
        }
    }
    if ( document.getElementById("AlgT").style.display != "none" ) {
        if (key == " ") {
            event.preventDefault();
            startStop();
        }

        if (key == "r") {
            event.preventDefault();
            reset();
        }

        if (key == "Enter") {
            event.preventDefault();
            ScramblePlusColourAlg();
        }
    }
    if ( document.getElementById("OLT").style.display != "none" ) {
        if (key == " ") {
            event.preventDefault();
            startStop();
        }

        if (key == "r") {
            event.preventDefault();
            reset();
        }

        if (key == "Enter") {
            event.preventDefault();
            ScramblePlusColourOL();
        }
    }
}

window.addEventListener("keydown", key, false);

/*
          IDEAS TO STORE DATA FOR EACH CASE, MAYBE AS OBJECTS OF A CLASS CASE

          case.id, case.group, case.subGroup, case.scramble, case.mySolution,
          case.currentPersJudgement, case.numBadJudge, case.numMediumJudge, case.numGoodJudge,
          case.PB, case.movecount, case.tpsPB,
*/

function findNextCaseByPersonalJudgement() {
    // find the currently selected Algs
    // if there are cases without judgement, show them in random order until all cases have been shown once

    // now that cases have been shown once or all cases have their judgement, choose randomly from the bad ones, the medium ones and the good ones,
    // but more likely bad than medium, more likely medium than good

    // e.g. roll dice, if result is 1, 3 or 5 --> use a bad case, if result is 2 or 4 use a medium case, if result is 6, use a good case

}
function applyPersonalJudgement() {
  // assign judgement to the case that is currently selected
}
