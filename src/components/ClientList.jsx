import Image from "next/image";

export default function ClientList({ clients }) {
  return (
    <ul>
      {clients.map((client) => (
        <li key={client._id}>
          <Image src={client.picture} width={200} height={200} />
          <h2>
            {client.firstName} {client.lastName}
          </h2>
        </li>
      ))}
    </ul>
  );
}
