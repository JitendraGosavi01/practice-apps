const Users = ({ users }) => {
  return (
    <>
      {users?.map((user) => (
        <h1 key={user.id}>
          {user.id}. {user.name} | {user.username}
        </h1>
      ))}
    </>
  );
};

export default Users;

export async function getStaticProps(params) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
}
