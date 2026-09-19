const API_BASE_URL = "https://api.webqenzo.com/api";

const getToken = () => {
  return localStorage.getItem(
    "webqenzo_admin_token"
  );
};

const request = async (
  endpoint,
  options = {}
) => {
  const token = getToken();

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(
    `${API_BASE_URL}${endpoint}`,
    {
      ...options,
      headers,
    }
  );

  let data;

  try {
    data = await response.json();
  } catch {
    throw new Error(
      "Invalid server response"
    );
  }

  if (!response.ok) {
    throw new Error(
      data?.message ||
        "Something went wrong"
    );
  }

  return data;
};

// ======================================================
// AUTH
// ======================================================

export const adminLogin = async (
  email,
  password
) => {
  const data = await request(
    "/admin/login",
    {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  if (data?.data?.token) {
    localStorage.setItem(
      "webqenzo_admin_token",
      data.data.token
    );

    localStorage.setItem(
      "webqenzo_admin",
      JSON.stringify(
        data.data.admin
      )
    );
  }

  return data;
};

export const getMe = () =>
  request("/admin/me");

export const getDashboard = () =>
  request("/admin/dashboard");

export const adminLogout = () => {
  localStorage.removeItem(
    "webqenzo_admin_token"
  );

  localStorage.removeItem(
    "webqenzo_admin"
  );
};

export const getStoredAdmin = () => {
  try {
    return JSON.parse(
      localStorage.getItem(
        "webqenzo_admin"
      ) || "null"
    );
  } catch {
    return null;
  }
};

export const isAdminLoggedIn = () =>
  Boolean(
    localStorage.getItem(
      "webqenzo_admin_token"
    )
  );

// ======================================================
// QUOTES / LEADS
// ======================================================

export const getQuotes = () =>
  request("/admin/quotes");

export const getDeletedQuotes = () =>
  request("/admin/quotes/deleted");

export const createQuote = (
  payload
) =>
  request("/admin/quotes", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const updateQuoteStatus = (
  id,
  status
) =>
  request(
    `/admin/quotes/${id}/status`,
    {
      method: "PATCH",
      body: JSON.stringify({
        status,
      }),
    }
  );

export const addQuoteComment = (
  id,
  message
) =>
  request(
    `/admin/quotes/${id}/comments`,
    {
      method: "POST",
      body: JSON.stringify({
        message,
      }),
    }
  );

export const assignQuote = (
  id,
  assignedTo
) =>
  request(
    `/admin/quotes/${id}/assign`,
    {
      method: "PATCH",
      body: JSON.stringify({
        assignedTo:
          assignedTo || null,
      }),
    }
  );

export const deleteQuote = (id) =>
  request(
    `/admin/quotes/${id}`,
    {
      method: "DELETE",
    }
  );

export const restoreQuote = (id) =>
  request(
    `/admin/quotes/${id}/restore`,
    {
      method: "PATCH",
    }
  );

// ======================================================
// CONTACTS
// ======================================================

export const getContacts = () =>
  request("/admin/contacts");

export const getDeletedContacts = () =>
  request("/admin/contacts/deleted");

export const updateContactStatus = (
  id,
  status
) =>
  request(
    `/admin/contacts/${id}/status`,
    {
      method: "PATCH",
      body: JSON.stringify({
        status,
      }),
    }
  );

export const addContactComment = (
  id,
  message
) =>
  request(
    `/admin/contacts/${id}/comments`,
    {
      method: "POST",
      body: JSON.stringify({
        message,
      }),
    }
  );

export const deleteContact = (id) =>
  request(
    `/admin/contacts/${id}`,
    {
      method: "DELETE",
    }
  );

export const restoreContact = (id) =>
  request(
    `/admin/contacts/${id}/restore`,
    {
      method: "PATCH",
    }
  );

// ======================================================
// TEAM
// ======================================================

export const getTeamMembers = () =>
  request("/admin/team");

export const createTeamMember = (
  payload
) =>
  request("/admin/team", {
    method: "POST",
    body: JSON.stringify(
      payload
    ),
  });

export const updateTeamMember = (
  id,
  payload
) =>
  request(
    `/admin/team/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify(
        payload
      ),
    }
  );

export const deleteTeamMember = (
  id
) =>
  request(
    `/admin/team/${id}`,
    {
      method: "DELETE",
    }
  );
