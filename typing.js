/*
let wordList=["eight","world","class","have","life","had","many","which","read","close","let","mist","cse","sea","did","number","more","feet","great","only","group","Dhaka","side","eat","letter","give","but","they","it","well","us","later","has","water","take","you","large","down","face","try","or","time","mother","spell","song","old","look","come","can","food","and","every","far","book","back","him","why","so","came","when","his","white","them","in","along","idea","really","big","is","say","until","seem","change","call","end","quite","the","began","about","last","set","hard","stop","me","kind","obey","are","over","different","be","both","often","once","talk","start","way","another","good","use","study","my","we","still","above","as","sound","under","said","level","example","next","while","little","always","carry","land","an","miss","right","eye","list","into","follow","not","point","before","after","around","think","up","name","story","add","what","too","home","know","at","because","answer","high","their","went","two","see","one","want","where","girl","enough","found","most","river","Comilla","mile","go","school","do","must","saw","no","here","off","together","will","soon","never","run","ass","ask","any","box","boy","bye","cow","cup","del","dot","fat","fan","fit","fly","foe","fox","fry","gas","fun","fix","hit","hub","hue","ill","lay","lie","leg","new","pay","pen","pet","tea","tip","yet","ride","race","cold","stay","been","bank","chat","each","evil","even","fair","feel","fine","gone","hear","bowl","born","bone","body","burn","bill","bell","bush","busy","code","data","date","dawn","door","disk","dual","ever","else","fish","falt","flow","full","fuel","from","fund","gear","file","hill","hall","harm","inch","lack","lane","knew","iron","item","lost","meet","push","rear","rank","real","pull","poor","plus","plot","pipe","rate","sell","send","self","seek","save","salt","rose","root","roll","step","tank","tape","tech","task","tend","tone","tony","town","tool","wait","wake","walk","wage","warm","wash","wave","wood"];
*/
let wordList=["might","could","he","eight","world","class","have","life","had","many","which","read","close","let","sea","did","number","more","feet","great","only","group","Dhaka","side","eat","letter","give","but","they","it","well","us","later","has","water","take","you","large","down","face","try","or","time","mother","spell","song","old","look","come","can","food","and","every","far","book","back","him","why","so","came","when","his","white","them","in","along","idea","really","big","is","say","until","seem","change","call","end","quite","the","began","about","last","set","hard","stop","me","kind","obey","are","over","different","be","both","often","once","talk","start","way","another","good","use","study","my","we","still","above","as","sound","under","said","level","example","next","while","little","always","carry","land","an","miss","right","mist","cse","eye","list","into","follow","not","point","before","after","around","think","up","name","story","add","what","too","home","know","at","because","answer","high","their","went","two","see","one","want","where","girl","enough","found","most","river","Comilla","mile","go","school","do","must","saw","no","here","off","together","will","soon","never","run"];
let wordListLength=wordList.length;

function showingWord(wordList){
    let list=[],i;
    for(i=0;i<22;i++){
        list.push(wordList[Math.ceil(Math.random()*(170))]);
    }
    return list;
}
let findList=showingWord(wordList);
let findList2=findList.join(" ");
document.getElementById("showText").innerHTML=findList2;
let startBoxTime;
let l=60;
let word=[];
let w=0,count=0,character=0,cCount=0;
let bar=1;
let bar2=1;
let bar3=1;
let obCount=0;
let merit=[];
document.getElementById("startBox").addEventListener ("click", 
()=>{
    if(document.getElementById("startBox").style.color=="white" || bar2==1){
        document.getElementById("startBox").style.color=`rgba(0, 118, 253, 0.0)`;
        bar2=0;
    }
    else document.getElementById("startBox").style.color="white";
},false);

//when restart mist icon is clicked
function openCloseBar(){
    window.open('https://mist.ac.bd', '_blank')
}


//When merit button is clicked
document.getElementById("merit").addEventListener("click", 
()=>{
    document.getElementById("meritShow").style.display="block";
    let bych = merit.slice(0);
    bych.sort(function(a,b) {
        return b.ch - a.ch;
    });
    for(let i of bych){
        obCount++;
        document.getElementById("persons").innerHTML+=`<div class="meritPerson">${obCount}. ${i.name}  <span class="wpmMerit">(${i.wordPM} WPM)</span></div>`;
    }
    obCount=0;
},false);

//When closeButton is clicked
document.getElementById("closeButton").addEventListener("click", 
()=>{
    document.getElementById("meritShow").style.display="none";
    
    document.getElementById("persons").innerHTML=`<div class="meritPerson" style="margin-top:60px;border-bottom:0px;"></div>`;
},false);

//Showing words in the box
function textShowing(){
    findList=showingWord(wordList);
    findList2=findList.join(" ");
    document.getElementById("showText").innerHTML=findList.join(" ");
    startBoxTime;
    l=60;
    word=[];
    w=0;
    count=0;
    cCount=0;
    character=0;
    document.getElementById("textBox").value="";
    document.getElementById("startBox").innerHTML=l;
    clearInterval(startBoxTime);
}

//when a button form keyboard is pressed
document.addEventListener('keydown',event=>{
    if(document.getElementById("textBox").value.trim()!="" && character==0){
        wpm();
        character++;
    }
    
    word.push(event.key);

    if(event.key==" " && document.getElementById("textBox").value.trim()!=""){
        if(findList[w]==undefined) w++;
        if(findList[w]==document.getElementById("textBox").value.trim()) {
            count++;
            cCount+=findList[w].length;
            findList[w]=`<span class="spanColor1">${findList[w]}</span>`;
        }
        else{
            findList[w]=`<span class="spanColor2">${findList[w]}</span>`;
        }
        document.getElementById("textBox").value="";
        if(w==findList.length -1 ) {
            findList=showingWord(wordList);
            w=-1;
        }
        document.getElementById("showText").innerHTML=findList.join(" ");     
        w++;
    }
},false);

//Showing one minute result (wpm) from typing
function wpm(){
    startBoxTime=setInterval(minusTime,1000);

    function minusTime() {
        l--;
        document.getElementById("startBox").innerHTML=l; 
        if(l==0) {
            clearInterval(startBoxTime);
            merit.push({name: document.getElementById("idBox").value, ch: cCount, wordPM: count});
            document.getElementById("showWpm").innerHTML+=`<span class="wpmValue">${document.getElementById("idBox").value}</span> <span class="spanColor1">${count} </span> <span class="spanColor2">WPM</span> <span class="spanColor1">${cCount}</span> <span class="spanColor2">Character</span><br>`;
        }
    }
}

