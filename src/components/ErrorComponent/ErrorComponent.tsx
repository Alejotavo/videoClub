
import { useMovie } from "../../contexts/movieContext";

function ErrorComponent() {

const { error } = useMovie();

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      {error && ( <p className="text-red-500">{error}</p> )}
    </div>
  );
}

export default ErrorComponent;