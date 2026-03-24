const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'
const usesLocalApi =
  API_BASE_URL.includes('localhost') || API_BASE_URL.includes('127.0.0.1')
const shouldMock = import.meta.env.PROD && usesLocalApi

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function mockResponse(path, options = {}) {
  await wait(450)
  const payload = options.body ? JSON.parse(options.body) : {}

  if (path === '/auth/login' || path === '/auth/signup') {
    return {
      success: true,
      token: 'demo-token',
      user: {
        name: payload.name || payload.fullName || 'Guest',
        email: payload.email || 'guest@example.com',
      },
    }
  }

  if (path === '/api/registrations') {
    return {
      success: true,
      registrationId: `reg_${Date.now()}`,
    }
  }

  if (path === '/api/team-applications') {
    return {
      success: true,
      applicationId: `team_${Date.now()}`,
    }
  }

  return { success: true }
}

async function apiRequest(path, options = {}) {
  if (shouldMock) {
    return mockResponse(path, options)
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  })

  if (!response.ok) {
    const message = await response.text()
    throw new Error(message || 'API request failed')
  }

  return response.json()
}

export { API_BASE_URL, apiRequest }

