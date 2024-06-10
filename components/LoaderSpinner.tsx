import { Loader2 } from "lucide-react";
import React from "react";

const LoaderSpinner = () => {
  return (
    <div className="flex-center h-screen w-full">
      <Loader2 className="animate-spin text-pink-500" size={30} />
    </div>
  );
};

export default LoaderSpinner;
