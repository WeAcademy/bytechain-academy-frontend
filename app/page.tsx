import AboutAndOffers from '@/components/AboutandOffers/AboutandOffers';
import CurrencyHub from '@/components/CurrencyHub';
import Footer from '@/components/Footer';
import WhoItsFor from '@/components/WhoItsFor';
import CoursesSection from '@/components/CoursesSection';
export default function Home() {
  return (
    <main className="flex flex-col gap-4 md:gap-8 items-center">
      <AboutAndOffers />
      <CoursesSection />
      <CurrencyHub />
      <WhoItsFor />
      <Footer/>
    </main>
  );
}
