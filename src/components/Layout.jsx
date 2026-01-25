import { Header } from './Header'
import { Footer } from './Footer'
import { MobileBookingCTA } from './MobileBookingCTA'

export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
      <MobileBookingCTA />
    </div>
  )
}

export default Layout
