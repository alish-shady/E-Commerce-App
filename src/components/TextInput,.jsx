export default function TextInput({ type, value = "", setter }) {
  if (type === "Change Password") {
    return (
      <div className="col-span-2 flex flex-col gap-2">
        <label>{type}</label>
        <input
          type="password"
          placeholder="Current Password"
          value={value.current}
          onChange={(e) => setter({ type: "current", payload: e.target.value })}
          className="bg-Secondary text-size-e rounded-sm p-2 focus:outline-0"
        />
        <input
          type="password"
          placeholder="New Password"
          value={value.new}
          onChange={(e) => setter({ type: "new", payload: e.target.value })}
          className="bg-Secondary text-size-e rounded-sm p-2 focus:outline-0"
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={value.confirmNew}
          onChange={(e) =>
            setter({ type: "confirmNew", payload: e.target.value })
          }
          className="bg-Secondary text-size-e rounded-sm p-2 focus:outline-0"
        />
      </div>
    );
  }
  const controlledProps =
    value !== undefined && setter !== undefined
      ? {
          value,
          onChange: (e) => setter(e.target.value),
        }
      : {};
  return (
    <div className="flex flex-col gap-2">
      <label>{type}</label>
      <input
        type="text"
        placeholder={type}
        name={type.split(" ").join("")}
        className="bg-Secondary text-size-e max-w-60 rounded-sm p-2 focus:outline-0"
        {...controlledProps}
      />
    </div>
  );
}
