// components/RedirectButton.jsx
import { useRouter } from "next/router";
import React from "react";

const DocumentButton = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/documentation-form"); // Change '/form-page' to the actual path of your form page
  };

  return <button onClick={handleRedirect}>Create Documentation</button>;
};

export default DocumentButton;
