import Link from "next/link";
import Header from '@/app/components/Header';
export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Laboratorium nr 11 - projekt startowy
      </h1>
      <Header title="Strona Glowna" subtitle="Witaj na stronie glownej"/>
    </main>
  );
}
