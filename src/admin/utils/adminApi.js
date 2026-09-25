const API_BASE_URL =
  "https://api.webqenzo.com/api";

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
    headers.Authorization =
      `Bearer ${token}`;
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

// ======================================================
// QUOTES
// ======================================================

export const getQuotes = () =>
  request("/admin/quotes");

export const getColdQuotes = () =>
  request("/admin/quotes/cold");

export const getDeletedQuotes = () =>
  request("/admin/quotes/deleted");

export const updateQuoteCRM = (
  id,
  payload
) =>
  request(
    `/admin/quotes/${id}/crm`,
    {
      method: "PATCH",
      body: JSON.stringify(
        payload
      ),
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

export const assignQuote = (
  id,
  assignedTo
) =>
  request(
    `/admin/quotes/${id}/assign`,
    {
      method: "PATCH",
      body: JSON.stringify({
        assignedTo,
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
// IMPORTANT:
// Contacts remain completely separate from Leads.
// ======================================================

export const getContacts = () =>
  request("/admin/contacts");

export const getColdContacts = () =>
  request("/admin/contacts/cold");

export const getDeletedContacts = () =>
  request("/admin/contacts/deleted");

export const updateContactCRM = (
  id,
  payload
) =>
  request(
    `/admin/contacts/${id}/crm`,
    {
      method: "PATCH",
      body: JSON.stringify(
        payload
      ),
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

export const assignContact = (
  id,
  assignedTo
) =>
  request(
    `/admin/contacts/${id}/assign`,
    {
      method: "PATCH",
      body: JSON.stringify({
        assignedTo,
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

export const restoreContact = (
  id
) =>
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

// ======================================================
// SEPARATE LEADS SYSTEM
// IMPORTANT:
// These APIs NEVER use /contacts.
// ======================================================

// Create one manual lead
export const createManualLead = (
  payload
) =>
  request("/admin/leads", {
    method: "POST",
    body: JSON.stringify(
      payload
    ),
  });

// Bulk create/import leads
export const bulkCreateManualLeads = (
  payload
) =>
  request("/admin/leads/bulk", {
    method: "POST",
    body: JSON.stringify(
      payload
    ),
  });

// Super Admin - all uploaded/manual leads
export const getAllLeads = () =>
  request("/admin/leads");

// Team Admin - only assigned leads
export const getMyLeads = () =>
  request("/admin/leads/my");

// Super Admin - assign lead
export const assignLead = (
  id,
  assignedTo
) =>
  request(
    `/admin/leads/${id}/assign`,
    {
      method: "PATCH",
      body: JSON.stringify({
        assignedTo,
      }),
    }
  );

// Lead CRM update
export const updateLeadCRM = (
  id,
  payload
) =>
  request(
    `/admin/leads/${id}/crm`,
    {
      method: "PATCH",
      body: JSON.stringify(
        payload
      ),
    }
  );

// Lead comment
export const addLeadComment = (
  id,
  message
) =>
  request(
    `/admin/leads/${id}/comments`,
    {
      method: "POST",
      body: JSON.stringify({
        message,
      }),
    }
  );

// Delete lead
export const deleteLead = (id) =>
  request(
    `/admin/leads/${id}`,
    {
      method: "DELETE",
    }
  );

// Restore lead
export const restoreLead = (
  id
) =>
  request(
    `/admin/leads/${id}/restore`,
    {
      method: "PATCH",
    }
  );

// ======================================================
// LOGIN CHECK
// ======================================================

export const isAdminLoggedIn = () => {
  return Boolean(
    localStorage.getItem(
      "webqenzo_admin_token"
    )
  );
};