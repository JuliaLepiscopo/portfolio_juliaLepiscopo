import Navbar from './components/Navbar'
import WelcomeModal from './components/WelcomeModal'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import GraduationsSection from './sections/GraduationsSection'
import SkillsSection from './sections/SkillsSection'
import ExperienceSection from './sections/ExperienceSection'
import ProjectsSection from './sections/ProjectsSection'
import ThankYouSection from './sections/ThankYouSection'

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <WelcomeModal />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <GraduationsSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ThankYouSection />
      </main>
    </div>
  )
}
