import PageWrapper from '@/components/templates/layouts/PageWrapper'
import HeroSection from './components/hero'
import TechStacksSection from './components/techStacks'

const HomePage = () => {
  return (
    <PageWrapper>
      <HeroSection />
      <TechStacksSection />
    </PageWrapper>
  )
}

export default HomePage
