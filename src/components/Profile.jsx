const Profile = ({ name, email }) => {
    return (
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Profile</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
    );
  };
  export default Profile;