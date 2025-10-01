import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/ServicesSection'
import AboutSection from '@/components/home/AboutSection'
import PopularContentSection from '@/components/home/PopularContentSection'
import NewsletterSection from '@/components/home/NewsletterSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PopularContentSection />
      <NewsletterSection />
    </main>
  )
}