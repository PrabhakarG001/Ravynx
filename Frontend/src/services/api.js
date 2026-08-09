const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Helper method for HTTP requests with Authorization header
async function request(endpoint, options = {}) {
  const token = localStorage.getItem('ravynx_token');
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // Remove Content-Type if uploading FormData
  if (options.body instanceof FormData) {
    delete headers['Content-Type'];
  }

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `API error (${response.status})`);
    }

    return data;
  } catch (error) {
    console.error(`[API Call Failed] ${endpoint}:`, error.message);
    throw error;
  }
}

// Auth Services
export const loginApi = (credentials) => request('/auth/login', { method: 'POST', body: JSON.stringify(credentials) });
export const registerApi = (userData) => request('/auth/register', { method: 'POST', body: JSON.stringify(userData) });
export const getMeApi = () => request('/auth/me');
export const updateProfileApi = (profileData) => request('/auth/profile', { method: 'PUT', body: JSON.stringify(profileData) });

// Document Services
export const getDocumentsApi = (filters = {}) => {
  const query = new URLSearchParams(filters).toString();
  return request(`/documents${query ? `?${query}` : ''}`);
};
export const getDocumentByIdApi = (id) => request(`/documents/${id}`);
export const uploadDocumentApi = (formData) => request('/documents/upload', { method: 'POST', body: formData });
export const analyzeDocumentApi = (id) => request(`/documents/${id}/analyze`, { method: 'POST' });
export const updateDocumentStatusApi = (id, statusData) => request(`/documents/${id}/status`, { method: 'PUT', body: JSON.stringify(statusData) });
export const deleteDocumentApi = (id) => request(`/documents/${id}`, { method: 'DELETE' });

// OpenRouter AI Copilot
export const askAiAssistantApi = (promptData) => request('/ai/assistant', { method: 'POST', body: JSON.stringify(promptData) });

// Analytics & Audit
export const getKpisApi = () => request('/analytics/kpis');
export const getAuditLogsApi = () => request('/analytics/audit/logs');

// Team & Settings
export const getTeamMembersApi = () => request('/teams');
export const inviteTeamMemberApi = (memberData) => request('/teams/invite', { method: 'POST', body: JSON.stringify(memberData) });
export const getSettingsApi = () => request('/settings');
export const updateSettingsApi = (settingsData) => request('/settings', { method: 'PUT', body: JSON.stringify(settingsData) });
