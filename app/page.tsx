import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Trust from '@/components/Trust'
import Services from '@/components/Services'
import Photobanner from '@/components/Photobanner'
import InspectWhy from '@/components/InspectWhy'
import ReportProcess from '@/components/ReportProcess'
import About from '@/components/About'
import AdditionalAndCTA from '@/components/AdditionalAndCTA'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <div className="page-below-hero flex flex-1 flex-col">
          <Trust />
          <Services />
          <Photobanner
            src="/2.jpg"
            alt="Property inspection and snagging in the UAE"
            height={400}
            overlay
            quote="Every property has hidden defects. We find them before they cost you."
          />
          <InspectWhy />
          <ReportProcess />
          <About />
          <AdditionalAndCTA />
          <FAQ />
          <Contact />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}