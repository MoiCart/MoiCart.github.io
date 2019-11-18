window.onload = init;


function scrollTrack() {

  main = 0;
  about = Math.round(document.getElementById('about').getBoundingClientRect().left + document.getElementById('horizontal-scroll-wrapper').scrollTop);
  features = Math.round(document.getElementById('features').getBoundingClientRect().left + document.getElementById('horizontal-scroll-wrapper').scrollTop);
  pricing = Math.round(document.getElementById('pricing').getBoundingClientRect().left + document.getElementById('horizontal-scroll-wrapper').scrollTop);
  contact = Math.round(document.getElementById('contact').getBoundingClientRect().left + document.getElementById('horizontal-scroll-wrapper').scrollTop);

  offset = Math.round(document.getElementById('horizontal-scroll-wrapper').scrollTop);

  console.log(offset)
  console.log(about)
  if (offset == main) {

    document.getElementById('main').classList.add('in-view');
    document.getElementById('about').classList.add('in-view2');
    document.getElementById('about-page').classList.add('in-view');
    document.getElementById('features-page').classList.remove('in-view');
    document.getElementById('features').classList.remove('in-view');
    document.getElementById('pricing').classList.remove('in-view');
    document.getElementById('contact').classList.remove('in-view');

  } else if ((offset == about) || (offset+1 == about)) {

    document.getElementById('main').classList.remove('in-view');
    document.getElementById('about-page').classList.add('in-view');
    document.getElementById('about').classList.add('in-view2');
    document.getElementById('features-page').classList.remove('in-view');
    document.getElementById('features').classList.remove('in-view');
    document.getElementById('pricing').classList.remove('in-view');
    document.getElementById('contact').classList.remove('in-view');

  } else if (offset == features) {

    document.getElementById('main').classList.remove('in-view');
    document.getElementById('about-page').classList.remove('in-view');
    document.getElementById('about').classList.remove('in-view2');
    document.getElementById('features-page').classList.add('in-view');
    document.getElementById('features').classList.add('in-view');
    document.getElementById('pricing').classList.remove('in-view');
    document.getElementById('contact').classList.remove('in-view');

  } else if (offset == pricing) {

    document.getElementById('main').classList.remove('in-view');
    document.getElementById('about-page').classList.remove('in-view');
    document.getElementById('about').classList.remove('in-view2');
    document.getElementById('features-page').classList.remove('in-view');
    document.getElementById('features').classList.remove('in-view');
    document.getElementById('pricing').classList.add('in-view');
    document.getElementById('contact').classList.remove('in-view');

  } else if (offset == contact) {

    document.getElementById('main').classList.remove('in-view');
    document.getElementById('about-page').classList.remove('in-view');
    document.getElementById('about').classList.remove('in-view2');
    document.getElementById('features-page').classList.remove('in-view');
    document.getElementById('features').classList.remove('in-view');
    document.getElementById('pricing').classList.remove('in-view');
    document.getElementById('contact').classList.add('in-view');

  }

}

function scrollToElm(elm) {


  document.querySelector('#horizontal-scroll-wrapper').style.scrollSnapType = 'none';
  scroller.to(document.getElementById(elm).getBoundingClientRect().left + document.getElementById('horizontal-scroll-wrapper').scrollTop)

}

function init() {

    if (window.Event) {

      document.captureEvents(Event.MOUSEMOVE);

    }

      document.getElementById("hover").onmousemove = changeCursorXY;

}

function changeCursorXY(e) {

  if (getComputedStyle(document.getElementById("menu_button")).getPropertyValue('--button_hover_flag') == 1 || getComputedStyle(document.getElementById("menu_navbar")).getPropertyValue('--button_hover_flag') == 1) {

    document.getElementById("menu_button").classList.add("change");

  } else {

    document.getElementById("menu_button").classList.remove("change");

  }

  if (getComputedStyle(document.getElementById("bounding-box")).getPropertyValue('--flag') == 1) {

    cursorX = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    cursorY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

    if ((cursorY < document.getElementById("bounding-box").getBoundingClientRect().bottom) && (cursorX - 25 > 0 && cursorX - 25 < document.getElementById("bounding-box").getBoundingClientRect().right)) {
      document.getElementById("menu_button").style.transition = "0.25s"
      document.getElementById("menu_button").style.left = String(cursorX - 25).concat("px");

    } else {

      document.getElementById("menu_button").style.transition = "1s"
      document.getElementById("menu_button").style.left = "30px";

    }

  }

    document.getElementById("hover").onmouseleave = function() {document.getElementById("menu_button").style.transition = "1s"; document.getElementById("menu_button").style.left = "30px";};

}


const scroller = new SweetScroll(
  {
    horizontal: true,
    complete: (isCancel, scroller) => {
      document.querySelector('#horizontal-scroll-wrapper').style.scrollSnapType = 'y mandatory';
   },
  },
  '#horizontal-scroll-wrapper',

);

var imgs = document.images,
    len = imgs.length,
    check = [],
    counter = 0;

function textChange() {

  document.getElementById("text").innerText = "Done!";
  document.getElementById("text").style.left = "10px";
  setTimeout(loadOut, 1000);

}

setTimeout(textChange, 1000);

function isLoaded(){

  [].forEach.call(imgs, function(img, i) {
      check[i]=(img.complete);
  } );

  return !(check.includes(false))

}

function incrementCounter() {
    counter++;
    if ( counter === len ) {
        setTimeout('loadOut', 1000);
    }
}

function loadOut() {

  scroll(0,0);
  var elm = document.body;
  elm.classList.add("load");

}

var els = document.querySelectorAll('.get-started');
for (var i = 0; i < els.length; i++) {
  els[i].addEventListener('mouseenter', function(e) {
    e.target.classList.add('ready');
  }, { once: true });
}
