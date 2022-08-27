alert("This project is not for mobile phone or similar device");
let wordList=["along","but","what","programming","Bangladesh","Dhaka","city","world","another","three","but","and","out","take","given","next","code","terminal","though","soft","mother","father","sister","brother","however","there","here","studio","back","inflate","remove","handle","without","display","write","page","that","arrow","percent","press","down","bottom","up","font","find","deflect","certain","mouse","event","allow","permission","select","current","different","tab","that","information","called","document","user","random","row","column","animation","timeout","preview","query","outcome","copy","message","multiple","touching","create","which","will","cause","receive","built","something","chapter","process","propagate","fires","window","linux","initialize","action","value","main","dialog","weight","loss","external","inclusive","exclusive","lower","focus","length","ensure","content","presentation","delay","encounter","object","function","suspicious","nothing","attempt","hacking","comments","string","number","text","bollean","greed","dynamic","arguments","refer","parenthesized","group","pattern","match","wrong","right","people","student","college","university","need","topper","means","after","it","used","late","fast","lazy","particular","trial","version","resulting","something","accident","either","neither","else","then","binary","might","obstacle","consume","regular","expression","often","happen","double","concept","chicken","second","left","right","between","character","plural","imagine","real","cannot","word","show","hold","debate","pray","zero","rather","join","split","digital","debug","repetitive","mistake","situation","little","label","whether","auto","standard","probably","example","seeing","few","second","behave","effect","affect","danger","notice","class","routine","immediate","like"];
function showingWord(wordList){
    let list=[],x;
    for(i=0;i<22;i++){
        list.push(wordList[Math.ceil(Math.random()*200)]);
    }
    return list;
}
let findList=showingWord(wordList);
let findList2=findList.join(" ");
document.getElementById("showText").innerHTML=findList.join(" ");
let startBoxTime;
let l=60;
let word=[];
let w=0,count=0,character=0;

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
        if(findList[w]==document.getElementById("textBox").value.trim()) {
            count++;
            findList[w]="<span class=\"spanColor1\">"+findList[w]+"</span>";
        }
        else{
            findList[w]="<span class=\"spanColor2\">"+findList[w]+"</span>";
        }
        document.getElementById("textBox").value="";
        if(w==21) {
            findList=showingWord(wordList);
            w=-1;
        }
        document.getElementById("showText").innerHTML=findList.join(" ");     
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
            document.getElementById("showWpm").innerHTML+=document.getElementById("idBox").value+" "+count+" wpm<br>";
        }
    }
}
