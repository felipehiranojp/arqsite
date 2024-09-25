from django.shortcuts import render
from django.http import HttpResponse


def success(request):
	return render(request, 'success.html')

def cancel(request):
	return render(request, 'cancel.html')
def estilo(request):
	return render(request, 'estilo.html')
def portifolio(request):
	return render(request, 'portifolio.html')
def redes(request):
	return render(request, 'redes.html')

def calcula_quiz(request):
    #SESSIONS SESSIONS SESSIONS SESSIONS 
    session = request.session
    inicializador = request.session.get('inicializador')
    if inicializador == 0:
        session['camp'] = 0
        session['clas'] = 0
        session['esca'] = 0
        session['indu'] = 0
        session['mini'] = 0
        session['mode'] = 0
        session['retr'] = 0
        session['vint'] = 0
        session['inicializador'] = 1
        
    camp = request.session.get('camp')
    clas = request.session.get('clas')
    esca = request.session.get('esca')
    indu = request.session.get('indu')
    mini = request.session.get('mini')
    mode = request.session.get('mode')
    retr = request.session.get('retr')
    vint = request.session.get('vint')

    camp_form = int(request.GET.get('inlineCheckbox1',0))
    clas_form = int(request.GET.get('inlineCheckbox2',0))
    esca_form = int(request.GET.get('inlineCheckbox3',0))
    indu_form = int(request.GET.get('inlineCheckbox4',0))
    mini_form = int(request.GET.get('inlineCheckbox5',0))
    mode_form = int(request.GET.get('inlineCheckbox6',0))
    retr_form = int(request.GET.get('inlineCheckbox7',0))
    vint_form = int(request.GET.get('inlineCheckbox8',0))

    session['camp'] = camp + camp_form
    session['clas'] = clas + clas_form
    session['esca'] = esca + esca_form
    session['indu'] = indu + indu_form
    session['mini'] = mini + mini_form
    session['mode'] = mode + mode_form
    session['retr'] = retr + retr_form
    session['vint'] = vint + vint_form
    
    camp = request.session.get('camp')
    clas = request.session.get('clas')
    esca = request.session.get('esca')
    indu = request.session.get('indu')
    mini = request.session.get('mini')
    mode = request.session.get('mode')
    retr = request.session.get('retr')
    vint = request.session.get('vint')
    
    print(camp)
    print(clas)
    print(esca)
    print(indu)
    print(mini)
    print(mode)
    print(retr)
    print(vint)
    
    resposta = [camp,clas,esca,indu,mini,mode,retr,vint]
    
    return (resposta)

def quiz1(request):
    session = request.session
    session['inicializador']=0

    return render(request,'quiz1.html')
def quiz2(request):
    calcula_quiz(request)
    return render(request,'quiz2.html')
def quiz3(request):
    calcula_quiz(request)
    return render(request,'quiz3.html')
def quiz4(request):
    calcula_quiz(request)
    return render(request,'quiz4.html')
def quiz5(request):
    calcula_quiz(request)
    return render(request,'quiz5.html')
def quiz6(request):
    calcula_quiz(request)
    return render(request,'quiz6.html')
def quiz7(request):
    calcula_quiz(request)
    return render(request,'quiz7.html')
def quiz8(request):
    calcula_quiz(request)
    return render(request,'quiz8.html')
def quiz9(request):
    resposta = calcula_quiz(request)
    lista = ['camp','clas','esca','indu','mini','mode','retr','vint']
    lista2 = ['campestre','clássico','escandinavo','industrial','minimalista','moderno','retro','vintage']
    
    maior = max(resposta)
    indice= resposta.index(maior)
    maior_estilo = lista[indice]
    maior_estilo2 = lista2[indice]

	
    #Dados para o banco de dados


    return render(request,'quiz10_resposta.html',{'maior_estilo':maior_estilo})


