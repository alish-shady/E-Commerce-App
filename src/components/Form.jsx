export default function Form() {
  return (
    <form className="ml-auto flex shrink-0 flex-col gap-8 p-16">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Create your account</h1>
        <p className="text-sm">Enter your credentials below</p>
      </div>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border-b border-gray-400 p-2 text-sm focus:outline-0"
        />
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="border-b border-gray-400 p-2 text-sm focus:outline-0"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-b border-gray-400 p-2 text-sm focus:outline-0"
        />
      </div>
      <div className="flex w-full">
        <button className="border-red-400hover:bg-white grow cursor-pointer rounded-sm border bg-red-400 py-2 text-sm text-white duration-200 hover:bg-white hover:text-red-400">
          Create Account
        </button>
      </div>
      <div className="flex gap-2 text-sm">
        <p className="text-gray-400">Already have an account?</p>
        <span className="border-b border-b-gray-400">Log in</span>
      </div>
    </form>
  );
}
