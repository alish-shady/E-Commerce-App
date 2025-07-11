import { PiSealWarningFill } from "react-icons/pi";

export default function WarnUser({ message }) {
  return (
    <div className="col-span-2 flex items-center gap-2">
      <PiSealWarningFill className="text-Button2 shrink-0 text-sm" />
      <p className="text-Button2 text-sm">{message}</p>
    </div>
  );
}
