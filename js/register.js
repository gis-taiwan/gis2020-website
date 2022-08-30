var showindex = "1";
$(document).ready(function () {
  function show(index) {
    var current = $("#register-list:nth-child(" + index + ")");
    var newtabid = "#tab" + index;
    var oldtabid = "#tab" + showindex;
    //console.log(oldtabid);
    //console.log(newtabid);
    //console.log(oldtabid + " + label");
    $(oldtabid + " + label").removeClass("mylabel");
    $(oldtabid + " + label .fas").removeClass("myfas");
    $("#content" + showindex).removeClass("mycontent");
    $(newtabid + "+ label").addClass("mylabel");
    $(newtabid + "+ label .fas").addClass("myfas");
    $("#content" + index).addClass("mycontent");
    showindex = index;
    $(".menu-active.menu-item-active").removeClass(
      "menu-active menu-item-active"
    );
    var current = $("#register-list li:nth-child(" + index + ")");
    current.addClass("menu-active menu-item-active");
    //console.log(current);
    //console.log(index);
    //console.log("#register-list:nth-child(" + index + ")");
  }

  var parser = document.createElement("a");
  parser.href = location.href;
  var ori = parser.hash;
  if (ori.includes("#tab")) {
    var idx = ori.substr(4);
    if (idx - "1" <= 4 && idx - "1" >= 0) {
      //console.log(idx - '1');
      show(idx);
    }
  } else {
    //console.log( "Nothing" );
    show("1");
  }

  $('input[id^="tab"]').click(function (event) {
    var ori = event.target.id;
    var idx = ori.substr(3);
    //console.log(idx);
    show(idx);
  });
  // Start of registration guide
  var test = $(".s1,.s2,.s3,.s4,.s5");
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var sections = [];
  var create = function (start, width, idx) {
    var section = {
      start: start,
      width: width,
      height: 45,
      hMax: 35,
      hMod: 0,
      progress: 0,
      dot: {
        x: 0,
        y: 0,
      },
    };
    //console.log(idx,section.width);
    section.end = section.start + section.width;
    section.dot.x = section.start + section.width / 2;
    section.dot.y = section.height;
    sections[idx] = section;
  };

  var draw = function (s) {
    var wMod = s.width * 0.3;
    ctx.beginPath();
    ctx.moveTo(s.start, s.height);
    ctx.bezierCurveTo(
      s.start + wMod,
      s.height,
      s.start + wMod,
      s.height - s.hMod,
      s.start + s.width / 2,
      s.height - s.hMod
    );
    ctx.bezierCurveTo(
      s.end - wMod,
      s.height - s.hMod,
      s.end - wMod,
      s.height,
      s.end,
      s.height
    );
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#585858";
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "#585858";
    ctx.arc(s.dot.x, s.dot.y, 8, 0, Math.PI * 2);
    ctx.fill();
  };

  function quad(progress) {
    return Math.pow(progress, 2);
  }
  function makeEaseOut(delta) {
    return function (progress) {
      return 1 - delta(1 - progress);
    };
  }
  var quadOut = makeEaseOut(quad);

  var bend = function (s) {
    if (s.progress < s.hMax) {
      var delta = quadOut(s.progress / s.hMax);
      s.hMod = s.hMax * delta;
      s.dot.y = s.height - s.hMax * delta;
      s.progress++;
    }
  };
  var reset = function (s) {
    if (s.progress > 0) {
      var delta = quadOut(s.progress / s.hMax);
      s.hMod = s.hMax * delta;
      s.dot.y = s.height - s.hMax * delta;
      s.progress -= 2;
    } else {
      s.hMod = 0;
      s.dot.y = s.height;
      s.progress = 0;
    }
  };

  var currentSection = 0;
  var last = $(".s1");
  test.hover(function (event) {
    $(this).addClass("active");
    var newSection = $(this).attr("id");

    if (newSection !== currentSection) {
      currentSection = newSection;
      //console.log(currentSection);
      last.removeClass("active");
      last = $(this);
    }
  });
  var CANVAS_WIDTH = 0;
  var content1 = $("#content1");
  var X_PADDING = $(".setwidth").innerWidth() - $(".setwidth").width();
  function init() {
    CANVAS_WIDTH = content1.width() - X_PADDING; // canvas is in container-fluid, so need to minus the padding
    X_PADDING = $(".setwidth").innerWidth() - $(".setwidth").width();
    //console.log(X_PADDING);
    //console.log(CANVAS_WIDTH);
    //console.log(content1.width());
    $(".setwidth").outerWidth(CANVAS_WIDTH + X_PADDING); // because outerWidth contain the padding
    //$('.container-fluid').outerWidth(CANVAS_WIDTH + X_PADDING);
    //console.log($('#mobile-step').width());
    canvas.width = CANVAS_WIDTH;
    //console.log('resize',canvas.width);

    a = (CANVAS_WIDTH / 12) * 2;
    b = (CANVAS_WIDTH / 12) * 3;
    create(a * 0, a, 0);
    create(a * 1, a, 1);
    create(a * 2, b, 2);
    create(a * 2 + b, b, 3);
    create(a * 2 + 2 * b, a, 4);
  }

  /*mobile slick text slider*/
  /*Hi everyone this my top viewed pen :O 
i have ever created :) hope that this pen help
you a lot in your project testimonial section.
connect with me if u want on facebook :)

fb.com/shabab.sourav
*/

  /*
practice carosal concept using slick slider
for working perfectly add slick.js and slick.css 
file to your project folder
*/

  /*------------------------------------
	Testimonial Slick Carousel as Nav
--------------------------------------*/
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "10px",
    infinite: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          autoplay: true,
          dots: false,
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
  $(".slider-nav").slick("slickNext");
  $(".slider-nav").slick("slickPrev");
  init();
  $(window).resize(function () {
    init();
  });

  var loop = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sections.forEach(function (s, index) {
      if (currentSection == index) {
        bend(s);
      } else {
        reset(s);
      }
      draw(s);
    });
    window.requestAnimationFrame(loop);
  };
  loop(); // End of registration guide
});

