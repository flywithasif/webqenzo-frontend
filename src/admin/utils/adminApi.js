const API_BASE_URL = "https://api.webqenzo.com/api";

const getToken = () => {
  return localStorage.getItem("webqenzo_admin_token");
};

const request = async (endpoint, options = {}) => {
  const token = getToken();

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  let data;

  try {
    data = await response.json();
  } catch {
    throw new Error("Invalid server response");
  }

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

// ================================
// AUTH
// ================================

export const adminLogin = async (email, password) => {
  const data = await request("/admin/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (data?.data?.token) {
    localStorage.setItem(
      "webqenzo_admin_token",
      data.data.token
    );

    localStorage.setItem(
      "webqenzo_admin",
      JSON.stringify(data.data.admin)
    );
  }

  return data;
};

export const getMe = () => {
  return request("/admin/me");
};

export const getDashboard = () => {
  return request("/admin/dashboard");
};

export const adminLogout = () => {
  localStorage.removeItem("webqenzo_admin_token");
  localStorage.removeItem("webqenzo_admin");
};

// ================================
// QUOTES
// ================================

export const getQuotes = () => {
  return request("/admin/quotes");
};

export const updateQuoteStatus = (id, status) => {
  return request(`/admin/quotes/${id}/status`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  });
};

export const deleteQuote = (id) => {
  return request(`/admin/quotes/${id}`, {
    method: "DELETE",
  });
};

// ================================
// CONTACTS
// ================================

export const getContacts = () => {
  return request("/admin/contacts");
};

export const updateContactStatus = (id, status) => {
  return request(`/admin/contacts/${id}/status`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  });
};

export const deleteContact = (id) => {
  return request(`/admin/contacts/${id}`, {
    method: "DELETE",
  });
};

// ================================
// TEAM
// ================================

export const getTeamMembers = () => {
  return request("/admin/team");
};

export const createTeamMember = (payload) => {
  return request("/admin/team", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};

export const updateTeamMember = (id, payload) => {
  return request(`/admin/team/${id}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });
};

export const deleteTeamMember = (id) => {
  return request(`/admin/team/${id}`, {
    method: "DELETE",
  });
};

export const isAdminLoggedIn = () => {
  return Boolean(
    localStorage.getItem("webqenzo_admin_token")
  );
};
