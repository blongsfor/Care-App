import { useRouter } from "next/router";
import React from "react";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return <button onClick={handleBack}>Go Back</button>;
};

export default BackButton;
