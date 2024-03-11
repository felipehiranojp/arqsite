function calcular(pagina){
    //mudar para a página seguinte
    window.location="quiz"+pagina+".html"

    // tranforma as variaveis sessionStorage em variaveis e adiciona +1
    var camp = parseInt(sessionStorage.getItem("campestre")); camp =camp+1;
    var clas = parseInt(sessionStorage.getItem("classica")); clas =clas+1;
    var esca = parseInt(sessionStorage.getItem("escandinavo")); esca =esca+1;
    var indu = parseInt(sessionStorage.getItem("industrial")); indu =indu+1;
    var mini = parseInt(sessionStorage.getItem("minimalista")); mini =mini+1;
    var mode = parseInt(sessionStorage.getItem("moderna")); mode =mode+1;
    var retr = parseInt(sessionStorage.getItem("retro")); retr =retr+1;
    var vint = parseInt(sessionStorage.getItem("vintage")); vint =vint+1;
    

    var check1 = document.getElementById("checkbox1");//atribui uma variavel ao botao checkbox
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

function resposta(){

campestreDescricao=['O estilo campestre, também conhecido como rústico, é inspirado na vida rural e na natureza. Ele incorpora elementos acolhedores e confortáveis, como madeira natural, tecidos leves e estampas florais. Móveis e acessórios geralmente possuem uma sensação de artesanato e nostalgia.'];

campestreCaracteristica=['Madeira rústica, cores suaves e neutras, estampas florais, móveis antigos ou com aparência desgastada, elementos naturais (como pedra e plantas), tecidos naturais (linho, algodão).'];

classicaDescricao= [' O estilo clássico é atemporal e elegante, inspirado nas antigas tradições europeias. Ele apresenta móveis refinados, detalhes ornamentados e uma atmosfera luxuosa. As cores são frequentemente neutras e suaves, com toques de cores mais ricas e vibrantes.'];

classicaCaracteristica= ['Móveis de madeira escura ou dourada, tecidos ricos (veludo, seda), detalhes ornamentados (molduras, entalhes), cores neutras com toques de cores vivas, simetria e equilíbrio na disposição dos móveis.'];

escandinavoDescricao=[' O estilo escandinavo é conhecido por sua simplicidade, funcionalidade e minimalismo. Ele valoriza a luz natural, espaços arejados e materiais naturais. Os ambientes escandinavos são caracterizados por linhas limpas, cores claras e uma sensação de serenidade.'];

escandinavoCaracteristica= ['Madeira clara, tons neutros (branco, cinza, bege), móveis funcionais e de design simples, poucos acessórios decorativos, abundância de luz natural, texturas naturais (couro, lã).'];

industrialDescricao= ['O estilo industrial tem suas raízes em espaços industriais convertidos em residências. Ele apresenta elementos como tijolos expostos, tubulações visíveis e materiais robustos como metal e concreto. A estética é urbana e moderna, com uma sensação de crueza e autenticidade.'];

industrialCaracteristica=['Tijolos expostos, metal (ferro, aço), concreto, tubulações aparentes, móveis de estilo vintage ou retro, iluminação suspensa (luminárias industriais), paleta de cores neutras e escuras.'];

minimalistaDescricao= ['O estilo minimalista foca na simplicidade, na limpeza e na redução ao essencial. Ele elimina o excesso de decoração e mantém apenas o necessário para criar espaços calmos e descomplicados. Os ambientes minimalistas são caracterizados por linhas simples, cores neutras e uma sensação de ordem.'];

minimalistaCaracteristica= ['Móveis de linhas simples, espaços vazios e desobstruídos, cores neutras (branco, preto, cinza), materiais minimalistas (vidro, metal, plástico), poucos acessórios, iluminação suave e indireta.'];

modernaDescricao= ['O estilo moderno é caracterizado pela inovação, pelo design contemporâneo e pela ênfase na funcionalidade. Ele incorpora materiais inovadores, formas geométricas e tecnologia avançada. Os ambientes modernos são limpos, elegantes e adaptáveis às necessidades dos ocupantes.'];

modernaCaracteristica=['Móveis de design contemporâneo, formas geométricas simples, materiais modernos (vidro, metal, plástico), cores vivas e contrastantes, linhas limpas e definidas, tecnologia integrada à decoração.'];

retroDescricao= ['O estilo retrô busca inspiração nas décadas passadas, especialmente nas décadas de 1950, 1960 e 1970. Ele apresenta elementos de design vintage, cores ousadas e estampas geométricas. Os ambientes retrô evocam uma sensação de nostalgia e diversão.'];

retroCaracteristica= ['Móveis vintage ou inspirados em décadas passadas, cores vibrantes (laranja, amarelo, verde), estampas geométricas e psicodélicas, acessórios retro (telefones antigos, toca-discos), iluminação de estilo antigo.'];

vintageDescricao=['O estilo vintage incorpora elementos de décadas passadas, mas de uma forma mais sutil e refinada do que o estilo retrô. Ele combina peças antigas ou de segunda mão com elementos contemporâneos para criar uma estética eclética e única. Os ambientes vintage são caracterizados por charme, personalidade e história.'];

vintageCaracteristica= ['Peças antigas ou vintage, mistura de estilos e épocas, cores suaves e desbotadas, móveis restaurados, acessórios vintage (espelhos, quadros, relógios), elementos de época específicos (art déco, art nouveau, mid-century).'];

    var camp = parseInt(sessionStorage.getItem("campestre")); 
    var clas = parseInt(sessionStorage.getItem("classica")); 
    var esca = parseInt(sessionStorage.getItem("escandinavo"));
    var indu = parseInt(sessionStorage.getItem("industrial")); 
    var mini = parseInt(sessionStorage.getItem("minimalista")); 
    var mode = parseInt(sessionStorage.getItem("moderna")); 
    var retr = parseInt(sessionStorage.getItem("retro"));
    var vint = parseInt(sessionStorage.getItem("vintage")); 

    var grupo = [camp,clas,mini,mode,retr,vint,esca,indu];
    var estilos = ['campestre','classico','minimalista','moderno','retro','vintage','escandinavo','industrial']
    var escolhido =0
    var maior =grupo[0];
for (i=1;i<=8;i++){
    if(maior < grupo[i]){
        maior = grupo[i];
        }}
        grande=0;
for (i=1;i<=8;i++){
    if (grupo[i] == maior){
        escolhido = i ;           
}    
}


var desc = window.document.getElementById('descricao');
var cards4 = window.document.getElementById('cards4');
var cara = window.document.getElementById('caracteristicas');
estiloEscolhido= toString(estilos[escolhido])



if (String(estilos[escolhido]) == 'campestre'){
    document.getElementById(perfil.innerHTML=(estilos[escolhido].toUpperCase()))
    document.getElementById("cards3").innerHTML="<img src='escolha_final/escolha_camp1.jpg' width=90% >";
    desc.innerHTML=(campestreDescricao);
    document.getElementById("cards4").innerHTML="<img src='escolha_final/escolha_camp2.png' width=90% >";
    cara.innerHTML=(campestreCaracteristica);
    }
if (String(estilos[escolhido]) == 'classico'){
    document.getElementById(perfil.innerHTML=(estilos[escolhido].toUpperCase()))
    document.getElementById("cards3").innerHTML="<img src='escolha_final/escolha_clas1.jpg' width=100% height: auto;>";
    desc.innerHTML=(classicaDescricao);
    document.getElementById("cards4").innerHTML="<img src='escolha_final/escolha_clas2.jpg' width=90% >";
    cara.innerHTML=(classicaCaracteristica);
} 
if (String(estilos[escolhido]) == 'escandinavo'){
    document.getElementById(perfil.innerHTML=(estilos[escolhido].toUpperCase()))
    document.getElementById("cards3").innerHTML="<img src='escolha_final/escolha_esca1.jpg' width=100% height: auto;>";
    desc.innerHTML=(escandinavoDescricao);
    document.getElementById("cards4").innerHTML="<img src='escolha_final/escolha_esca2.png' width=90% >";
    cara.innerHTML=(escandinavoCaracteristica);
    } 
if (String(estilos[escolhido]) == 'industrial'){
    document.getElementById(perfil.innerHTML=(estilos[escolhido].toUpperCase()))
    document.getElementById("cards3").innerHTML="<img src='escolha_final/escolha_indu1.png' width=100% height: auto;>";
    desc.innerHTML=(industrialDescricao);
    document.getElementById("cards4").innerHTML="<img src='escolha_final/escolha_indu2.jpg' width=90% >";
    cara.innerHTML=(industrialCaracteristica);
    } 
if (String(estilos[escolhido]) == 'minimalista'){
    document.getElementById(perfil.innerHTML=(estilos[escolhido].toUpperCase()))
    document.getElementById("cards3").innerHTML="<img src='escolha_final/escolha_mini1.jpg' width=100% height: auto;>";
    desc.innerHTML=(minimalistaDescricao);
    document.getElementById("cards4").innerHTML="<img src='escolha_final/escolha_mini2.jpg' width=90% >";
    cara.innerHTML=(minimalistaCaracteristica);
    } 
if (String(estilos[escolhido]) == 'moderno'){
    document.getElementById(perfil.innerHTML=(estilos[escolhido].toUpperCase()))
    document.getElementById("cards3").innerHTML="<img src='escolha_final/escolha_moderno1.jpg' width=100% height: auto;>";
    desc.innerHTML=(modernaDescricao);
    document.getElementById("cards4").innerHTML="<img src='escolha_final/escolha_moderno2.jpg' width=90% >";
    cara.innerHTML=(modernaCaracteristica);
    } 
if (String(estilos[escolhido]) == 'retro'){
    document.getElementById(perfil.innerHTML=('RETRÔ'));
    document.getElementById("cards3").innerHTML="<img src='escolha_final/escolha_retro1.jpg' width=100% height: auto;>";
    desc.innerHTML=(retroDescricao);
    document.getElementById("cards4").innerHTML="<img src='escolha_final/escolha_retro2.jpg' width=90% >";
    cara.innerHTML=(retroCaracteristica);
    } 
if (String(estilos[escolhido]) == 'vintage'){
    document.getElementById(perfil.innerHTML=(estilos[escolhido].toUpperCase()))
    document.getElementById("cards3").innerHTML="<img src='escolha_final/escolha_vintage2.jpg' width=100% height: auto;>";
    desc.innerHTML=(vintageDescricao);
    document.getElementById("cards4").innerHTML="<img src='escolha_final/escolha_vintage1.jpg' width=90% >";
    cara.innerHTML=(vintageCaracteristica);
    }
}