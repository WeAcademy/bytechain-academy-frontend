import AboutAndOffers from '@/components/AboutandOffers/AboutandOffers';
import CurrencyHub from '@/components/CurrencyHub';
import { Button } from '@/components/ui/button';
import WhoItsFor from '@/components/WhoItsFor';

export default function Home() {
  return (
    <main className="flex flex-col gap-4 md:gap-8 items-center">
      <AboutAndOffers />
      <CurrencyHub />
      <WhoItsFor />
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Button className="bg-red-700 text-green-400 ">Test Button</Button>
      </footer>
    </main>
  );
}
