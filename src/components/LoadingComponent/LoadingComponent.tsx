function LoadingComponent() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white">
      <img src="/spinner.svg" alt="Loading..." className="w-16 h-16 mb-4 animate-spin" />
      <label className="text-gray-500 text-lg">Loading...</label>
    </div>
  );
}

export default LoadingComponent;