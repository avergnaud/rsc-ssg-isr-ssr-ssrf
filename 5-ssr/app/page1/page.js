import Now from '@/app/components/Now';

export default function Home() {

  const d = new Date();
  console.log(`executing page.js | ${d.toString()}`);

  return (
    <main>
      <h1>page 1 timestamp {d.toString()}</h1>
      <Now />
    </main>
  );
}
