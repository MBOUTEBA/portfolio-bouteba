import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <div className="text-xl font-bold tracking-wide">BOUTEBA Marwane</div>
          <nav className="hidden md:flex gap-6 text-sm uppercase">
            <a href="#accueil">Accueil</a>
            <a href="#bts">Mon BTS</a>
            <a href="#ecole">Mon école</a>
            <a href="#parcours">Parcours</a>
            <a href="#entreprise">Entreprise</a>
            <a href="#projets">Projets</a>
            <a href="#veille">Veilles Technologiques</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Accueil */}
        <section id="accueil" className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-100">
          <div className="bg-white/90 p-10 rounded-xl shadow-lg">
            <h1 className="text-5xl md:text-7xl font-serif">BOUTEBA Marwane</h1>
            <p className="mt-6 text-lg text-gray-700 max-w-2xl">
              Étudiant en <strong>BTS SIO option SISR</strong>. Passionné par les systèmes, réseaux et la cybersécurité.
            </p>
            <div className="mt-10 flex gap-4 justify-center">
              <a href="/docs/CV_Bouteba_Marwane.pdf" className="px-6 py-3 border border-gray-900 hover:bg-gray-900 hover:text-white transition">Mon CV</a>
              <a href="/docs/Fiche_Synthese_Bouteba_Marwane.pdf" className="px-6 py-3 border border-gray-900 hover:bg-gray-900 hover:text-white transition">Fiche de synthèse</a>
            </div>
          </div>
        </section>

        {/* Mon BTS */}
        <section id="bts" className="h-screen flex flex-col justify-center items-center px-6 bg-gray-50">
          <h2 className="text-4xl font-semibold mb-6">Mon BTS SIO SISR</h2>
          <p className="mt-4 max-w-xl text-center text-gray-600">
            Je prépare un <strong>BTS Services Informatiques aux Organisations</strong>,
            option <strong>SISR (Solutions d’Infrastructure, Systèmes et Réseaux)</strong>.
          </p>
        </section>

        {/* Mon école */}
        <section id="ecole" className="h-screen flex flex-col justify-center items-center px-6">
          <h2 className="text-4xl font-semibold mb-6">Mon école</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex flex-col items-center">
              <img src="/images/elysees-apprentissage-logo.png" alt="Elysées Apprentissage" className="mb-4 h-24" />
              <p className="text-center text-gray-600 max-w-xs">
                1ère année de BTS SIO réalisée à <strong>Elysées Apprentissage</strong>.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/iaag-logo.png" alt="IAAG Paris 19ème" className="mb-4 h-24" />
              <p className="text-center text-gray-600 max-w-xs">
                2ème année de BTS SIO à <strong>IAAG Paris 19ème</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Parcours scolaire */}
        <section id="parcours" className="h-screen flex flex-col justify-center items-center px-6 bg-gray-50">
          <h2 className="text-4xl font-semibold">Mon parcours scolaire</h2>
          <ul className="mt-6 space-y-4 text-center text-gray-700">
            <li>2018 – 2021 : Lycée Julie-Victoire Daubié, Argenteuil — Baccalauréat Général</li>
            <li>2021 – 2023 : CY Paris Cergy Université — Licence 1 en Économie et Gestion</li>
            <li>BTS SIO — option SISR (1ère année à Elysées Apprentissage, 2ème année à IAAG Paris 19ème)</li>
          </ul>
        </section>

        {/* Mon entreprise */}
        <section id="entreprise" className="h-screen flex flex-col justify-center items-center px-6">
          <h2 className="text-4xl font-semibold mb-6">Mon entreprise - Loadz</h2>
          <p className="mt-4 max-w-xl text-center text-gray-600">
            Je travaille chez <strong>Loadz</strong>, une régie publicitaire...
          </p>
        </section>

        {/* Projets */}
        <section id="projets" className="h-screen flex flex-col justify-center items-center px-6 bg-gray-50">
          <h2 className="text-4xl font-semibold mb-6">Projets</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8 max-w-6xl">

            {/* Projet 1 */}
            <a href="https://url-de-ton-projet1.com" target="_blank" rel="noopener noreferrer">
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="text-xl font-medium">Projet 1 - Infrastructure pour appart hôtel</h3>
                  <p className="mt-2 text-gray-600">
                    Conception et mise en place d’une infrastructure réseau complète...
                  </p>
                </div>
              </div>
            </a>

            {/* Projet 2 */}
            <a href="https://url-de-ton-projet2.com" target="_blank" rel="noopener noreferrer">
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="text-xl font-medium">Projet 2 - Virtualisation</h3>
                  <p className="mt-2 text-gray-600">
                    Création et gestion d’un environnement virtualisé...
                  </p>
                </div>
              </div>
            </a>

          </div>
        </section>

        {/* Veilles Technologiques */}
        <section id="veille" className="h-screen flex flex-col justify-center items-center px-6">
          <h2 className="text-4xl font-semibold mb-6">Veilles Technologiques</h2>
          <div className="max-w-4xl space-y-8">
            <div>
              <h3 className="text-2xl font-medium">Cybersécurité</h3>
              <p className="mt-2 text-gray-600">
                Veille régulière sur les menaces en cybersécurité...
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium">Virtualisation et Cloud</h3>
              <p className="mt-2 text-gray-600">
                Suivi des dernières évolutions VMware, Proxmox, Azure et AWS...
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="h-screen flex flex-col justify-center items-center px-6 bg-gray-50">
          <h2 className="text-4xl font-semibold">Contact</h2>
          {/* Ton Contact.jsx peut être intégré ici ou utilisé comme composant */}
        </section>
      </main>

      <footer className="py-6 text-center text-sm text-gray-500 border-t border-gray-200">
        © {new Date().getFullYear()} BOUTEBA Marwane - BTS SIO SISR
      </footer>

      <style>{`html { scroll-behavior: smooth; }`}</style>
    </div>
  );
}
