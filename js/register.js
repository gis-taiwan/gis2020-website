/* W3.JS 1.04 April 2019 by w3schools.com */
"use strict";
var w3 = {};
w3.hide = function (sel) {
  w3.hideElements(w3.getElements(sel));
};
w3.hideElements = function (elements) {
  var i,
    l = elements.length;
  for (i = 0; i < l; i++) {
    w3.hideElement(elements[i]);
  }
};
w3.hideElement = function (element) {
  w3.styleElement(element, "display", "none");
};
w3.show = function (sel, a) {
  var elements = w3.getElements(sel);
  if (a) {
    w3.hideElements(elements);
  }
  w3.showElements(elements);
};
w3.showElements = function (elements) {
  var i,
    l = elements.length;
  for (i = 0; i < l; i++) {
    w3.showElement(elements[i]);
  }
};
w3.showElement = function (element) {
  w3.styleElement(element, "display", "block");
};
w3.addStyle = function (sel, prop, val) {
  w3.styleElements(w3.getElements(sel), prop, val);
};
w3.styleElements = function (elements, prop, val) {
  var i,
    l = elements.length;
  for (i = 0; i < l; i++) {
    w3.styleElement(elements[i], prop, val);
  }
};
w3.styleElement = function (element, prop, val) {
  element.style.setProperty(prop, val);
};
w3.toggleShow = function (sel) {
  var i,
    x = w3.getElements(sel),
    l = x.length;
  for (i = 0; i < l; i++) {
    if (x[i].style.display == "none") {
      w3.styleElement(x[i], "display", "block");
    } else {
      w3.styleElement(x[i], "display", "none");
    }
  }
};
w3.addClass = function (sel, name) {
  w3.addClassElements(w3.getElements(sel), name);
};
w3.addClassElements = function (elements, name) {
  var i,
    l = elements.length;
  for (i = 0; i < l; i++) {
    w3.addClassElement(elements[i], name);
  }
};
w3.addClassElement = function (element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
};
w3.removeClass = function (sel, name) {
  w3.removeClassElements(w3.getElements(sel), name);
};
w3.removeClassElements = function (elements, name) {
  var i,
    l = elements.length,
    arr1,
    arr2,
    j;
  for (i = 0; i < l; i++) {
    w3.removeClassElement(elements[i], name);
  }
};
w3.removeClassElement = function (element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
};
w3.toggleClass = function (sel, c1, c2) {
  w3.toggleClassElements(w3.getElements(sel), c1, c2);
};
w3.toggleClassElements = function (elements, c1, c2) {
  var i,
    l = elements.length;
  for (i = 0; i < l; i++) {
    w3.toggleClassElement(elements[i], c1, c2);
  }
};
w3.toggleClassElement = function (element, c1, c2) {
  var t1, t2, t1Arr, t2Arr, j, arr, allPresent;
  t1 = c1 || "";
  t2 = c2 || "";
  t1Arr = t1.split(" ");
  t2Arr = t2.split(" ");
  arr = element.className.split(" ");
  if (t2Arr.length == 0) {
    allPresent = true;
    for (j = 0; j < t1Arr.length; j++) {
      if (arr.indexOf(t1Arr[j]) == -1) {
        allPresent = false;
      }
    }
    if (allPresent) {
      w3.removeClassElement(element, t1);
    } else {
      w3.addClassElement(element, t1);
    }
  } else {
    allPresent = true;
    for (j = 0; j < t1Arr.length; j++) {
      if (arr.indexOf(t1Arr[j]) == -1) {
        allPresent = false;
      }
    }
    if (allPresent) {
      w3.removeClassElement(element, t1);
      w3.addClassElement(element, t2);
    } else {
      w3.removeClassElement(element, t2);
      w3.addClassElement(element, t1);
    }
  }
};
w3.getElements = function (id) {
  if (typeof id == "object") {
    return [id];
  } else {
    return document.querySelectorAll(id);
  }
};
w3.filterHTML = function (id, sel, filter) {
  var a, b, c, i, ii, iii, hit;
  a = w3.getElements(id);
  for (i = 0; i < a.length; i++) {
    b = a[i].querySelectorAll(sel);
    for (ii = 0; ii < b.length; ii++) {
      hit = 0;
      if (b[ii].innerText.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
        hit = 1;
      }
      c = b[ii].getElementsByTagName("*");
      for (iii = 0; iii < c.length; iii++) {
        if (c[iii].innerText.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
          hit = 1;
        }
      }
      if (hit == 1) {
        b[ii].style.display = "";
      } else {
        b[ii].style.display = "none";
      }
    }
  }
};
w3.sortHTML = function (id, sel, sortvalue) {
  var a, b, i, ii, y, bytt, v1, v2, cc, j;
  a = w3.getElements(id);
  for (i = 0; i < a.length; i++) {
    for (j = 0; j < 2; j++) {
      cc = 0;
      y = 1;
      while (y == 1) {
        y = 0;
        b = a[i].querySelectorAll(sel);
        for (ii = 0; ii < b.length - 1; ii++) {
          bytt = 0;
          if (sortvalue) {
            v1 = b[ii].querySelector(sortvalue).innerText;
            v2 = b[ii + 1].querySelector(sortvalue).innerText;
          } else {
            v1 = b[ii].innerText;
            v2 = b[ii + 1].innerText;
          }
          v1 = v1.toLowerCase();
          v2 = v2.toLowerCase();
          if ((j == 0 && v1 > v2) || (j == 1 && v1 < v2)) {
            bytt = 1;
            break;
          }
        }
        if (bytt == 1) {
          b[ii].parentNode.insertBefore(b[ii + 1], b[ii]);
          y = 1;
          cc++;
        }
      }
      if (cc > 0) {
        break;
      }
    }
  }
};
w3.slideshow = function (sel, ms, func) {
  var i,
    ss,
    x = w3.getElements(sel),
    l = x.length;
  ss = {};
  ss.current = 1;
  ss.x = x;
  ss.ondisplaychange = func;
  if (!isNaN(ms) || ms == 0) {
    ss.milliseconds = ms;
  } else {
    ss.milliseconds = 1000;
  }
  ss.start = function () {
    ss.display(ss.current);
    if (ss.ondisplaychange) {
      ss.ondisplaychange();
    }
    if (ss.milliseconds > 0) {
      window.clearTimeout(ss.timeout);
      ss.timeout = window.setTimeout(ss.next, ss.milliseconds);
    }
  };
  ss.next = function () {
    ss.current += 1;
    if (ss.current > ss.x.length) {
      ss.current = 1;
    }
    ss.start();
  };
  ss.previous = function () {
    ss.current -= 1;
    if (ss.current < 1) {
      ss.current = ss.x.length;
    }
    ss.start();
  };
  ss.display = function (n) {
    w3.styleElements(ss.x, "display", "none");
    w3.styleElement(ss.x[n - 1], "display", "block");
  };
  ss.start();
  return ss;
};
w3.includeHTML = function (cb) {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          elmnt.removeAttribute("w3-include-html");
          w3.includeHTML(cb);
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
  if (cb) cb();
};
w3.getHttpData = function (file, func) {
  w3.http(file, function () {
    if (this.readyState == 4 && this.status == 200) {
      func(this.responseText);
    }
  });
};
w3.getHttpObject = function (file, func) {
  w3.http(file, function () {
    if (this.readyState == 4 && this.status == 200) {
      func(JSON.parse(this.responseText));
    }
  });
};
w3.displayHttp = function (id, file) {
  w3.http(file, function () {
    if (this.readyState == 4 && this.status == 200) {
      w3.displayObject(id, JSON.parse(this.responseText));
    }
  });
};
w3.http = function (target, readyfunc, xml, method) {
  var httpObj;
  if (!method) {
    method = "GET";
  }
  if (window.XMLHttpRequest) {
    httpObj = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    httpObj = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (httpObj) {
    if (readyfunc) {
      httpObj.onreadystatechange = readyfunc;
    }
    httpObj.open(method, target, true);
    httpObj.send(xml);
  }
};
w3.getElementsByAttribute = function (x, att) {
  var arr = [],
    arrCount = -1,
    i,
    l,
    y = x.getElementsByTagName("*"),
    z = att.toUpperCase();
  l = y.length;
  for (i = -1; i < l; i += 1) {
    if (i == -1) {
      y[i] = x;
    }
    if (y[i].getAttribute(z) !== null) {
      arrCount += 1;
      arr[arrCount] = y[i];
    }
  }
  return arr;
};
(w3.dataObject = {}),
  (w3.displayObject = function (id, data) {
    var htmlObj,
      htmlTemplate,
      html,
      arr = [],
      a,
      l,
      rowClone,
      x,
      j,
      i,
      ii,
      cc,
      repeat,
      repeatObj,
      repeatX = "";
    htmlObj = document.getElementById(id);
    htmlTemplate = init_template(id, htmlObj);
    html = htmlTemplate.cloneNode(true);
    arr = w3.getElementsByAttribute(html, "w3-repeat");
    l = arr.length;
    for (j = l - 1; j >= 0; j -= 1) {
      cc = arr[j].getAttribute("w3-repeat").split(" ");
      if (cc.length == 1) {
        repeat = cc[0];
      } else {
        repeatX = cc[0];
        repeat = cc[2];
      }
      arr[j].removeAttribute("w3-repeat");
      repeatObj = data[repeat];
      if (
        repeatObj &&
        typeof repeatObj == "object" &&
        repeatObj.length != "undefined"
      ) {
        i = 0;
        for (x in repeatObj) {
          i += 1;
          rowClone = arr[j];
          rowClone = w3_replace_curly(
            rowClone,
            "element",
            repeatX,
            repeatObj[x]
          );
          a = rowClone.attributes;
          for (ii = 0; ii < a.length; ii += 1) {
            a[ii].value = w3_replace_curly(
              a[ii],
              "attribute",
              repeatX,
              repeatObj[x]
            ).value;
          }
          i === repeatObj.length
            ? arr[j].parentNode.replaceChild(rowClone, arr[j])
            : arr[j].parentNode.insertBefore(rowClone, arr[j]);
        }
      } else {
        console.log(
          "w3-repeat must be an array. " + repeat + " is not an array."
        );
        continue;
      }
    }
    html = w3_replace_curly(html, "element");
    htmlObj.parentNode.replaceChild(html, htmlObj);
    function init_template(id, obj) {
      var template;
      template = obj.cloneNode(true);
      if (w3.dataObject.hasOwnProperty(id)) {
        return w3.dataObject[id];
      }
      w3.dataObject[id] = template;
      return template;
    }
    function w3_replace_curly(elmnt, typ, repeatX, x) {
      var value,
        rowClone,
        pos1,
        pos2,
        originalHTML,
        lookFor,
        lookForARR = [],
        i,
        cc,
        r;
      rowClone = elmnt.cloneNode(true);
      pos1 = 0;
      while (pos1 > -1) {
        originalHTML = typ == "attribute" ? rowClone.value : rowClone.innerHTML;
        pos1 = originalHTML.indexOf("{{", pos1);
        if (pos1 === -1) {
          break;
        }
        pos2 = originalHTML.indexOf("}}", pos1 + 1);
        lookFor = originalHTML.substring(pos1 + 2, pos2);
        lookForARR = lookFor.split("||");
        value = undefined;
        for (i = 0; i < lookForARR.length; i += 1) {
          lookForARR[i] = lookForARR[i].replace(/^\s+|\s+$/gm, ""); //trim
          if (x) {
            value = x[lookForARR[i]];
          }
          if (value == undefined && data) {
            value = data[lookForARR[i]];
          }
          if (value == undefined) {
            cc = lookForARR[i].split(".");
            if (cc[0] == repeatX) {
              value = x[cc[1]];
            }
          }
          if (value == undefined) {
            if (lookForARR[i] == repeatX) {
              value = x;
            }
          }
          if (value == undefined) {
            if (lookForARR[i].substr(0, 1) == '"') {
              value = lookForARR[i].replace(/"/g, "");
            } else if (lookForARR[i].substr(0, 1) == "'") {
              value = lookForARR[i].replace(/'/g, "");
            }
          }
          if (value != undefined) {
            break;
          }
        }
        if (value != undefined) {
          r = "{{" + lookFor + "}}";
          if (typ == "attribute") {
            rowClone.value = rowClone.value.replace(r, value);
          } else {
            w3_replace_html(rowClone, r, value);
          }
        }
        pos1 = pos1 + 1;
      }
      return rowClone;
    }
    function w3_replace_html(a, r, result) {
      var b, l, i, a, x, j;
      if (a.hasAttributes()) {
        b = a.attributes;
        l = b.length;
        for (i = 0; i < l; i += 1) {
          if (b[i].value.indexOf(r) > -1) {
            b[i].value = b[i].value.replace(r, result);
          }
        }
      }
      x = a.getElementsByTagName("*");
      l = x.length;
      a.innerHTML = a.innerHTML.replace(r, result);
    }
  });

var showindex = "1";
$(document).ready(function () {
  function show(index) {
    var current = $("#register-list:nth-child(" + index + ")");
    var newtabid = "#tab" + index;
    var oldtabid = "#tab" + showindex;
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
  }

  var parser = document.createElement("a");
  parser.href = location.href;
  var ori = parser.hash;
  if (ori.includes("#tab")) {
    var idx = ori.substr(4);
    if (idx - "1" <= 4 && idx - "1" >= 0) {
      show(idx);
    }
  } else {
    show("1");
  }

  $('input[id^="tab"]').click(function (event) {
    var ori = event.target.id;
    var idx = ori.substr(3);
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
    $(".setwidth").outerWidth(CANVAS_WIDTH + X_PADDING); // because outerWidth contain the padding
    //$('.container-fluid').outerWidth(CANVAS_WIDTH + X_PADDING);
    canvas.width = CANVAS_WIDTH;

    const a = (CANVAS_WIDTH / 12) * 2;
    const b = (CANVAS_WIDTH / 12) * 3;
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

const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

let currentTab = 0;

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n);
}

async function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    let jsonData = { delegate: [] };
    const tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
      let tab = tabs[i];
      const inputs = tab.getElementsByTagName("input");
      let delegate = {};
      for (let j = 0; j < inputs.length; j++) {
        let input = inputs[j];
        if (input.type === "file") {
          //convert base64
          const file = input.files[0];
          const base64 = await convertBase64(file);
          delegate[input.name] = base64;
        } else delegate[input.name] = input.value;
      }
      jsonData.delegate.push(delegate);
    }
    var request = new XMLHttpRequest();
    request.open(
      "Post",
      "https://be.admin.gis-taiwan.ntu.edu.tw/delegate/multi/"
    );
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 201) {
          alert("We have received your application.");
          window.location.href = "index.html";
        } else {
          alert(
            `Something went wrong, please double check your submission or contact us. Received status code ${this.status}, ${this.statusText}`
          );
        }
      }
    };
    request.onerror = function (event) {
      alert(
        `Something went wrong, server responded with: ${event.target.response}`
      );
    };
    jsonData = JSON.stringify(jsonData);
    console.log(jsonData);
    request.send(jsonData);
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    console.log(y[i].type);
    if (
      y[i].hasAttribute("required") &&
      (y[i].value == "" || (y[i].type === "checkbox" && !y[i].checked))
    ) {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      if (valid) {
        y[i].focus();
        valid = false;
      }
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

function formCreate() {
  const value = document.getElementById("r_plan").value;
  // var div = $("#stylediv");
  const formRoot = document.getElementById("form-root");
  switch (value) {
    case "3": {
      // div.html("<b>Group Registration for 3</b>");
      formRoot.replaceChildren(
        /*#__PURE__*/
        React.createElement(
          "form",
          {
            target: "dummyframe",
            id: "post-delegate-form",
            enctype: "multipart/form-data",
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              class: "container",
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                class: "row justify-content-center py-2 mx-5 px-5",
              },
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  class: "col-12 text-center",
                },
                /*#__PURE__*/ React.createElement(
                  "b",
                  null,
                  "The application form below is for three people to fill out at once."
                )
              ),
              /*#__PURE__*/ React.createElement("div", {
                class: "col-4 col-sm-3",
              })
            ),
            React.createElement("br"),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                class: "card mb-5",
                style: "border-radius: 15px;",
              },
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  class: "card-body tab",
                },
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "h5",
                    null,
                    "Terms & Conditions"
                  ),
                  /*#__PURE__*/ React.createElement(
                    "a",
                    {
                      href: "https://docs.google.com/document/d/17o85FQiWOJ4aeLvuTPNMXWcQRQSxdI7al2z3TVOZgq8/edit#",
                      target: "_blank",
                    },
                    "Terms & Conditions"
                  ),
                  /*#__PURE__*/ React.createElement("br", null),
                  /*#__PURE__*/ React.createElement("br", null),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "checkbox",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      /*#__PURE__*/ React.createElement("input", {
                        type: "checkbox",
                        id: "termsAndConditions",
                        name: "term_condition",
                        required: true,
                      }),
                      "I agree to the GIS 2023 Terms and Conditions"
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Applicant 1's Personal Information"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 py-2 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-8",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "row justify-content-start",
                      },
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "col",
                        },
                        /*#__PURE__*/ React.createElement(
                          "label",
                          null,
                          "First name"
                        ),
                        /*#__PURE__*/ React.createElement("input", {
                          type: "text",
                          class: "form-control form-control-md",
                          name: "first_name",
                          id: "first_name",
                          placeholder: "e.g. Po-Chen",
                          value: "",
                          required: true,
                        })
                      ),
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "col",
                        },
                        /*#__PURE__*/ React.createElement(
                          "label",
                          null,
                          "Last name"
                        ),
                        /*#__PURE__*/ React.createElement("input", {
                          type: "text",
                          class: "form-control form-control-md",
                          id: "last_name",
                          name: "last_name",
                          placeholder: "e.g. Yeh",
                          value: "",
                          required: true,
                        })
                      ),
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "small text-muted mt-2 text-center",
                        },
                        "Please make sure the name you fill in match the name on your passport"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Preferred Name"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "preferred_name",
                      name: "prefer_name",
                      placeholder: "e.g. Brandon Yeh",
                      value: "",
                      required: true,
                    }),
                    /*#__PURE__*/ React.createElement(
                      "p",
                      {
                        class: "small text-muted mt-2 text-center",
                      },
                      "Your preferred name will be printed on your name tag"
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 pb-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Date of Birth"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "date",
                      class: "form-control form-control-md",
                      id: "date_of_birth",
                      name: "date_of_birth",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Sex"),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Default select example",
                        id: "sex",
                        name: "sex",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Male",
                        },
                        "Male"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Female",
                        },
                        "Female"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Others",
                        },
                        "Others"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Preferred Gender Pronoun"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Default select example",
                        id: "prefer_gender",
                        name: "prefer_gender",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "He/Him",
                        },
                        "He/Him"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "She/Her",
                        },
                        "She/Her"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "They/Them",
                        },
                        "They/Them"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Others",
                        },
                        "Others"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Nationality"
                    ),
                    /*#__PURE__*/ React.createElement("div", {
                      "w3-include-html": "nationality.html",
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "2nd Nationality"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "nationality2",
                      placeholder: "Optional",
                      name: "nationality_2",
                      value: "",
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "p",
                    {
                      class: "small text-muted mt-2 text-center",
                    },
                    "Please disclose if you have dual citizenship"
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 py-3 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Education Institute"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "school",
                      name: "education_institution",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Education Level"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Education level",
                        id: "education_level",
                        name: "education_level",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "High School",
                        },
                        "High School"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Freshman",
                        },
                        "Freshman"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Sophomore",
                        },
                        "Sophomore"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Junior",
                        },
                        "Junior"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Senior",
                        },
                        "Senior"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Fifth (or more) year of College",
                        },
                        "Fifth (or more) year of College"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Graduate",
                        },
                        "Graduate"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "PhD",
                        },
                        "PhD"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Major"),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "major",
                      name: "major",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row d-flex justify-content-center px-5 py-4",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "row align-items-center",
                      },
                      /*#__PURE__*/ React.createElement(
                        "label",
                        null,
                        "Dietary Requirements"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "select",
                        {
                          class: "form-select",
                          "aria-label": "Default select example",
                          id: "dietary_requirements",
                          name: "dietary_requirement",
                          value: "",
                          required: true,
                        },
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Non-vegetarian",
                          },
                          "Non-vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Vegetarian",
                          },
                          "Vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Ovo-Lacto Vegetarian",
                          },
                          "Ovo-Lacto Vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Vegan",
                          },
                          "Vegan"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Pork-free",
                          },
                          "Pork-free"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Beef-free",
                          },
                          "Beef-free"
                        )
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Contact Information"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Email Address"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "email",
                      class: "form-control form-control-md",
                      id: "email",
                      name: "email",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Phone Number (with Country Code)"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "tel",
                      class: "form-control form-control-md",
                      id: "phone_num",
                      name: "phone_number",
                      placeholder: "e.g. (+886)#########",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Mailing Address"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "mailing_address",
                      placeholder:
                        "e.g. No. 1, Sec. 4, Roosevelt Rd., Taipei 10617, Taiwan (R.O.C.).",
                      name: "mail_address",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Personal Facebook Profile Link"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "url",
                      class: "form-control form-control-md",
                      id: "fb_link",
                      name: "facebook_link",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Emergency Contact"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Name"),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "ec_name",
                      name: "emergency_contact_name",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Phone Number"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "tel",
                      class: "form-control form-control-md",
                      id: "ec_phoneNum",
                      name: "emergency_phone_number",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Relationship"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "ec_relationship",
                      name: "emergency_relation",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Accommodation"
                ),
                /*#__PURE__*/ React.createElement(
                  "p",
                  {
                    class: "text-center",
                  },
                  "GIS Taiwan 2023 is planning on providing accommodation for confirmed delegates. ",
                  /*#__PURE__*/ React.createElement("br", null),
                  " Further information will be provided after the applicants has been confirmed."
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Academic Topic/Impact Project Choice"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-between py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "First Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_1",
                        name: "first_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Second Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_2",
                        name: "second_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-between py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Third Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_3",
                        name: "third_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Fourth Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_4",
                        name: "fourth_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Panel Discussion"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "p",
                    {
                      class: "text-left",
                    },
                    "In Panel discussion, we will invite keynote speakers along with an moderator to discuss on the academic topic from different perspectives. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "This year, we would like to invite one volunteer student panelist to join this session.He/She would have the opportunity to directly converse with the other three panelists and share his/her views on the topic. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "If you are interested in the position, please check the box below. We will have further interview assessment provided after your essay assessment has been approved."
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "row justify-content-center px-3 mx-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "col-lg-5 col-md-4 col-10",
                      },
                      /*#__PURE__*/ React.createElement("img", {
                        src: "img/pd.jpg",
                        class: "img-fluid",
                        alt: "",
                      })
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("br", null),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "label",
                    null,
                    /*#__PURE__*/ React.createElement("input", {
                      type: "checkbox",
                      id: "panel_discussion",
                      name: "panel_discussion",
                    }),
                    "I would like to particpate in the panel discussion as a student representative"
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "h5",
                    {
                      class: "text-center",
                    },
                    "Essay Assignment"
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "row d-flex justify-content-center px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "a",
                      {
                        href: "https://docs.google.com/document/d/19aSNlrdMgv_UyHP6TMTGNnYhFbcBYHnf-TWpkRcteh8/edit?usp=sharing",
                        target: "_blank",
                      },
                      "Essay Questions"
                    ),
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "col-6 px-3",
                      },
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "row align-items-center",
                        },
                        /*#__PURE__*/ React.createElement("input", {
                          class: "mx-10 form-control form-control-md",
                          id: "essay_file",
                          name: "essay_assignment",
                          type: "file",
                          accept: "application/pdf",
                          required: true,
                        }),
                        /*#__PURE__*/ React.createElement(
                          "div",
                          {
                            class: "small text-muted mt-2",
                          },
                          "Upload your essay assignment. Max file size 5 MB"
                        )
                      )
                    )
                  )
                )
              ),
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  class: "card-body tab",
                },
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "h5",
                    null,
                    "Terms & Conditions"
                  ),
                  /*#__PURE__*/ React.createElement(
                    "a",
                    {
                      href: "https://docs.google.com/document/d/17o85FQiWOJ4aeLvuTPNMXWcQRQSxdI7al2z3TVOZgq8/edit#",
                      target: "_blank",
                    },
                    "Terms & Conditions"
                  ),
                  /*#__PURE__*/ React.createElement("br", null),
                  /*#__PURE__*/ React.createElement("br", null),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "checkbox",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      /*#__PURE__*/ React.createElement("input", {
                        type: "checkbox",
                        id: "termsAndConditions",
                        name: "term_condition",
                        required: true,
                      }),
                      "I agree to the GIS 2023 Terms and Conditions"
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Applicant 2's Personal Information"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 py-2 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-8",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "row justify-content-start",
                      },
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "col",
                        },
                        /*#__PURE__*/ React.createElement(
                          "label",
                          null,
                          "First name"
                        ),
                        /*#__PURE__*/ React.createElement("input", {
                          type: "text",
                          class: "form-control form-control-md",
                          name: "first_name",
                          id: "first_name",
                          placeholder: "e.g. Po-Chen",
                          value: "",
                          required: true,
                        })
                      ),
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "col",
                        },
                        /*#__PURE__*/ React.createElement(
                          "label",
                          null,
                          "Last name"
                        ),
                        /*#__PURE__*/ React.createElement("input", {
                          type: "text",
                          class: "form-control form-control-md",
                          id: "last_name",
                          name: "last_name",
                          placeholder: "e.g. Yeh",
                          value: "",
                          required: true,
                        })
                      ),
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "small text-muted mt-2 text-center",
                        },
                        "Please make sure the name you fill in match the name on your passport"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Preferred Name"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "preferred_name",
                      name: "prefer_name",
                      placeholder: "e.g. Brandon Yeh",
                      value: "",
                      required: true,
                    }),
                    /*#__PURE__*/ React.createElement(
                      "p",
                      {
                        class: "small text-muted mt-2 text-center",
                      },
                      "Your preferred name will be printed on your name tag"
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 pb-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Date of Birth"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "date",
                      class: "form-control form-control-md",
                      id: "date_of_birth",
                      name: "date_of_birth",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Sex"),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Default select example",
                        id: "sex",
                        name: "sex",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Male",
                        },
                        "Male"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Female",
                        },
                        "Female"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Others",
                        },
                        "Others"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Preferred Gender Pronoun"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Default select example",
                        id: "prefer_gender",
                        name: "prefer_gender",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "He/Him",
                        },
                        "He/Him"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "She/Her",
                        },
                        "She/Her"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "They/Them",
                        },
                        "They/Them"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Others",
                        },
                        "Others"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Nationality"
                    ),
                    /*#__PURE__*/ React.createElement("div", {
                      "w3-include-html": "nationality.html",
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "2nd Nationality"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "nationality2",
                      placeholder: "Optional",
                      name: "nationality_2",
                      value: "",
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "p",
                    {
                      class: "small text-muted mt-2 text-center",
                    },
                    "Please disclose if you have dual citizenship"
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 py-3 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Education Institute"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "school",
                      name: "education_institution",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Education Level"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Education level",
                        id: "education_level",
                        name: "education_level",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "High School",
                        },
                        "High School"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Freshman",
                        },
                        "Freshman"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Sophomore",
                        },
                        "Sophomore"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Junior",
                        },
                        "Junior"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Senior",
                        },
                        "Senior"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Fifth (or more) year of College",
                        },
                        "Fifth (or more) year of College"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Graduate",
                        },
                        "Graduate"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "PhD",
                        },
                        "PhD"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Major"),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "major",
                      name: "major",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row d-flex justify-content-center px-5 py-4",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "row align-items-center",
                      },
                      /*#__PURE__*/ React.createElement(
                        "label",
                        null,
                        "Dietary Requirements"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "select",
                        {
                          class: "form-select",
                          "aria-label": "Default select example",
                          id: "dietary_requirements",
                          name: "dietary_requirement",
                          value: "",
                          required: true,
                        },
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Non-vegetarian",
                          },
                          "Non-vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Vegetarian",
                          },
                          "Vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Ovo-Lacto Vegetarian",
                          },
                          "Ovo-Lacto Vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Vegan",
                          },
                          "Vegan"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Pork-free",
                          },
                          "Pork-free"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Beef-free",
                          },
                          "Beef-free"
                        )
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Contact Information"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Email Address"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "email",
                      class: "form-control form-control-md",
                      id: "email",
                      name: "email",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Phone Number (with Country Code)"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "tel",
                      class: "form-control form-control-md",
                      id: "phone_num",
                      name: "phone_number",
                      placeholder: "e.g. (+886)#########",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Mailing Address"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "mailing_address",
                      placeholder:
                        "e.g. No. 1, Sec. 4, Roosevelt Rd., Taipei 10617, Taiwan (R.O.C.).",
                      name: "mail_address",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Personal Facebook Profile Link"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "url",
                      class: "form-control form-control-md",
                      id: "fb_link",
                      name: "facebook_link",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Emergency Contact"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Name"),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "ec_name",
                      name: "emergency_contact_name",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Phone Number"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "tel",
                      class: "form-control form-control-md",
                      id: "ec_phoneNum",
                      name: "emergency_phone_number",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Relationship"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "ec_relationship",
                      name: "emergency_relation",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Accommodation"
                ),
                /*#__PURE__*/ React.createElement(
                  "p",
                  {
                    class: "text-center",
                  },
                  "GIS Taiwan 2023 is planning on providing accommodation for confirmed delegates. ",
                  /*#__PURE__*/ React.createElement("br", null),
                  " Further information will be provided after the applicants has been confirmed."
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Academic Topic/Impact Project Choice"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-between py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "First Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_1",
                        name: "first_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Second Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_2",
                        name: "second_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-between py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Third Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_3",
                        name: "third_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Fourth Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_4",
                        name: "fourth_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Panel Discussion"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "p",
                    {
                      class: "text-left",
                    },
                    "In Panel discussion, we will invite keynote speakers along with an moderator to discuss on the academic topic from different perspectives. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "This year, we would like to invite one volunteer student panelist to join this session.He/She would have the opportunity to directly converse with the other three panelists and share his/her views on the topic. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "If you are interested in the position, please check the box below. We will have further interview assessment provided after your essay assessment has been approved."
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "row justify-content-center px-3 mx-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "col-lg-5 col-md-4 col-10",
                      },
                      /*#__PURE__*/ React.createElement("img", {
                        src: "img/pd.jpg",
                        class: "img-fluid",
                        alt: "",
                      })
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("br", null),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "label",
                    null,
                    /*#__PURE__*/ React.createElement("input", {
                      type: "checkbox",
                      id: "panel_discussion",
                      name: "panel_discussion",
                    }),
                    "I would like to particpate in the panel discussion as a student representative"
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "h5",
                    {
                      class: "text-center",
                    },
                    "Essay Assignment"
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "row d-flex justify-content-center px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "a",
                      {
                        href: "https://docs.google.com/document/d/19aSNlrdMgv_UyHP6TMTGNnYhFbcBYHnf-TWpkRcteh8/edit?usp=sharing",
                        target: "_blank",
                      },
                      "Essay Questions"
                    ),
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "col-6 px-3",
                      },
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "row align-items-center",
                        },
                        /*#__PURE__*/ React.createElement("input", {
                          class: "mx-10 form-control form-control-md",
                          id: "essay_file",
                          name: "essay_assignment",
                          type: "file",
                          accept: "application/pdf",
                          required: true,
                        }),
                        /*#__PURE__*/ React.createElement(
                          "div",
                          {
                            class: "small text-muted mt-2",
                          },
                          "Upload your essay assignment. Max file size 5 MB"
                        )
                      )
                    )
                  )
                )
              ),
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  class: "card-body tab",
                },
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "h5",
                    null,
                    "Terms & Conditions"
                  ),
                  /*#__PURE__*/ React.createElement(
                    "a",
                    {
                      href: "https://docs.google.com/document/d/17o85FQiWOJ4aeLvuTPNMXWcQRQSxdI7al2z3TVOZgq8/edit#",
                      target: "_blank",
                    },
                    "Terms & Conditions"
                  ),
                  /*#__PURE__*/ React.createElement("br", null),
                  /*#__PURE__*/ React.createElement("br", null),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "checkbox",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      /*#__PURE__*/ React.createElement("input", {
                        type: "checkbox",
                        id: "termsAndConditions",
                        name: "term_condition",
                        required: true,
                      }),
                      "I agree to the GIS 2023 Terms and Conditions"
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Applicant 3's Personal Information"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 py-2 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-8",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "row justify-content-start",
                      },
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "col",
                        },
                        /*#__PURE__*/ React.createElement(
                          "label",
                          null,
                          "First name"
                        ),
                        /*#__PURE__*/ React.createElement("input", {
                          type: "text",
                          class: "form-control form-control-md",
                          name: "first_name",
                          id: "first_name",
                          placeholder: "e.g. Po-Chen",
                          value: "",
                          required: true,
                        })
                      ),
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "col",
                        },
                        /*#__PURE__*/ React.createElement(
                          "label",
                          null,
                          "Last name"
                        ),
                        /*#__PURE__*/ React.createElement("input", {
                          type: "text",
                          class: "form-control form-control-md",
                          id: "last_name",
                          name: "last_name",
                          placeholder: "e.g. Yeh",
                          value: "",
                          required: true,
                        })
                      ),
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "small text-muted mt-2 text-center",
                        },
                        "Please make sure the name you fill in match the name on your passport"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Preferred Name"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "preferred_name",
                      name: "prefer_name",
                      placeholder: "e.g. Brandon Yeh",
                      value: "",
                      required: true,
                    }),
                    /*#__PURE__*/ React.createElement(
                      "p",
                      {
                        class: "small text-muted mt-2 text-center",
                      },
                      "Your preferred name will be printed on your name tag"
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 pb-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Date of Birth"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "date",
                      class: "form-control form-control-md",
                      id: "date_of_birth",
                      name: "date_of_birth",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Sex"),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Default select example",
                        id: "sex",
                        name: "sex",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Male",
                        },
                        "Male"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Female",
                        },
                        "Female"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Others",
                        },
                        "Others"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Preferred Gender Pronoun"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Default select example",
                        id: "prefer_gender",
                        name: "prefer_gender",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "He/Him",
                        },
                        "He/Him"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "She/Her",
                        },
                        "She/Her"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "They/Them",
                        },
                        "They/Them"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Others",
                        },
                        "Others"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Nationality"
                    ),
                    /*#__PURE__*/ React.createElement("div", {
                      "w3-include-html": "nationality.html",
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "2nd Nationality"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "nationality2",
                      placeholder: "Optional",
                      name: "nationality_2",
                      value: "",
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "p",
                    {
                      class: "small text-muted mt-2 text-center",
                    },
                    "Please disclose if you have dual citizenship"
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 py-3 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Education Institute"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "school",
                      name: "education_institution",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Education Level"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Education level",
                        id: "education_level",
                        name: "education_level",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "High School",
                        },
                        "High School"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Freshman",
                        },
                        "Freshman"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Sophomore",
                        },
                        "Sophomore"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Junior",
                        },
                        "Junior"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Senior",
                        },
                        "Senior"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Fifth (or more) year of College",
                        },
                        "Fifth (or more) year of College"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Graduate",
                        },
                        "Graduate"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "PhD",
                        },
                        "PhD"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Major"),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "major",
                      name: "major",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row d-flex justify-content-center px-5 py-4",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "row align-items-center",
                      },
                      /*#__PURE__*/ React.createElement(
                        "label",
                        null,
                        "Dietary Requirements"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "select",
                        {
                          class: "form-select",
                          "aria-label": "Default select example",
                          id: "dietary_requirements",
                          name: "dietary_requirement",
                          value: "",
                          required: true,
                        },
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Non-vegetarian",
                          },
                          "Non-vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Vegetarian",
                          },
                          "Vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Ovo-Lacto Vegetarian",
                          },
                          "Ovo-Lacto Vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Vegan",
                          },
                          "Vegan"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Pork-free",
                          },
                          "Pork-free"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Beef-free",
                          },
                          "Beef-free"
                        )
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Contact Information"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Email Address"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "email",
                      class: "form-control form-control-md",
                      id: "email",
                      name: "email",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Phone Number (with Country Code)"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "tel",
                      class: "form-control form-control-md",
                      id: "phone_num",
                      name: "phone_number",
                      placeholder: "e.g. (+886)#########",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Mailing Address"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "mailing_address",
                      placeholder:
                        "e.g. No. 1, Sec. 4, Roosevelt Rd., Taipei 10617, Taiwan (R.O.C.).",
                      name: "mail_address",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Personal Facebook Profile Link"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "url",
                      class: "form-control form-control-md",
                      id: "fb_link",
                      name: "facebook_link",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Emergency Contact"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Name"),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "ec_name",
                      name: "emergency_contact_name",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Phone Number"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "tel",
                      class: "form-control form-control-md",
                      id: "ec_phoneNum",
                      name: "emergency_phone_number",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Relationship"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "ec_relationship",
                      name: "emergency_relation",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Accommodation"
                ),
                /*#__PURE__*/ React.createElement(
                  "p",
                  {
                    class: "text-center",
                  },
                  "GIS Taiwan 2023 is planning on providing accommodation for confirmed delegates. ",
                  /*#__PURE__*/ React.createElement("br", null),
                  " Further information will be provided after the applicants has been confirmed."
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Academic Topic/Impact Project Choice"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-between py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "First Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_1",
                        name: "first_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Second Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_2",
                        name: "second_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-between py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Third Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_3",
                        name: "third_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Fourth Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_4",
                        name: "fourth_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Panel Discussion"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "p",
                    {
                      class: "text-left",
                    },
                    "In Panel discussion, we will invite keynote speakers along with an moderator to discuss on the academic topic from different perspectives. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "This year, we would like to invite one volunteer student panelist to join this session.He/She would have the opportunity to directly converse with the other three panelists and share his/her views on the topic. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "If you are interested in the position, please check the box below. We will have further interview assessment provided after your essay assessment has been approved."
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "row justify-content-center px-3 mx-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "col-lg-5 col-md-4 col-10",
                      },
                      /*#__PURE__*/ React.createElement("img", {
                        src: "img/pd.jpg",
                        class: "img-fluid",
                        alt: "",
                      })
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("br", null),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "label",
                    null,
                    /*#__PURE__*/ React.createElement("input", {
                      type: "checkbox",
                      id: "panel_discussion",
                      name: "panel_discussion",
                    }),
                    "I would like to particpate in the panel discussion as a student representative"
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "h5",
                    {
                      class: "text-center",
                    },
                    "Essay Assignment"
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "row d-flex justify-content-center px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "a",
                      {
                        href: "https://docs.google.com/document/d/19aSNlrdMgv_UyHP6TMTGNnYhFbcBYHnf-TWpkRcteh8/edit?usp=sharing",
                        target: "_blank",
                      },
                      "Essay Questions"
                    ),
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "col-6 px-3",
                      },
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "row align-items-center",
                        },
                        /*#__PURE__*/ React.createElement("input", {
                          class: "mx-10 form-control form-control-md",
                          id: "essay_file",
                          name: "essay_assignment",
                          type: "file",
                          accept: "application/pdf",
                          required: true,
                        }),
                        /*#__PURE__*/ React.createElement(
                          "div",
                          {
                            class: "small text-muted mt-2",
                          },
                          "Upload your essay assignment. Max file size 5 MB"
                        )
                      )
                    )
                  )
                )
              ),
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  class: "text-center px-5 py-4",
                  style: "overflow:auto;",
                },
                /*#__PURE__*/ React.createElement(
                  "button",
                  {
                    class: "btn btn-secondary btn-lg",
                    type: "button",
                    id: "prevBtn",
                    onclick: "nextPrev(-1)",
                  },
                  "Previous"
                ),
                /*#__PURE__*/ React.createElement(
                  "button",
                  {
                    class: "btn btn-primary btn-lg",
                    type: "button",
                    id: "nextBtn",
                    onclick: "nextPrev(1)",
                  },
                  "Next"
                )
              ),
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style:
                    "text-align:center;margin-top:20px;margin-bottom:40px;",
                },
                /*#__PURE__*/ React.createElement("span", {
                  class: "step",
                }),
                /*#__PURE__*/ React.createElement("span", {
                  class: "step",
                }),
                /*#__PURE__*/ React.createElement("span", {
                  class: "step",
                })
              )
            )
          ),
          /*#__PURE__*/ React.createElement("hr", {
            class: "mx-n3",
          })
        )
      );
      w3.includeHTML();
      currentTab = 0; // Current tab is set to be the first tab (0)
      showTab(currentTab); // Display the current tab
      break;
    }
    case "5": {
      // div.html("<b>Group Registration for 5</b>");
      formRoot.replaceChildren(
        /*#__PURE__*/
        React.createElement(
          "form",
          {
            target: "dummyframe",
            id: "post-delegate-form",
            enctype: "multipart/form-data",
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              class: "container",
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                class: "row justify-content-center py-2 mx-5 px-5",
              },
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  class: "col-12 text-center",
                },
                /*#__PURE__*/ React.createElement(
                  "b",
                  null,
                  "The application form below is for five people to fill out at once."
                )
              ),
              /*#__PURE__*/ React.createElement("div", {
                class: "col-4 col-sm-3",
              })
            ),
            React.createElement("br"),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                class: "card mb-5",
                style: "border-radius: 15px;",
              },
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  class: "card-body tab",
                },
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "h5",
                    null,
                    "Terms & Conditions"
                  ),
                  /*#__PURE__*/ React.createElement(
                    "a",
                    {
                      href: "https://docs.google.com/document/d/17o85FQiWOJ4aeLvuTPNMXWcQRQSxdI7al2z3TVOZgq8/edit#",
                      target: "_blank",
                    },
                    "Terms & Conditions"
                  ),
                  /*#__PURE__*/ React.createElement("br", null),
                  /*#__PURE__*/ React.createElement("br", null),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "checkbox",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      /*#__PURE__*/ React.createElement("input", {
                        type: "checkbox",
                        id: "termsAndConditions",
                        name: "term_condition",
                        required: true,
                      }),
                      "I agree to the GIS 2023 Terms and Conditions"
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Applicant 1's Personal Information"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 py-2 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-8",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "row justify-content-start",
                      },
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "col",
                        },
                        /*#__PURE__*/ React.createElement(
                          "label",
                          null,
                          "First name"
                        ),
                        /*#__PURE__*/ React.createElement("input", {
                          type: "text",
                          class: "form-control form-control-md",
                          name: "first_name",
                          id: "first_name",
                          placeholder: "e.g. Po-Chen",
                          value: "",
                          required: true,
                        })
                      ),
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "col",
                        },
                        /*#__PURE__*/ React.createElement(
                          "label",
                          null,
                          "Last name"
                        ),
                        /*#__PURE__*/ React.createElement("input", {
                          type: "text",
                          class: "form-control form-control-md",
                          id: "last_name",
                          name: "last_name",
                          placeholder: "e.g. Yeh",
                          value: "",
                          required: true,
                        })
                      ),
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "small text-muted mt-2 text-center",
                        },
                        "Please make sure the name you fill in match the name on your passport"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Preferred Name"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "preferred_name",
                      name: "prefer_name",
                      placeholder: "e.g. Brandon Yeh",
                      value: "",
                      required: true,
                    }),
                    /*#__PURE__*/ React.createElement(
                      "p",
                      {
                        class: "small text-muted mt-2 text-center",
                      },
                      "Your preferred name will be printed on your name tag"
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 pb-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Date of Birth"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "date",
                      class: "form-control form-control-md",
                      id: "date_of_birth",
                      name: "date_of_birth",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Sex"),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Default select example",
                        id: "sex",
                        name: "sex",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Male",
                        },
                        "Male"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Female",
                        },
                        "Female"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Others",
                        },
                        "Others"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Preferred Gender Pronoun"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Default select example",
                        id: "prefer_gender",
                        name: "prefer_gender",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "He/Him",
                        },
                        "He/Him"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "She/Her",
                        },
                        "She/Her"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "They/Them",
                        },
                        "They/Them"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Others",
                        },
                        "Others"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Nationality"
                    ),
                    /*#__PURE__*/ React.createElement("div", {
                      "w3-include-html": "nationality.html",
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "2nd Nationality"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "nationality2",
                      placeholder: "Optional",
                      name: "nationality_2",
                      value: "",
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "p",
                    {
                      class: "small text-muted mt-2 text-center",
                    },
                    "Please disclose if you have dual citizenship"
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 py-3 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Education Institute"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "school",
                      name: "education_institution",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Education Level"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Education level",
                        id: "education_level",
                        name: "education_level",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "High School",
                        },
                        "High School"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Freshman",
                        },
                        "Freshman"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Sophomore",
                        },
                        "Sophomore"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Junior",
                        },
                        "Junior"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Senior",
                        },
                        "Senior"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Fifth (or more) year of College",
                        },
                        "Fifth (or more) year of College"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Graduate",
                        },
                        "Graduate"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "PhD",
                        },
                        "PhD"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Major"),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "major",
                      name: "major",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row d-flex justify-content-center px-5 py-4",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "row align-items-center",
                      },
                      /*#__PURE__*/ React.createElement(
                        "label",
                        null,
                        "Dietary Requirements"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "select",
                        {
                          class: "form-select",
                          "aria-label": "Default select example",
                          id: "dietary_requirements",
                          name: "dietary_requirement",
                          value: "",
                          required: true,
                        },
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Non-vegetarian",
                          },
                          "Non-vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Vegetarian",
                          },
                          "Vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Ovo-Lacto Vegetarian",
                          },
                          "Ovo-Lacto Vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Vegan",
                          },
                          "Vegan"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Pork-free",
                          },
                          "Pork-free"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Beef-free",
                          },
                          "Beef-free"
                        )
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Contact Information"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Email Address"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "email",
                      class: "form-control form-control-md",
                      id: "email",
                      name: "email",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Phone Number (with Country Code)"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "tel",
                      class: "form-control form-control-md",
                      id: "phone_num",
                      name: "phone_number",
                      placeholder: "e.g. (+886)#########",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Mailing Address"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "mailing_address",
                      placeholder:
                        "e.g. No. 1, Sec. 4, Roosevelt Rd., Taipei 10617, Taiwan (R.O.C.).",
                      name: "mail_address",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Personal Facebook Profile Link"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "url",
                      class: "form-control form-control-md",
                      id: "fb_link",
                      name: "facebook_link",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Emergency Contact"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Name"),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "ec_name",
                      name: "emergency_contact_name",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Phone Number"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "tel",
                      class: "form-control form-control-md",
                      id: "ec_phoneNum",
                      name: "emergency_phone_number",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Relationship"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "ec_relationship",
                      name: "emergency_relation",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Accommodation"
                ),
                /*#__PURE__*/ React.createElement(
                  "p",
                  {
                    class: "text-center",
                  },
                  "GIS Taiwan 2023 is planning on providing accommodation for confirmed delegates. ",
                  /*#__PURE__*/ React.createElement("br", null),
                  " Further information will be provided after the applicants has been confirmed."
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Academic Topic/Impact Project Choice"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-between py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "First Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_1",
                        name: "first_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Second Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_2",
                        name: "second_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-between py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Third Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_3",
                        name: "third_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Fourth Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_4",
                        name: "fourth_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Panel Discussion"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "p",
                    {
                      class: "text-left",
                    },
                    "In Panel discussion, we will invite keynote speakers along with an moderator to discuss on the academic topic from different perspectives. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "This year, we would like to invite one volunteer student panelist to join this session.He/She would have the opportunity to directly converse with the other three panelists and share his/her views on the topic. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "If you are interested in the position, please check the box below. We will have further interview assessment provided after your essay assessment has been approved."
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "row justify-content-center px-3 mx-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "col-lg-5 col-md-4 col-10",
                      },
                      /*#__PURE__*/ React.createElement("img", {
                        src: "img/pd.jpg",
                        class: "img-fluid",
                        alt: "",
                      })
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("br", null),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "label",
                    null,
                    /*#__PURE__*/ React.createElement("input", {
                      type: "checkbox",
                      id: "panel_discussion",
                      name: "panel_discussion",
                    }),
                    "I would like to particpate in the panel discussion as a student representative"
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "h5",
                    {
                      class: "text-center",
                    },
                    "Essay Assignment"
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "row d-flex justify-content-center px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "a",
                      {
                        href: "https://docs.google.com/document/d/19aSNlrdMgv_UyHP6TMTGNnYhFbcBYHnf-TWpkRcteh8/edit?usp=sharing",
                        target: "_blank",
                      },
                      "Essay Questions"
                    ),
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "col-6 px-3",
                      },
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "row align-items-center",
                        },
                        /*#__PURE__*/ React.createElement("input", {
                          class: "mx-10 form-control form-control-md",
                          id: "essay_file",
                          name: "essay_assignment",
                          type: "file",
                          accept: "application/pdf",
                          required: true,
                        }),
                        /*#__PURE__*/ React.createElement(
                          "div",
                          {
                            class: "small text-muted mt-2",
                          },
                          "Upload your essay assignment. Max file size 5 MB"
                        )
                      )
                    )
                  )
                )
              ),
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  class: "card-body tab",
                },
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "h5",
                    null,
                    "Terms & Conditions"
                  ),
                  /*#__PURE__*/ React.createElement(
                    "a",
                    {
                      href: "https://docs.google.com/document/d/17o85FQiWOJ4aeLvuTPNMXWcQRQSxdI7al2z3TVOZgq8/edit#",
                      target: "_blank",
                    },
                    "Terms & Conditions"
                  ),
                  /*#__PURE__*/ React.createElement("br", null),
                  /*#__PURE__*/ React.createElement("br", null),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "checkbox",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      /*#__PURE__*/ React.createElement("input", {
                        type: "checkbox",
                        id: "termsAndConditions",
                        name: "term_condition",
                        required: true,
                      }),
                      "I agree to the GIS 2023 Terms and Conditions"
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Applicant 2's Personal Information"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 py-2 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-8",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "row justify-content-start",
                      },
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "col",
                        },
                        /*#__PURE__*/ React.createElement(
                          "label",
                          null,
                          "First name"
                        ),
                        /*#__PURE__*/ React.createElement("input", {
                          type: "text",
                          class: "form-control form-control-md",
                          name: "first_name",
                          id: "first_name",
                          placeholder: "e.g. Po-Chen",
                          value: "",
                          required: true,
                        })
                      ),
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "col",
                        },
                        /*#__PURE__*/ React.createElement(
                          "label",
                          null,
                          "Last name"
                        ),
                        /*#__PURE__*/ React.createElement("input", {
                          type: "text",
                          class: "form-control form-control-md",
                          id: "last_name",
                          name: "last_name",
                          placeholder: "e.g. Yeh",
                          value: "",
                          required: true,
                        })
                      ),
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "small text-muted mt-2 text-center",
                        },
                        "Please make sure the name you fill in match the name on your passport"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Preferred Name"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "preferred_name",
                      name: "prefer_name",
                      placeholder: "e.g. Brandon Yeh",
                      value: "",
                      required: true,
                    }),
                    /*#__PURE__*/ React.createElement(
                      "p",
                      {
                        class: "small text-muted mt-2 text-center",
                      },
                      "Your preferred name will be printed on your name tag"
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 pb-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Date of Birth"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "date",
                      class: "form-control form-control-md",
                      id: "date_of_birth",
                      name: "date_of_birth",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Sex"),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Default select example",
                        id: "sex",
                        name: "sex",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Male",
                        },
                        "Male"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Female",
                        },
                        "Female"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Others",
                        },
                        "Others"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Preferred Gender Pronoun"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Default select example",
                        id: "prefer_gender",
                        name: "prefer_gender",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "He/Him",
                        },
                        "He/Him"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "She/Her",
                        },
                        "She/Her"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "They/Them",
                        },
                        "They/Them"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Others",
                        },
                        "Others"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Nationality"
                    ),
                    /*#__PURE__*/ React.createElement("div", {
                      "w3-include-html": "nationality.html",
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "2nd Nationality"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "nationality2",
                      placeholder: "Optional",
                      name: "nationality_2",
                      value: "",
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "p",
                    {
                      class: "small text-muted mt-2 text-center",
                    },
                    "Please disclose if you have dual citizenship"
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 py-3 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Education Institute"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "school",
                      name: "education_institution",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Education Level"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Education level",
                        id: "education_level",
                        name: "education_level",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "High School",
                        },
                        "High School"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Freshman",
                        },
                        "Freshman"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Sophomore",
                        },
                        "Sophomore"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Junior",
                        },
                        "Junior"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Senior",
                        },
                        "Senior"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Fifth (or more) year of College",
                        },
                        "Fifth (or more) year of College"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Graduate",
                        },
                        "Graduate"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "PhD",
                        },
                        "PhD"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Major"),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "major",
                      name: "major",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row d-flex justify-content-center px-5 py-4",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "row align-items-center",
                      },
                      /*#__PURE__*/ React.createElement(
                        "label",
                        null,
                        "Dietary Requirements"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "select",
                        {
                          class: "form-select",
                          "aria-label": "Default select example",
                          id: "dietary_requirements",
                          name: "dietary_requirement",
                          value: "",
                          required: true,
                        },
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Non-vegetarian",
                          },
                          "Non-vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Vegetarian",
                          },
                          "Vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Ovo-Lacto Vegetarian",
                          },
                          "Ovo-Lacto Vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Vegan",
                          },
                          "Vegan"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Pork-free",
                          },
                          "Pork-free"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Beef-free",
                          },
                          "Beef-free"
                        )
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Contact Information"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Email Address"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "email",
                      class: "form-control form-control-md",
                      id: "email",
                      name: "email",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Phone Number (with Country Code)"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "tel",
                      class: "form-control form-control-md",
                      id: "phone_num",
                      name: "phone_number",
                      placeholder: "e.g. (+886)#########",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Mailing Address"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "mailing_address",
                      placeholder:
                        "e.g. No. 1, Sec. 4, Roosevelt Rd., Taipei 10617, Taiwan (R.O.C.).",
                      name: "mail_address",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Personal Facebook Profile Link"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "url",
                      class: "form-control form-control-md",
                      id: "fb_link",
                      name: "facebook_link",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Emergency Contact"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Name"),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "ec_name",
                      name: "emergency_contact_name",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Phone Number"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "tel",
                      class: "form-control form-control-md",
                      id: "ec_phoneNum",
                      name: "emergency_phone_number",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Relationship"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "ec_relationship",
                      name: "emergency_relation",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Accommodation"
                ),
                /*#__PURE__*/ React.createElement(
                  "p",
                  {
                    class: "text-center",
                  },
                  "GIS Taiwan 2023 is planning on providing accommodation for confirmed delegates. ",
                  /*#__PURE__*/ React.createElement("br", null),
                  " Further information will be provided after the applicants has been confirmed."
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Academic Topic/Impact Project Choice"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-between py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "First Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_1",
                        name: "first_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Second Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_2",
                        name: "second_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-between py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Third Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_3",
                        name: "third_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Fourth Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_4",
                        name: "fourth_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Panel Discussion"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "p",
                    {
                      class: "text-left",
                    },
                    "In Panel discussion, we will invite keynote speakers along with an moderator to discuss on the academic topic from different perspectives. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "This year, we would like to invite one volunteer student panelist to join this session.He/She would have the opportunity to directly converse with the other three panelists and share his/her views on the topic. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "If you are interested in the position, please check the box below. We will have further interview assessment provided after your essay assessment has been approved."
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "row justify-content-center px-3 mx-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "col-lg-5 col-md-4 col-10",
                      },
                      /*#__PURE__*/ React.createElement("img", {
                        src: "img/pd.jpg",
                        class: "img-fluid",
                        alt: "",
                      })
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("br", null),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "label",
                    null,
                    /*#__PURE__*/ React.createElement("input", {
                      type: "checkbox",
                      id: "panel_discussion",
                      name: "panel_discussion",
                    }),
                    "I would like to particpate in the panel discussion as a student representative"
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "h5",
                    {
                      class: "text-center",
                    },
                    "Essay Assignment"
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "row d-flex justify-content-center px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "a",
                      {
                        href: "https://docs.google.com/document/d/19aSNlrdMgv_UyHP6TMTGNnYhFbcBYHnf-TWpkRcteh8/edit?usp=sharing",
                        target: "_blank",
                      },
                      "Essay Questions"
                    ),
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "col-6 px-3",
                      },
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "row align-items-center",
                        },
                        /*#__PURE__*/ React.createElement("input", {
                          class: "mx-10 form-control form-control-md",
                          id: "essay_file",
                          name: "essay_assignment",
                          type: "file",
                          accept: "application/pdf",
                          required: true,
                        }),
                        /*#__PURE__*/ React.createElement(
                          "div",
                          {
                            class: "small text-muted mt-2",
                          },
                          "Upload your essay assignment. Max file size 5 MB"
                        )
                      )
                    )
                  )
                )
              ),
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  class: "card-body tab",
                },
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "h5",
                    null,
                    "Terms & Conditions"
                  ),
                  /*#__PURE__*/ React.createElement(
                    "a",
                    {
                      href: "https://docs.google.com/document/d/17o85FQiWOJ4aeLvuTPNMXWcQRQSxdI7al2z3TVOZgq8/edit#",
                      target: "_blank",
                    },
                    "Terms & Conditions"
                  ),
                  /*#__PURE__*/ React.createElement("br", null),
                  /*#__PURE__*/ React.createElement("br", null),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "checkbox",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      /*#__PURE__*/ React.createElement("input", {
                        type: "checkbox",
                        id: "termsAndConditions",
                        name: "term_condition",
                        required: true,
                      }),
                      "I agree to the GIS 2023 Terms and Conditions"
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Applicant 3's Personal Information"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 py-2 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-8",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "row justify-content-start",
                      },
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "col",
                        },
                        /*#__PURE__*/ React.createElement(
                          "label",
                          null,
                          "First name"
                        ),
                        /*#__PURE__*/ React.createElement("input", {
                          type: "text",
                          class: "form-control form-control-md",
                          name: "first_name",
                          id: "first_name",
                          placeholder: "e.g. Po-Chen",
                          value: "",
                          required: true,
                        })
                      ),
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "col",
                        },
                        /*#__PURE__*/ React.createElement(
                          "label",
                          null,
                          "Last name"
                        ),
                        /*#__PURE__*/ React.createElement("input", {
                          type: "text",
                          class: "form-control form-control-md",
                          id: "last_name",
                          name: "last_name",
                          placeholder: "e.g. Yeh",
                          value: "",
                          required: true,
                        })
                      ),
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "small text-muted mt-2 text-center",
                        },
                        "Please make sure the name you fill in match the name on your passport"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Preferred Name"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "preferred_name",
                      name: "prefer_name",
                      placeholder: "e.g. Brandon Yeh",
                      value: "",
                      required: true,
                    }),
                    /*#__PURE__*/ React.createElement(
                      "p",
                      {
                        class: "small text-muted mt-2 text-center",
                      },
                      "Your preferred name will be printed on your name tag"
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 pb-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Date of Birth"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "date",
                      class: "form-control form-control-md",
                      id: "date_of_birth",
                      name: "date_of_birth",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Sex"),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Default select example",
                        id: "sex",
                        name: "sex",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Male",
                        },
                        "Male"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Female",
                        },
                        "Female"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Others",
                        },
                        "Others"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Preferred Gender Pronoun"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Default select example",
                        id: "prefer_gender",
                        name: "prefer_gender",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "He/Him",
                        },
                        "He/Him"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "She/Her",
                        },
                        "She/Her"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "They/Them",
                        },
                        "They/Them"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Others",
                        },
                        "Others"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Nationality"
                    ),
                    /*#__PURE__*/ React.createElement("div", {
                      "w3-include-html": "nationality.html",
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "2nd Nationality"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "nationality2",
                      placeholder: "Optional",
                      name: "nationality_2",
                      value: "",
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "p",
                    {
                      class: "small text-muted mt-2 text-center",
                    },
                    "Please disclose if you have dual citizenship"
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 py-3 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Education Institute"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "school",
                      name: "education_institution",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Education Level"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Education level",
                        id: "education_level",
                        name: "education_level",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "High School",
                        },
                        "High School"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Freshman",
                        },
                        "Freshman"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Sophomore",
                        },
                        "Sophomore"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Junior",
                        },
                        "Junior"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Senior",
                        },
                        "Senior"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Fifth (or more) year of College",
                        },
                        "Fifth (or more) year of College"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Graduate",
                        },
                        "Graduate"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "PhD",
                        },
                        "PhD"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Major"),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "major",
                      name: "major",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row d-flex justify-content-center px-5 py-4",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "row align-items-center",
                      },
                      /*#__PURE__*/ React.createElement(
                        "label",
                        null,
                        "Dietary Requirements"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "select",
                        {
                          class: "form-select",
                          "aria-label": "Default select example",
                          id: "dietary_requirements",
                          name: "dietary_requirement",
                          value: "",
                          required: true,
                        },
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Non-vegetarian",
                          },
                          "Non-vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Vegetarian",
                          },
                          "Vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Ovo-Lacto Vegetarian",
                          },
                          "Ovo-Lacto Vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Vegan",
                          },
                          "Vegan"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Pork-free",
                          },
                          "Pork-free"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Beef-free",
                          },
                          "Beef-free"
                        )
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Contact Information"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Email Address"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "email",
                      class: "form-control form-control-md",
                      id: "email",
                      name: "email",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Phone Number (with Country Code)"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "tel",
                      class: "form-control form-control-md",
                      id: "phone_num",
                      name: "phone_number",
                      placeholder: "e.g. (+886)#########",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Mailing Address"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "mailing_address",
                      placeholder:
                        "e.g. No. 1, Sec. 4, Roosevelt Rd., Taipei 10617, Taiwan (R.O.C.).",
                      name: "mail_address",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Personal Facebook Profile Link"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "url",
                      class: "form-control form-control-md",
                      id: "fb_link",
                      name: "facebook_link",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Emergency Contact"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Name"),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "ec_name",
                      name: "emergency_contact_name",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Phone Number"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "tel",
                      class: "form-control form-control-md",
                      id: "ec_phoneNum",
                      name: "emergency_phone_number",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Relationship"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "ec_relationship",
                      name: "emergency_relation",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Accommodation"
                ),
                /*#__PURE__*/ React.createElement(
                  "p",
                  {
                    class: "text-center",
                  },
                  "GIS Taiwan 2023 is planning on providing accommodation for confirmed delegates. ",
                  /*#__PURE__*/ React.createElement("br", null),
                  " Further information will be provided after the applicants has been confirmed."
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Academic Topic/Impact Project Choice"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-between py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "First Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_1",
                        name: "first_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Second Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_2",
                        name: "second_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-between py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Third Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_3",
                        name: "third_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Fourth Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_4",
                        name: "fourth_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Panel Discussion"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "p",
                    {
                      class: "text-left",
                    },
                    "In Panel discussion, we will invite keynote speakers along with an moderator to discuss on the academic topic from different perspectives. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "This year, we would like to invite one volunteer student panelist to join this session.He/She would have the opportunity to directly converse with the other three panelists and share his/her views on the topic. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "If you are interested in the position, please check the box below. We will have further interview assessment provided after your essay assessment has been approved."
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "row justify-content-center px-3 mx-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "col-lg-5 col-md-4 col-10",
                      },
                      /*#__PURE__*/ React.createElement("img", {
                        src: "img/pd.jpg",
                        class: "img-fluid",
                        alt: "",
                      })
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("br", null),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "label",
                    null,
                    /*#__PURE__*/ React.createElement("input", {
                      type: "checkbox",
                      id: "panel_discussion",
                      name: "panel_discussion",
                    }),
                    "I would like to particpate in the panel discussion as a student representative"
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "h5",
                    {
                      class: "text-center",
                    },
                    "Essay Assignment"
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "row d-flex justify-content-center px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "a",
                      {
                        href: "https://docs.google.com/document/d/19aSNlrdMgv_UyHP6TMTGNnYhFbcBYHnf-TWpkRcteh8/edit?usp=sharing",
                        target: "_blank",
                      },
                      "Essay Questions"
                    ),
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "col-6 px-3",
                      },
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "row align-items-center",
                        },
                        /*#__PURE__*/ React.createElement("input", {
                          class: "mx-10 form-control form-control-md",
                          id: "essay_file",
                          name: "essay_assignment",
                          type: "file",
                          accept: "application/pdf",
                          required: true,
                        }),
                        /*#__PURE__*/ React.createElement(
                          "div",
                          {
                            class: "small text-muted mt-2",
                          },
                          "Upload your essay assignment. Max file size 5 MB"
                        )
                      )
                    )
                  )
                )
              ),
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  class: "card-body tab",
                },
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "h5",
                    null,
                    "Terms & Conditions"
                  ),
                  /*#__PURE__*/ React.createElement(
                    "a",
                    {
                      href: "https://docs.google.com/document/d/17o85FQiWOJ4aeLvuTPNMXWcQRQSxdI7al2z3TVOZgq8/edit#",
                      target: "_blank",
                    },
                    "Terms & Conditions"
                  ),
                  /*#__PURE__*/ React.createElement("br", null),
                  /*#__PURE__*/ React.createElement("br", null),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "checkbox",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      /*#__PURE__*/ React.createElement("input", {
                        type: "checkbox",
                        id: "termsAndConditions",
                        name: "term_condition",
                        required: true,
                      }),
                      "I agree to the GIS 2023 Terms and Conditions"
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Applicant 4's Personal Information"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 py-2 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-8",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "row justify-content-start",
                      },
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "col",
                        },
                        /*#__PURE__*/ React.createElement(
                          "label",
                          null,
                          "First name"
                        ),
                        /*#__PURE__*/ React.createElement("input", {
                          type: "text",
                          class: "form-control form-control-md",
                          name: "first_name",
                          id: "first_name",
                          placeholder: "e.g. Po-Chen",
                          value: "",
                          required: true,
                        })
                      ),
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "col",
                        },
                        /*#__PURE__*/ React.createElement(
                          "label",
                          null,
                          "Last name"
                        ),
                        /*#__PURE__*/ React.createElement("input", {
                          type: "text",
                          class: "form-control form-control-md",
                          id: "last_name",
                          name: "last_name",
                          placeholder: "e.g. Yeh",
                          value: "",
                          required: true,
                        })
                      ),
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "small text-muted mt-2 text-center",
                        },
                        "Please make sure the name you fill in match the name on your passport"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Preferred Name"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "preferred_name",
                      name: "prefer_name",
                      placeholder: "e.g. Brandon Yeh",
                      value: "",
                      required: true,
                    }),
                    /*#__PURE__*/ React.createElement(
                      "p",
                      {
                        class: "small text-muted mt-2 text-center",
                      },
                      "Your preferred name will be printed on your name tag"
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 pb-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Date of Birth"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "date",
                      class: "form-control form-control-md",
                      id: "date_of_birth",
                      name: "date_of_birth",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Sex"),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Default select example",
                        id: "sex",
                        name: "sex",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Male",
                        },
                        "Male"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Female",
                        },
                        "Female"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Others",
                        },
                        "Others"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Preferred Gender Pronoun"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Default select example",
                        id: "prefer_gender",
                        name: "prefer_gender",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "He/Him",
                        },
                        "He/Him"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "She/Her",
                        },
                        "She/Her"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "They/Them",
                        },
                        "They/Them"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Others",
                        },
                        "Others"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Nationality"
                    ),
                    /*#__PURE__*/ React.createElement("div", {
                      "w3-include-html": "nationality.html",
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "2nd Nationality"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "nationality2",
                      placeholder: "Optional",
                      name: "nationality_2",
                      value: "",
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "p",
                    {
                      class: "small text-muted mt-2 text-center",
                    },
                    "Please disclose if you have dual citizenship"
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 py-3 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Education Institute"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "school",
                      name: "education_institution",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Education Level"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Education level",
                        id: "education_level",
                        name: "education_level",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "High School",
                        },
                        "High School"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Freshman",
                        },
                        "Freshman"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Sophomore",
                        },
                        "Sophomore"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Junior",
                        },
                        "Junior"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Senior",
                        },
                        "Senior"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Fifth (or more) year of College",
                        },
                        "Fifth (or more) year of College"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Graduate",
                        },
                        "Graduate"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "PhD",
                        },
                        "PhD"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Major"),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "major",
                      name: "major",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row d-flex justify-content-center px-5 py-4",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "row align-items-center",
                      },
                      /*#__PURE__*/ React.createElement(
                        "label",
                        null,
                        "Dietary Requirements"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "select",
                        {
                          class: "form-select",
                          "aria-label": "Default select example",
                          id: "dietary_requirements",
                          name: "dietary_requirement",
                          value: "",
                          required: true,
                        },
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Non-vegetarian",
                          },
                          "Non-vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Vegetarian",
                          },
                          "Vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Ovo-Lacto Vegetarian",
                          },
                          "Ovo-Lacto Vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Vegan",
                          },
                          "Vegan"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Pork-free",
                          },
                          "Pork-free"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Beef-free",
                          },
                          "Beef-free"
                        )
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Contact Information"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Email Address"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "email",
                      class: "form-control form-control-md",
                      id: "email",
                      name: "email",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Phone Number (with Country Code)"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "tel",
                      class: "form-control form-control-md",
                      id: "phone_num",
                      name: "phone_number",
                      placeholder: "e.g. (+886)#########",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Mailing Address"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "mailing_address",
                      placeholder:
                        "e.g. No. 1, Sec. 4, Roosevelt Rd., Taipei 10617, Taiwan (R.O.C.).",
                      name: "mail_address",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Personal Facebook Profile Link"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "url",
                      class: "form-control form-control-md",
                      id: "fb_link",
                      name: "facebook_link",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Emergency Contact"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Name"),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "ec_name",
                      name: "emergency_contact_name",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Phone Number"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "tel",
                      class: "form-control form-control-md",
                      id: "ec_phoneNum",
                      name: "emergency_phone_number",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Relationship"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "ec_relationship",
                      name: "emergency_relation",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Accommodation"
                ),
                /*#__PURE__*/ React.createElement(
                  "p",
                  {
                    class: "text-center",
                  },
                  "GIS Taiwan 2023 is planning on providing accommodation for confirmed delegates. ",
                  /*#__PURE__*/ React.createElement("br", null),
                  " Further information will be provided after the applicants has been confirmed."
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Academic Topic/Impact Project Choice"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-between py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "First Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_1",
                        name: "first_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Second Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_2",
                        name: "second_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-between py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Third Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_3",
                        name: "third_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Fourth Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_4",
                        name: "fourth_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Panel Discussion"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "p",
                    {
                      class: "text-left",
                    },
                    "In Panel discussion, we will invite keynote speakers along with an moderator to discuss on the academic topic from different perspectives. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "This year, we would like to invite one volunteer student panelist to join this session.He/She would have the opportunity to directly converse with the other three panelists and share his/her views on the topic. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "If you are interested in the position, please check the box below. We will have further interview assessment provided after your essay assessment has been approved."
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "row justify-content-center px-3 mx-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "col-lg-5 col-md-4 col-10",
                      },
                      /*#__PURE__*/ React.createElement("img", {
                        src: "img/pd.jpg",
                        class: "img-fluid",
                        alt: "",
                      })
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("br", null),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "label",
                    null,
                    /*#__PURE__*/ React.createElement("input", {
                      type: "checkbox",
                      id: "panel_discussion",
                      name: "panel_discussion",
                    }),
                    "I would like to particpate in the panel discussion as a student representative"
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "h5",
                    {
                      class: "text-center",
                    },
                    "Essay Assignment"
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "row d-flex justify-content-center px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "a",
                      {
                        href: "https://docs.google.com/document/d/19aSNlrdMgv_UyHP6TMTGNnYhFbcBYHnf-TWpkRcteh8/edit?usp=sharing",
                        target: "_blank",
                      },
                      "Essay Questions"
                    ),
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "col-6 px-3",
                      },
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "row align-items-center",
                        },
                        /*#__PURE__*/ React.createElement("input", {
                          class: "mx-10 form-control form-control-md",
                          id: "essay_file",
                          name: "essay_assignment",
                          type: "file",
                          accept: "application/pdf",
                          required: true,
                        }),
                        /*#__PURE__*/ React.createElement(
                          "div",
                          {
                            class: "small text-muted mt-2",
                          },
                          "Upload your essay assignment. Max file size 5 MB"
                        )
                      )
                    )
                  )
                )
              ),
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  class: "card-body tab",
                },
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "h5",
                    null,
                    "Terms & Conditions"
                  ),
                  /*#__PURE__*/ React.createElement(
                    "a",
                    {
                      href: "https://docs.google.com/document/d/17o85FQiWOJ4aeLvuTPNMXWcQRQSxdI7al2z3TVOZgq8/edit#",
                      target: "_blank",
                    },
                    "Terms & Conditions"
                  ),
                  /*#__PURE__*/ React.createElement("br", null),
                  /*#__PURE__*/ React.createElement("br", null),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "checkbox",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      /*#__PURE__*/ React.createElement("input", {
                        type: "checkbox",
                        id: "termsAndConditions",
                        name: "term_condition",
                        required: true,
                      }),
                      "I agree to the GIS 2023 Terms and Conditions"
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Applicant 5's Personal Information"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 py-2 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-8",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "row justify-content-start",
                      },
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "col",
                        },
                        /*#__PURE__*/ React.createElement(
                          "label",
                          null,
                          "First name"
                        ),
                        /*#__PURE__*/ React.createElement("input", {
                          type: "text",
                          class: "form-control form-control-md",
                          name: "first_name",
                          id: "first_name",
                          placeholder: "e.g. Po-Chen",
                          value: "",
                          required: true,
                        })
                      ),
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "col",
                        },
                        /*#__PURE__*/ React.createElement(
                          "label",
                          null,
                          "Last name"
                        ),
                        /*#__PURE__*/ React.createElement("input", {
                          type: "text",
                          class: "form-control form-control-md",
                          id: "last_name",
                          name: "last_name",
                          placeholder: "e.g. Yeh",
                          value: "",
                          required: true,
                        })
                      ),
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "small text-muted mt-2 text-center",
                        },
                        "Please make sure the name you fill in match the name on your passport"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Preferred Name"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "preferred_name",
                      name: "prefer_name",
                      placeholder: "e.g. Brandon Yeh",
                      value: "",
                      required: true,
                    }),
                    /*#__PURE__*/ React.createElement(
                      "p",
                      {
                        class: "small text-muted mt-2 text-center",
                      },
                      "Your preferred name will be printed on your name tag"
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 pb-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Date of Birth"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "date",
                      class: "form-control form-control-md",
                      id: "date_of_birth",
                      name: "date_of_birth",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Sex"),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Default select example",
                        id: "sex",
                        name: "sex",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Male",
                        },
                        "Male"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Female",
                        },
                        "Female"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Others",
                        },
                        "Others"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Preferred Gender Pronoun"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Default select example",
                        id: "prefer_gender",
                        name: "prefer_gender",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "He/Him",
                        },
                        "He/Him"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "She/Her",
                        },
                        "She/Her"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "They/Them",
                        },
                        "They/Them"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Others",
                        },
                        "Others"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Nationality"
                    ),
                    /*#__PURE__*/ React.createElement("div", {
                      "w3-include-html": "nationality.html",
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "2nd Nationality"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "nationality2",
                      placeholder: "Optional",
                      name: "nationality_2",
                      value: "",
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "p",
                    {
                      class: "small text-muted mt-2 text-center",
                    },
                    "Please disclose if you have dual citizenship"
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 py-3 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Education Institute"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "school",
                      name: "education_institution",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Education Level"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Education level",
                        id: "education_level",
                        name: "education_level",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "High School",
                        },
                        "High School"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Freshman",
                        },
                        "Freshman"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Sophomore",
                        },
                        "Sophomore"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Junior",
                        },
                        "Junior"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Senior",
                        },
                        "Senior"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Fifth (or more) year of College",
                        },
                        "Fifth (or more) year of College"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Graduate",
                        },
                        "Graduate"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "PhD",
                        },
                        "PhD"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Major"),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "major",
                      name: "major",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row d-flex justify-content-center px-5 py-4",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "row align-items-center",
                      },
                      /*#__PURE__*/ React.createElement(
                        "label",
                        null,
                        "Dietary Requirements"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "select",
                        {
                          class: "form-select",
                          "aria-label": "Default select example",
                          id: "dietary_requirements",
                          name: "dietary_requirement",
                          value: "",
                          required: true,
                        },
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Non-vegetarian",
                          },
                          "Non-vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Vegetarian",
                          },
                          "Vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Ovo-Lacto Vegetarian",
                          },
                          "Ovo-Lacto Vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Vegan",
                          },
                          "Vegan"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Pork-free",
                          },
                          "Pork-free"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Beef-free",
                          },
                          "Beef-free"
                        )
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Contact Information"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Email Address"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "email",
                      class: "form-control form-control-md",
                      id: "email",
                      name: "email",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Phone Number (with Country Code)"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "tel",
                      class: "form-control form-control-md",
                      id: "phone_num",
                      name: "phone_number",
                      placeholder: "e.g. (+886)#########",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Mailing Address"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "mailing_address",
                      placeholder:
                        "e.g. No. 1, Sec. 4, Roosevelt Rd., Taipei 10617, Taiwan (R.O.C.).",
                      name: "mail_address",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Personal Facebook Profile Link"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "url",
                      class: "form-control form-control-md",
                      id: "fb_link",
                      name: "facebook_link",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Emergency Contact"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Name"),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "ec_name",
                      name: "emergency_contact_name",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Phone Number"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "tel",
                      class: "form-control form-control-md",
                      id: "ec_phoneNum",
                      name: "emergency_phone_number",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Relationship"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "ec_relationship",
                      name: "emergency_relation",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Accommodation"
                ),
                /*#__PURE__*/ React.createElement(
                  "p",
                  {
                    class: "text-center",
                  },
                  "GIS Taiwan 2023 is planning on providing accommodation for confirmed delegates. ",
                  /*#__PURE__*/ React.createElement("br", null),
                  " Further information will be provided after the applicants has been confirmed."
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Academic Topic/Impact Project Choice"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-between py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "First Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_1",
                        name: "first_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Second Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_2",
                        name: "second_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-between py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Third Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_3",
                        name: "third_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Fourth Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_4",
                        name: "fourth_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Panel Discussion"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "p",
                    {
                      class: "text-left",
                    },
                    "In Panel discussion, we will invite keynote speakers along with an moderator to discuss on the academic topic from different perspectives. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "This year, we would like to invite one volunteer student panelist to join this session.He/She would have the opportunity to directly converse with the other three panelists and share his/her views on the topic. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "If you are interested in the position, please check the box below. We will have further interview assessment provided after your essay assessment has been approved."
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "row justify-content-center px-3 mx-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "col-lg-5 col-md-4 col-10",
                      },
                      /*#__PURE__*/ React.createElement("img", {
                        src: "img/pd.jpg",
                        class: "img-fluid",
                        alt: "",
                      })
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("br", null),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "label",
                    null,
                    /*#__PURE__*/ React.createElement("input", {
                      type: "checkbox",
                      id: "panel_discussion",
                      name: "panel_discussion",
                    }),
                    "I would like to particpate in the panel discussion as a student representative"
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "h5",
                    {
                      class: "text-center",
                    },
                    "Essay Assignment"
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "row d-flex justify-content-center px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "a",
                      {
                        href: "https://docs.google.com/document/d/19aSNlrdMgv_UyHP6TMTGNnYhFbcBYHnf-TWpkRcteh8/edit?usp=sharing",
                        target: "_blank",
                      },
                      "Essay Questions"
                    ),
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "col-6 px-3",
                      },
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "row align-items-center",
                        },
                        /*#__PURE__*/ React.createElement("input", {
                          class: "mx-10 form-control form-control-md",
                          id: "essay_file",
                          name: "essay_assignment",
                          type: "file",
                          accept: "application/pdf",
                          required: true,
                        }),
                        /*#__PURE__*/ React.createElement(
                          "div",
                          {
                            class: "small text-muted mt-2",
                          },
                          "Upload your essay assignment. Max file size 5 MB"
                        )
                      )
                    )
                  )
                )
              ),
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  class: "text-center px-5 py-4",
                  style: "overflow:auto;",
                },
                /*#__PURE__*/ React.createElement(
                  "button",
                  {
                    class: "btn btn-secondary btn-lg",
                    type: "button",
                    id: "prevBtn",
                    onclick: "nextPrev(-1)",
                  },
                  "Previous"
                ),
                /*#__PURE__*/ React.createElement(
                  "button",
                  {
                    class: "btn btn-primary btn-lg",
                    type: "button",
                    id: "nextBtn",
                    onclick: "nextPrev(1)",
                  },
                  "Next"
                )
              ),
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style:
                    "text-align:center;margin-top:20px;margin-bottom:40px;",
                },
                /*#__PURE__*/ React.createElement("span", {
                  class: "step",
                }),
                /*#__PURE__*/ React.createElement("span", {
                  class: "step",
                }),
                /*#__PURE__*/ React.createElement("span", {
                  class: "step",
                }),
                /*#__PURE__*/ React.createElement("span", {
                  class: "step",
                }),
                /*#__PURE__*/ React.createElement("span", {
                  class: "step",
                })
              )
            )
          ),
          /*#__PURE__*/ React.createElement("hr", {
            class: "mx-n3",
          })
        )
      );
      w3.includeHTML();
      // document.getElementById("prevBtn").onclick = await nextPrev(-1);
      currentTab = 0; // Current tab is set to be the first tab (0)
      showTab(currentTab); // Display the current tab
      break;
    }
    default: {
      formRoot.replaceChildren(
        /*#__PURE__*/
        React.createElement(
          "form",
          {
            target: "dummyframe",
            id: "post-delegate-form",
            enctype: "multipart/form-data",
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              class: "container",
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                class: "row justify-content-center text-center py-2 mx-5 px-5",
              },
              /*#__PURE__*/ React.createElement("div", {
                class: "col-4 col-sm-3",
              }),
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  class: "col-4 col-sm-3",
                },
                /*#__PURE__*/ React.createElement(
                  "label",
                  null,
                  "Discount Code"
                ),
                /*#__PURE__*/ React.createElement("input", {
                  type: "text",
                  class: "form-control form-control-md",
                  id: "code",
                  name: "code",
                  value: "",
                })
              ),
              /*#__PURE__*/ React.createElement("div", {
                class: "col-4 col-sm-3",
              })
            ),
            /*#__PURE__*/ React.createElement("br", null),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                class: "card mb-5",
                style: "border-radius: 15px;",
              },
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  class: "card-body",
                },
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "h5",
                    null,
                    "Terms & Conditions"
                  ),
                  /*#__PURE__*/ React.createElement(
                    "a",
                    {
                      href: "https://docs.google.com/document/d/17o85FQiWOJ4aeLvuTPNMXWcQRQSxdI7al2z3TVOZgq8/edit#",
                      target: "_blank",
                    },
                    "Terms & Conditions"
                  ),
                  /*#__PURE__*/ React.createElement("br", null),
                  /*#__PURE__*/ React.createElement("br", null),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "checkbox",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      /*#__PURE__*/ React.createElement("input", {
                        type: "checkbox",
                        id: "termsAndConditions",
                        name: "term_condition",
                        required: true,
                      }),
                      "I agree to the GIS 2023 Terms and Conditions"
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Personal Information"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 py-2 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-8",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "row justify-content-start",
                      },
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "col",
                        },
                        /*#__PURE__*/ React.createElement(
                          "label",
                          null,
                          "First name"
                        ),
                        /*#__PURE__*/ React.createElement("input", {
                          type: "text",
                          class: "form-control form-control-md",
                          name: "first_name",
                          id: "first_name",
                          placeholder: "e.g. Po-Chen",
                          value: "",
                          required: true,
                        })
                      ),
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "col",
                        },
                        /*#__PURE__*/ React.createElement(
                          "label",
                          null,
                          "Last name"
                        ),
                        /*#__PURE__*/ React.createElement("input", {
                          type: "text",
                          class: "form-control form-control-md",
                          id: "last_name",
                          name: "last_name",
                          placeholder: "e.g. Yeh",
                          value: "",
                          required: true,
                        })
                      ),
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "small text-muted mt-2 text-center",
                        },
                        "Please make sure the name you fill in match the name on your passport"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Preferred Name"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "preferred_name",
                      name: "prefer_name",
                      placeholder: "e.g. Brandon Yeh",
                      value: "",
                      required: true,
                    }),
                    /*#__PURE__*/ React.createElement(
                      "p",
                      {
                        class: "small text-muted mt-2 text-center",
                      },
                      "Your preferred name will be printed on your name tag"
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 pb-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Date of Birth"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "date",
                      class: "form-control form-control-md",
                      id: "date_of_birth",
                      name: "date_of_birth",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Sex"),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Default select example",
                        id: "sex",
                        name: "sex",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Male",
                        },
                        "Male"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Female",
                        },
                        "Female"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Others",
                        },
                        "Others"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Preferred Gender Pronoun"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Default select example",
                        id: "prefer_gender",
                        name: "prefer_gender",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "He/Him",
                        },
                        "He/Him"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "She/Her",
                        },
                        "She/Her"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "They/Them",
                        },
                        "They/Them"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Others",
                        },
                        "Others"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Nationality"
                    ),
                    /*#__PURE__*/ React.createElement("div", {
                      "w3-include-html": "nationality.html",
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "2nd Nationality"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "nationality2",
                      placeholder: "Optional",
                      name: "nationality_2",
                      value: "",
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "p",
                    {
                      class: "small text-muted mt-2 text-center",
                    },
                    "Please disclose if you have dual citizenship"
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center mx-5 py-3 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Education Institute"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "school",
                      name: "education_institution",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Education Level"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Education level",
                        id: "education_level",
                        name: "education_level",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "High School",
                        },
                        "High School"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Freshman",
                        },
                        "Freshman"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Sophomore",
                        },
                        "Sophomore"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Junior",
                        },
                        "Junior"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Senior",
                        },
                        "Senior"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Fifth (or more) year of College",
                        },
                        "Fifth (or more) year of College"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Graduate",
                        },
                        "Graduate"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "PhD",
                        },
                        "PhD"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Major"),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "major",
                      name: "major",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row d-flex justify-content-center px-5 py-4",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "row align-items-center",
                      },
                      /*#__PURE__*/ React.createElement(
                        "label",
                        null,
                        "Dietary Requirements"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "select",
                        {
                          class: "form-select",
                          "aria-label": "Default select example",
                          id: "dietary_requirements",
                          name: "dietary_requirement",
                          value: "",
                          required: true,
                        },
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Non-vegetarian",
                          },
                          "Non-vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Vegetarian",
                          },
                          "Vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Ovo-Lacto Vegetarian",
                          },
                          "Ovo-Lacto Vegetarian"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Vegan",
                          },
                          "Vegan"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Pork-free",
                          },
                          "Pork-free"
                        ),
                        /*#__PURE__*/ React.createElement(
                          "option",
                          {
                            value: "Beef-free",
                          },
                          "Beef-free"
                        )
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Contact Information"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Email Address"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "email",
                      class: "form-control form-control-md",
                      id: "email",
                      name: "email",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Phone Number (with Country Code)"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "tel",
                      class: "form-control form-control-md",
                      id: "phone_num",
                      name: "phone_number",
                      placeholder: "e.g. (+886)#########",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Mailing Address"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "mailing_address",
                      placeholder:
                        "e.g. No. 1, Sec. 4, Roosevelt Rd., Taipei 10617, Taiwan (R.O.C.).",
                      name: "mail_address",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Personal Facebook Profile Link"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "url",
                      class: "form-control form-control-md",
                      id: "fb_link",
                      name: "facebook_link",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Emergency Contact"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement("label", null, "Name"),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "ec_name",
                      name: "emergency_contact_name",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Phone Number"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "tel",
                      class: "form-control form-control-md",
                      id: "ec_phoneNum",
                      name: "emergency_phone_number",
                      value: "",
                      required: true,
                    })
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-4 col-sm-3",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Relationship"
                    ),
                    /*#__PURE__*/ React.createElement("input", {
                      type: "text",
                      class: "form-control form-control-md",
                      id: "ec_relationship",
                      name: "emergency_relation",
                      value: "",
                      required: true,
                    })
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Accommodation"
                ),
                /*#__PURE__*/ React.createElement(
                  "p",
                  {
                    class: "text-center",
                  },
                  "GIS Taiwan 2023 is planning on providing accommodation for confirmed delegates. ",
                  /*#__PURE__*/ React.createElement("br", null),
                  " Further information will be provided after the applicants has been confirmed."
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Academic Topic/Impact Project Choice"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-between py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "First Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_1",
                        name: "first_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Second Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_2",
                        name: "second_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-between py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Third Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_3",
                        name: "third_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "col-6 px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "label",
                      null,
                      "Fourth Choice"
                    ),
                    /*#__PURE__*/ React.createElement(
                      "select",
                      {
                        class: "form-select",
                        "aria-label": "Academic Choice",
                        id: "choice_4",
                        name: "fourth_choice",
                        value: "",
                        required: true,
                      },
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Currency Remodeling",
                        },
                        "Currency Remodeling"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "New Paradigm of Healthcare",
                        },
                        "New Paradigm of Healthcare"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Metaverse",
                        },
                        "Metaverse"
                      ),
                      /*#__PURE__*/ React.createElement(
                        "option",
                        {
                          value: "Energy Reform",
                        },
                        "Energy Reform"
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "h5",
                  {
                    class: "text-center",
                  },
                  "Panel Discussion"
                ),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "row justify-content-center py-2 mx-5 px-5",
                  },
                  /*#__PURE__*/ React.createElement(
                    "p",
                    {
                      class: "text-left",
                    },
                    "In Panel discussion, we will invite keynote speakers along with an moderator to discuss on the academic topic from different perspectives. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "This year, we would like to invite one volunteer student panelist to join this session.He/She would have the opportunity to directly converse with the other three panelists and share his/her views on the topic. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "If you are interested in the position, please check the box below. We will have further interview assessment provided after your essay assessment has been approved."
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "row justify-content-center px-3 mx-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "col-lg-5 col-md-4 col-10",
                      },
                      /*#__PURE__*/ React.createElement("img", {
                        src: "img/pd.jpg",
                        class: "img-fluid",
                        alt: "",
                      })
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("br", null),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "label",
                    null,
                    /*#__PURE__*/ React.createElement("input", {
                      type: "checkbox",
                      id: "panel_discussion",
                      name: "panel_discussion",
                    }),
                    "I would like to particpate in the panel discussion as a student representative"
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center",
                  },
                  /*#__PURE__*/ React.createElement(
                    "h5",
                    {
                      class: "text-center",
                    },
                    "Essay Assignment"
                  ),
                  /*#__PURE__*/ React.createElement(
                    "div",
                    {
                      class: "row d-flex justify-content-center px-5",
                    },
                    /*#__PURE__*/ React.createElement(
                      "a",
                      {
                        href: "https://docs.google.com/document/d/19aSNlrdMgv_UyHP6TMTGNnYhFbcBYHnf-TWpkRcteh8/edit?usp=sharing",
                        target: "_blank",
                      },
                      "Essay Questions"
                    ),
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement(
                      "div",
                      {
                        class: "col-6 px-3",
                      },
                      /*#__PURE__*/ React.createElement(
                        "div",
                        {
                          class: "row align-items-center",
                        },
                        /*#__PURE__*/ React.createElement("input", {
                          class: "mx-10 form-control form-control-md",
                          id: "essay_file",
                          name: "essay_assignment",
                          type: "file",
                          accept: "application/pdf",
                          required: true,
                        }),
                        /*#__PURE__*/ React.createElement(
                          "div",
                          {
                            class: "small text-muted mt-2",
                          },
                          "Upload your essay assignment. Max file size 5 MB"
                        )
                      )
                    )
                  )
                ),
                /*#__PURE__*/ React.createElement("hr", {
                  class: "mx-n3",
                }),
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    class: "text-center px-5 py-4",
                  },
                  /*#__PURE__*/ React.createElement(
                    "button",
                    {
                      type: "submit",
                      class: "btn btn-primary btn-lg",
                      id: "application",
                    },
                    "Send Application"
                  )
                )
              )
            )
          )
        )
      );
      w3.includeHTML();
      const button = document.getElementById("application");
      button.addEventListener("click", async () => {
        var postData = new FormData(
          document.getElementById("post-delegate-form")
        );
        if(postData.get("code") === ""){
          postData.delete("code");
        }
        // POST
        if (!document.forms["post-delegate-form"].checkValidity()) {
          return;
        }
        var request = new XMLHttpRequest();
        request.open("Post", "https://be.admin.gis-taiwan.ntu.edu.tw/delegate/");
        request.onreadystatechange = function () {
          if (this.readyState === 4) {
            if (this.status === 201) {
              alert("We have received your application.");
              window.location.href = "index.html";
            } else {
              alert(
                `Something went wrong, please double check your submission or contact us. Received status code ${this.status}, ${this.statusText}`
              );
            }
          }
        };
        request.onerror = function (event) {
          alert(
            `Something went wrong, server responded with: ${event.target.response}`
          );
        };
        request.send(postData);
      });
    }
  }
}
