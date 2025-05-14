import DefaultLayout from '@/components/templates/defaultLayout'
import HeroSection from './sections/hero'
import TechStacksSection from './sections/techStacks'

export default function HomePage() {
  return (
    <DefaultLayout>
      <HeroSection />
      <TechStacksSection />
    </DefaultLayout>
  )
}
