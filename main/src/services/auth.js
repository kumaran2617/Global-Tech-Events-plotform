import { apiRequest } from './api'

async function login(credentials) {
  return apiRequest('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  })
}

async function signup(payload) {
  return apiRequest('/auth/signup', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

function logout() {
  return Promise.resolve({ success: true })
}

export { login, signup, logout }
