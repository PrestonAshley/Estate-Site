import { useSelector } from "react-redux";

function Profile() {
  const {currentUser} = useSelector(state => state.user);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-4xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-5'>
        <img className='rounded-full h-30 w-30 object-cover cursor-pointer self-center mt-2' src={currentUser.avatar} alt='Avatar' />
        <input type="text" placeholder="Username" id="username" className="border p-3 rounded-lg" />
        <input type="email" placeholder="Email" id="email" className="border p-3 rounded-lg" />
        <input type="password" placeholder="Change Password" id="password" className="border p-3 rounded-lg" />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">Update</button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  )
}

export default Profile