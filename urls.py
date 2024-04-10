from django.urls import path, include  

urlpatterns = [
    path('', include('chatbot.urls')), 
    path('login/', include('django.contrib.auth.urls')),  # Use Django's built-in login
    path('registration/', include('django.contrib.auth.urls')),  # Use Django's built-in registration
]
