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
	 		document.querySelector(".get_correct").style.display="none";
	 	}
	 for(let j of l){
	 	if(i!= j){
		 	main_1[j].classList.add("hideonscreen");
		 	printbtn.innerHTML="";
			randomize_class.style.display="none";
			span.style.display="none";
			formed_sen.innerHTML="";
			document.querySelector(".reform").style.display="none";
			document.querySelector(".check_sen_res").innerHTML="";
			document.querySelector(".check_sen").style.display="none";
			options.value="prefer";
			document.querySelector(".get_correct").style.display="none";
			document.querySelector(".right_answers").innerText="";	
	 	}
	 }
	});
}

//action to be performed when selecting a language
function dropdown(){
	options.oninput= function(){	
	document.querySelector(".experiment .reform").style.display="none";
	formed_sen.innerHTML="";
	document.querySelector(".check_sen_res").innerHTML="";
	document.querySelector(".check_sen").style.display="none"

	span.classList.remove("hideonscreen");
	if(options.value=="prefer"){
		alert("select any language");
		printbtn.innerHTML="";
		randomize_class.style.display="none";
		span.style.display="none";
		document.querySelector(".get_correct").style.display="none";
		document.querySelector(".get_correct").innerText="GET CORRECT SENTENCE";
		document.querySelector(".right_answers").innerText="";
		return false;
	}
	else if(options.value == "eng" || options.value=="hin"){
		randomize_class.style.display="block";
		span.style.display="block";
		random_sentence(options.value);
		document.querySelector(".get_correct").style.display="none";
		document.querySelector(".get_correct").innerText="GET CORRECT SENTENCE";
	}
	document.querySelector(".right_answers").innerText="";
	}
}	

var List_eng,List_hin;
//for selecting random sentence from array may it be english or hindi
function random_sentence(val){
if(val=="eng"){
var d=10*Math.random();
var rand=Math.floor(d);
var d1=english[rand].length*Math.random();
var rand_word=Math.floor(d1);
/*console.log(english[rand][rand_word]);*/
List_eng=english[rand];
var eng_list=english[rand][rand_word].split(" ");
generate_rand_words(eng_list,"eng",1);
}
else if(val=="hin"){
	var d=7*Math.random();
	var rand=Math.floor(d);
	var d1=hindi[rand].length*Math.random();
	var rand_word=Math.floor(d1);
	/*alert(rand_word);*/
	/*console.log(hindi[rand][rand_word]);*/
	List_hin=hindi[rand];
	var hind_list=hindi[rand][rand_word].split(" ");
	generate_rand_words(hind_list,"hin",1);
}

}

//function to generate random words
var List;
function generate_rand_words(list,lang,L){

	var l = list.length, temp, index;  
        while (l > 0 && L==1) {  
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
List=list;
}



function btnclick(words){
	var printbtn=document.querySelector(".printwords");
	var formed_sen=document.querySelector(".formed_sen_message");
	var I;
	// removing any previoussly formed sentences 
     	while (printbtn.hasChildNodes()) {  
		  printbtn.removeChild(printbtn.firstChild);
		}
	I=words.length;
	for(let i=0; i< words.length; i++){
		words[i].onclick=function(){
			document.querySelector(".experiment .reform").style.display="block";
			formed_sen.innerHTML=("<hr><strong style='color:#8B008B; margin-left: 15%'>Formed Sentence </strong><em style='color:#FF69B4'>(after selecting words):</em>");
			var p_word= document.createElement("span");
			p_word.innerText=words[i].innerText+" ";
			printbtn.appendChild(p_word);
			words[i].style.display="none";
			console.log(I-1);
			I-=1
			if(I==0){
					document.querySelector(".check_sen").style.display="block";
				}
			}

		}
	
}

//function for reforming the sentence

var reform=document.querySelector(".experiment .reform");
reform.onclick=function(){
	var formed_sen=document.querySelector(".formed_sen_message");
	document.querySelector(".check_sen_res").innerHTML="";
	document.querySelector(".check_sen").style.display="none";
	document.querySelector(".get_correct").style.display="none";
	document.querySelector(".get_correct").style.display="none";
	document.querySelector(".get_correct").innerText="GET CORRECT SENTENCE";
	document.querySelector(".right_answers").innerText="";
	formed_sen.innerHTML="";
		if(options.value == "eng")
			/*alert("eng");*/
			generate_rand_words(List,"eng",0);
		else if(options.value== "hin")
			// alert(List);
		generate_rand_words(List,"hin",0);
	this.style.display="none";
}
 //function to add functionality for check the sentence
var check_sentence=document.querySelector(".check_sen");
var check_sentence_res=document.querySelector(".check_sen_res");
var correct_answers;
check_sentence.onclick=function(){
		if(options.value=="eng" ){
			if(List_eng.includes(printbtn.innerText)){
				
				check_sentence_res.innerHTML="<strong style='color: green;font-size:36px; margin-left:35%'>Right answer!!! </strong>";
			}
			else{
				check_sentence_res.innerHTML="<strong style='color: red;font-size:36px; margin-left:35% '>Wrong answer!!! </strong>";
				document.querySelector(".get_correct").style.display="block";
			}
			correct_answers=List_eng;
		}
		else if(options.value=="hin"){
			if(List_hin.includes(printbtn.innerText)){
				
				check_sentence_res.innerHTML="<strong style='color: green;font-size:36px; margin-left:35%'>Right answer!!!</strong>";
			}
			else{
				check_sentence_res.innerHTML="<strong style='color: red;font-size:36px; margin-left:35% '>Wrong answer!!! </strong>";
				document.querySelector(".get_correct").style.display="block";	
			}
			correct_answers=List_hin;
		}	
}

//function to get correct answers upon a wrong try


var get_correct_sen=document.querySelector(".get_correct");
get_correct_sen.onclick=function (){
	
	var inner_message=get_correct_sen.innerText;
	var corr_disp="";
	var right_answers=document.querySelector(".right_answers");
	for(i of correct_answers){
			corr_disp+=i+"\n";
			
	}
	if(inner_message=="GET CORRECT SENTENCE" || inner_message=="GET ANSWERS"){
		document.querySelector(".get_correct").innerText="Hide The correct sentence";
			var h2= document.createElement("h2");
			h2.innerHTML="<h2 style='color: green'>Correct answers</h2>";
			right_answers.appendChild(h2);
			var p_answers=document.createElement("p");
			p_answers.innerText=corr_disp
			right_answers.appendChild(p_answers);
			right_answers.style.display="block";
	}
	if(inner_message=="Hide The correct sentence"){
		document.querySelector(".get_correct").innerText="GET ANSWERS";
		while (right_answers.hasChildNodes()) {  
		  right_answers.removeChild(right_answers.firstChild);
		}
	right_answers.style.display="none";
	}
};

