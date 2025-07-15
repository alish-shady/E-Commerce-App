import { PiSealWarningFill } from "react-icons/pi";

export default function WarnUser({ message }) {
  return (
    <div className="col-span-2 flex items-center gap-2">
      <PiSealWarningFill className="text-Button2 text-size-e shrink-0" />
      <p className="text-size-e text-Button2">{message}</p>
    </div>
  );
}
