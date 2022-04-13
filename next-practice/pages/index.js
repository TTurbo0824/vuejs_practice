import styles from '../styles/Home.module.css';

export default function Home({posts}) {
  console.log(posts);
  return (
    <div>
      <h1>Welcome!</h1>
      <ul>
        {posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_start=0&_end=10'
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     'https://jsonplaceholder.typicode.com/posts?_start=0&_end=10'
//   );
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };
