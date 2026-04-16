from django.shortcuts import render

def home(request):
    return render(request, 'core/index.html')

def proyectos(request):
    return render(request, 'core/proyectos.html')

def servicios(request):
    return render(request, 'core/servicios.html')

def perspectivas(request):
    return render(request, 'core/perspectivas.html')

def acerca(request):
    return render(request, 'core/acerca.html')

def contacto(request):
    return render(request, 'core/contacto.html')
