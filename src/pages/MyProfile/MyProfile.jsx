import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import useTitle from "../../hooks/useTitle";

const MyProfile = () => {
  useTitle("My Profile");
  const { user } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();

    updateProfile(auth.currentUser, { displayName: name, photoURL })
      .then(() => {
        toast.success("Profile updated successfully!");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen bg-base-200 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="card bg-base-100 shadow-xl p-8">
          <div className="flex flex-col items-center mb-8">
            <img
              src={user?.photoURL || "https://i.ibb.co/placeholder.png"}
              alt="profile"
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h2 className="text-2xl font-bold">{user?.displayName}</h2>
            <p className="text-gray-500">{user?.email}</p>
          </div>

          <h3 className="text-xl font-bold mb-4">Edit Profile</h3>
          <form onSubmit={handleUpdate} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered w-full"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary w-full">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;