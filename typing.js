alert("This project is not for mobile phone or similar devices");

let wordList=["life","had","many","which","read","close","let","sea","did","number","more","feet","great","only","group","Dhaka","side","eat","letter","give","but","they","it","well","us","later","has","water","take","you","large","down","face","try","or","time","mother","spell","song","old","look","come","can","food","and","every","far","book","back","him","why","so","came","when","his","white","them","in","along","idea","rellay","big","is","say","until","seem","change","call","end","quite","the","began","about","last","set","hard","stop","me","kind","obey","are","over","different","be","both","often","once","talk","start","way","another","good","use","study","my","we","still","above","as","sound","under","said","level","example","next","while","little","always","carry","land","an","miss","right","eye","list","into","follow","not","point","before","after","around","think","up","name","story","add","what","too","home","know","at","because","answer","high","their","went","two","see","one","want","where","girl","enough","found","most","river","America","mile","go","school","do","must","saw","no","here","off","together","will","soon","never","run"];
console.log(wordList.length);
function showingWord(wordList){
    let list=[],x;
    for(i=0;i<22;i++){
        list.push(wordList[Math.ceil(Math.random()*161)]);
    }
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
}


document.addEventListener('keydown',event=>{
    if(document.getElementById("textBox").value.trim()==findList2[0] && character==0){
        wpm();
        character++;
    }
    
    word.push(event.key);
    if(event.key==" "){
        if(findList[w]==undefined) w++;
        if(findList[w]==document.getElementById("textBox").value.trim()) {
            count++;
            findList[w]=`<span class="spanColor1">${findList[w]}</span>`;
        }
        else{
            findList[w]=`<span class="spanColor2">${findList[w]}</span>`;
        }
        document.getElementById("textBox").value="";
        if(w==21) {
            findList=showingWord(wordList);
            w=-1;
        }
        document.getElementById("showText").innerHTML=findList.join(" ");
        console.log(document.getElementById("showText").innerHTML);     
        w++;
    }
},false);

function wpm(){
    startBoxTime=setInterval(minusTime,1000);

    function minusTime() {
        l--;
        document.getElementById("startBox").innerHTML=l; 
        if(l==0) {
            clearInterval(startBoxTime);
            console.log(count);
            document.getElementById("showWpm").innerHTML+=document.getElementById("idBox").value+" <span class=\"spanColor1\">"+(count+5)+"</span> <span class=\"spanColor2\">WPM</span><br>";
        }
    }
}
