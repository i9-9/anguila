"use client";

import Image from "next/image";
import { useState } from "react";
import JSZip from 'jszip';

const translations = {
  es: {
    pressKit: "Descargar Press Kit",
    title: "AUTODEFENSA PRESENTA SU NUEVO SINGLE \"ANGUILA\"",
    date: "Buenos Aires, 27 de marzo de 2025",
    tabs: {
      press: "Comunicado",
      about: "Sobre AUTODEFENSA",
      photos: "Fotos",
      credits: "Créditos"
    },
    press: {
      p1: "El dúo post-punk <strong>AUTODEFENSA</strong> lanza \"Anguila\" el 4 de abril de 2025. Grabado en los míticos <a href=\"https://estudiospanda.com.ar/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#FF2E33] hover:underline\"><strong>ESTUDIOS PANDA</strong></a>, quienes lo consideran \"un nuevo himno del género post-punk\", el single fue producido por <a href=\"https://www.lanacion.com.ar/economia/negocios/fabrica-de-hits-quien-es-el-nuevo-dueno-de-estudios-panda-nid23092022/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#FF2E33] hover:underline\"><strong>SEBASTIÁN BERTUZZI</strong></a> (propietario del estudio), editado por INVS Label y cuenta con arte de tapa de <a href=\"https://www.instagram.com/jonathan_sirit/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#FF2E33] hover:underline\"><strong>JONATHAN SIRIT</strong></a> (diseñador destacado y baterista de <a href=\"https://www.instagram.com/belgradoband/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#FF2E33] hover:underline\">\"Belgrado\"</a>).",
      p2: "<strong>TERROR</strong> (voz) —creador del Festival Roca Negra— y <strong>SANGRE</strong> (guitarra/sintetizadores) combinan sonidos fríos y orgánicos con estética brutalista. El videoclip oficial se estrenará en abril. La banda, formada en 2022, ha teloneado a Clan of Xymox y tocado en Teatro Rojas, La Tangente y otros venues destacados.",
      p3: ""
    },
    about: {
      p1: "Formado en 2022, el dúo ha logrado posicionarse en la escena underground de Buenos Aires, presentándose en venues emblemáticos como Teatro Rojas, La Tangente, Strummer Bar, El Emergente y La Manzana de las Luces.",
      p2: "Entre sus logros destacados se encuentra haber sido teloneros de la legendaria banda Clan of Xymox en Uniclub.",
      p3: "\"Anguila\" sucede a su lanzamiento anterior \"Parte de Mi\" (2023) y anticipa su próximo álbum debut.",
      p4: "",
      p5: ""
    },
    credits: {
      members: "INTEGRANTES:",
      terror: "TERROR - VOZ",
      sang: "SANGRE - GUITARRA, RITMOS, SINTETIZADORES",
      technical: "CRÉDITOS TÉCNICOS:",
      prod: "PROD, MIX & MASTER: SEBASTIÁN BERTUZZI",
      rec: "REC & MASTER: LEO LÓPEZ",
      mix: "MIX & MASTER: CHRISTIAN ALGARAÑAZ",
      cover: "ARTE DE TAPA: JONATHAN SIRIT"
    },
    contact: {
      title: "Contacto de prensa",
      phone: "1140753025",
      email: "autodefensaoficial@gmail.com"
    }
  },
  en: {
    pressKit: "Download Press Kit",
    title: "AUTODEFENSA PRESENTS THEIR NEW SINGLE \"ANGUILA\"",
    date: "Buenos Aires, March 27, 2025",
    tabs: {
      press: "Press Release",
      about: "About AUTODEFENSA",
      photos: "Photos",
      credits: "Credits"
    },
    press: {
      p1: "Post-punk duo <strong>AUTODEFENSA</strong> releases \"Anguila\" on April 4th, 2025. Recorded at the legendary <a href=\"https://estudiospanda.com.ar/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#FF2E33] hover:underline\"><strong>PANDA STUDIOS</strong></a>, who consider it \"a new anthem of the post-punk genre\", the single was produced by <a href=\"https://www.lanacion.com.ar/economia/negocios/fabrica-de-hits-quien-es-el-nuevo-dueno-de-estudios-panda-nid23092022/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#FF2E33] hover:underline\"><strong>SEBASTIÁN BERTUZZI</strong></a> (studio owner), edited by INVS Label and features cover art by <a href=\"https://www.instagram.com/jonathan_sirit/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#FF2E33] hover:underline\"><strong>JONATHAN SIRIT</strong></a> (prominent designer and drummer of <a href=\"https://www.instagram.com/belgradoband/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[#FF2E33] hover:underline\">\"Belgrado\"</a>).",
      p2: "<strong>TERROR</strong> (vocals) —creator of Festival Roca Negra— and <strong>SANGRE</strong> (guitar/synthesizers) combine cold and organic sounds with brutalist aesthetics. The official music video will premiere in April. The band, formed in 2022, has opened for Clan of Xymox and performed at Teatro Rojas, La Tangente and other notable venues.",
      p3: ""
    },
    about: {
      p1: "Formed in 2022, the duo has managed to position themselves in the underground scene of Buenos Aires, performing at iconic venues such as Teatro Rojas, La Tangente, Strummer Bar, El Emergente and La Manzana de las Luces.",
      p2: "Among their notable achievements are opening for the legendary band Clan of Xymox at Uniclub.",
      p3: "\"Anguila\" follows their previous release \"Parte de Mi\" (2023) and anticipates their upcoming debut album.",
      p4: "",
      p5: ""
    },
    credits: {
      members: "MEMBERS:",
      terror: "TERROR - VOCALS",
      sang: "SANGRE - GUITAR, RHYTHMS, SYNTHESIZERS",
      technical: "TECHNICAL CREDITS:",
      prod: "PROD, MIX & MASTER: SEBASTIÁN BERTUZZI",
      rec: "REC & MASTER: LEO LÓPEZ",
      mix: "MIX & MASTER: CHRISTIAN ALGARAÑAZ",
      cover: "COVER ART: JONATHAN SIRIT"
    },
    contact: {
      title: "Press Contact",
      phone: "1140753025",
      email: "autodefensaoficial@gmail.com"
    }
  }
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('press');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const t = translations[language];

  const handlePhotoClick = (photo: string) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const handleDownload = async () => {
    const zip = new JSZip();

    // Crear el contenido del archivo de texto
    const textContent = language === 'es' ? `AUTODEFENSA - Press Kit

COMUNICADO DE PRENSA
-------------------
${t.press.p1}

${t.press.p2}

${t.press.p3}

SOBRE AUTODEFENSA
----------------
${t.about.p1}

${t.about.p2}

${t.about.p3}

${t.about.p4}

${t.about.p5}

CRÉDITOS
--------
${t.credits.members}
${t.credits.terror}
${t.credits.sang}

${t.credits.technical}
${t.credits.prod}
${t.credits.rec}
${t.credits.mix}

${t.credits.cover}

CONTACTO DE PRENSA
-----------------
Teléfono: ${t.contact.phone}
Email: ${t.contact.email}` : `AUTODEFENSA - Press Kit

PRESS RELEASE
------------
${t.press.p1}

${t.press.p2}

${t.press.p3}

ABOUT AUTODEFENSA
----------------
${t.about.p1}

${t.about.p2}

${t.about.p3}

${t.about.p4}

${t.about.p5}

CREDITS
-------
${t.credits.members}
${t.credits.terror}
${t.credits.sang}

${t.credits.technical}
${t.credits.prod}
${t.credits.rec}
${t.credits.mix}

${t.credits.cover}

PRESS CONTACT
------------
Phone: ${t.contact.phone}
Email: ${t.contact.email}`;

    // Agregar el archivo de texto al ZIP
    zip.file(`autodefensa_presskit_${language}.txt`, textContent);

    // Descargar y agregar las fotos al ZIP
    const photos = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg'];
    for (const photo of photos) {
      const response = await fetch(`/pics/${photo}`);
      const blob = await response.blob();
      zip.file(photo, blob);
    }

    // Generar y descargar el ZIP
    const content = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(content);
    const link = document.createElement('a');
    link.href = url;
    link.download = `autodefensa_presskit_${language}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#fafafa] flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <nav className="w-full border-b border-[#FF2E33] py-4">
        <div className="container mx-auto px-2 sm:px-4 flex justify-between items-center">
          <Image
            src="/logo/logo.svg"
            alt="Autodefensa Logo"
            width={200}
            height={50}
            priority
            className="brightness-0 invert"
          />
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 bg-[#FF2E33] px-3 py-1.5 hover:bg-[#ff1a1f] transition-colors font-medium text-xs"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-[#FF2E33] px-3 py-1.5 hover:bg-[#ff1a1f] transition-colors font-medium text-xs"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              <span>{t.pressKit}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 overflow-y-auto pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 w-full py-8 lg:py-8 max-w-7xl mx-auto">
          {/* Left Column - Cover Image */}
          <div className="flex items-center justify-center w-full">
            <div className="relative w-full aspect-square">
              <Image
                src="/cover/anguila.jpg"
                alt="Anguila Single Cover"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="flex flex-col min-h-[500px] lg:min-h-[600px]">
            <div className="flex flex-col h-full">
              <div className="flex flex-col h-full">
                <div className="space-y-3 lg:space-y-4">
                  <h1 className="text-xl lg:text-2xl xl:text-3xl font-black leading-none">
                    {t.title}
                  </h1>
                  
                  <p className="text-[#FF2E33] font-bold text-sm mb-6 lg:mb-8">
                    {t.date}
                  </p>

                  {/* Tabs */}
                  <div className="flex gap-2 lg:gap-4 border-b border-[#FF2E33] mb-4 lg:mb-6">
                    <button
                      onClick={() => setActiveTab('press')}
                      className={`px-4 lg:px-6 py-2 lg:py-3 font-medium transition-colors text-sm ${
                        activeTab === 'press'
                          ? 'text-[#FF2E33] border-b-2 border-[#FF2E33]'
                          : 'text-[#fafafa] hover:text-[#FF2E33]'
                      }`}
                    >
                      {t.tabs.press}
                    </button>
                    <button
                      onClick={() => setActiveTab('about')}
                      className={`px-4 lg:px-6 py-2 lg:py-3 font-medium transition-colors text-sm ${
                        activeTab === 'about'
                          ? 'text-[#FF2E33] border-b-2 border-[#FF2E33]'
                          : 'text-[#fafafa] hover:text-[#FF2E33]'
                      }`}
                    >
                      {t.tabs.about}
                    </button>
                    <button
                      onClick={() => setActiveTab('photos')}
                      className={`px-4 lg:px-6 py-2 lg:py-3 font-medium transition-colors text-sm ${
                        activeTab === 'photos'
                          ? 'text-[#FF2E33] border-b-2 border-[#FF2E33]'
                          : 'text-[#fafafa] hover:text-[#FF2E33]'
                      }`}
                    >
                      {t.tabs.photos}
                    </button>
                    <button
                      onClick={() => setActiveTab('credits')}
                      className={`px-4 lg:px-6 py-2 lg:py-3 font-medium transition-colors text-sm ${
                        activeTab === 'credits'
                          ? 'text-[#FF2E33] border-b-2 border-[#FF2E33]'
                          : 'text-[#fafafa] hover:text-[#FF2E33]'
                      }`}
                    >
                      {t.tabs.credits}
                    </button>
                  </div>

                  {/* Tab Content */}
                  <div className="space-y-3 lg:space-y-4 text-sm lg:text-base flex-1 overflow-y-auto pr-1 sm:pr-2">
                    {activeTab === 'press' && (
                      <>
                        <p dangerouslySetInnerHTML={{ __html: t.press.p1 }} />
                        <p dangerouslySetInnerHTML={{ __html: t.press.p2 }} />
                        <p dangerouslySetInnerHTML={{ __html: t.press.p3 }} />
                      </>
                    )}

                    {activeTab === 'about' && (
                      <>
                        <p>{t.about.p1}</p>
                        <p>{t.about.p2}</p>
                        <p>{t.about.p3}</p>
                        <p>{t.about.p4}</p>
                        <p>{t.about.p5}</p>
                      </>
                    )}

                    {activeTab === 'photos' && (
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 h-[250px] lg:h-[300px] overflow-y-auto pr-1 sm:pr-2">
                        <div 
                          className="relative aspect-square cursor-pointer"
                          onClick={() => handlePhotoClick('/pics/photo1.jpg')}
                        >
                          <Image
                            src="/pics/photo1.jpg"
                            alt="AUTODEFENSA en vivo"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                        <div 
                          className="relative aspect-square cursor-pointer"
                          onClick={() => handlePhotoClick('/pics/photo2.jpg')}
                        >
                          <Image
                            src="/pics/photo2.jpg"
                            alt="AUTODEFENSA en estudio"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                        <div 
                          className="relative aspect-square cursor-pointer"
                          onClick={() => handlePhotoClick('/pics/photo3.jpg')}
                        >
                          <Image
                            src="/pics/photo3.jpg"
                            alt="AUTODEFENSA en concierto"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                        <div 
                          className="relative aspect-square cursor-pointer"
                          onClick={() => handlePhotoClick('/pics/photo4.jpg')}
                        >
                          <Image
                            src="/pics/photo4.jpg"
                            alt="AUTODEFENSA en sesión"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                      </div>
                    )}

                    {activeTab === 'credits' && (
                      <>
                        <p className="font-bold uppercase mb-2">{t.credits.members}</p>
                        <p className="uppercase leading-none">{t.credits.terror}</p>
                        <p className="uppercase leading-none">{t.credits.sang}</p>
                        <p className="font-bold mt-4 uppercase mb-2">{t.credits.technical}</p>
                        <p className="uppercase leading-none">{t.credits.prod}</p>
                        <p className="uppercase leading-none">{t.credits.rec}</p>
                        <p className="uppercase leading-none">{t.credits.mix}</p>
                        <p className="mt-4 uppercase leading-none">{t.credits.cover}</p>
                      </>
                    )}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mt-auto space-y-3">
                  <h2 className="text-lg font-black">{t.contact.title}</h2>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://wa.me/5491140753025"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#FF2E33] px-6 py-2 hover:bg-[#ff1a1f] transition-colors font-medium text-sm"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.287.129.332.202.045.073.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 19.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
                      </svg>
                      <span>{t.contact.phone}</span>
                    </a>
                    <a
                      href={`mailto:${t.contact.email}`}
                      className="flex items-center justify-center gap-2 bg-[#FF2E33] px-6 py-2 hover:bg-[#ff1a1f] transition-colors font-medium text-sm"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      <span>{t.contact.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#FF2E33] py-4">
        <div className="container mx-auto px-2 sm:px-4 flex justify-center items-center gap-4 sm:gap-6">
          <a
            href="https://www.instagram.com/autodefensa__/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#FF2E33] flex items-center justify-center hover:bg-[#ff1a1f] transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href="https://open.spotify.com/intl-es/artist/36qvAZASkbpSFbfptzgd5J"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#FF2E33] flex items-center justify-center hover:bg-[#ff1a1f] transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
          </a>
          <a
            href="https://hypeddit.com/aa0yih"
            target="_blank"
            rel="noopener noreferrer"
            className="w-auto px-4 h-10 bg-[#FF2E33] flex items-center justify-center hover:bg-[#ff1a1f] transition-colors font-medium text-sm"
          >
            PRE-SAVE
          </a>
        </div>
      </footer>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 text-white hover:text-[#FF2E33] transition-colors"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
          <div className="relative w-full h-full max-w-4xl max-h-[90vh]">
            <Image
              src={selectedPhoto}
              alt="AUTODEFENSA"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
