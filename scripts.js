function calcular(){

    // tranforma as variaveis sessionStorage em variaveis e adiciona +1
    var camp = parseInt(sessionStorage.getItem("campestre")); camp =camp+1;
    var clas = parseInt(sessionStorage.getItem("classica")); clas =clas+1;
    var esca = parseInt(sessionStorage.getItem("escandinavo")); esca =esca+1;
    var indu = parseInt(sessionStorage.getItem("industrial")); indu =indu+1;
    var mini = parseInt(sessionStorage.getItem("minimalista")); mini =mini+1;
    var mode = parseInt(sessionStorage.getItem("moderna")); mode =mode+1;
    var retr = parseInt(sessionStorage.getItem("retro")); retr =retr+1;
    var vint = parseInt(sessionStorage.getItem("vintage")); vint =vint+1;
    

    var check1 = document.getElementById("checkbox1");//atribui uma variaveis ao botao checkbox
    var check2 = document.getElementById("checkbox2");
    var check3 = document.getElementById("checkbox3");
    var check4 = document.getElementById("checkbox4");
    var check6 = document.getElementById("checkbox6");
    var check7 = document.getElementById("checkbox7");
    var check8 = document.getElementById("checkbox8");
    var check9 = document.getElementById("checkbox9");

    if (check1.checked){var camp = sessionStorage.setItem("campestre", camp);};
    if (check2.checked){var clas = sessionStorage.setItem("classica", clas);};
    if (check3.checked){var esca = sessionStorage.setItem("escandinavo", esca);};
    if (check4.checked){var indu = sessionStorage.setItem("industrial", indu);};
    if (check6.checked){var mini = sessionStorage.setItem("minimalista", mini);};
    if (check7.checked){var mode = sessionStorage.setItem("moderna", mode);};
    if (check8.checked){var retr = sessionStorage.setItem("retro", retr);};
    if (check9.checked){var vint = sessionStorage.setItem("vintage", vint);};


    var tela = document.getElementById('teste'); //escreve os valores das variaveis na tela de teste
    tela.innerHTML=( 'campestre= '+sessionStorage.getItem("campestre")+'<br>Classica = '+ sessionStorage.getItem("classica")+'<br>Escandinavo = '+ sessionStorage.getItem("escandinavo")+'<br>Industrial = '+ sessionStorage.getItem("industrial")+'<br>Minimalista = '+ sessionStorage.getItem("minimalista")+'<br>Moderna = '+ sessionStorage.getItem("moderna")+'<br>Retro = '+ sessionStorage.getItem("retro")+'<br>Vintage = '+ sessionStorage.getItem("vintage"));
    
    
}
