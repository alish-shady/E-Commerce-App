export default function RadioButton({ param, callBack, text, icon = "" }) {
  return (
    <div
      className={`border-Primary hover:bg-Secondary flex cursor-pointer items-center gap-2 rounded-xl border p-2 transition-all duration-200 ${
        param && "border-Text2"
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
    <div className="border-Text2 ml-auto flex h-4 w-4 items-center justify-center rounded-full border">
      {active && <div className="bg-Text2 h-5/6 w-5/6 rounded-full" />}
    </div>
  );
}
