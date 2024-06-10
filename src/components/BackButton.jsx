import { useRouter } from "next/router";
import React from "react";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      style={{ padding: "10px 20px", cursor: "pointer" }}
    >
      Go Back
    </button>
  );
};

export default BackButton;
