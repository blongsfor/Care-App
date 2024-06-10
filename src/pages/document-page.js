import BackButton from "@/components/BackButton";
import React from "react";

const DocumentationForm = () => {
  return (
    <>
      <div>
        <h2>Create Documentation Entry </h2>
        <form>
          <div>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <BackButton />
    </>
  );
};

export default DocumentationForm;
