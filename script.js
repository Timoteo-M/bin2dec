function converter(){
    var bin = document.getElementById("bin").value;
    var decimal = 0;

    for(let i = bin.length-1; i >= 0; i--){
        decimal += parseInt(bin.charAt(i)) * Math.pow(2, bin.length-1-i);
    }


    document.getElementById("resposta").innerHTML = decimal;
}