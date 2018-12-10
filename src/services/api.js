import http from '@/utils/http'

export function login () {
  return http.get('/login')
}

export function logout() {
  return http.get('/logout')
}