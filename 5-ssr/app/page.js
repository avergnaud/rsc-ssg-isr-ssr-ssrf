
export default function Home() {

  const d = new Date();
  console.log(`executing page.js | ${d.toString()}`);

  return (
    <main>
      <h1>Page Timestamp: {d.toString()}</h1>
    </main>
  );
}
