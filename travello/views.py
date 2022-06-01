from django.shortcuts import render
from .models import Destination

# Create your views here.

def index(request):
    dest1 = Destination()
    dest1.name = 'Mumbai'
    dest1.desc = "The city that never sleeps."
    dest1.img = 'destination_1.jpg'
    dest1.price = 899
    dest1.offer = True
    
    dest2 = Destination()
    dest2.name = "Hyderabaad"
    dest2.desc = "The city with nice briyaniii."
    dest2.img = 'destination_2.jpg'
    dest2.price = 999
    dest2.offer = False
    
    dest3 = Destination()
    dest3.name = "San Francisco"
    dest3.desc = "The city in Umeerica very very nice city."
    dest3.img = 'destination_3.jpg'
    dest3.price = 1099
    dest3.offer = False
    
    dests = [dest1, dest2, dest3]
    
    return render(request, "index.html", {'dests' : dests})
    