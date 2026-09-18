import { useEffect, useState } from "react";
import {
  Plus,
  RefreshCw,
  Trash2,
  UserRound,
  X,
} from "lucide-react";

import {
  createTeamMember,
  deleteTeamMember,
  getTeamMembers,
  updateTeamMember,
} from "../utils/adminApi";

const PERMISSIONS = [
  {
    key: "quotes:read",
    label: "View Quotes",
  },
  {
    key: "quotes:update",
    label: "Update Quotes",
  },
  {
    key: "quotes:delete",
    label: "Delete Quotes",
  },
  {
    key: "contacts:read",
    label: "View Contacts",
  },
  {
    key: "contacts:update",
    label: "Update Contacts",
  },
  {
    key: "contacts:delete",
    label: "Delete Contacts",
  },
];

const emptyForm = {
  name: "",
  email: "",
  password: "",
  permissions: ["quotes:read", "contacts:read"],
};

const AdminTeam = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editingMember, setEditingMember] =
    useState(null);

  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const loadTeam = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getTeamMembers();

      setMembers(response?.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTeam();
  }, []);

  const openCreate = () => {
    setEditingMember(null);
    setForm(emptyForm);
    setError("");
    setShowModal(true);
  };

  const openEdit = (member) => {
    setEditingMember(member);

    setForm({
      name: member.name || "",
      email: member.email || "",
      password: "",
      permissions: member.permissions || [],
    });

    setError("");
    setShowModal(true);
  };

  const closeModal = () => {
    if (saving) return;

    setShowModal(false);
    setEditingMember(null);
    setForm(emptyForm);
  };

  const togglePermission = (permission) => {
    setForm((current) => {
      const exists =
        current.permissions.includes(permission);

      return {
        ...current,
        permissions: exists
          ? current.permissions.filter(
              (item) => item !== permission
            )
          : [...current.permissions, permission],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSaving(true);

    try {
      if (editingMember) {
        await updateTeamMember(editingMember._id, {
          name: form.name,
          permissions: form.permissions,
        });
      } else {
        await createTeamMember({
          name: form.name,
          email: form.email,
          password: form.password,
          permissions: form.permissions,
        });
      }

      await loadTeam();

      closeModal();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleToggleActive = async (member) => {
    try {
      await updateTeamMember(member._id, {
        isActive: !member.isActive,
      });

      setMembers((current) =>
        current.map((item) =>
          item._id === member._id
            ? {
                ...item,
                isActive: !item.isActive,
              }
            : item
        )
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Delete this team member permanently?"
    );

    if (!confirmed) return;

    try {
      await deleteTeamMember(id);

      setMembers((current) =>
        current.filter((member) => member._id !== id)
      );
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              Access Control
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              Team Members
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Create team accounts and control what they
              can access.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={loadTeam}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              <RefreshCw size={16} />
              Refresh
            </button>

            <button
              type="button"
              onClick={openCreate}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-600"
            >
              <Plus size={17} />
              Add Member
            </button>
          </div>
        </div>

        {error && !showModal && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {loading ? (
            <div className="p-10 text-center text-sm text-slate-500">
              Loading team...
            </div>
          ) : members.length === 0 ? (
            <div className="p-12 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
                <UserRound size={21} />
              </div>

              <p className="mt-4 font-semibold text-slate-800">
                No team members
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Create your first team account.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] text-left">
                <thead className="border-b border-slate-200 bg-slate-50">
                  <tr>
                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Member
                    </th>

                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Permissions
                    </th>

                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Status
                    </th>

                    <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {members.map((member) => (
                    <tr key={member._id}>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                            {member.name
                              ?.charAt(0)
                              ?.toUpperCase()}
                          </div>

                          <div>
                            <p className="font-semibold text-slate-900">
                              {member.name}
                            </p>

                            <p className="text-xs text-slate-500">
                              {member.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex max-w-sm flex-wrap gap-1.5">
                          {(member.permissions || []).map(
                            (permission) => (
                              <span
                                key={permission}
                                className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-medium text-blue-700"
                              >
                                {permission}
                              </span>
                            )
                          )}
                        </div>
                      </td>

                      <td className="px-5 py-4">
                        <button
                          type="button"
                          onClick={() =>
                            handleToggleActive(member)
                          }
                          className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                            member.isActive
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-red-50 text-red-600"
                          }`}
                        >
                          {member.isActive
                            ? "Active"
                            : "Disabled"}
                        </button>
                      </td>

                      <td className="px-5 py-4 text-right">
                        <div className="flex justify-end gap-1">
                          <button
                            type="button"
                            onClick={() =>
                              openEdit(member)
                            }
                            className="rounded-lg px-3 py-2 text-xs font-semibold text-blue-600 hover:bg-blue-50"
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              handleDelete(member._id)
                            }
                            className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600"
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/50 p-4">
          <div className="my-8 w-full max-w-xl rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <h3 className="font-bold text-slate-900">
                  {editingMember
                    ? "Edit Team Member"
                    : "Create Team Member"}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Configure account access.
                </p>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
              >
                <X size={19} />
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-6"
            >
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Name
                </label>

                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  required
                  minLength={2}
                  maxLength={100}
                  className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              {!editingMember && (
                <>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email
                    </label>

                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          email: e.target.value,
                        })
                      }
                      required
                      className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Temporary Password
                    </label>

                    <input
                      type="password"
                      value={form.password}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          password: e.target.value,
                        })
                      }
                      required
                      minLength={8}
                      className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    />

                    <p className="mt-1 text-xs text-slate-400">
                      Give this password securely to the team
                      member.
                    </p>
                  </div>
                </>
              )}

              <div>
                <div className="mb-3">
                  <p className="text-sm font-semibold text-slate-800">
                    Permissions
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Select exactly what this team member can
                    manage.
                  </p>
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  {PERMISSIONS.map((permission) => (
                    <label
                      key={permission.key}
                      className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-3 hover:bg-slate-50"
                    >
                      <input
                        type="checkbox"
                        checked={form.permissions.includes(
                          permission.key
                        )}
                        onChange={() =>
                          togglePermission(
                            permission.key
                          )
                        }
                        className="h-4 w-4 rounded border-slate-300 text-blue-600"
                      />

                      <span className="text-sm text-slate-700">
                        {permission.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3 border-t border-slate-100 pt-5">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-600 disabled:opacity-60"
                >
                  {saving
                    ? "Saving..."
                    : editingMember
                    ? "Save Changes"
                    : "Create Member"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminTeam;
