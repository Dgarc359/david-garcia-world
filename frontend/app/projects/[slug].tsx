export async function getStaticPaths() {
  const slugs = ["example1", "example2"]; // or fetch from somewhere
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false, // no fallback routes
  };
}

export async function getStaticProps({ params }: {params: any}) {
  // fetch data for params.slug
  return {
    props: {
      slug: params.slug,
    },
  };
}

export default function ProjectBySlug({ slug }: {slug: any}) {
  return <div>Project: {slug}</div>;
}