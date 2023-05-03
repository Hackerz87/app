//////////////////////////////////////////////////////////////////////////////////////////
// script name = engine.js
// developed by  Ch Arslan
// For creating everyting inside the app
// It Hackers 
// https://www.youtube.com/@pro_pakistani
// Crackit!
/////////////////////////////////////////////////////////////////////////////////////////
//Creating main div tag for making resize perfect
main = document.createElement("div");
main.setAttribute('id', 'root');
document.body.appendChild(main);
document.getElementById('root').innerHTML= "<style>body{background-color: skyblue;} #root{width: 100%; height: auto; } </style>";

//creating slide 
// main slide div
slide = document.createElement("div");
slide.setAttribute('id', 'slidercontainer');
slide.setAttribute('class', 'slidercontainer');
document.getElementById('root').appendChild(slide);

// each single slide 1
slide_s = document.createElement("div");
slide_s.setAttribute('id', 'showSlide');
slide_s.setAttribute('class', 'showSlide fade');
document.getElementById('slidercontainer').appendChild(slide_s);

//slide image 
slide_s = document.createElement("img");
slide_s.setAttribute('src', 'images/banner1.png');
document.getElementById('showSlide').appendChild(slide_s);

//heading of slide 
//slide_s = document.createElement("div");
//slide_s.setAttribute('id', 'content');
//slide_s.setAttribute('class', 'content');
//document.getElementById('showSlide').appendChild(slide_s);



// each single slide 2
slide_s = document.createElement("div");
slide_s.setAttribute('id', 'showSlidei');
slide_s.setAttribute('class', 'showSlide fade');
document.getElementById('slidercontainer').appendChild(slide_s);

//slide image 
slide_s = document.createElement("img");
slide_s.setAttribute('src', 'images/banner2.png');
document.getElementById('showSlidei').appendChild(slide_s);

//next button
slide_s = document.createElement("a");
slide_s.setAttribute('class', 'left');
slide_s.setAttribute('id', 'left');
slide_s.setAttribute('onclick', 'nextSlide(-1)');
document.getElementById('slidercontainer').appendChild(slide_s);
document.getElementById('left').innerHTML= "Left";

//previous button 
slide_s = document.createElement("a");
slide_s.setAttribute('class', 'right');
slide_s.setAttribute('id', 'right');
slide_s.setAttribute('onclick', 'nextSlide(1)');
document.getElementById('slidercontainer').appendChild(slide_s);
document.getElementById('right').innerHTML= "right";



//previous button 
slide_s = document.createElement("div");
slide_s.setAttribute('id', 'header');
document.getElementById('root').appendChild(slide_s);
document.getElementById('header').innerHTML= "<h2 <i>Crack it!</i> <sub>by It Hackers</sub></h2>";


//logo
slide_s = document.createElement("img");
slide_s.setAttribute('id', 'logo');
slide_s.setAttribute('src', 'images/ico.ico');
document.getElementById('header').appendChild(slide_s);

//search button
slide_s = document.createElement("button");
slide_s.setAttribute('id', 'myBtn');
document.getElementById('header').appendChild(slide_s);

//src image
src_img = document.createElement("img");
src_img.setAttribute('src', 'images/search.png');
document.getElementById('myBtn').appendChild(src_img);

adobe = document.createElement("br");
document.getElementById('root').appendChild(adobe);
adobe = document.createElement("br");
document.getElementById('root').appendChild(adobe);
adobe = document.createElement("br");
document.getElementById('root').appendChild(adobe);
adobe = document.createElement("br");
document.getElementById('root').appendChild(adobe);





//adobe photoshop
adobe = document.createElement("div");
adobe.setAttribute('class', 'app');
adobe.setAttribute('id', 'adobe');
document.getElementById('root').appendChild(adobe);

// image
adobe = document.createElement("img");
adobe.setAttribute('src', 'images/adobephotoshop.jpg');
adobe.setAttribute('class', 'productimage');
document.getElementById('adobe').appendChild(adobe);

// adobe title
adobe = document.createElement("div");
adobe.setAttribute('id', 'adobe_title');
document.getElementById('adobe').appendChild(adobe);
document.getElementById('adobe_title').innerHTML= "<strong>Adobe Photoshop 7.0</strong><br/><i>Photo editor.</i><br/><br/>";

// download button adobe photoshop
adobe = document.createElement("button");
adobe.setAttribute('id', 'adobe_download');
adobe.setAttribute('class', 'downloadbutton');
adobe.setAttribute('onclick', 'adobe_photoshop()');
document.getElementById('adobe').appendChild(adobe);
document.getElementById('adobe_download').innerHTML= "Download";





adobe = document.createElement("br");
document.getElementById('root').appendChild(adobe);
adobe = document.createElement("br");
document.getElementById('root').appendChild(adobe);
adobe = document.createElement("br");
document.getElementById('root').appendChild(adobe);




  var slide_index = 1;  
        displaySlides(slide_index);  
  
        function nextSlide(n) {  
            displaySlides(slide_index += n);  
        }  
  
        function currentSlide(n) {  
            displaySlides(slide_index = n);  
        }  
  
        function displaySlides(n) {  
            var i;  
            var slides = document.getElementsByClassName("showSlide");  
            if (n > slides.length) { slide_index = 1 }  
            if (n < 1) { slide_index = slides.length }  
            for (i = 0; i < slides.length; i++) {  
                slides[i].style.display = "none";  
            }  
            slides[slide_index - 1].style.display = "block";  
        }






