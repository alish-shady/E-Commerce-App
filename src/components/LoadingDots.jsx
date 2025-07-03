export default function LoadingDots() {
  return (
    <div className="my-2 flex min-h-[20vh] w-full items-center justify-center">
      <div className="flex h-full w-full items-center justify-center space-x-2">
        <span className="bg-Secondary2 aspect-square w-1/12 max-w-12 animate-bounce rounded-full [animation-delay:0s]"></span>
        <span className="bg-Secondary2 aspect-square w-1/12 max-w-12 animate-bounce rounded-full [animation-delay:0.2s]"></span>
        <span className="bg-Secondary2 aspect-square w-1/12 max-w-12 animate-bounce rounded-full [animation-delay:0.4s]"></span>
      </div>
    </div>
  );
}
