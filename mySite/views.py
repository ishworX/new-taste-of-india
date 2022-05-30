import re
from django.http import HttpResponse


def home(request):
    return HttpResponse("<h1> Hello World. </h1> \n This is the homepage.")
    
def aboutMe(request):
    return HttpResponse("<h1> Hello World. </h1> \n This is the page of About Me.")

def services(request):
    return HttpResponse("<h1> Hello World. </h1> \n This is the services page.")