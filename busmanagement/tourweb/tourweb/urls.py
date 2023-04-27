
from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework_swagger.views import get_swagger_view

from rest_framework import permissions
from rest_framework.authtoken.views import obtain_auth_token
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
schema_view = get_schema_view(
    openapi.Info(
        title="Tours Galaxy API",
        default_version='v1',
        description="Welcome to the tour management API page",
        # terms_of_service="https://www.jaseci.org",
        contact=openapi.Contact(email="thanhdatledang@gmail.com"),
        # license=openapi.License(name="Awesome IP"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path('api/', include('tours.urls')),
    path('auth/', obtain_auth_token),

    re_path(r'^doc(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('doc/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('admin/', admin.site.urls),
    re_path(r'^ckeditor/', include('ckeditor_uploader.urls'))
]

# pip install drf-yasg
# pip install django-rest-swagger
