export default function RadioButton({ param, callBack, text, icon = "" }) {
  return (
    <div
      className={`flex cursor-pointer items-center gap-2 rounded-xl border border-gray-200 p-2 transition-all duration-200 hover:bg-gray-200 ${
        param && "border-gray-600"
      }`}
      onClick={callBack}
    >
      {icon}
      <span>{text}</span>
      <RadioMark active={param} />
    </div>
  );
}
function RadioMark({ active }) {
  return (
    <div className="ml-auto flex h-4 w-4 items-center justify-center rounded-full border">
      {active && <div className="h-5/6 w-5/6 rounded-full bg-gray-500" />}
    </div>
  );
}
