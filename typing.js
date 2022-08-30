/*
let wordList=["eight","world","class","have","life","had","many","which","read","close","let","sea","did","number","more","feet","great","only","group","Dhaka","side","eat","letter","give","but","they","it","well","us","later","has","water","take","you","large","down","face","try","or","time","mother","spell","song","old","look","come","can","food","and","every","far","book","back","him","why","so","came","when","his","white","them","in","along","idea","really","big","is","say","until","seem","change","call","end","quite","the","began","about","last","set","hard","stop","me","kind","obey","are","over","different","be","both","often","once","talk","start","way","another","good","use","study","my","we","still","above","as","sound","under","said","level","example","next","while","little","always","carry","land","an","miss","right","eye","list","into","follow","not","point","before","after","around","think","up","name","story","add","what","too","home","know","at","because","answer","high","their","went","two","see","one","want","where","girl","enough","found","most","river","Comilla","mile","go","school","do","must","saw","no","here","off","together","will","soon","never","run","ass","ask","any","box","boy","bye","cow","cup","del","dot","fat","fan","fit","fly","foe","fox","fry","gas","fun","fix","hit","hub","hue","ill","lay","lie","leg","new","pay","pen","pet","tea","tip","yet","ride","race","cold","stay","been","bank","chat","each","evil","even","fair","feel","fine","gone","hear","bowl","born","bone","body","burn","bill","bell","bush","busy","code","data","date","dawn","door","disk","dual","ever","else","fish","falt","flow","full","fuel","from","fund","gear","file","hill","hall","harm","inch","lack","lane","knew","iron","item","lost","meet","push","rear","rank","real","pull","poor","plus","plot","pipe","rate","sell","send","self","seek","save","salt","rose","root","roll","step","tank","tape","tech","task","tend","tone","tony","town","tool","wait","wake","walk","wage","warm","wash","wave","wood"];
*/
let wordList=["might","mist","cse","could","he","eight","world","class","have","life","had","many","which","read","close","let","sea","did","number","more","feet","great","only","group","Dhaka","side","eat","letter","give","but","they","it","well","us","later","has","water","take","you","large","down","face","try","or","time","mother","spell","song","old","look","come","can","food","and","every","far","book","back","him","why","so","came","when","his","white","them","in","along","idea","really","big","is","say","until","seem","change","call","end","quite","the","began","about","last","set","hard","stop","me","kind","obey","are","over","different","be","both","often","once","talk","start","way","another","good","use","study","my","we","still","above","as","sound","under","said","level","example","next","while","little","always","carry","land","an","miss","right","eye","list","into","follow","not","point","before","after","around","think","up","name","story","add","what","too","home","know","at","because","answer","high","their","went","two","see","one","want","where","girl","enough","found","most","river","Comilla","mile","go","school","do","must","saw","no","here","off","together","will","soon","never","run"];
let wordListLength=wordList.length;
console.log(wordListLength);
let wordNum;
function showingWord(wordList){
    let list=[],x=0,n,i;
    for(i=0;i<wordListLength;i++){
        n=Math.ceil(Math.random()*(wordListLength-1));
        if(x+(wordList[n].length) > 119) break;
        list.push(wordList[n]);
        x+=wordList[n].length+1;
    }
    wordNum=i-1;
    return list;
}
let findList=showingWord(wordList);
let findList2=findList.join(" ");
document.getElementById("showText").innerHTML=findList2;
let startBoxTime;
let l=60;
let word=[];
let w=0,count=0,character=0;
console.log(findList2);
let bar=1;
let bar2=1;
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
            findList[w]=`<span class="spanColor1">${findList[w]}</span>`;
        }
        else{
            findList[w]=`<span class="spanColor2">${findList[w]}</span>`;
        }
        document.getElementById("textBox").value="";
        if(w==(wordNum)) {
            findList=showingWord(wordList);
            w=-1;
        }
        document.getElementById("showText").innerHTML=findList.join(" ");
        console.log(document.getElementById("showText").innerHTML);     
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
            console.log(count);
            document.getElementById("showWpm").innerHTML+=`<span class="wpmValue">${document.getElementById("idBox").value}</span> <span class="spanColor1">${count+5} </span> <span class="spanColor2">WPM</span><br>`;
        }
    }
}
