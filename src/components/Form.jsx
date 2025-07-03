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
          className="border-Text2 border-b p-2 text-sm focus:outline-0"
        />
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="border-Text2 border-b p-2 text-sm focus:outline-0"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-Text2 border-b p-2 text-sm focus:outline-0"
        />
      </div>
      <div className="flex w-full">
        <button className="hover:text-Button2 bg-Button2 text-Text hover:bg-Text grow cursor-pointer rounded-sm border py-2 text-sm duration-200">
          Create Account
        </button>
      </div>
      <div className="flex gap-2 text-sm">
        <p className="text-Text2">Already have an account?</p>
        <span className="border-b-Text2 border-b">Log in</span>
      </div>
    </form>
  );
}
