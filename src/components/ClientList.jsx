// components/ClientList.jsx

export default function ClientList({ clients }) {
  return (
    <ul>
      {clients.map((client) => (
        <li key={client._id}>
          <h2>
            {client.firstName} {client.lastName}
          </h2>
        </li>
      ))}
    </ul>
  );
}