// const button = document.getElementById('application');

const button = document.getElementById("application");
button.addEventListener("click", async () => {
  var postData = new FormData(document.getElementById("post-delegate-form"));
  // for (var pair of postData.entries()) {
  //     console.log(pair[0]+ ', ' + pair[1]);
  // }
  // POST
  if (!document.forms["post-delegate-form"].checkValidity()) {
    return;
  }
  var request = new XMLHttpRequest();
  request.open("Post", "https://be.admin.gis-taiwan.ntu.edu.tw/delegate/");
  request.onload = function (event) {
    alert("We have received your application.");
    window.location.href = "index.html";
  };
  request.onerror = function (event) {
    alert("Submit failed, server responded with: " + event.target.response);
  };
  request.send(postData);
});
// button.addEventListener('click', async _ => {
//   try {
//     var data = {
//         terms: document.getElementById('termsAndConditions').value,
//         first_name: document.getElementById('first_name').value,
//         last_name: document.getElementById('last_name').value,
//         date_of_birth: document.getElementById('date_of_birth').value,
//         preferred_name: document.getElementById('preferred_name').value,
//         sex: document.getElementById('sex').options[document.getElementById('sex').selectedIndex].text,
//         preferred_gender_pronoun: document.getElementById('preferred_gender_pronoun').options[document.getElementById('preferred_gender_pronoun').selectedIndex].text,
//         nationality: document.getElementById('nationality').value,
//         education_level: document.getElementById('education_level').options[document.getElementById('education_level').selectedIndex].text,
//         dietary_requirements: document.getElementById('dietary_requirements').options[document.getElementById('dietary_requirements').selectedIndex].text,
//         major: document.getElementById('major').value,
//         email: document.getElementById('email').value,
//         phone_num: document.getElementById('phone_num').value,
//         mailing_address: document.getElementById('mailing_address').value,
//         fb_link: document.getElementById('fb_link').value,
//         ec_name: document.getElementById('ec_name').value,
//         ec_phoneNum: document.getElementById('ec_phoneNum').value,
//         r_plan: document.getElementById('r_plan').options[document.getElementById('r_plan').selectedIndex].text,
//         // TODO get group registration name
//         d_code: document.getElementById('d_code').value,
//         choice_1: document.getElementById('choice_1').value,
//         choice_2: document.getElementById('choice_2').value,
//         choice_3: document.getElementById('choice_3').value,
//         choice_4: document.getElementById('choice_4').value,
//         pd: document.getElementById('panel_discussion').value,
//         essay_files: document.getElementById('essay_file'),
//     }
//     console.log(data)
//     const response = await fetch('http://127.0.0.1:8000/delegate/', {
//       method: 'post',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(data)
//     });
//     console.log('Completed!', response);
//   } catch(err) {
//     console.error(`Error: ${err}`);
//   }
// });

function styleselect() {
  var value = $("#r_plan").val();
  var div = $("#stylediv");
  if (value == "4") {
    div.html("<b>Group Registration for 5</b>");
  }
  if (value == "3") {
    div.html("<b>Group Registration for 3</b>");
  }
  if (value == "2") {
    div.html("");
  }
  if (value == "1") {
    div.html("");
  }
}
