export default function Client({ firstName, lastName, image }) {
  return (
    <div>
      {/* {image && <img src={image} alt={`${firstName} ${lastName}`} />} */}
      <p>Date of Birth: {client.dateOfBirth}</p>
      <p>Place of Birth: {client.placeOfBirth}</p>
      <p>
        Address: {client.adress.street}, {client.adress.city},{" "}
        {client.adress.zipCode}
      </p>
      <p>
        Contact: {client.contact.telefon}, {client.contact.email}
      </p>
      <p>Parents: {client.additionalInfo.parents}</p>
      <p>Legal Representative: {client.additionalInfo.legalRepresentative}</p>
    </div>
  );
}
