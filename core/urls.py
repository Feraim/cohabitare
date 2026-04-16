from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('proyectos/', views.proyectos, name='proyectos'),
    path('servicios/', views.servicios, name='servicios'),
    path('perspectivas/', views.perspectivas, name='perspectivas'),
    path('acerca-de/', views.acerca, name='acerca'),
    path('contacto/', views.contacto, name='contacto'),
]
