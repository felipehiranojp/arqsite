from django.urls import path
from .  import views
urlpatterns  = [
    
    path("",views.success,name='success'),
    
    path("",views.success,name='success'),
    path("cancel",views.cancel,name='cancel'),
    path("estilo",views.estilo,name='estilo'),
    path("portifolio",views.portifolio,name='portifolio'),
    path("redes",views.redes,name='redes'),
    path("quiz1",views.quiz1,name='quiz1'),
    path("quiz2",views.quiz2,name='quiz2'),
    path("quiz3",views.quiz3,name='quiz3'),
    path("quiz4",views.quiz4,name='quiz4'),
    path("quiz5",views.quiz5,name='quiz5'),
    path("quiz6",views.quiz6,name='quiz6'),
    path("quiz7",views.quiz7,name='quiz7'),
    path("quiz8",views.quiz8,name='quiz8'),
    path("quiz9",views.quiz9,name='quiz9'),
    ]
