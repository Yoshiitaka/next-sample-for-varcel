export default function Index({current}) {
  return (
    <div>
       Hello World
    </div>
  );
}

export async function getStaticProps() {
    const date = new Date();
    const current = date.toLocaleString()
  return {
    props: {
      current,
    },
  };
}