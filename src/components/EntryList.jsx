export default function EntryList({ entries }) {
  //   console.log("documentation: ", entries.documentation);
  //   return (
  //     <ul>
  //       {entries.map((entry) => (
  //         <li key={entry._id}>
  //           <h2>{entry.client}</h2>
  //           <ul>
  //             {entries.documentation.map((doc, index) => (
  //               <li key={index}>
  //                 <p>
  //                   <strong>Date and Time:</strong> {doc.datetime}
  //                 </p>
  //                 <p>
  //                   <strong>Task:</strong> {doc.task}
  //                 </p>
  //                 <p>
  //                   <strong>Details:</strong> {doc.details}
  //                 </p>
  //               </li>
  //             ))}
  //           </ul>
  //           <p>{entry.documentation}</p>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  const allDocumentation = entries.documentation;
  console.log("documentation: ", allDocumentation);

  return (
    <>
      <ul>
        {entries.map((entry) => (
          <li key={entry._id}>
            <h2>{entry.client}</h2>
            <ul>
              {/* Use allDocumentation here  */}
              {allDocumentation.map((doc, index) => (
                <li key={index}>
                  <p>
                    <strong>Date and Time:</strong> {doc.datetime}
                  </p>
                  <p>
                    <strong>Task:</strong> {doc.task}
                  </p>
                  <p>
                    <strong>Details:</strong> {doc.details}
                  </p>
                </li>
              ))}
            </ul>
            <p>{entry.documentation}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
