function UserProfile() {
  return (
    <div className="bg-gray-100 p-4 sm:p-6 md:p-8 md:max-w-sm  lg:max-w-lg mx-auto my-20 shadow-lg rounded-lg sm:max-w-xs ">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full md:w-36 md:h-36 mx-auto sm:w-24 sm:h-24 object-contain"
      />
      <h1 className="md:text-xl sm:text-lg text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 text-base sm:text-sm">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;