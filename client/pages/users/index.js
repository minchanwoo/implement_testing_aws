import Link from 'next/link';

const Users = ({users}) => {
  return (
    <>
      <div>
        <Link href='/'>
          <a>
            메인페이지로 이동
          </a>
        </Link>
      </div>
      <br/>
      {users.map((user) => {
        return <div key={user.id}>
          {user.name}
        </div>
      })}
    </>
  )
};

export async function getStaticProps() {
  const res = await fetch('https://www.risingkorean.com/users');
  const users = await res.json();

  return {
    props: {
      users
    },
    revalidate: 10,
  }
}



export default Users;