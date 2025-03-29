"use client";

import Image from "next/image";
import { useState } from "react";
import JSZip from 'jszip';

export default function Home() {
  const [activeTab, setActiveTab] = useState('press');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const handlePhotoClick = (photo: string) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  const handleDownload = async () => {
    const zip = new JSZip();

    // Crear el contenido del archivo de texto
    const textContent = `AUTODEFENSA - Press Kit

COMUNICADO DE PRENSA
-------------------
El dúo post-punk AUTODEFENSA anuncia el lanzamiento de su nuevo single "Anguila", disponible en todas las plataformas digitales a partir del 4 de abril de 2025. Este lanzamiento anticipa su próximo álbum debut, que verá la luz en los próximos meses.

"Anguila", grabado, mezclado y masterizado en los míticos Estudios Panda para INVS Label, sucede a su lanzamiento anterior "Parte de Mi" (2023) y representa una evolución en la propuesta musical del dúo.

Además del lanzamiento del single el 4 de abril, AUTODEFENSA estrenará el videoclip oficial de "Anguila" durante el mismo mes, pieza audiovisual que complementa la estética brutalista que caracteriza al proyecto.

SOBRE AUTODEFENSA
----------------
Formado en 2022, AUTODEFENSA es un proyecto musical integrado por Terror (voz) y Sangre (guitarra, ritmos, sintetizadores) que combina la intensidad del post-punk con matices oscuros y electrónicos, creando un universo sonoro donde conviven elementos metálicos y sintéticos con la organicidad de instrumentos tocados en vivo.

La propuesta del dúo se complementa con una marcada estética brutalista que define tanto su identidad visual como sonora.

En sus apenas dos años de trayectoria, la banda ha logrado posicionarse como una propuesta destacada dentro de la escena underground de Buenos Aires, presentándose en venues emblemáticos como La Tangente, Strummer Bar, El Emergente, La Manzana de las Luces y el Teatro Rojas.

Entre sus logros más destacados se encuentra haber sido teloneros de la legendaria banda Clan of Xymox en Uniclub.

Su próximo álbum debut promete consolidar la propuesta musical de AUTODEFENSA y establecerlos como una de las bandas más interesantes del circuito post-punk/darkwave local.

CRÉDITOS
--------
Integrantes:
Sangre - Guitarra, ritmos, sintetizadores
Terror - Voz
Mick - Bajo

Créditos técnicos:
PROD, MIX & MASTER: Sebastián Bertuzzi
REC & MASTER: Leo López
MIX & MASTER: Christian Algarañaz

CONTACTO DE PRENSA
-----------------
Teléfono: 1140753025
Email: autodefensaoficial@gmail.com`;

    // Agregar el archivo de texto al ZIP
    zip.file("autodefensa_presskit.txt", textContent);

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
    link.download = 'autodefensa_presskit.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="h-screen bg-[#0d0d0d] text-[#fafafa] flex flex-col">
      {/* Navbar */}
      <nav className="w-full border-b border-[#FF2E33] py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Image
            src="/logo/logo.svg"
            alt="Autodefensa Logo"
            width={200}
            height={50}
            priority
            className="brightness-0 invert"
          />
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-[#FF2E33] px-4 py-2 hover:bg-[#ff1a1f] transition-colors font-medium text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
            </svg>
            <span>Descargar Press Kit</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 flex items-center py-8 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Left Column - Cover Image */}
          <div className="flex items-center justify-center">
            <Image
              src="/cover/anguila.jpg"
              alt="Anguila Single Cover"
              width={500}
              height={500}
              className="rounded-none shadow-lg"
              priority
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="flex flex-col justify-center h-[600px]">
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl font-black leading-none">
                AUTODEFENSA PRESENTA SU NUEVO SINGLE &ldquo;ANGUILA&rdquo;
              </h1>
              
              <p className="text-[#FF2E33] font-bold text-sm">
                Buenos Aires, 27 de marzo de 2025
              </p>

              {/* Tabs */}
              <div className="flex gap-2 border-b border-[#FF2E33]">
                <button
                  onClick={() => setActiveTab('press')}
                  className={`px-4 py-2 font-medium transition-colors text-sm ${
                    activeTab === 'press'
                      ? 'text-[#FF2E33] border-b-2 border-[#FF2E33]'
                      : 'text-[#fafafa] hover:text-[#FF2E33]'
                  }`}
                >
                  Comunicado
                </button>
                <button
                  onClick={() => setActiveTab('about')}
                  className={`px-4 py-2 font-medium transition-colors text-sm ${
                    activeTab === 'about'
                      ? 'text-[#FF2E33] border-b-2 border-[#FF2E33]'
                      : 'text-[#fafafa] hover:text-[#FF2E33]'
                  }`}
                >
                  Sobre AUTODEFENSA
                </button>
                <button
                  onClick={() => setActiveTab('photos')}
                  className={`px-4 py-2 font-medium transition-colors text-sm ${
                    activeTab === 'photos'
                      ? 'text-[#FF2E33] border-b-2 border-[#FF2E33]'
                      : 'text-[#fafafa] hover:text-[#FF2E33]'
                  }`}
                >
                  Fotos
                </button>
                <button
                  onClick={() => setActiveTab('credits')}
                  className={`px-4 py-2 font-medium transition-colors text-sm ${
                    activeTab === 'credits'
                      ? 'text-[#FF2E33] border-b-2 border-[#FF2E33]'
                      : 'text-[#fafafa] hover:text-[#FF2E33]'
                  }`}
                >
                  Créditos
                </button>
              </div>

              {/* Tab Content */}
              <div className="space-y-3 text-base h-[300px] overflow-y-auto pr-2">
                {activeTab === 'press' && (
                  <>
                    <p>
                      El dúo post-punk AUTODEFENSA anuncia el lanzamiento de su nuevo single &ldquo;Anguila&rdquo;, disponible en todas las plataformas digitales a partir del 4 de abril de 2025. Este lanzamiento anticipa su próximo álbum debut, que verá la luz en los próximos meses.
                    </p>
                    
                    <p>
                      &ldquo;Anguila&rdquo;, grabado, mezclado y masterizado en los míticos Estudios Panda para INVS Label, sucede a su lanzamiento anterior &ldquo;Parte de Mi&rdquo; (2023) y representa una evolución en la propuesta musical del dúo.
                    </p>

                    <p>
                      Además del lanzamiento del single el 4 de abril, AUTODEFENSA estrenará el videoclip oficial de &ldquo;Anguila&rdquo; durante el mismo mes, pieza audiovisual que complementa la estética brutalista que caracteriza al proyecto.
                    </p>
                  </>
                )}

                {activeTab === 'about' && (
                  <>
                    <p>
                      Formado en 2022, AUTODEFENSA es un proyecto musical integrado por Terror (voz) y Sangre (guitarra, ritmos, sintetizadores) que combina la intensidad del post-punk con matices oscuros y electrónicos, creando un universo sonoro donde conviven elementos metálicos y sintéticos con la organicidad de instrumentos tocados en vivo.
                    </p>
                    <p>
                      La propuesta del dúo se complementa con una marcada estética brutalista que define tanto su identidad visual como sonora.
                    </p>
                    <p>
                      En sus apenas dos años de trayectoria, la banda ha logrado posicionarse como una propuesta destacada dentro de la escena underground de Buenos Aires, presentándose en venues emblemáticos como La Tangente, Strummer Bar, El Emergente, La Manzana de las Luces y el Teatro Rojas.
                    </p>
                    <p>
                      Entre sus logros más destacados se encuentra haber sido teloneros de la legendaria banda Clan of Xymox en Uniclub.
                    </p>
                    <p>
                      Su próximo álbum debut promete consolidar la propuesta musical de AUTODEFENSA y establecerlos como una de las bandas más interesantes del circuito post-punk/darkwave local.
                    </p>
                  </>
                )}

                {activeTab === 'photos' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div 
                      className="relative aspect-square cursor-pointer"
                      onClick={() => handlePhotoClick('/pics/photo1.jpg')}
                    >
                      <Image
                        src="/pics/photo1.jpg"
                        alt="AUTODEFENSA en vivo"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 33vw"
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
                        sizes="(max-width: 768px) 50vw, 33vw"
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
                        sizes="(max-width: 768px) 50vw, 33vw"
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
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                )}

                {activeTab === 'credits' && (
                  <>
                    <p className="font-bold">Integrantes:</p>
                    <p>Sangre - Guitarra, ritmos, sintetizadores</p>
                    <p>Terror - Voz</p>
                    <p>Mick - Bajo</p>
                    <p className="font-bold mt-4">Créditos técnicos:</p>
                    <p>PROD, MIX & MASTER: Sebastián Bertuzzi</p>
                    <p>REC & MASTER: Leo López</p>
                    <p>MIX & MASTER: Christian Algarañaz</p>
                  </>
                )}
              </div>

              {/* Contact Info */}
              <div className="mt-6 space-y-3">
                <h2 className="text-lg font-black">Contacto de prensa</h2>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:1140753025"
                    className="flex items-center justify-center gap-2 bg-[#FF2E33] px-6 py-2 hover:bg-[#ff1a1f] transition-colors font-medium text-sm"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <span>1140753025</span>
                  </a>
                  <a
                    href="mailto:autodefensaoficial@gmail.com"
                    className="flex items-center justify-center gap-2 bg-[#FF2E33] px-6 py-2 hover:bg-[#ff1a1f] transition-colors font-medium text-sm"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <span>autodefensaoficial@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#FF2E33] py-4">
        <div className="container mx-auto px-4 flex justify-center items-center gap-6">
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
            className="w-10 h-10 bg-[#FF2E33] flex items-center justify-center hover:bg-[#ff1a1f] transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
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
