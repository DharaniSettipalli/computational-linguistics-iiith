var english=[
["John ate an apple before afternoon",	"before afternoon John ate an apple",	"John before afternoon ate an apple"],

["some students like to study in the night", "at night some students like to study"],

["John and Mary went to church","Mary and John went to church"],

["John went to church after eating",	"after eating John went to church", "John after eating went to church"],

["did he go to market","he did go to market"],

["the woman who called my sister sells cosmetics", "the woman who sells cosmetics called my sister", 
"my sister who sells cosmetics called the woman" ,"my sister who called the woman sells cosmetics"],

["John goes to the library and studies", "John studies and goes to the library"],

["John ate an apple so did she", "she ate an apple so did John"],

["the teacher returned the book after she noticed the error", "the teacher noticed the error after she returned the book",
"after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book",
"she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book",
"after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],

["I told her that I bought a book yesterday","I told her yesterday that I bought a book",
"yesterday I told her that I bought a book","I bought a book that I told her yesterday",
"I bought a book yesterday that I told her","yesterday I bought a book that I told her"	]

];

var hindi=[
["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार",
"बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],

["राम सोया और श्याम भी","श्याम सोया और राम भी",
"सोया श्याम और राम भी","सोया राम और श्याम भी"],

["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम",
"उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम",
"मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम",
"उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम",
"बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम",
"बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"
],

["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर",
"खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"
],

["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया",
"बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता",
"कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को",
"सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"
],

["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ",
"वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"
],

["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ",
"बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ",
"वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब",
 "है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"
]

];
var mains=document.querySelectorAll(".maininfo_sub ul li ");
var main_1=document.querySelectorAll(".main_1");
var span=document.querySelector(".message");
var options=document.querySelector(".options");
var randomize_class=document.querySelector(".randomize");
var formed_sen=document.querySelector(".formed_sen_message");
var printbtn=document.querySelector(".printwords");
span.classList.add("hideonscreen");
var k=0;
//action to be performed while clicking on buttons
for(let i=0; i<main_1.length; i++){
	main_1[i].classList.add("hideonscreen");
	if(i==0){
		main_1[i].classList.remove("hideonscreen");
	}
	let l=[0,1,2,3,4,5];
	mains[i].addEventListener("click", function () {
	 main_1[i].classList.remove("hideonscreen");
	 	if(i==3){
	 		dropdown();
	 	}
	 for(let j of l){
	 	if(i!= j){
		 	main_1[j].classList.add("hideonscreen");
	 	}
	 }
	});
}

//action to be performed when selecting a language
function dropdown(){
	options.oninput= function(){	
	span.classList.remove("hideonscreen");
	/*alert(options.value);*/
	if(options.value=="prefer"){
		alert("select any language");
		return false;
	}
	if(options.value == "eng")
		random_sentence("eng");
	else if(options.value == "hin"){
		random_sentence("hin");
	}

	}
}	


//for selecting random sentence from array may it be english or hindi
function random_sentence(val){
if(val=="eng"){
var d=10*Math.random();
var rand=Math.floor(d);
var d1=english[rand].length*Math.random();
var rand_word=Math.floor(d1);
console.log(english[rand][rand_word]);
var eng_list=english[rand][rand_word].split(" ");
generate_rand_words(eng_list,"eng");
}
else if(val=="hin"){
	var d=7*Math.random();
	var rand=Math.floor(d);
	var d1=hindi[rand].length*Math.random();
	var rand_word=Math.floor(d1);
	/*alert(rand_word);*/
	console.log(hindi[rand][rand_word]);
	var hind_list=hindi[rand][rand_word].split(" ");
	generate_rand_words(hind_list,"hin");
}

}

//function to generate random words

function generate_rand_words(list,lang){

	var l = list.length, temp, index;  
        while (l > 0) {  
            index = Math.floor(Math.random() * l);  
            l--;  
            temp = list[l];          
            list[l] = list[index];          
            list[index] = temp;      
        }
      if(lang=="eng"){
      	document.querySelector(".makebuttons_eng").style.display="block";
   		var span_button_eng=document.querySelector(".makebuttons_eng");
   		// removing any previous buttons 
   		while (span_button_eng.hasChildNodes()) {  
		  span_button_eng.removeChild(span_button_eng.firstChild);
		}
		// creating buttons accordingly
        for(let b of list){  
	        
	        var btn_eng= document.createElement("button");
	        btn_eng.innerText=b;
	        span_button_eng.appendChild(btn_eng);
    	}
    	document.querySelector(".makebuttons_hin").style.display="none";
    	var eng_words=document.querySelectorAll(".makebuttons_eng button");
    	/*eng_words[0].onclick=function(){
    		console.log(this.innerText);
    	}*/
    	btnclick(eng_words);
    }
     if(lang=="hin"){
     	document.querySelector(".makebuttons_hin").style.display="block";
     	var span_button_hin=document.querySelector(".makebuttons_hin");
     	// removing any previous buttons 
     	while (span_button_hin.hasChildNodes()) {  
		  span_button_hin.removeChild(span_button_hin.firstChild);
		}
		// creating buttons accordingly
     	for(let b of list){  
	        var btn_hin= document.createElement("button");
	        btn_hin.innerText=b;
	        span_button_hin.appendChild(btn_hin);
    	}
    	document.querySelector(".makebuttons_eng").style.display="none";
    	var hin_words=document.querySelectorAll(".makebuttons_hin button");
    	btnclick(hin_words);
     }   
}

function btnclick(words){
	var printbtn=document.querySelector(".printwords");
	var formed_sen=document.querySelector(".formed_sen_message");
	// removing any previoussly formed sentences 
     	while (printbtn.hasChildNodes()) {  
		  printbtn.removeChild(printbtn.firstChild);
		}
	for(let i=0; i< words.length; i++){
		words[i].onclick=function(){
			formed_sen.innerHTML=("<hr><strong style='color:#8B008B; margin-left: 15%'>Formed Sentence </strong><em style='color:#FF69B4'>(after selecting words):</em>");
			var p_word= document.createElement("span");
			p_word.innerText=words[i].innerText+" ";
			printbtn.appendChild(p_word);
			words[i].style.display="none";
		}
	}
}




