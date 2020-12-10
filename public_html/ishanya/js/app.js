$(function (){
      window.hideSection = function(elem){
        $(elem).animate({left:-100,opacity:0},1000, function(){
          $(elem).hide();
        });
      };
      window.viewSection = function(elem){
        $(elem).show().animate({left:0,opacity:1},1000);
      };
      var viewIntro = function(cls) {
          var myNode = document.getElementById("live");
          myNode.style.display = cls;
          if(cls === "none"){            
            while(myNode.hasChildNodes())
            {
               myNode.removeChild(myNode.lastChild);
            }
          }else if(document.getElementById("intro_vid") === null){
            var node = document.createElement("a"); 
            //var textnode = document.createTextNode("X");
            //node.appendChild(textnode);
            node.setAttribute("onclick", "viewIntro('none')");
            node.setAttribute("href", "#");
            myNode.append(node);
            node = document.createElement("iframe"); 
            node.setAttribute("id", "intro_vid");
            node.setAttribute("class", "yt-iframe");
            node.setAttribute("allowfullscreen", "");
            node.setAttribute("gesture", "media");
            node.setAttribute("frameborder", "0");
            node.setAttribute("src", "https://www.youtube.com/embed/8VcTL2bXCfc?autoplay=1&controls=0&showinfo=0&rel=0");
            myNode.append(node);
          }
      };
      
      window.viewProfile = function(id){
        viewSection("section");
        //var el= $("section");
        //el.fadeIn(1000);
        var textEl= $("#intro-container");
        textEl.empty();
        var secEl=$("#section-panel")[0];
        var tripData = [{
              id:"ishanya",
              title:"Ishanya<span>The Road Trip</span>",
              desc:"<p>It all started in the year 2016, when Rhushi came up with a plan for Road Trip to North East. As soon as the plan was published, three more computer geeks decided to ditch their cubicles and be part of this astonishing journey!  A much awaited break from 9 to 6 job is what we were looking for. </p><p>Finally the time has arrived to experience the beauty of snow-clad mountains, the evergreen pine trees and the never ending roads crawling through the valleys. </p><p>Come experience the adventure of four different personalities with one dream – Ishanya – The Road Trip!</p>",
              name:"<p>Latitudes</p>",
              link:"https://twitter.com/latitudess",
              linkLabel:"Latitudes"
            }, {
              id:"rp",
              title:"Rhushi<span>A hardcore traveller with a beast (Xylo)!</span>",
              desc:"<p>It has been six years since I bought my first car – Xylo (Popularly known as Air Xylo). Since then, flight has never been an option for me. </p><p>I have driven from Kashmir to Kanyakumari. I have even travelled to some isolated places in India where no driver would dare to go. Driving and Travelling is not just a passion for me, it is more than that. </p><p>Wandering to North East was always on my mind. Can’t wait to step on the peddle as Ishanya' is not just any other road trip, but it is going to be a life changing experience!</p>",
              image:"images/ishanya_full.png",
              name:"<p>Rhushiraj Patil</p>",
              link:"https://twitter.com/rishanimates"
            }, {
              id:"vg",
              title:"Vaibhav<span>“Ha Dilli se hu…. BC!”</span>",
              desc:"<p>I have always been a carefree brat since my childhood. The inquisitiveness inside me has made me more fascinated about Indian history and various cultures across India. “How” and “Why” are the two questions that keep popping into my mind whenever I see a historical marvel. </p><p>I travel to understand the history, culture, language and traditions behind any place. </p><p>Ishanya, is a no less than a goldmine for me. Eagerly waiting to fill my knowledge chest with an unforgettable experience!</p>",
              image:"images/ishanya_full.png",
              name:"<p>Vaibhav Goyal</p>",
              link:"https://twitter.com/rishanimates"
            }, {
              id:"ap",
              title:"Amol<span>An Indian with a dream</span>",
              desc:"<p>In 2009 my first big exploration started in one of the world’s busiest city - London. Experiencing the British culture and watching the marvellous landscapes and architectures built by them fascinated me to travel more around the world. Since then, there is no stopping. </p><p>I have explored more than 7 countries and almost all of India! The journey of self exploration is never ending for me.</p><p>Ishanya – Is not just any other dream. It is a memory in making with friends, foods, cultures and traditions. Time has come to explore the most unexplored!</p>",
              image:"images/ishanya_full.png",
              name:"<p>Amol Patil</p>",
              link:"http://latitudes.in",
              linkLabel:"@amolpatil"
            }, {
              id:"nh",
              title:"Nikhil<span>A food hogger</span>",
              desc:"<p>I travel for food. My love for food has taken me places.</p><p>It may be a small joint across the street to the famous chicken satay in the streets of Pattaya! Any damn thing that is edible has to go through my taste buds.</p><p>Ishanya for me is a food paradise. I can’t wait to experience the food from the east</p>",
              image:"images/ishanya_full.png",
              name:"<p>Nikhil Hundare</p>",
              link:"http://latitudes.in/",
              linkLabel:"@hundare"
        },{  
              id:"fb",
              desc:'<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flatitudess%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1991721854470899" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
              title:"",
              image:"",
              name:"",
              link:""
        },{
		          id:"wa",
              title:"!latitudes",
              desc:"<p>Wanderlust, Foodie, daring and more than just adventure, thrill, the Unexplored and a tinch of stimulation with the full enthrall of eternal Masti(fun). If these words resonate with you, you are in the right gang. We are the proud group of people who love to explore the uncharted expanse of nature, eat and drink at places known and also not known but equally awesome and most importantly the courage and determination to go till the last mile and get that deep and hard to explain satisfaction. And yes, we have jobs :P</p><p>We have been on some of the toughest treks in Maharashtra and the most endearing trips in India. We have done multiple road trips from the northernmost state of India, Kargil in Kashmir, to Kanyakumari in the south. We have been to Leh and Ladakh and it sure wasn’t a chopper carrying us. We have traversed through the lands of enormous beauty and experienced the rich culture of North-east India, Bhutan and Nepal on a 9000+ km road trip and sipped the coffee made by the Italian couple living near the living root bridges in the forests of Meghalaya.</p><p>But as mesmerising as India is, we haven’t stopped here. We have been on the smoothest of rides in the land of Midnight Sun in the islands of Norway and have seen the blend of 3 most beautiful waterfalls in the US. We boast of travelling in 3 different continents and have driven more than 200,000 km globally.</p><p>And the story still doesn’t end. We plan to embark upon the most daring of our adventures yet, a road trip from India to London traversing through continents and cultures, mountains and deserts, calm and serene countryside to the most dangerous places on Earth, exploring the unexplored.</p><p>This club is as exclusive as easy to get in. You find new friends, expand your network even in the corporate world, get to challenge yourself both physically and mentally, feel the nature and take your taste buds on a party. Get in with the qualities you have be it writing, shooting, editing or just the faith in yourself and the guts to take yourself up a notch.</p>",
              image:"images/ishanya_full.png",
              name:"<p>Team ISHANYA<i> whatsapp # - +919403979278</i></p>",
              link:"https://chat.whatsapp.com/1bdXcajnxaQ8nXY3nZYvHM",
              linkLabel:"LATITUDES Group"
}];
        for(var i=0; i<tripData.length; i++){
          var introObj = tripData[i];
	introObj.linkLabel = introObj.linkLabel || introObj.link;
          if(introObj && introObj.id === id && introObj.id === "fb"){
            textEl.append('<li class="image-panel">'+introObj.desc+'</li>');
          }else if(introObj && introObj.id === id){
            textEl.append('<li class="image-panel"><span class="image-profile image-'+introObj.id+'"></span> </li><li class="intro-title">'+introObj.title+'</li><li>'+introObj.desc+'</li><li class="intro-name">'+introObj.name+'</li><li class="intro-link"><a href="'+introObj.link+'" target="_blank">'+introObj.linkLabel+'</li>');
          }
        }
      };

      window.viewSiteIntro = function(timeout){
        var timeout = timeout ? timeout : 1000;
        setTimeout(function(){
          var el= $(".intro");
          if(el && el[0]){
            el.fadeIn(timeout);
          }
        }, timeout);
      };


      var ind= 0;
      window.openSiteIntro = function(timeout){
        var mainPanel= $("#siteIntro"),
        txt = $("#intro-text div");
        setTimeout(function(){
          if(txt[ind]){
            var el = $(txt[ind]);
            el.fadeIn(timeout, function(){
              el.fadeOut(timeout);
              ind++;
              window.openSiteIntro(timeout);
            });
          }else{
            mainPanel.fadeOut(timeout, function(){
              $("#countdown").fadeIn();
            });
          }
        }, timeout);
      };
      window.openSiteIntro(800);

      var ind1= 0;
      window.openSiteIntro1 = function(timeout1){
        var mainPanel1= $("#marquee"),
        txt1 = $("#plan-text div");
        mainPanel1.fadeIn(timeout1, function(){});
        setTimeout(function(){
          if(txt1[ind1]){
            var el1 = $(txt1[ind1]);
            el1.fadeIn(timeout1, function(){
              el1.fadeOut(timeout1);
              ind1++;
              window.openSiteIntro1(timeout1);
            });
          }else{
            mainPanel1.fadeOut(timeout1, function(){
              ind1= 0;
              window.openSiteIntro1(800);
              //$("#countdown").fadeIn();
            });
          }
        }, timeout1);
      };
      window.openSiteIntro1(800);
      

      window.skipIntro = function(){
        var mainPanel= $("#siteIntro");
          mainPanel.fadeOut("100", function(){
            $("#countdown").fadeIn();
          });
      }

      // define variables
      var items = document.querySelectorAll(".timeline li");

      // check if an element is in viewport
      // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
      var a=$('.timeline')[0];
      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (a.clientHeight || window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (a.clientWidth || window.innerWidth || document.documentElement.clientWidth)
        );
      }

      function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
          if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
          }
        }
      }

      // listen for events
      //window.addEventListener("load", callbackFunc);
      //window.addEventListener("resize", callbackFunc);
      
    
      window.skipTimeline = function(){
        var mainPanel= $(".timeline");
          mainPanel.fadeOut("100", function(){
            
          });
      };

      window.showTimeline = function(){
        var mainPanel= $(".timeline");
          mainPanel.fadeIn("100", function(){
            a.addEventListener("scroll", callbackFunc);
            callbackFunc();
          });
      };


      function locationHashChanged() {
        switch (location.hash){
          case "#latitudes":
              window.location.href = "../";
              break;
          case "#ishanya":
              window.viewProfile("ishanya");
              break;
          case "#fb":
              window.viewProfile("fb");
              break;
          case "#rp":
              window.viewProfile("rp");
              break;
          case "#vg":
              window.viewProfile("vg");
              break;
          case "#ap":
              window.viewProfile("ap");
              break;
          case "#nh":
              window.viewProfile("nh");
              break;
          case "#rp":
              window.viewProfile("rp");
              break;
          case "#timeline":
              window.showTimeline();
              break;
          default: 
              openSiteIntro(800);
              break;
        }  
      };

      window.onhashchange = locationHashChanged;
});
