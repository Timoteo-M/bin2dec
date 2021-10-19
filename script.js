function converter(){
    var bin = document.getElementById("bin").value;
    var decimal = 0;


    if (bin === '') return alert('Eh preciso digitar algo');
    bin.split('').map((char) => {
        if (char !== '0' && char !== '1') return alert('Por favor, digite um número binário');
        for(let i = bin.length-1; i >= 0; i--){
            decimal += parseInt(bin.charAt(i)) * Math.pow(2, bin.length-1-i);
        }
    
        document.getElementById("resposta").innerHTML = decimal;
    });


}