let numbers = document.getElementsByTagName("button");
let screen = document.getElementsByClassName("input-num")[0];
let calculate = document.getElementById("hesapla")
let clean = document.getElementById("temizle")
for(var i =0; i<16;i++){
    if(i != 12 && i != 14){
        numbers[i].addEventListener("click", yazdir)
    }

}
function yazdir(){
    screen.value=screen.value + this.value;
}

calculate.addEventListener("click", calc)
function calc(){
   screen.value=eval(screen.value)
}
clean.addEventListener("click" , reset );
function reset (){
    screen.value = " ";
}