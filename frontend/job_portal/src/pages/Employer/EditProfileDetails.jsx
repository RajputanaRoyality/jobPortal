import { Save, X } from "lucide-react";
import DashboardLayout from "../../layout/DashboardLayout";

const EditProfileDetails = ({
  formData,
  handleImageChange,
  handleInputChange,
  handleSave,
  handleCancel,
  saving,
  uploading,
}) => {
  return (
    <DashboardLayout activeMenu="company-profile">
      {formData && (
        <div className="max-w-3xl mx-auto py-8">
          <form onSubmit={handleSave}>
            <div className="mb-8 flex items-center justify-between">
              {/* Header */}
              <div>
                <h1 className="text-2xl font-semibold">Edit Profile</h1>
                <p className="text-sm text-gray-500">
                  Update your personal and company information.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-md border text-sm"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-md bg-blue-600 text-white text-sm disabled:opacity-60"
                >
                  <Save className="w-4 h-4" />
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>

            {/* Edit Form */}
            <div className="space-y-8">
              {/* Personal Information */}
              <div className="bg-white shadow-sm rounded-lg p-6 space-y-4">
                <h2 className="text-lg font-medium">Personal Information</h2>

                <div className="grid gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border rounded-md px-3 py-2 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border rounded-md px-3 py-2 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Avatar
                    </label>
                    <div className="flex items-center gap-4">
                      {formData.avatar && (
                        <img
                          src={formData.avatar}
                          alt="Avatar"
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      )}
                      <div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageChange(e, "avatar")}
                          className="text-sm"
                        />
                        {uploading?.avatar && (
                          <p className="text-xs text-gray-500 mt-1">
                            Uploading avatar...
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div className="bg-white shadow-sm rounded-lg p-6 space-y-4">
                <h2 className="text-lg font-medium">Company Information</h2>

                <div className="grid gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full border rounded-md px-3 py-2 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Company Description
                    </label>
                    <textarea
                      name="companyDescription"
                      value={formData.companyDescription}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full border rounded-md px-3 py-2 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Company Logo
                    </label>
                    <div className="flex items-center gap-4">
                      {formData.companyLogo && (
                        <img
                          src={formData.companyLogo}
                          alt="Company Logo"
                          className="w-14 h-14 rounded-md object-cover"
                        />
                      )}
                      <div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageChange(e, "logo")}
                          className="text-sm"
                        />
                        {uploading?.logo && (
                          <p className="text-xs text-gray-500 mt-1">
                            Uploading logo...
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Action Buttons*/}
            <div className="flex justify-end space-x-4 mt-8 pt-6 border-t">
              <button
                onClick={handleCancel}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"
              >
                <X className="w-4" />
                <span>cancel</span>
              </button>
              <button
                onClick={handleSave}
                disabled={saving || uploading.avatar || uploading.logo}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-cente space-x-2"
              >
                {saving ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                    <Save className="w-4 h-4"/>
                )}
                <span>{saving ? "Saving..." : "Save change"}</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </DashboardLayout>
  );
};

export default EditProfileDetails;