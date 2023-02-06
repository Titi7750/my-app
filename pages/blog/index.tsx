import Link from "next/link";

function Blog({ posts }) {

    return (
        <>
            <h1>Blog</h1>
            <hr />
            {posts?.map((post) => (
                <Link key={post.id} href={"/blog/" + post.id}>
                    <h2>{post.title}</h2>
                </Link>
            ))}
        </>
    )
}

export default Blog;

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  }
}