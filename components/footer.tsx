import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="bg-white p-3 rounded-lg inline-block">
                <Image src="/images/logo.png" alt="My PDV Logo" width={150} height={50} />
              </div>
            </Link>
            <p className="text-white/70">Votre partenaire pour des magasins connectés et performants.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="text-white/70 hover:text-sky-300 transition-colors">
                  Étiquettes Électroniques
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-white/70 hover:text-sky-300 transition-colors">
                  Installation Réseau
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-white/70 hover:text-sky-300 transition-colors">
                  Remplacement de Piles
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-white/70 hover:text-sky-300 transition-colors">
                  Intérimaires Qualifiés
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-white/70 hover:text-sky-300 transition-colors">
                  Audit et Conseil
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-white/70 hover:text-sky-300 transition-colors">
                  Formation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">À propos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#experience" className="text-white/70 hover:text-sky-300 transition-colors">
                  Notre Expérience
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-white/70 hover:text-sky-300 transition-colors">
                  Notre Mission
                </Link>
              </li>
              <li>
                <Link href="/#stats" className="text-white/70 hover:text-sky-300 transition-colors">
                  Nos Chiffres
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/70">9h - 15h, Lundi au Vendredi</li>
              <li>
                <Link href="mailto:contact@my-pdv.com" className="text-white/70 hover:text-sky-300 transition-colors">
                  contact@my-pdv.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/70">&copy; {new Date().getFullYear()} My PDV. Tous droits réservés.</p>
          <a
            href="https://rpms-tunisie.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-sky-300 transition-colors block mt-2"
          >
            Powered by RPMS
          </a>
        </div>
      </div>
    </footer>
  )
}
