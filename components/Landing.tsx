import React from 'react'
import Navbar from './Navbar'
import MiddleText from './MiddleText'
import Footer from './Footer'

const Landing = () => {
  return (
    <>
    <div className="flex bg-white flex-col items-stretch">
        <Navbar/>
        <div
          className="flex-col overflow-hidden relative flex min-h-[603px] w-full justify-center px-16 items-start max-md:max-w-full max-md:px-5"
        >
          <img
            loading="lazy"
            src="bg-1.png"
            className="absolute h-full w-full object-cover object-center inset-0"
          />
          <div
            className="relative flex w-[600px] max-w-full flex-col ml-16 mt-20 mb-12 items-start max-md:my-10"
          >
            <div
              className="text-white text-6xl font-bold leading-[72px] self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-[50px]"
            >
              Discover the
              <br />
              best Furnitures
            </div>
            <div
              className="text-white text-xl leading-8 self-stretch mt-16 max-md:max-w-full max-md:mt-10"
            >
              It provides a place to sit, sleep, eat, work, and store belongings.
              <br />
              Without furniture, a room would be much less
              <br />
              functional and comfortable
            </div>
            <div
              className="flex items-stretch gap-3.5 ml-7 mt-20 max-md:ml-2.5 max-md:mt-10"
            >
              <div
                className="text-white text-xl font-bold leading-8 grow whitespace-nowrap"
              >
                Explore now
              </div>
              <div
                className="flex-col stroke-[2px] stroke-white overflow-hidden relative flex aspect-square w-3 justify-center items-center"
              >
                <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#FFF" width="20px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8"></path> <path stroke-linecap="round" d="M19 5l-1 1"></path> <path d="M18 6L5 19"></path> </g></svg>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex w-full flex-col items-stretch mt-11 px-11 max-md:max-w-full max-md:mt-10 max-md:px-5"
        >
          <div
            className="text-neutral-700 text-2xl leading-9 self-center whitespace-nowrap"
          >
            TRUSTED BY OVER 1K+ COMPANIES
          </div>
          <div
            className="self-center flex w-full max-w-[987px] items-start justify-between gap-5 mt-3 max-md:max-w-full max-md:flex-wrap"
          >
            <img
              loading="lazy"
              src="microsoft.png"
              className="aspect-square object-contain object-center w-[200px] overflow-hidden self-stretch shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="decor.png"
              className="aspect-[2.5] object-contain object-center w-[155px] overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
            <img
              loading="lazy"
              src="urbaninterior.png"
              className="aspect-[2.24] object-contain object-center w-[132px] overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
            <img
              loading="lazy"
              src="hookerfurnishings.png"
              className="aspect-[3.95] object-contain object-center w-[146px] overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
            <img
              loading="lazy"
              src="bassett.png"
              className="aspect-[3.75] object-contain object-center w-[150px] overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
          </div>
          <MiddleText/>
          <div
            className="self-center w-full max-w-[1238px] mt-24 max-md:max-w-full max-md:mt-10"
          >
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div
                className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0"
              >
                <img
                  loading="lazy"
                  src="bg-2.png"
                  className="aspect-[0.94] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </div>
              <div
                className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0"
              >
                <div
                  className="flex flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10"
                >
                  <div
                    className="text-zinc-800 text-6xl font-bold leading-[72px] tracking-[4.48px] uppercase max-md:max-w-full max-md:text-4xl max-md:leading-[50px]"
                  >
                    Welcome to
                    <br />
                    Photovoltaik
                    <br />
                    Goldstein!
                    <br />
                  </div>
                  <div
                    className="text-neutral-700 text-xl leading-8 mt-16 max-md:max-w-full max-md:mt-10"
                  >
                    We are pleased that you found your way to us. As specialists in
                    photovoltaics, we offer you high-quality solar modules, inverters
                    and accessories for the construction of photovoltaic systems.
                    <br />
                    <br />
                    Our team consists of experienced specialists who will assist you
                    in planning and implementing your photovoltaic system. Thanks to
                    our many years of experience and our wide range of products, we
                    are able to offer individual solutions for every roof and every
                    situation.
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div
                className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0"
              >
                <img
                  loading="lazy"
                  src="img-1.png"
                  className="object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-6"
                />
              </div>
              <div
                className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0"
              >
                <div
                  className="bg-yellow-400 rounded-bl-3xl bg-opacity-70 flex flex-col w-full pl-10 pr-16 py-6 rounded-none items-start max-md:max-w-full max-md:mt-6 max-md:px-5"
                >
                  <div
                    className="text-neutral-700 text-4xl font-bold leading-[68px] uppercase self-stretch max-md:max-w-full"
                  >
                    Was ist Photovoltaik
                  </div>
                  <div
                    className="text-neutral-700 text-xl leading-8 self-stretch mt-2 max-md:max-w-full"
                  >
                    Ob als Einzel- oder Gesamtlösung - Mit Photovoltaikanlage,
                    Stromspeicher und Luft-Wasser-Wärmepumpe können Sie sich selbst
                    mit Erneuerbarer Energie versorgen. Das macht unabhängiger von
                    steigenden Energiepreisen, schont den Geldbeutel und schützt die
                    Umwelt
                  </div>
                  <div
                    className="bg-neutral-700 flex items-stretch justify-between gap-5 mt-7 pl-6 pr-5 py-4 max-md:pl-5"
                  >
                    <div
                      className="text-white text-xl font-medium leading-8 tracking-[2.4px]"
                    >
                      Ratgeber
                    </div>
                    <div
                    className="flex-col stroke-[2px] stroke-white overflow-hidden relative flex aspect-square w-3 justify-center items-center"
                  >
                    <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#FFF" width="20px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8"></path> <path stroke-linecap="round" d="M19 5l-1 1"></path> <path d="M18 6L5 19"></path> </g></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div
                className="flex flex-col items-stretch w-[62%] max-md:w-full max-md:ml-0"
              >
                <div
                  className="bg-yellow-400 rounded-br-3xl bg-opacity-70 flex grow flex-col w-full pl-10 pr-16 py-6 rounded-none items-start max-md:max-w-full max-md:mt-6 max-md:px-5"
                >
                  <div
                    className="text-neutral-700 text-4xl font-bold uppercase self-stretch max-md:max-w-full"
                  >
                    In einer Minute
                    <br />
                    Sparpotenzial berechnen
                  </div>
                  <div
                    className="text-neutral-700 text-xl leading-8 self-stretch mt-4 max-md:max-w-full"
                  >
                    In wenigen Schritten die wichtigsten Eckdaten Ihres Hauses
                    eingeben, um Ihr persönliches Einsparpotenzial mit einer
                    Solaranlage zu berechnen.
                  </div>
                  <div
                    className="bg-neutral-700 flex items-stretch gap-5 mt-10 px-4 py-4"
                  >
                    <div
                      className="text-white text-xl font-medium leading-8 tracking-[2.4px] grow whitespace-nowrap"
                    >
                      Angebot Berechnen
                    </div>
                    <div
                      className="flex-col stroke-[2px] stroke-white overflow-hidden relative flex aspect-square w-3 justify-center items-center"
                    >
                      <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#FFF" width="20px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8"></path> <path stroke-linecap="round" d="M19 5l-1 1"></path> <path d="M18 6L5 19"></path> </g></svg>

                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col items-stretch w-[38%] ml-5 max-md:w-full max-md:ml-0"
              >
                <img
                  loading="lazy"
                  src="img-1.png"
                  className="aspect-[1.52] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div
                className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0"
              >
                <img
                  loading="lazy"
                  src="img-1.png"
                  className="aspect-[1.52] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-6"
                />
              </div>
              <div
                className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0"
              >
                <div
                  className="bg-yellow-400 rounded-bl-3xl bg-opacity-70 flex grow flex-col w-full pl-10 pr-16 py-6 rounded-none items-start max-md:max-w-full max-md:mt-6 max-md:px-5"
                >
                  <div
                    className="text-neutral-700 text-4xl font-bold uppercase self-stretch max-md:max-w-full"
                  >
                    Kostenlos und unverbindlich
                    <br />
                    beraten lassen
                  </div>
                  <div
                    className="text-neutral-700 text-xl leading-8 self-stretch mt-4 max-md:max-w-full"
                  >
                    Wir beraten Sie kostenlos und erstellen ein unverbindliches
                    Angebot, in dem Ihre Solaranlage konfiguriert und auf Ihre
                    Bedürfnisse abgestimmt wird.
                  </div>
                  <div
                    className="bg-neutral-700 flex items-stretch justify-between gap-5 mt-10 px-5 py-4"
                  >
                    <div
                      className="text-white text-xl font-medium leading-8 tracking-[2.4px]"
                    >
                      Beratung
                    </div>
                    <div
                      className="flex-col stroke-[2px] stroke-white overflow-hidden relative flex aspect-square w-3 justify-center items-center"
                    >
                      <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#FFF" width="20px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8"></path> <path stroke-linecap="round" d="M19 5l-1 1"></path> <path d="M18 6L5 19"></path> </g></svg>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div
                className="flex flex-col items-stretch w-[62%] max-md:w-full max-md:ml-0"
              >
                <div
                  className="bg-yellow-400 rounded-br-3xl bg-opacity-70 flex grow flex-col w-full pl-10 pr-8 py-6 rounded-none items-start max-md:max-w-full max-md:mt-6 max-md:px-5"
                >
                  <div
                    className="text-neutral-700 text-4xl font-bold uppercase self-stretch max-md:max-w-full"
                  >
                    Anmelden und von
                    <br />
                    Sonderangeboten profitieren
                  </div>
                  <div
                    className="text-neutral-700 text-xl leading-8 self-stretch mt-4 max-md:max-w-full"
                  >
                    Registrieren Sie sich bei uns auf der Website, bleiben Sie immer
                    auf dem neusten Stand und profitieren Sie von Sonderangeboten für
                    Gewerbetreibende
                  </div>
                  <div
                    className="bg-neutral-700 flex items-stretch gap-3.5 mt-11 px-4 py-4 max-md:mt-10"
                  >
                    <div className="text-white text-xl leading-8">Login</div>
                    <div
                      className="flex-col stroke-[2px] stroke-white overflow-hidden relative flex aspect-square w-3 justify-center items-center"
                    >
                      <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#FFF" width="20px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8"></path> <path stroke-linecap="round" d="M19 5l-1 1"></path> <path d="M18 6L5 19"></path> </g></svg>

                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col items-stretch w-[38%] ml-5 max-md:w-full max-md:ml-0"
              >
                <img
                  loading="lazy"
                  src="img-1.png"
                  className="aspect-[1.52] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-6"
                />
              </div>
            </div>
          </div>
          <div
            className="text-neutral-700 text-4xl font-bold leading-[68px] uppercase mt-16 max-md:max-w-full max-md:mt-10"
          >
            Unsere Produkte auf einen Blick
          </div>
          <div
            className="middle-btn self-start rounded flex items-stretch gap-3.5 mt-14 px-4 py-4 max-md:mt-10"
          >
            <div
              className="text-xl font-medium leading-8 tracking-[2.4px] grow whitespace-nowrap"
            >
              Zu den Produkten
            </div>
            <div
              className="flex-col stroke-[2px] stroke-black overflow-hidden relative flex aspect-square w-3 justify-center items-center"
            >
              <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000" width="20px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8"></path> <path stroke-linecap="round" d="M19 5l-1 1"></path> <path d="M18 6L5 19"></path> </g></svg>

            </div>
          </div>
        </div>
        <div className="mt-14 mx-8 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2ad3f3c7d399e80a35a0877dad4284ccddd447d46d2f04e42db99035636e7295?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ad3f3c7d399e80a35a0877dad4284ccddd447d46d2f04e42db99035636e7295?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ad3f3c7d399e80a35a0877dad4284ccddd447d46d2f04e42db99035636e7295?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ad3f3c7d399e80a35a0877dad4284ccddd447d46d2f04e42db99035636e7295?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ad3f3c7d399e80a35a0877dad4284ccddd447d46d2f04e42db99035636e7295?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ad3f3c7d399e80a35a0877dad4284ccddd447d46d2f04e42db99035636e7295?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ad3f3c7d399e80a35a0877dad4284ccddd447d46d2f04e42db99035636e7295?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ad3f3c7d399e80a35a0877dad4284ccddd447d46d2f04e42db99035636e7295?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-[1.89] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
            <div
              className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0"
            >
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a2343651e9133dbc39619ce5f30b858f724dcd2de1963862abca8e07e4f7b59b?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2343651e9133dbc39619ce5f30b858f724dcd2de1963862abca8e07e4f7b59b?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2343651e9133dbc39619ce5f30b858f724dcd2de1963862abca8e07e4f7b59b?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2343651e9133dbc39619ce5f30b858f724dcd2de1963862abca8e07e4f7b59b?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2343651e9133dbc39619ce5f30b858f724dcd2de1963862abca8e07e4f7b59b?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2343651e9133dbc39619ce5f30b858f724dcd2de1963862abca8e07e4f7b59b?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2343651e9133dbc39619ce5f30b858f724dcd2de1963862abca8e07e4f7b59b?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2343651e9133dbc39619ce5f30b858f724dcd2de1963862abca8e07e4f7b59b?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-[1.89] object-contain object-center w-full overflow-hidden z-[1] grow max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
        <div className="mt-14 mx-8 max-md:max-w-full max-md:mt-0">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4be6f12381250e5ccb1ed0fd6c9ef1752fb17bcca173b937f92942f282b841f6?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be6f12381250e5ccb1ed0fd6c9ef1752fb17bcca173b937f92942f282b841f6?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be6f12381250e5ccb1ed0fd6c9ef1752fb17bcca173b937f92942f282b841f6?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be6f12381250e5ccb1ed0fd6c9ef1752fb17bcca173b937f92942f282b841f6?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be6f12381250e5ccb1ed0fd6c9ef1752fb17bcca173b937f92942f282b841f6?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be6f12381250e5ccb1ed0fd6c9ef1752fb17bcca173b937f92942f282b841f6?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be6f12381250e5ccb1ed0fd6c9ef1752fb17bcca173b937f92942f282b841f6?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4be6f12381250e5ccb1ed0fd6c9ef1752fb17bcca173b937f92942f282b841f6?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-[1.89] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
            <div
              className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0"
            >
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f31b4084532a269375465c837380ebe387a5f909785ab5be0a749752e33c5128?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f31b4084532a269375465c837380ebe387a5f909785ab5be0a749752e33c5128?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f31b4084532a269375465c837380ebe387a5f909785ab5be0a749752e33c5128?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f31b4084532a269375465c837380ebe387a5f909785ab5be0a749752e33c5128?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f31b4084532a269375465c837380ebe387a5f909785ab5be0a749752e33c5128?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f31b4084532a269375465c837380ebe387a5f909785ab5be0a749752e33c5128?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f31b4084532a269375465c837380ebe387a5f909785ab5be0a749752e33c5128?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f31b4084532a269375465c837380ebe387a5f909785ab5be0a749752e33c5128?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-[1.89] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
        <div
          className="text-neutral-700 text-4xl font-bold leading-[68px] uppercase self-center mt-16 max-md:max-w-full max-md:mt-10"
        >
          Häufig gestellte Fragen
        </div>
        <div
          className="self-center flex w-[1297px] max-w-full items-center justify-between gap-5 mt-14 pl-20 pr-10 py-6 border-[0.5px] border-solid border-blue-950 max-md:flex-wrap max-md:mt-10 max-md:px-5"
        >
          <div
            className="text-neutral-700 text-xl font-medium leading-[68px] tracking-wide grow shrink basis-auto my-auto max-md:max-w-full"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ?
          </div>
          <div
            className="text-blue-950 text-5xl tracking-wider self-stretch max-md:text-4xl"
          >
            +
          </div>
        </div>
        <div
          className="self-center flex w-[1297px] max-w-full items-center justify-between gap-5 mt-3.5 pl-20 pr-10 py-6 border-[0.5px] border-solid border-blue-950 max-md:flex-wrap max-md:px-5"
        >
          <div
            className="text-neutral-700 text-xl font-medium leading-[68px] tracking-wide grow shrink basis-auto my-auto max-md:max-w-full"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor?
          </div>
          <div
            className="text-blue-950 text-5xl tracking-wider self-stretch max-md:text-4xl"
          >
            +
          </div>
        </div>
        <div
          className="self-center flex w-[1297px] max-w-full items-center justify-between gap-5 mt-3.5 pl-20 pr-10 py-6 border-[0.5px] border-solid border-blue-950 max-md:flex-wrap max-md:px-5"
        >
          <div
            className="text-neutral-700 text-xl font-medium leading-[68px] tracking-wide grow shrink basis-auto my-auto max-md:max-w-full"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ?
          </div>
          <div
            className="text-blue-950 text-5xl tracking-wider self-stretch max-md:text-4xl"
          >
            +
          </div>
        </div>
        <div
          className="self-center flex w-[1297px] max-w-full items-center justify-between gap-5 mt-3.5 pl-20 pr-10 py-6 border-[0.5px] border-solid border-blue-950 max-md:flex-wrap max-md:px-5"
        >
          <div
            className="text-neutral-700 text-xl font-medium leading-[68px] tracking-wide grow shrink basis-auto my-auto max-md:max-w-full"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt aliqua ?
          </div>
          <div
            className="text-blue-950 text-5xl tracking-wider self-stretch max-md:text-4xl"
          >
            +
          </div>
        </div>
        <div
          className="self-center flex w-[1297px] max-w-full items-center justify-between gap-5 mt-3.5 pl-20 pr-10 py-6 border-[0.5px] border-solid border-blue-950 max-md:flex-wrap max-md:px-5"
        >
          <div
            className="text-neutral-700 text-xl font-medium leading-[68px] tracking-wide grow shrink basis-auto my-auto max-md:max-w-full"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ?
          </div>
          <div
            className="text-blue-950 text-5xl tracking-wider self-stretch max-md:text-4xl"
          >
            +
          </div>
        </div>
        <div
          className="self-center flex w-[1297px] max-w-full items-center justify-between gap-5 mt-3.5 pl-20 pr-10 py-6 border-[0.5px] border-solid border-blue-950 max-md:flex-wrap max-md:px-5"
        >
          <div
            className="text-neutral-700 text-xl font-medium leading-[68px] tracking-wide grow shrink basis-auto my-auto max-md:max-w-full"
          >
            Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et dolore
            magna aliqua ?
          </div>
          <div
            className="text-blue-950 text-5xl tracking-wider self-stretch max-md:text-4xl"
          >
            +
          </div>
        </div>
        <div
          className="bg-yellow-400 flex w-full items-center justify-between gap-5 mt-16 px-20 py-12 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:px-5"
        >
          <div
            className="flex grow basis-[0%] flex-col items-stretch my-auto max-md:max-w-full"
          >
            <div
              className="text-neutral-700 text-6xl font-medium max-md:max-w-full max-md:text-4xl"
            >
              Let&apos;s
            </div>
            <div
              className="text-neutral-700 text-9xl font-medium mt-14 max-md:max-w-full max-md:text-4xl max-md:mt-10"
            >
              Get in touch
            </div>
          </div>
          <div
            className="bg-black flex items-stretch gap-5 mt-48 px-2.5 py-3 self-end max-md:mt-10"
          >
            <div className="text-white text-base font-medium">Contact us</div>
            <div
              className="flex-col stroke-[2px] stroke-white overflow-hidden relative flex aspect-square w-3 justify-center items-center"
            >
            <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#FFF" width="20px"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8"></path> <path stroke-linecap="round" d="M19 5l-1 1"></path> <path d="M18 6L5 19"></path> </g></svg>
              
            </div>
          </div>
        </div>
        <Footer/>
      </div>  
    </>
  )
}

export default Landing