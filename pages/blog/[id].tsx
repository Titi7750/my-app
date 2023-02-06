import Link from "next/link";

function Post({ post }) {
    return (
        <>
            <h1>Post</h1>
            <br />
            <Link href={'/blog'}>
                Back to Blog
            </Link>
            <pre>{JSON.stringify(post, null, 2)}</pre>
        </>
    )
}

export default Post;

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id);
    const posts = await res.json();

    return {
        props: {
            posts,
        },
    }
}