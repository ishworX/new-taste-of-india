from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    data = {
        'title' : 'Homepage',
        'bdata' : 'passing data.',
    }    
    return render(request, "index.html", data)