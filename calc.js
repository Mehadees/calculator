function display(x){
if(document.getElementById("inp").value==0){
    document.getElementById("inp").value='';
    document.getElementById("inp").value=+x;   
}
else{
    document.getElementById("inp").value+=x;   
}
}

function calc(){

    x=document.getElementById("inp").value;
    y=eval(x);
    document.getElementById("inp").value=y;
    
}
function cleardis(){
    document.getElementById("inp").value=0;
}