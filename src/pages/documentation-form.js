// import BackButton from "@/components/BackButton";
// import React from "react";

// export default function DocumentationForm() {
//   return (
//     <>
//       <div>
//         <h2>Create Documentation Entry </h2>
//         <form>
//           <div>
//             <label htmlFor="title">Title:</label>
//             <select
//               id="title"
//               name="title"
//               value={selectedTitle}
//               onChange={handleTitleChange}
//             >
//               <option value="">Select Title</option>
//               {titles.map((title, index) => (
//                 <option key={index} value={title.title}>
//                   {title.title}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label htmlFor="description">Description:</label>
//             <textarea id="description" name="description"></textarea>
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//       <BackButton />
//     </>
//   );
// }

import BackButton from "@/components/BackButton";
import React, { useState, useEffect } from "react";
import DocumentationForm from "@/components/DocumentationForm";

export default function DocumentationFormPage() {
  // const [tasks, setTasks] = useState([]);
  // const [selectedTitle, setSelectedTitle] = useState("");

  // useEffect(() => {
  //   // Fetch tasks when the component mounts
  //   fetchTasks();
  // }, []);

  // const fetchTasks = async () => {
  //   try {
  //     const response = await fetch("/api/tasks");
  //     const data = await response.json();
  //     console.log("Fetched tasks:", data); // Log fetched tasks
  //     setTasks(data);
  //   } catch (error) {
  //     console.error("Failed to fetch tasks:", error);
  //   }
  // };

  // const handleTitleChange = (event) => {
  //   setSelectedTitle(event.target.value);
  // };

  return (
    <>
      <DocumentationForm />
      <BackButton />
    </>
  );
}
