from django.http import JsonResponse
from rest_framework.authtoken.models import Token


class TokenMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.path in ['/api/login/', '/api/register/', '/doc/']:
            return self.get_response(request)

        if request.path.startswith('/admin/'):
            # Nếu đường dẫn bắt đầu bằng /admin/ thì không yêu cầu token
            return self.get_response(request)
        if request.path.startswith('/auth/'):
            # Nếu đường dẫn bắt đầu bằng /auth/ thì không yêu cầu token
            return self.get_response(request)

        if 'HTTP_AUTHORIZATION' in request.META:
            try:
                token_key = request.META['HTTP_AUTHORIZATION'].split(' ')[1]
                token = Token.objects.get(key=token_key)
                request.user = token.user
                return self.get_response(request)
            except Token.DoesNotExist:
                return JsonResponse({'error': 'Invalid token'}, status=401)
        else:
            return JsonResponse({'error': 'Token required'}, status=401)
