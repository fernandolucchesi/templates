import React from 'react';
import Carousel from 'react-grid-carousel';

export default function TemplateFour() {
  return (
    <div id="wrapper">
      <div>
        <header className="py-2 text-gray-600 body-font">
          <div className="container flex flex-wrap items-center w-full px-6 py-2 mx-auto bg-white lg:h-16 lg:py-0">
            <div className="flex items-center flex-1 h-full -mx-6">
              <img
                src="img/logoRA-01-01.png"
                alt="Remote Agro logo"
                className="h-12"
              />
              <span className="ml-3 text-xl font-bold text-black">
                Remote Agro
              </span>
            </div>

            <label
              htmlFor="menu-toggle"
              className="block pointer-cursor lg:hidden"
            >
              <svg
                className="text-gray-900 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div
              className="hidden w-full lg:flex lg:items-center lg:w-auto"
              id="menu"
            >
              <nav>
                <ul className="items-center justify-between pt-4 lg:flex lg:pt-0">
                  <li>
                    <a
                      className="block px-0 py-3 border-b-2 border-transparent lg:p-4 lg:py-5 hover:text-black"
                      href="#sobre"
                    >
                      Sobre
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-0 py-3 border-b-2 border-transparent lg:p-4 lg:py-5 hover:text-black"
                      href="#vantagens"
                    >
                      Vantagens
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-0 py-3 border-b-2 border-transparent lg:p-4 lg:py-5 hover:text-black"
                      href="#servicos"
                    >
                      Serviços
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-0 py-3 border-b-2 border-transparent lg:p-4 lg:py-5 hover:text-black"
                      href="#clientes"
                    >
                      Clientes
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-0 py-3 border-b-2 border-transparent lg:p-4 lg:py-5 hover:text-black"
                      href="#contato"
                    >
                      Contato
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=5561998568439&text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20mais%20sobre%20os%20servi%C3%A7os%20da%20Remote%20Agro"
              className="items-center hidden px-3 py-3 ml-4 text-base text-white border-0 rounded md:inline-flex bg-remoteagro-500 hover:bg-remoteagro-600 focus:outline-none"
            >
              Agende uma demonstração gratuita
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-4 h-4 ml-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </header>
      </div>

      <section className="relative px-2 py-20 text-gray-600 bg-center bg-cover body-font md:py-32 lg:py-60 bg-hero">
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col items-center w-full text-center text-white lg:w-3/4">
            <h1 className="text-4xl font-black uppercase md:leading-tight md:text-6xl">
              Gestão que acelera o seu agronegócio{' '}
            </h1>
            <h2 className="py-2 my-8 text-lg text-gray-100 md:text-2xl lg:w-3/4">
              Evolua seu agronegócio com quem é especialista nisso. Oferecemos
              uma visão centralizada utilizado automação no agronegócio. Conheça
              mais sobre nosso trabalho.{' '}
            </h2>
            <a
              href="https://api.whatsapp.com/send?phone=5561998568439&text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20mais%20sobre%20os%20servi%C3%A7os%20da%20Remote%20Agro"
              className="inline-flex px-6 py-4 text-lg text-white border-0 rounded bg-remoteagro-500 focus:outline-none hover:bg-remoteagro-600"
            >
              Agende uma demonstração gratuita{' '}
            </a>
          </div>
        </div>
      </section>

      <section className="text-gray-600 bg-gray-100">
        <div className="container flex flex-col items-center px-4 py-16 mx-auto lg:px-6 lg:flex-row">
          <div className="flex flex-col w-full pr-0 mb-6 text-left lg:pr-10 lg:mb-0 lg:w-auto">
            <h2 className="mb-1 tracking-widest md:font-medium text-remoteagro-600 title-font">
              O aplicativo que surgiu para a sua fazenda
            </h2>
            <h1 className="text-lg font-black uppercase md:leading-tight md:text-3xl">
              Parceiros e apoiadores
            </h1>
          </div>
          <div className="flex flex-col flex-shrink-0 gap-8 overflow-auto md:p-4 md:space-x-4 md:mx-auto md:items-center md:flex-row lg:ml-auto lg:mr-0">
            <img alt="" src="img/partner-1.png" className="w-auto h-20" />
            <img alt="" src="img/partner-2.png" className="w-auto h-20" />
            <img alt="" src="img/partner-3.png" className="w-auto h-20" />
          </div>
        </div>
      </section>

      <section className="py-20 text-gray-600 body-font md:py-32 lg:py-48">
        <div className="container flex flex-col items-center px-4 mx-auto lg:flex-row md:px-6">
          <div className="flex items-center w-full mb-16 lg:pr-16 lg:w-1/2 lg:mb-0">
            <h1 className="text-3xl font-black leading-snug uppercase md:text-5xl md:leading-tight">
              {' '}
              Não ter{' '}
              <span className="text-white bg-remoteagro-600">
                rotinas otimizadas
              </span>{' '}
              está impactando o seu bolso{' '}
            </h1>
          </div>
          <div className="w-full rounded-lg lg:p-10 lg:border-4 border-remoteagro-500 lg:w-1/2">
            <p className="text-xl leading-relaxed">
              {' '}
              Você já contabilizou quanto tempo é gasto em tarefas repetitivas
              na gestão de sua propriedade? Quantos dados de produção de coleita
              e de comercialização se perdem ao longo do ano? E como é dificil
              garantir uma comunicação eficaz entre sua equipe de campo e os
              responsáveis técnicos?{' '}
              <u>
                {' '}
                A não digitalização da sua fazenda faz com que você perca
                dinheiro e recursos{' '}
              </u>{' '}
              .{' '}
            </p>
          </div>
        </div>
      </section>
      <section
        id="sobre"
        className="py-20 text-gray-600 body-font md:py-32 lg:py-48 bg-remoteagro-50"
      >
        <div className="container flex flex-col items-center px-4 mx-auto lg:flex-row md:px-6">
          <div className="items-center hidden w-full mb-16 lg:flex lg:pr-16 lg:w-1/2 lg:mb-0">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7QSrLm9Mbo4"
              title="RemoteAgro"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen="allowfullscreen"
            ></iframe>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 lg:mb-0">
            <h1 className="text-3xl font-black leading-snug uppercase md:text-5xl md:leading-tight">
              {' '}
              A <span className="text-white bg-remoteagro-600">
                solução
              </span>{' '}
              pensada para o seu agronegócio{' '}
            </h1>
            <div className="flex items-center justify-center w-full my-8 lg:hidden lg:pr-16 lg:w-1/2 lg:mb-0">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/7QSrLm9Mbo4"
                title="RemoteAgro"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </div>
            <div className="flex mt-6 mb-12">
              <div className="inline-flex w-16 h-1 rounded-full bg-remoteagro-500"></div>
            </div>
            <p className="w-full text-xl leading-relaxed">
              Com o nosso aplicativo você:
            </p>
            <ul className="list-disc list-inside">
              <li>Gerencia sua fazenda de qualquer lugar</li>
              <li>Otimiza seu tempo, recursos e lucros</li>
              <li>Registra dados até mesmo sem conexāo com a internet</li>
              <li>Se livra do caderno de anotações</li>
            </ul>
            z
          </div>
        </div>
      </section>
      <section
        id="vantagens"
        className="py-20 bg-gray-900 body-font md:py-32 lg:py-48"
      >
        <div className="container flex flex-col items-center px-2 mx-auto text-center md:px-6">
          <h2 className="mb-1 font-medium tracking-widest text-remoteagro-500 title-font">
            VANTAGENS
          </h2>
          <h1 className="text-3xl font-black leading-snug text-white uppercase md:text-5xl md:leading-tight">
            Veja o porquê escolher a{' '}
            <span className="text-white bg-remoteagro-600">Remote Agro</span>
          </h1>

          <div className="flex justify-center mt-6 mb-12">
            <div className="inline-flex w-16 h-1 rounded-full bg-remoteagro-500"></div>
          </div>
          <div className="flex flex-row ">
            <div className="hidden w-1/3 mr-8 md:block">
              <img
                className="object-cover min-h-full rounded bg-table"
                alt=""
                src="img/table-bg2.jpeg"
              />
            </div>
            <div className="w-full mx-auto overflow-auto lg:w-2/3">
              <table className="w-full text-left text-gray-300 whitespace-no-wrap table-auto ">
                <thead>
                  <tr>
                    <th className="px-2 py-3 font-medium tracking-wider title-font text-medium"></th>
                    <th className="w-20 px-2 mx-1 font-medium tracking-wider text-center bg-gray-700 rounded-tl md:px-4 title-font text-medium">
                      Outros
                    </th>
                    <th className="w-20 py-3 font-medium tracking-wider text-center rounded-tr md:px-2 title-font bg-remoteagro-300 text-medium">
                      <div className="flex justify-center ">
                        <img
                          src="/img/logoRA-01-01.png"
                          alt="Logo Remote Agro"
                          className="w-16 h-auto"
                        />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-2 py-3">Controle de estoque</td>
                    <td className="px-2 py-3 bg-gray-700">
                      <div className="flex justify-center">✅</div>
                    </td>
                    <td className="px-2 py-3 text-black bg-remoteagro-300">
                      <div className="flex justify-center">✅</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-3 border-t-2 border-white border-opacity-20">
                      Controle de máquinas
                    </td>
                    <td className="px-2 py-3 text-center bg-gray-700 border-t-2 border-white border-opacity-20">
                      <div className="flex justify-center">✅</div>
                    </td>
                    <td className="px-2 py-3 text-center text-black border-t-2 border-white border-opacity-20 bg-remoteagro-300">
                      <div className="flex justify-center">✅</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-3 border-t-2 border-white border-opacity-20">
                      Gestão de receitas
                    </td>
                    <td className="px-2 py-3 text-center bg-gray-700 border-t-2 border-white border-opacity-20">
                      <div className="flex justify-center">✅</div>
                    </td>
                    <td className="px-2 py-3 text-center text-black border-t-2 border-white border-opacity-20 bg-remoteagro-300">
                      <div className="flex justify-center">✅</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-3 border-t-2 border-white border-opacity-20">
                      Custos de safra/talhões
                    </td>
                    <td className="px-2 py-3 text-center bg-gray-700 border-t-2 border-white border-opacity-20">
                      <div className="flex justify-center">✅</div>
                    </td>
                    <td className="px-2 py-3 text-center text-black border-t-2 border-white border-opacity-20 bg-remoteagro-300">
                      <div className="flex justify-center">✅</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-3 border-t-2 border-white border-opacity-20">
                      Mapas NDVI
                    </td>
                    <td className="px-2 py-3 text-center bg-gray-700 border-t-2 border-white border-opacity-20">
                      <div className="flex justify-center">✅</div>
                    </td>
                    <td className="px-2 py-3 text-center text-black border-t-2 border-white border-opacity-20 bg-remoteagro-300">
                      <div className="flex justify-center">✅</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-3 border-t-2 border-white border-opacity-20">
                      Controle de atividades
                    </td>
                    <td className="px-2 py-3 text-center bg-gray-700 border-t-2 border-white border-opacity-20">
                      <div className="flex justify-center">✅</div>
                    </td>
                    <td className="px-2 py-3 text-center text-black border-t-2 border-white border-opacity-20 bg-remoteagro-300">
                      <div className="flex justify-center">✅</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-3 border-t-2 border-white border-opacity-20">
                      Gestão financeira e de patrimônio completa
                    </td>
                    <td className="px-2 py-3 text-center bg-gray-700 border-t-2 border-white border-opacity-20">
                      <div className="flex justify-center">✅</div>
                    </td>
                    <td className="px-2 py-3 text-center text-black border-t-2 border-white border-opacity-20 bg-remoteagro-300">
                      <div className="flex justify-center">✅</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-3 border-t-2 border-white border-opacity-20">
                      Planejamento agrícola
                    </td>
                    <td className="px-2 py-3 text-center bg-gray-700 border-t-2 border-white border-opacity-20">
                      <div className="flex justify-center">✅</div>
                    </td>
                    <td className="px-2 py-3 text-center text-black border-t-2 border-white border-opacity-20 bg-remoteagro-300">
                      <div className="flex justify-center ">✅</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-3 border-t-2 border-white border-opacity-20">
                      Sistemas diferenciados voltados para cada função
                    </td>
                    <td className="px-2 py-3 text-center bg-gray-700 border-t-2 border-white border-opacity-20">
                      <div className="flex justify-center">❌</div>
                    </td>
                    <td className="px-2 py-3 text-center text-black border-t-2 border-white border-opacity-20 bg-remoteagro-300">
                      <div className="flex justify-center">✅</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-3 border-t-2 border-white border-opacity-20">
                      Realização de pesagens direta pelo sistema e integração
                      com talhões e contratos
                    </td>
                    <td className="px-2 py-3 text-center bg-gray-700 border-t-2 border-white border-opacity-20">
                      <div className="flex justify-center">❌</div>
                    </td>
                    <td className="px-2 py-3 text-center text-black border-t-2 border-white border-opacity-20 bg-remoteagro-300">
                      <div className="flex justify-center">✅</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-3 border-t-2 border-white border-opacity-20">
                      Envio de recomendações diárias entre equipe técnica e
                      operacional
                    </td>
                    <td className="px-2 py-3 text-center bg-gray-700 border-t-2 border-white border-opacity-20">
                      <div className="flex justify-center">❌</div>
                    </td>
                    <td className="px-2 py-3 text-center text-black border-t-2 border-white border-opacity-20 bg-remoteagro-300">
                      <div className="flex justify-center">✅</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-3 border-t-2 border-white border-opacity-20">
                      Acompanhamento técnico e personalizado da sua produção por
                      consultores agrícolas
                    </td>
                    <td className="px-2 py-3 text-center bg-gray-700 border-t-2 border-white border-opacity-20">
                      <div className="flex justify-center">❌</div>
                    </td>
                    <td className="px-2 py-3 text-center text-black border-t-2 border-white border-opacity-20 bg-remoteagro-300">
                      <div className="flex justify-center">✅</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-3 border-t-2 border-white border-opacity-20">
                      Relatórios personalizados de acordo com a sua demanda
                    </td>
                    <td className="px-2 py-3 text-center bg-gray-700 border-t-2 border-white border-opacity-20">
                      <div className="flex justify-center">❌</div>
                    </td>
                    <td className="px-2 py-3 text-center text-black border-t-2 border-white border-opacity-20 bg-remoteagro-300">
                      <div className="flex justify-center">✅</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-3 border-t-2 border-white border-opacity-20">
                      Monitoramento climático e de solo completo sob encomenda
                    </td>
                    <td className="px-2 py-3 text-center bg-gray-700 border-t-2 border-white rounded-bl border-opacity-20">
                      <div className="flex justify-center">❌</div>
                    </td>
                    <td className="px-2 py-3 text-center text-black border-t-2 border-white rounded-br border-opacity-20 bg-remoteagro-300">
                      <div className="flex justify-center">✅</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-20">
            <a
              href="https://api.whatsapp.com/send?phone=5561998568439&text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20mais%20sobre%20os%20servi%C3%A7os%20da%20Remote%20Agro"
              className="inline-flex px-6 py-4 text-lg text-center text-white border-0 rounded bg-remoteagro-500 focus:outline-none hover:bg-remoteagro-600"
            >
              {' '}
              Agende uma demonstração gratuita{' '}
            </a>
          </div>
        </div>
      </section>
      <section
        id="servicos"
        className="py-20 text-gray-600 body-font md:py-32 lg:py-48"
      >
        <div className="container flex flex-col items-center px-4 mx-auto md:px-6">
          <div className="flex flex-col w-full mb-20 text-center">
            <h2 className="mb-1 font-medium tracking-widest text-remoteagro-500 title-font">
              NOSSOS SERVIÇOS
            </h2>
            <h1 className="text-3xl font-black leading-snug uppercase md:text-5xl md:leading-tight">
              Como{' '}
              <span className="text-white bg-remoteagro-600">digitalizar</span>{' '}
              o seu agronegócio
            </h1>
            <div className="flex justify-center mt-6 ">
              <div className="inline-flex w-16 h-1 rounded-full bg-remoteagro-500"></div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center -m-4 xl:w-2/3">
            <div className="p-4 md:w-1/2">
              <div className="flex flex-col h-full p-8 border-4 rounded-lg border-remoteagro-500">
                <div className="flex flex-col mb-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mb-3 mr-3 text-white rounded-full ">
                    <svg
                      width="50"
                      height="54"
                      viewBox="0 0 50 54"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M42.8571 37.8887C41.5855 37.8958 40.3393 38.2669 39.25 38.9629L32.4411 31.7375C33.4112 30.1929 33.9288 28.3782 33.9288 26.5221C33.9288 24.666 33.4112 22.8514 32.4411 21.3067L36.9893 16.4816C38.1398 17.0695 39.4494 17.2065 40.686 16.8682C41.9226 16.5298 43.0064 15.7381 43.7455 14.6332C44.4845 13.5283 44.8311 12.1815 44.7238 10.8315C44.6165 9.48148 44.0622 8.21532 43.1592 7.25732C42.2562 6.29932 41.0627 5.71131 39.7901 5.59747C38.5176 5.48362 37.2481 5.85128 36.2066 6.63532C35.1651 7.41936 34.4188 8.56917 34.0999 9.88107C33.781 11.193 33.9101 12.5823 34.4643 13.8029L29.9161 18.628C28.4601 17.5988 26.7496 17.0497 25 17.0497C23.2504 17.0497 21.5399 17.5988 20.0839 18.628L13.2732 11.4026C13.929 10.2475 14.2788 8.92614 14.2857 7.57775C14.2857 6.07901 13.8668 4.61393 13.0819 3.36778C12.2971 2.12163 11.1815 1.15037 9.87631 0.576825C8.57113 0.00328329 7.13494 -0.146781 5.74936 0.145608C4.36378 0.437997 3.09104 1.15971 2.0921 2.21947C1.09315 3.27924 0.41286 4.62947 0.137251 6.09941C-0.138357 7.56934 0.00309486 9.09298 0.543721 10.4776C1.08435 11.8623 1.99986 13.0458 3.1745 13.8784C4.34914 14.7111 5.73014 15.1555 7.14286 15.1555C8.41447 15.1485 9.6607 14.7774 10.75 14.0814L17.5589 21.3067C16.5888 22.8514 16.0712 24.666 16.0712 26.5221C16.0712 28.3782 16.5888 30.1929 17.5589 31.7375L10.7482 38.9629C9.6594 38.2673 8.41385 37.8962 7.14286 37.8887C5.73014 37.8887 4.34914 38.3332 3.1745 39.1658C1.99986 39.9985 1.08435 41.182 0.543721 42.5666C0.00309486 43.9513 -0.138357 45.4749 0.137251 46.9448C0.41286 48.4148 1.09315 49.765 2.0921 50.8248C3.09104 51.8845 4.36378 52.6062 5.74936 52.8986C7.13494 53.191 8.57113 53.041 9.87631 52.4674C11.1815 51.8939 12.2971 50.9226 13.0819 49.6765C13.8668 48.4303 14.2857 46.9652 14.2857 45.4665C14.2791 44.1175 13.9293 42.7954 13.2732 41.6397L20.0839 34.4162C21.0336 35.0878 22.0965 35.5586 23.2143 35.803V42.0262C22.0228 42.4731 21.0187 43.3524 20.3792 44.5088C19.7398 45.6652 19.5063 47.0242 19.72 48.3455C19.9337 49.6669 20.5808 50.8656 21.547 51.7297C22.5132 52.5938 23.7363 53.0678 25 53.0678C26.2637 53.0678 27.4868 52.5938 28.453 51.7297C29.4192 50.8656 30.0663 49.6669 30.28 48.3455C30.4937 47.0242 30.2602 45.6652 29.6208 44.5088C28.9813 43.3524 27.9772 42.4731 26.7857 42.0262V35.803C27.9035 35.5586 28.9664 35.0878 29.9161 34.4162L36.7268 41.6416C36.071 42.7967 35.7212 44.1181 35.7143 45.4665C35.7143 46.9652 36.1332 48.4303 36.9181 49.6765C37.7029 50.9226 38.8185 51.8939 40.1237 52.4674C41.4289 53.041 42.8651 53.191 44.2506 52.8986C45.6362 52.6062 46.909 51.8845 47.9079 50.8248C48.9068 49.765 49.5871 48.4148 49.8627 46.9448C50.1384 45.4749 49.9969 43.9513 49.4563 42.5666C48.9157 41.182 48.0001 39.9985 46.8255 39.1658C45.6509 38.3332 44.2699 37.8887 42.8571 37.8887ZM25 20.8388C26.0595 20.8388 27.0953 21.1721 27.9763 21.7966C28.8572 22.4211 29.5439 23.3087 29.9494 24.3472C30.3548 25.3857 30.4609 26.5284 30.2542 27.6309C30.0475 28.7333 29.5373 29.746 28.7881 30.5408C28.0389 31.3357 27.0843 31.8769 26.0451 32.0962C25.0059 32.3155 23.9288 32.203 22.9499 31.7728C21.971 31.3427 21.1343 30.6142 20.5457 29.6796C19.957 28.745 19.6429 27.6462 19.6429 26.5221C19.6443 25.0153 20.2091 23.5706 21.2135 22.5051C22.2178 21.4396 23.5796 20.8403 25 20.8388ZM3.57143 7.57775C3.57143 6.82838 3.78089 6.09584 4.17333 5.47277C4.56576 4.84969 5.12354 4.36406 5.77613 4.07729C6.42873 3.79052 7.14682 3.71548 7.83961 3.86168C8.5324 4.00787 9.16877 4.36873 9.66824 4.89861C10.1677 5.4285 10.5079 6.10361 10.6457 6.83858C10.7835 7.57355 10.7127 8.33536 10.4424 9.02769C10.1721 9.72002 9.71436 10.3118 9.12704 10.7281C8.53972 11.1444 7.84922 11.3666 7.14286 11.3666C6.19595 11.3656 5.28809 10.9661 4.61852 10.2558C3.94895 9.54545 3.57238 8.58232 3.57143 7.57775ZM7.14286 49.2554C6.4365 49.2554 5.746 49.0331 5.15868 48.6168C4.57136 48.2005 4.1136 47.6088 3.84329 46.9164C3.57298 46.2241 3.50225 45.4623 3.64005 44.7273C3.77786 43.9923 4.118 43.3172 4.61748 42.7874C5.11695 42.2575 5.75332 41.8966 6.44611 41.7504C7.1389 41.6042 7.85699 41.6793 8.50959 41.966C9.16218 42.2528 9.71996 42.7384 10.1124 43.3615C10.5048 43.9846 10.7143 44.7171 10.7143 45.4665C10.7133 46.4711 10.3368 47.4342 9.6672 48.1445C8.99763 48.8549 8.08977 49.2544 7.14286 49.2554ZM42.8571 49.2554C42.1508 49.2554 41.4603 49.0331 40.873 48.6168C40.2856 48.2005 39.8279 47.6088 39.5576 46.9164C39.2873 46.2241 39.2165 45.4623 39.3543 44.7273C39.4921 43.9923 39.8323 43.3172 40.3318 42.7874C40.8312 42.2575 41.4676 41.8966 42.1604 41.7504C42.8532 41.6042 43.5713 41.6793 44.2239 41.966C44.8765 42.2528 45.4342 42.7384 45.8267 43.3615C46.2191 43.9846 46.4286 44.7171 46.4286 45.4665C46.4272 46.4709 46.0504 47.4337 45.381 48.144C44.7115 48.8542 43.8039 49.2539 42.8571 49.2554Z"
                        fill="#68B93A"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-medium text-gray-900 title-font">
                    Registro de dados de campo
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="text-base leading-relaxed">
                    Atualize seus dados de plantio, fertilizantes, defensivos e
                    colheita em tempo real.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className="flex flex-col h-full p-8 border-4 rounded-lg border-remoteagro-500">
                <div className="flex flex-col mb-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mb-3 mr-3 text-white rounded-full">
                    <svg
                      width="50"
                      height="46"
                      viewBox="0 0 50 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.8641 7.57018C17.8641 5.56245 18.6159 3.63694 19.9541 2.21726C21.2923 0.79757 23.1073 0 24.9998 0C26.8924 0 28.7074 0.79757 30.0456 2.21726C31.3838 3.63694 32.1356 5.56245 32.1356 7.57018C32.1356 9.57792 31.3838 11.5034 30.0456 12.9231C28.7074 14.3428 26.8924 15.1404 24.9998 15.1404C23.1073 15.1404 21.2923 14.3428 19.9541 12.9231C18.6159 11.5034 17.8641 9.57792 17.8641 7.57018ZM24.9998 3.78888C24.5318 3.78888 24.0683 3.88669 23.6359 4.07671C23.2034 4.26674 22.8105 4.54527 22.4795 4.8964C22.1485 5.24753 21.886 5.66437 21.7069 6.12314C21.5278 6.58191 21.4356 7.07362 21.4356 7.57018C21.4356 8.06675 21.5278 8.55846 21.7069 9.01723C21.886 9.47599 22.1485 9.89284 22.4795 10.244C22.8105 10.5951 23.2034 10.8736 23.6359 11.0637C24.0683 11.2537 24.5318 11.3515 24.9998 11.3515C25.9452 11.3515 26.8517 10.9531 27.5202 10.244C28.1886 9.53484 28.5641 8.57305 28.5641 7.57018C28.5641 6.56732 28.1886 5.60553 27.5202 4.8964C26.8517 4.18727 25.9452 3.78888 24.9998 3.78888Z"
                        fill="#68B93A"
                      />
                      <path
                        d="M35.7144 9.46482C35.7144 8.71847 35.8529 7.97943 36.1221 7.2899C36.3914 6.60037 36.786 5.97385 37.2834 5.4461C37.7809 4.91836 38.3715 4.49972 39.0214 4.21411C39.6714 3.9285 40.368 3.78149 41.0715 3.78149C41.775 3.78149 42.4716 3.9285 43.1216 4.21411C43.7716 4.49972 44.3621 4.91836 44.8596 5.4461C45.3571 5.97385 45.7517 6.60037 46.0209 7.2899C46.2901 7.97943 46.4287 8.71847 46.4287 9.46482C46.4287 10.9721 45.8643 12.4177 44.8596 13.4835C43.8549 14.5494 42.4923 15.1481 41.0715 15.1481C39.6507 15.1481 38.2881 14.5494 37.2834 13.4835C36.2788 12.4177 35.7144 10.9721 35.7144 9.46482ZM41.0715 7.57038C40.5979 7.57038 40.1437 7.76997 39.8088 8.12524C39.4739 8.48052 39.2858 8.96238 39.2858 9.46482C39.2858 9.96725 39.4739 10.4491 39.8088 10.8044C40.1437 11.1597 40.5979 11.3593 41.0715 11.3593C41.5451 11.3593 41.9993 11.1597 42.3342 10.8044C42.6691 10.4491 42.8572 9.96725 42.8572 9.46482C42.8572 8.96238 42.6691 8.48052 42.3342 8.12524C41.9993 7.76997 41.5451 7.57038 41.0715 7.57038Z"
                        fill="#68B93A"
                      />
                      <path
                        d="M8.92857 3.78149C7.50776 3.78149 6.14515 4.38027 5.14049 5.4461C4.13582 6.51193 3.57141 7.95751 3.57141 9.46482C3.57141 10.9721 4.13582 12.4177 5.14049 13.4835C6.14515 14.5494 7.50776 15.1481 8.92857 15.1481C10.3494 15.1481 11.712 14.5494 12.7167 13.4835C13.7213 12.4177 14.2857 10.9721 14.2857 9.46482C14.2857 7.95751 13.7213 6.51193 12.7167 5.4461C11.712 4.38027 10.3494 3.78149 8.92857 3.78149ZM7.14285 9.46482C7.14285 8.96238 7.33099 8.48052 7.66587 8.12524C8.00076 7.76997 8.45497 7.57038 8.92857 7.57038C9.40217 7.57038 9.85637 7.76997 10.1913 8.12524C10.5261 8.48052 10.7143 8.96238 10.7143 9.46482C10.7143 9.96725 10.5261 10.4491 10.1913 10.8044C9.85637 11.1597 9.40217 11.3593 8.92857 11.3593C8.45497 11.3593 8.00076 11.1597 7.66587 10.8044C7.33099 10.4491 7.14285 9.96725 7.14285 9.46482Z"
                        fill="#68B93A"
                      />
                      <path
                        d="M11.6715 18.937C11.0429 20.0883 10.7127 21.3955 10.7143 22.7259H3.57144V32.1982C3.57115 33.1407 3.79178 34.0684 4.21347 34.8979C4.63515 35.7274 5.24466 36.4326 5.98712 36.9501C6.72958 37.4676 7.58168 37.781 8.46672 37.8623C9.35176 37.9435 10.242 37.79 11.0572 37.4156C11.3215 38.6697 11.7357 39.867 12.2715 40.9847C10.916 41.5653 9.44684 41.784 7.99308 41.6215C6.53932 41.459 5.1454 40.9203 3.93373 40.0528C2.72207 39.1852 1.72972 38.0153 1.04383 36.6458C0.357951 35.2763 -0.000485886 33.749 4.94334e-07 32.1982V22.7259C4.94334e-07 21.721 0.376276 20.7573 1.04605 20.0468C1.71582 19.3362 2.62423 18.937 3.57144 18.937H11.6715Z"
                        fill="#68B93A"
                      />
                      <path
                        d="M37.7285 40.9847C39.084 41.5653 40.5531 41.784 42.0069 41.6215C43.4606 41.459 44.8545 40.9203 46.0662 40.0528C47.2779 39.1852 48.2702 38.0153 48.9561 36.6458C49.642 35.2763 50.0004 33.749 49.9999 32.1982V22.7259C49.9999 21.721 49.6236 20.7573 48.9539 20.0468C48.2841 19.3362 47.3757 18.937 46.4285 18.937H38.3285C38.9357 20.051 39.2857 21.343 39.2857 22.7259H46.4285V32.1982C46.4288 33.1407 46.2082 34.0684 45.7865 34.8979C45.3648 35.7274 44.7553 36.4326 44.0128 36.9501C43.2704 37.4676 42.4183 37.781 41.5332 37.8623C40.6482 37.9435 39.758 37.79 38.9428 37.4156C38.6749 38.6697 38.2642 39.867 37.7285 40.9847Z"
                        fill="#68B93A"
                      />
                      <path
                        d="M17.5714 19C16.6242 19 15.7158 19.3992 15.0461 20.1097C14.3763 20.8203 14 21.784 14 22.7889V34.1556C14 37.1703 15.1288 40.0614 17.1381 42.1931C19.1475 44.3248 21.8727 45.5223 24.7143 45.5223C27.5559 45.5223 30.2812 44.3248 32.2905 42.1931C34.2998 40.0614 35.4286 37.1703 35.4286 34.1556V22.7889C35.4286 21.784 35.0523 20.8203 34.3826 20.1097C33.7128 19.3992 32.8044 19 31.8572 19H17.5714ZM17.5714 22.7889H31.8572V34.1556C31.8572 36.1654 31.1046 38.0928 29.7651 39.5139C28.4255 40.9351 26.6087 41.7334 24.7143 41.7334C22.8199 41.7334 21.0031 40.9351 19.6635 39.5139C18.324 38.0928 17.5714 36.1654 17.5714 34.1556V22.7889Z"
                        fill="#68B93A"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-medium text-gray-900 title-font">
                    Recomendações para equipes em campo
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="text-base leading-relaxed">
                    Os responsáveis técnicos conseguem enviar ordens de serviços
                    para operadores em campo
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className="flex flex-col h-full p-8 border-4 rounded-lg border-remoteagro-500">
                <div className="flex flex-col mb-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mb-3 mr-3 text-white rounded-full">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M45 17.5V45H5V15H15.125L19.7 10H32.5V5H17.5L12.925 10H5C3.67392 10 2.40215 10.5268 1.46447 11.4645C0.526784 12.4021 0 13.6739 0 15V45C0 46.3261 0.526784 47.5979 1.46447 48.5355C2.40215 49.4732 3.67392 50 5 50H45C46.3261 50 47.5979 49.4732 48.5355 48.5355C49.4732 47.5979 50 46.3261 50 45V17.5H45ZM46.675 15H50C50 6.7 43.275 0 35 0V3.325C41.45 3.325 46.65 8.525 46.675 15ZM40 15H43.325C43.3253 13.9067 43.1102 12.824 42.692 11.8138C42.2737 10.8036 41.6605 9.88572 40.8874 9.1126C40.1143 8.33949 39.1964 7.72629 38.1862 7.30803C37.176 6.88978 36.0933 6.67467 35 6.675V10C37.775 10 40 12.225 40 15ZM12.5 30C12.5 33.3152 13.817 36.4946 16.1612 38.8388C18.5054 41.183 21.6848 42.5 25 42.5C28.3152 42.5 31.4946 41.183 33.8388 38.8388C36.183 36.4946 37.5 33.3152 37.5 30C37.5 26.6848 36.183 23.5054 33.8388 21.1612C31.4946 18.817 28.3152 17.5 25 17.5C21.6848 17.5 18.5054 18.817 16.1612 21.1612C13.817 23.5054 12.5 26.6848 12.5 30ZM32.5 30C32.5 31.9891 31.7098 33.8968 30.3033 35.3033C28.8968 36.7098 26.9891 37.5 25 37.5C23.0109 37.5 21.1032 36.7098 19.6967 35.3033C18.2902 33.8968 17.5 31.9891 17.5 30C17.5 28.0109 18.2902 26.1032 19.6967 24.6967C21.1032 23.2902 23.0109 22.5 25 22.5C26.9891 22.5 28.8968 23.2902 30.3033 24.6967C31.7098 26.1032 32.5 28.0109 32.5 30Z"
                        fill="#68B93A"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-medium text-gray-900 title-font">
                    Monitoramento clima e solo
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="text-base leading-relaxed">
                    Dados em tempo real, definição do melhor momento para
                    irrigação e sensores personalizados para a realidade da sua
                    fazenda.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className="flex flex-col h-full p-8 border-4 rounded-lg border-remoteagro-500">
                <div className="flex flex-col mb-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mb-3 mr-3 text-white rounded-full">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.25 0C20.2481 0 24.1059 1.47392 27.0854 4.13983C30.065 6.80574 31.9571 10.4765 32.4 14.45L50 25V30L45 27V50H40V24L32.5 19.5V50H27.5V17.5H5V50H0V16.25C0 11.9402 1.71205 7.80698 4.75951 4.75951C7.80698 1.71205 11.9402 0 16.25 0ZM16.25 5C11.35 5 7.175 8.125 5.65 12.5H26.85C25.325 8.125 21.15 5 16.25 5ZM10 22.5H22.5V27.5H10V22.5ZM10 32.5H22.5V37.5H10V32.5ZM10 42.5H22.5V47.5H10V42.5Z"
                        fill="#68B93A"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-medium text-gray-900 title-font">
                    Silos, contratos e pesagens
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="text-base leading-relaxed">
                    Controle todas as suas pesagens, entrada e saída dos silos e
                    integre-os com os custos de produção.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className="flex flex-col h-full p-8 border-4 rounded-lg border-remoteagro-500">
                <div className="flex flex-col mb-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mb-3 mr-3 text-white rounded-full">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M48 0H2C0.89375 0 0 0.89375 0 2V48C0 49.1063 0.89375 50 2 50H48C49.1063 50 50 49.1063 50 48V2C50 0.89375 49.1063 0 48 0ZM45.5 45.5H4.5V4.5H45.5V45.5ZM14.25 35.6875V40.5C14.25 40.775 14.475 41 14.75 41H17.75C18.025 41 18.25 40.775 18.25 40.5V35.6875C17.6187 35.8937 16.95 36 16.25 36C15.55 36 14.8813 35.8875 14.25 35.6875ZM18.25 23.3125V9.5C18.25 9.225 18.025 9 17.75 9H14.75C14.475 9 14.25 9.225 14.25 9.5V23.3125C14.8813 23.1063 15.55 23 16.25 23C16.95 23 17.6187 23.1125 18.25 23.3125ZM14.25 35.6875C14.8813 35.8937 15.55 36 16.25 36C16.95 36 17.6187 35.8875 18.25 35.6875C20.8625 34.8438 22.75 32.3937 22.75 29.5C22.75 26.6063 20.8625 24.1562 18.25 23.3125C17.6187 23.1063 16.95 23 16.25 23C15.55 23 14.8813 23.1125 14.25 23.3125C11.6375 24.1562 9.75 26.6063 9.75 29.5C9.75 32.3937 11.6375 34.8438 14.25 35.6875ZM14.2563 28.4562C14.275 28.4187 14.3 28.3813 14.3188 28.3438V28.3375L14.3937 28.225C14.4 28.2125 14.4062 28.2062 14.4125 28.1937C14.4313 28.1625 14.4563 28.1375 14.475 28.1063C14.4813 28.1 14.4875 28.0875 14.4937 28.0812C14.525 28.0437 14.55 28.0125 14.5812 27.9813L14.6 27.9625L14.675 27.8875L14.7 27.8625C14.7313 27.8312 14.7625 27.8063 14.8 27.775C14.8375 27.7438 14.8687 27.7187 14.9062 27.6937C14.9187 27.6875 14.925 27.6812 14.9375 27.675C14.9688 27.6562 14.9937 27.6312 15.025 27.6125C15.0312 27.6062 15.0437 27.6 15.05 27.5938C15.0875 27.5688 15.125 27.55 15.1688 27.525C15.175 27.5188 15.1875 27.5188 15.1938 27.5125C15.225 27.4938 15.2563 27.4813 15.2938 27.4625L15.3312 27.4437C15.375 27.425 15.4125 27.4062 15.4562 27.3937C15.5 27.375 15.5437 27.3625 15.5875 27.35C15.6 27.3437 15.6125 27.3438 15.625 27.3375C15.6625 27.325 15.6938 27.3188 15.7313 27.3125C15.7438 27.3125 15.75 27.3063 15.7625 27.3063C15.8063 27.2938 15.8562 27.2875 15.9 27.2812C15.9125 27.2812 15.9187 27.2813 15.9312 27.275C15.9688 27.2688 16.0063 27.2688 16.0438 27.2625H16.0812C16.1312 27.2625 16.175 27.2562 16.225 27.2562C16.275 27.2562 16.3188 27.2563 16.3687 27.2625H16.4062C16.4438 27.2625 16.4812 27.2688 16.5187 27.275C16.5312 27.275 16.5375 27.275 16.55 27.2812C16.5938 27.2875 16.6437 27.2938 16.6875 27.3063C16.7 27.3063 16.7062 27.3125 16.7188 27.3125C16.7563 27.3188 16.7938 27.3313 16.825 27.3375C16.8375 27.3438 16.85 27.3437 16.8625 27.35C16.9062 27.3625 16.95 27.375 16.9937 27.3937C17.0375 27.4062 17.075 27.425 17.1187 27.4437L17.1562 27.4625C17.1875 27.475 17.225 27.4938 17.2563 27.5125C17.2625 27.5188 17.275 27.5188 17.2812 27.525C17.3188 27.5438 17.3625 27.5688 17.4 27.5938C17.4062 27.6 17.4187 27.6062 17.425 27.6125C17.4562 27.6312 17.4875 27.65 17.5125 27.675C17.525 27.6812 17.5312 27.6875 17.5438 27.6937C17.5813 27.7187 17.6187 27.75 17.65 27.775C17.6812 27.8 17.7188 27.8312 17.75 27.8625L17.775 27.8875L17.85 27.9625L17.8687 27.9813C17.9 28.0125 17.9312 28.05 17.9562 28.0812C17.9625 28.0875 17.9688 28.1 17.975 28.1063C18 28.1313 18.0188 28.1625 18.0375 28.1937C18.0438 28.2062 18.05 28.2125 18.0562 28.225L18.1313 28.3375C18.1313 28.3375 18.1313 28.3438 18.1375 28.3438C18.3459 28.6934 18.456 29.0929 18.4562 29.5C18.4562 29.875 18.3625 30.2313 18.2 30.5438C18.1813 30.5813 18.1562 30.6187 18.1375 30.6562C18.1375 30.6562 18.1375 30.6625 18.1313 30.6625L18.0562 30.775C18.05 30.7875 18.0438 30.7938 18.0375 30.8063C18.0188 30.8375 17.9937 30.8625 17.975 30.8937C17.9688 30.9 17.9625 30.9125 17.9562 30.9188C17.925 30.9563 17.9 30.9875 17.8687 31.0187L17.85 31.0375L17.775 31.1125L17.75 31.1375C17.7188 31.1688 17.6875 31.1937 17.65 31.225C17.6125 31.2562 17.5813 31.2813 17.5438 31.3063C17.5312 31.3125 17.525 31.3188 17.5125 31.325C17.4813 31.3438 17.4562 31.3688 17.425 31.3875C17.4187 31.3938 17.4062 31.4 17.4 31.4062C17.3625 31.4312 17.325 31.45 17.2812 31.475C17.275 31.4812 17.2625 31.4812 17.2563 31.4875C17.225 31.5062 17.1938 31.5187 17.1562 31.5375L17.1187 31.5563C17.075 31.575 17.0375 31.5938 16.9937 31.6063C16.95 31.625 16.9062 31.6375 16.8625 31.65C16.85 31.6563 16.8375 31.6562 16.825 31.6625C16.7875 31.675 16.7563 31.6812 16.7188 31.6875C16.7062 31.6875 16.7 31.6937 16.6875 31.6937C16.6437 31.7062 16.5938 31.7125 16.55 31.7188C16.5375 31.7188 16.5312 31.7187 16.5187 31.725C16.4812 31.7312 16.4438 31.7312 16.4062 31.7375H16.3687C16.3188 31.7375 16.275 31.7438 16.225 31.7438C16.175 31.7438 16.1312 31.7437 16.0812 31.7375H16.0438C16.0063 31.7375 15.9688 31.7312 15.9312 31.725C15.9187 31.725 15.9125 31.725 15.9 31.7188C15.8562 31.7125 15.8063 31.7062 15.7625 31.6937C15.75 31.6937 15.7438 31.6875 15.7313 31.6875C15.6938 31.6812 15.6562 31.6687 15.625 31.6625C15.6125 31.6562 15.6 31.6563 15.5875 31.65C15.5437 31.6375 15.5 31.625 15.4562 31.6063C15.4125 31.5938 15.375 31.575 15.3312 31.5563L15.2938 31.5375C15.2625 31.525 15.225 31.5062 15.1938 31.4875C15.1875 31.4812 15.175 31.4812 15.1688 31.475C15.1313 31.4562 15.0875 31.4312 15.05 31.4062C15.0437 31.4 15.0312 31.3938 15.025 31.3875C14.9937 31.3688 14.9625 31.35 14.9375 31.325C14.925 31.3188 14.9187 31.3125 14.9062 31.3063C14.8687 31.2813 14.8312 31.25 14.8 31.225C14.7687 31.2 14.7313 31.1688 14.7 31.1375L14.675 31.1125L14.6 31.0375L14.5812 31.0187C14.55 30.9875 14.5187 30.95 14.4937 30.9188C14.4875 30.9125 14.4813 30.9 14.475 30.8937C14.45 30.8687 14.4313 30.8375 14.4125 30.8063C14.4062 30.7938 14.4 30.7875 14.3937 30.775L14.3188 30.6625V30.6562C14.2938 30.6187 14.275 30.5813 14.2563 30.5438C14.0938 30.2313 14 29.875 14 29.5C14 29.125 14.0938 28.7687 14.2563 28.4562ZM31.75 26.6875V40.5C31.75 40.775 31.975 41 32.25 41H35.25C35.525 41 35.75 40.775 35.75 40.5V26.6875C35.1188 26.8937 34.45 27 33.75 27C33.05 27 32.3812 26.8875 31.75 26.6875ZM35.75 14.3125V9.5C35.75 9.225 35.525 9 35.25 9H32.25C31.975 9 31.75 9.225 31.75 9.5V14.3125C32.3812 14.1062 33.05 14 33.75 14C34.45 14 35.1188 14.1125 35.75 14.3125ZM31.75 26.6875C32.3812 26.8937 33.05 27 33.75 27C34.45 27 35.1188 26.8875 35.75 26.6875C38.3625 25.8438 40.25 23.3937 40.25 20.5C40.25 17.6063 38.3625 15.1562 35.75 14.3125C35.1188 14.1062 34.45 14 33.75 14C33.05 14 32.3812 14.1125 31.75 14.3125C29.1375 15.1562 27.25 17.6063 27.25 20.5C27.25 23.3937 29.1375 25.8438 31.75 26.6875ZM31.7562 19.4562C31.775 19.4187 31.8 19.3813 31.8187 19.3438V19.3375L31.8937 19.225C31.9 19.2125 31.9062 19.2063 31.9125 19.1938C31.9312 19.1625 31.9562 19.1375 31.975 19.1063C31.9812 19.1 31.9875 19.0875 31.9938 19.0812C32.025 19.0437 32.05 19.0125 32.0812 18.9813L32.1 18.9625L32.175 18.8875L32.2 18.8625C32.2313 18.8312 32.2625 18.8062 32.3 18.775C32.3375 18.7437 32.3688 18.7188 32.4062 18.6938C32.4188 18.6875 32.425 18.6812 32.4375 18.675C32.4688 18.6562 32.4938 18.6312 32.525 18.6125C32.5312 18.6062 32.5438 18.6 32.55 18.5938C32.5875 18.5688 32.625 18.55 32.6688 18.525C32.675 18.5187 32.6875 18.5188 32.6937 18.5125C32.725 18.4938 32.7563 18.4812 32.7938 18.4625L32.8312 18.4438C32.875 18.425 32.9125 18.4062 32.9562 18.3937C33 18.375 33.0438 18.3625 33.0875 18.35C33.1 18.3438 33.1125 18.3438 33.125 18.3375C33.1625 18.325 33.1938 18.3188 33.2313 18.3125C33.2438 18.3125 33.25 18.3062 33.2625 18.3062C33.3063 18.2937 33.3563 18.2875 33.4 18.2812C33.4125 18.2812 33.4188 18.2812 33.4313 18.275C33.4688 18.2687 33.5063 18.2688 33.5438 18.2625H33.5812C33.6312 18.2625 33.675 18.2563 33.725 18.2563C33.775 18.2563 33.8188 18.2563 33.8688 18.2625H33.9062C33.9437 18.2625 33.9813 18.2687 34.0187 18.275C34.0312 18.275 34.0375 18.275 34.05 18.2812C34.0938 18.2875 34.1437 18.2937 34.1875 18.3062C34.2 18.3062 34.2062 18.3125 34.2188 18.3125C34.2562 18.3188 34.2938 18.3312 34.325 18.3375C34.3375 18.3438 34.35 18.3438 34.3625 18.35C34.4062 18.3625 34.45 18.375 34.4938 18.3937C34.5375 18.4062 34.575 18.425 34.6188 18.4438L34.6562 18.4625C34.6875 18.475 34.725 18.4938 34.7562 18.5125C34.7625 18.5188 34.775 18.5187 34.7812 18.525C34.8187 18.5437 34.8625 18.5688 34.9 18.5938C34.9062 18.6 34.9188 18.6062 34.925 18.6125C34.9562 18.6312 34.9875 18.65 35.0125 18.675C35.025 18.6812 35.0312 18.6875 35.0438 18.6938C35.0812 18.7188 35.1188 18.75 35.15 18.775C35.1813 18.8 35.2188 18.8312 35.25 18.8625L35.275 18.8875L35.35 18.9625L35.3688 18.9813C35.4 19.0125 35.4312 19.05 35.4562 19.0812C35.4625 19.0875 35.4688 19.1 35.475 19.1063C35.5 19.1313 35.5187 19.1625 35.5375 19.1938C35.5437 19.2063 35.55 19.2125 35.5563 19.225L35.6312 19.3375V19.3438C35.8396 19.6934 35.9498 20.0929 35.95 20.5C35.95 20.875 35.8562 21.2313 35.6937 21.5438C35.675 21.5813 35.65 21.6187 35.6312 21.6562V21.6625L35.5563 21.775C35.55 21.7875 35.5437 21.7937 35.5375 21.8062C35.5187 21.8375 35.4937 21.8625 35.475 21.8937C35.4688 21.9 35.4625 21.9125 35.4562 21.9188C35.425 21.9563 35.4 21.9875 35.3688 22.0187L35.35 22.0375L35.275 22.1125L35.25 22.1375C35.2188 22.1688 35.1875 22.1938 35.15 22.225C35.1125 22.2563 35.0812 22.2812 35.0438 22.3062C35.0312 22.3125 35.025 22.3188 35.0125 22.325C34.9813 22.3438 34.9562 22.3688 34.925 22.3875C34.9188 22.3938 34.9062 22.4 34.9 22.4062C34.8625 22.4312 34.825 22.45 34.7812 22.475C34.775 22.4813 34.7625 22.4812 34.7562 22.4875C34.725 22.5062 34.6937 22.5188 34.6562 22.5375L34.6188 22.5562C34.575 22.575 34.5375 22.5938 34.4938 22.6063C34.45 22.625 34.4062 22.6375 34.3625 22.65C34.35 22.6562 34.3375 22.6562 34.325 22.6625C34.2875 22.675 34.2562 22.6812 34.2188 22.6875C34.2062 22.6875 34.2 22.6938 34.1875 22.6938C34.1437 22.7063 34.0938 22.7125 34.05 22.7188C34.0375 22.7188 34.0312 22.7188 34.0187 22.725C33.9813 22.7313 33.9437 22.7312 33.9062 22.7375H33.8688C33.8188 22.7375 33.775 22.7437 33.725 22.7437C33.675 22.7437 33.6312 22.7437 33.5812 22.7375H33.5438C33.5063 22.7375 33.4688 22.7313 33.4313 22.725C33.4188 22.725 33.4125 22.725 33.4 22.7188C33.3563 22.7125 33.3063 22.7063 33.2625 22.6938C33.25 22.6938 33.2438 22.6875 33.2313 22.6875C33.1938 22.6812 33.1562 22.6688 33.125 22.6625C33.1125 22.6562 33.1 22.6562 33.0875 22.65C33.0438 22.6375 33 22.625 32.9562 22.6063C32.9125 22.5938 32.875 22.575 32.8312 22.5562L32.7938 22.5375C32.7625 22.525 32.725 22.5062 32.6937 22.4875C32.6875 22.4812 32.675 22.4813 32.6688 22.475C32.6313 22.4563 32.5875 22.4312 32.55 22.4062C32.5438 22.4 32.5312 22.3938 32.525 22.3875C32.4938 22.3688 32.4625 22.35 32.4375 22.325C32.425 22.3188 32.4188 22.3125 32.4062 22.3062C32.3688 22.2812 32.3312 22.25 32.3 22.225C32.2687 22.2 32.2313 22.1688 32.2 22.1375L32.175 22.1125L32.1 22.0375L32.0812 22.0187C32.05 21.9875 32.0188 21.95 31.9938 21.9188C31.9875 21.9125 31.9812 21.9 31.975 21.8937C31.95 21.8687 31.9312 21.8375 31.9125 21.8062C31.9062 21.7937 31.9 21.7875 31.8937 21.775L31.8187 21.6625V21.6562C31.7937 21.6187 31.775 21.5813 31.7562 21.5438C31.5937 21.2313 31.5 20.875 31.5 20.5C31.5 20.125 31.5937 19.7687 31.7562 19.4562Z"
                        fill="#68B93A"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-medium text-gray-900 title-font">
                    Acesso de controle personalizado
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="text-base leading-relaxed">
                    Os responsáveis técnicos conseguem enviar ordens de serviços
                    para operadores em campo
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className="flex flex-col h-full p-8 border-4 rounded-lg border-remoteagro-500">
                <div className="flex flex-col mb-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mb-3 mr-3 text-white rounded-full">
                    <svg
                      width="55"
                      height="39"
                      viewBox="0 0 55 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M31.2 15.6001C31.2 17.6688 30.3782 19.6527 28.9155 21.1155C27.4527 22.5783 25.4687 23.4001 23.4 23.4001C21.3313 23.4001 19.3473 22.5783 17.8846 21.1155C16.4218 19.6527 15.6 17.6688 15.6 15.6001C15.6 13.5314 16.4218 11.5474 17.8846 10.0846C19.3473 8.62184 21.3313 7.80005 23.4 7.80005C25.4687 7.80005 27.4527 8.62184 28.9155 10.0846C30.3782 11.5474 31.2 13.5314 31.2 15.6001ZM27.3 15.6001C27.3 14.5657 26.8891 13.5737 26.1577 12.8424C25.4263 12.111 24.4344 11.7001 23.4 11.7001C22.3657 11.7001 21.3737 12.111 20.6423 12.8424C19.9109 13.5737 19.5 14.5657 19.5 15.6001C19.5 16.6344 19.9109 17.6264 20.6423 18.3578C21.3737 19.0892 22.3657 19.5001 23.4 19.5001C24.4344 19.5001 25.4263 19.0892 26.1577 18.3578C26.8891 17.6264 27.3 16.6344 27.3 15.6001Z"
                        fill="#68B93A"
                      />
                      <path
                        d="M0 4.87502C0 2.18401 2.18401 0 4.87502 0H41.9252C44.6162 0 46.8002 2.18401 46.8002 4.87502V26.3251C46.8002 29.0161 44.6162 31.2001 41.9252 31.2001H4.87502C2.18401 31.2001 0 29.0161 0 26.3251V4.87502ZM4.87502 3.90002C4.61643 3.90002 4.36844 4.00274 4.18559 4.18559C4.00274 4.36844 3.90002 4.61643 3.90002 4.87502V7.80003H5.85002C6.3672 7.80003 6.86319 7.59458 7.22889 7.22889C7.59458 6.86319 7.80003 6.3672 7.80003 5.85002V3.90002H4.87502ZM3.90002 26.3251C3.90002 26.8633 4.33682 27.3001 4.87502 27.3001H7.80003V25.3501C7.80003 24.8329 7.59458 24.3369 7.22889 23.9712C6.86319 23.6055 6.3672 23.4001 5.85002 23.4001H3.90002V26.3251ZM11.7 25.3501V27.3001H35.1001V25.3501C35.1001 23.7986 35.7165 22.3106 36.8136 21.2135C37.9107 20.1164 39.3986 19.5001 40.9502 19.5001H42.9002V11.7H40.9502C39.3986 11.7 37.9107 11.0837 36.8136 9.98662C35.7165 8.88952 35.1001 7.40155 35.1001 5.85002V3.90002H11.7V5.85002C11.7 7.40155 11.0837 8.88952 9.98661 9.98662C8.88952 11.0837 7.40155 11.7 5.85002 11.7H3.90002V19.5001H5.85002C7.40155 19.5001 8.88952 20.1164 9.98661 21.2135C11.0837 22.3106 11.7 23.7986 11.7 25.3501ZM39.0002 27.3001H41.9252C42.1838 27.3001 42.4317 27.1974 42.6146 27.0145C42.7974 26.8317 42.9002 26.5837 42.9002 26.3251V23.4001H40.9502C40.433 23.4001 39.937 23.6055 39.5713 23.9712C39.2056 24.3369 39.0002 24.8329 39.0002 25.3501V27.3001ZM42.9002 7.80003V4.87502C42.9002 4.61643 42.7974 4.36844 42.6146 4.18559C42.4317 4.00274 42.1838 3.90002 41.9252 3.90002H39.0002V5.85002C39.0002 6.3672 39.2056 6.86319 39.5713 7.22889C39.937 7.59458 40.433 7.80003 40.9502 7.80003H42.9002Z"
                        fill="#68B93A"
                      />
                      <path
                        d="M13.65 39C12.4146 39.0004 11.2107 38.6098 10.2109 37.8839C9.21119 37.1581 8.46688 36.1344 8.08472 34.9596C8.62682 35.0532 9.18062 35.1 9.75002 35.1H41.9251C44.2524 35.1 46.4844 34.1754 48.13 32.5298C49.7757 30.8842 50.7002 28.6522 50.7002 26.3249V8.13135C51.8412 8.53477 52.8291 9.28217 53.5276 10.2705C54.2261 11.2589 54.6008 12.4396 54.6002 13.6499V26.3249C54.6002 27.9894 54.2723 29.6376 53.6354 31.1754C52.9984 32.7133 52.0647 34.1105 50.8878 35.2875C49.7108 36.4645 48.3135 37.3982 46.7757 38.0351C45.2379 38.6721 43.5897 39 41.9251 39H13.65Z"
                        fill="#68B93A"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-medium text-gray-900 title-font">
                    Estoque e financeiro
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="text-base leading-relaxed">
                    Funções administrativas para controle e acompanhamento de
                    estoque e finanças.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className="flex flex-col h-full p-8 border-4 rounded-lg border-remoteagro-500">
                <div className="flex flex-col mb-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mb-3 mr-3 text-white rounded-full">
                    <svg
                      width="50"
                      height="44"
                      viewBox="0 0 50 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.25 7.8125C6.25 7.3981 6.41462 7.00067 6.70765 6.70765C7.00067 6.41462 7.3981 6.25 7.8125 6.25H42.1875C42.6019 6.25 42.9993 6.41462 43.2924 6.70765C43.5854 7.00067 43.75 7.3981 43.75 7.8125V17.1813C43.75 17.5957 43.5854 17.9931 43.2924 18.2861C42.9993 18.5791 42.6019 18.7438 42.1875 18.7438H7.8125C7.3981 18.7438 7.00067 18.5791 6.70765 18.2861C6.41462 17.9931 6.25 17.5957 6.25 17.1813V7.8125ZM9.375 9.375V15.6188H40.625V9.375H9.375Z"
                        fill="#68B93A"
                      />
                      <path
                        d="M29.6814 21.875C29.267 21.875 28.8696 22.0396 28.5765 22.3326C28.2835 22.6257 28.1189 23.0231 28.1189 23.4375V35.9375C28.1189 36.3519 28.2835 36.7493 28.5765 37.0424C28.8696 37.3354 29.267 37.5 29.6814 37.5H42.1814C42.5958 37.5 42.9932 37.3354 43.2862 37.0424C43.5793 36.7493 43.7439 36.3519 43.7439 35.9375V23.4375C43.7439 23.0231 43.5793 22.6257 43.2862 22.3326C42.9932 22.0396 42.5958 21.875 42.1814 21.875H29.6814ZM31.2439 34.375V25H40.6189V34.375H31.2439Z"
                        fill="#68B93A"
                      />
                      <path
                        d="M6.25 25C6.25 24.5856 6.41462 24.1882 6.70765 23.8951C7.00067 23.6021 7.3981 23.4375 7.8125 23.4375H23.4531C23.8675 23.4375 24.265 23.6021 24.558 23.8951C24.851 24.1882 25.0156 24.5856 25.0156 25C25.0156 25.4144 24.851 25.8118 24.558 26.1049C24.265 26.3979 23.8675 26.5625 23.4531 26.5625H7.8125C7.3981 26.5625 7.00067 26.3979 6.70765 26.1049C6.41462 25.8118 6.25 25.4144 6.25 25Z"
                        fill="#68B93A"
                      />
                      <path
                        d="M7.8125 32.8125C7.3981 32.8125 7.00067 32.9771 6.70765 33.2701C6.41462 33.5632 6.25 33.9606 6.25 34.375C6.25 34.7894 6.41462 35.1868 6.70765 35.4799C7.00067 35.7729 7.3981 35.9375 7.8125 35.9375H23.45C23.8644 35.9375 24.2618 35.7729 24.5549 35.4799C24.8479 35.1868 25.0125 34.7894 25.0125 34.375C25.0125 33.9606 24.8479 33.5632 24.5549 33.2701C24.2618 32.9771 23.8644 32.8125 23.45 32.8125H7.81562H7.8125Z"
                        fill="#68B93A"
                      />
                      <path
                        d="M0 7.8125C0 5.7405 0.8231 3.75336 2.28823 2.28823C3.75336 0.8231 5.7405 0 7.8125 0H42.1875C44.2595 0 46.2466 0.8231 47.7118 2.28823C49.1769 3.75336 50 5.7405 50 7.8125V35.9375C50 38.0095 49.1769 39.9966 47.7118 41.4618C46.2466 42.9269 44.2595 43.75 42.1875 43.75H7.8125C5.7405 43.75 3.75336 42.9269 2.28823 41.4618C0.8231 39.9966 0 38.0095 0 35.9375V7.8125ZM7.8125 3.125C6.5693 3.125 5.37701 3.61886 4.49794 4.49794C3.61886 5.37701 3.125 6.5693 3.125 7.8125V35.9375C3.125 37.1807 3.61886 38.373 4.49794 39.2521C5.37701 40.1311 6.5693 40.625 7.8125 40.625H42.1875C43.4307 40.625 44.623 40.1311 45.5021 39.2521C46.3811 38.373 46.875 37.1807 46.875 35.9375V7.8125C46.875 6.5693 46.3811 5.37701 45.5021 4.49794C44.623 3.61886 43.4307 3.125 42.1875 3.125H7.8125Z"
                        fill="#68B93A"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-medium text-gray-900 title-font">
                    Relatórios personalizados
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="text-base leading-relaxed">
                    Gere relatórios personalizados que irão facilitar a
                    visualização de gastos, receitas, e demais atividades da sua
                    fazenda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-gray-600 body-font md:py-32 lg:py-48 bg-remoteagro-50">
        <div className="container flex flex-col items-center px-4 mx-auto lg:flex-row md:px-6">
          <div className="flex flex-col w-full lg:w-1/2 lg:mb-0 lg:pr-16">
            <h1 className="text-3xl font-black leading-snug uppercase md:text-5xl md:leading-tight">
              <span className="text-white bg-remoteagro-600">Impulsione</span>{' '}
              sua fazenda com o nosso app{' '}
            </h1>
            <img
              alt=""
              src="img/call-to-action-img.png"
              className="object-cover object-center mt-6 rounded lg:hidden"
            />
            <div className="flex mt-6 mb-6">
              <div className="inline-flex w-16 h-1 rounded-full bg-remoteagro-500"></div>
            </div>
            <p className="w-full mb-12 text-xl leading-relaxed">
              {' '}
              Pronto para começar a <strong>digitalizar</strong> a sua fazenda?{' '}
            </p>
            <div className="flex">
              <a
                href="https://api.whatsapp.com/send?phone=5561998568439&text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20mais%20sobre%20os%20servi%C3%A7os%20da%20Remote%20Agro"
                className="inline-flex px-6 py-4 text-lg text-center text-white border-0 rounded bg-remoteagro-500 focus:outline-none hover:bg-remoteagro-600"
              >
                {' '}
                Agende uma demonstração gratuita{' '}
              </a>
            </div>
          </div>
          <div className="items-center hidden w-full mb-16 lg:flex lg:w-1/2 lg:mb-0">
            <img
              alt=""
              src="img/call-to-action-img.png"
              className="object-cover object-center rounded"
            />
          </div>
        </div>
      </section>

      <section
        id="clientes"
        className="py-20 text-gray-200 bg-cover body-font md:py-32 lg:py-48 bg-testimonials"
      >
        <div className="container flex flex-col items-center px-4 mx-auto md:px-6">
          <div className="flex flex-col w-full text-center">
            <h1 className="text-3xl font-black leading-snug text-white uppercase md:text-5xl md:leading-tight">
              O QUE DIZEM SOBRE A{' '}
              <span className="text-white bg-remoteagro-600">REMOTE AGRO</span>
            </h1>

            <Carousel
              gap={0}
              mobileBreakpoint={640}
              responsiveLayout={[
                {
                  breakpoint: 640,
                  gap: '10%',
                },
              ]}
              loop
            >
              <Carousel.Item>
                <div className="w-full mx-auto mt-8 text-center xl:w-1/2 lg:w-3/4">
                  <div className="flex flex-row">
                    <div className="mr-2 md:mr-4 text-remoteagro-500">
                      <svg
                        width="49"
                        height="44"
                        viewBox="0 0 49 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 md:w-10"
                      >
                        <path
                          d="M21.1667 3.47352C12.7814 8.87676 8.5898 15.3885 8.5898 23.0002C8.5898 25.3695 9.00087 26.5531 9.81874 26.5531L10.6622 26.3237C11.3267 26.0664 11.8613 25.9377 12.2724 25.9377C14.6727 25.9377 16.6812 26.8168 18.2893 28.575C19.8995 30.3332 20.7046 32.4988 20.7046 35.0846C20.7046 37.5654 19.8313 39.6731 18.0955 41.4034C16.3575 43.1338 14.2617 43.9979 11.808 43.9979C8.3832 43.9979 5.55685 42.5827 3.33113 39.746C1.10967 36.9157 0 33.3565 0 29.0746C0 24.2288 0.941406 19.7969 2.83274 15.7745C4.72833 11.7542 7.61219 8.11988 11.4971 4.8715C15.382 1.62526 17.8612 0 18.9346 0C19.6503 0 20.2381 0.347352 20.6982 1.04205C21.1582 1.73461 21.3882 2.33926 21.3882 2.85386L21.1603 3.47137L21.1667 3.47352ZM48.77 3.47352C40.3846 8.87676 36.1952 15.3864 36.1952 23.0024C36.1952 25.3717 36.6062 26.5552 37.4241 26.5552L38.2675 26.3258C38.9321 26.0685 39.4667 25.9399 39.8777 25.9399C42.227 25.9399 44.2227 26.819 45.8563 28.5772C47.4963 30.3354 48.3099 32.5009 48.3099 35.0868C48.3099 37.5676 47.4367 39.6753 45.7008 41.4056C43.9628 43.1359 41.867 44 39.4134 44C35.9886 44 33.1622 42.5849 30.9365 39.7482C28.715 36.9179 27.6054 33.3586 27.6054 29.0767C27.6054 24.1795 28.5595 19.7068 30.4807 15.663C32.3976 11.617 35.2836 7.99337 39.1429 4.7986C43.0086 1.60168 45.4729 0.00214501 46.5442 0.00214501C47.262 0.00214501 47.8499 0.349496 48.312 1.0442C48.77 1.7389 49 2.34355 49 2.85815L48.77 3.47352Z"
                          fill="#68B93A"
                        />
                      </svg>
                    </div>
                    <blockquote className="mt-4 text-lg leading-relaxed text-left">
                      A gente já usou mais de 10 programas, mas nunca
                      encontramos nada parecido com a ideia de vocês.
                    </blockquote>
                  </div>
                  <div className="flex justify-center my-6 ">
                    <div className="inline-flex w-16 h-1 rounded-full bg-remoteagro-500"></div>
                  </div>{' '}
                  <h2 className="text-sm font-medium tracking-wider text-gray-200 uppercase title-font">
                    Giovani Reginato
                  </h2>
                  <p className="text-gray-200">
                    Proprietário, Fazenda Reginato
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="w-full mx-auto mt-8 text-center xl:w-1/2 lg:w-3/4">
                  <div className="flex flex-row">
                    <div className="mr-2 md:mr-4 text-remoteagro-500">
                      <svg
                        width="49"
                        height="44"
                        viewBox="0 0 49 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 md:w-10"
                      >
                        <path
                          d="M21.1667 3.47352C12.7814 8.87676 8.5898 15.3885 8.5898 23.0002C8.5898 25.3695 9.00087 26.5531 9.81874 26.5531L10.6622 26.3237C11.3267 26.0664 11.8613 25.9377 12.2724 25.9377C14.6727 25.9377 16.6812 26.8168 18.2893 28.575C19.8995 30.3332 20.7046 32.4988 20.7046 35.0846C20.7046 37.5654 19.8313 39.6731 18.0955 41.4034C16.3575 43.1338 14.2617 43.9979 11.808 43.9979C8.3832 43.9979 5.55685 42.5827 3.33113 39.746C1.10967 36.9157 0 33.3565 0 29.0746C0 24.2288 0.941406 19.7969 2.83274 15.7745C4.72833 11.7542 7.61219 8.11988 11.4971 4.8715C15.382 1.62526 17.8612 0 18.9346 0C19.6503 0 20.2381 0.347352 20.6982 1.04205C21.1582 1.73461 21.3882 2.33926 21.3882 2.85386L21.1603 3.47137L21.1667 3.47352ZM48.77 3.47352C40.3846 8.87676 36.1952 15.3864 36.1952 23.0024C36.1952 25.3717 36.6062 26.5552 37.4241 26.5552L38.2675 26.3258C38.9321 26.0685 39.4667 25.9399 39.8777 25.9399C42.227 25.9399 44.2227 26.819 45.8563 28.5772C47.4963 30.3354 48.3099 32.5009 48.3099 35.0868C48.3099 37.5676 47.4367 39.6753 45.7008 41.4056C43.9628 43.1359 41.867 44 39.4134 44C35.9886 44 33.1622 42.5849 30.9365 39.7482C28.715 36.9179 27.6054 33.3586 27.6054 29.0767C27.6054 24.1795 28.5595 19.7068 30.4807 15.663C32.3976 11.617 35.2836 7.99337 39.1429 4.7986C43.0086 1.60168 45.4729 0.00214501 46.5442 0.00214501C47.262 0.00214501 47.8499 0.349496 48.312 1.0442C48.77 1.7389 49 2.34355 49 2.85815L48.77 3.47352Z"
                          fill="#68B93A"
                        />
                      </svg>
                    </div>
                    <blockquote className="mt-4 text-lg leading-relaxed text-left">
                      Com a integração de todos os setores da fazenda num só
                      lugar identificamos nossos erros muito mais rapidamente.
                    </blockquote>
                  </div>
                  <div className="flex justify-center my-6 ">
                    <div className="inline-flex w-16 h-1 rounded-full bg-remoteagro-500"></div>
                  </div>{' '}
                  <h2 className="text-sm font-medium tracking-wider text-gray-200 uppercase title-font">
                    Tatiane Castro
                  </h2>
                  <p className="text-gray-200">
                    Responsável Administrativa, Fazenda Alvorada
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="w-full mx-auto mt-8 text-center xl:w-1/2 lg:w-3/4">
                  <div className="flex flex-row">
                    <div className="mr-2 md:mr-4 text-remoteagro-500">
                      <svg
                        width="49"
                        height="44"
                        viewBox="0 0 49 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 md:w-10"
                      >
                        <path
                          d="M21.1667 3.47352C12.7814 8.87676 8.5898 15.3885 8.5898 23.0002C8.5898 25.3695 9.00087 26.5531 9.81874 26.5531L10.6622 26.3237C11.3267 26.0664 11.8613 25.9377 12.2724 25.9377C14.6727 25.9377 16.6812 26.8168 18.2893 28.575C19.8995 30.3332 20.7046 32.4988 20.7046 35.0846C20.7046 37.5654 19.8313 39.6731 18.0955 41.4034C16.3575 43.1338 14.2617 43.9979 11.808 43.9979C8.3832 43.9979 5.55685 42.5827 3.33113 39.746C1.10967 36.9157 0 33.3565 0 29.0746C0 24.2288 0.941406 19.7969 2.83274 15.7745C4.72833 11.7542 7.61219 8.11988 11.4971 4.8715C15.382 1.62526 17.8612 0 18.9346 0C19.6503 0 20.2381 0.347352 20.6982 1.04205C21.1582 1.73461 21.3882 2.33926 21.3882 2.85386L21.1603 3.47137L21.1667 3.47352ZM48.77 3.47352C40.3846 8.87676 36.1952 15.3864 36.1952 23.0024C36.1952 25.3717 36.6062 26.5552 37.4241 26.5552L38.2675 26.3258C38.9321 26.0685 39.4667 25.9399 39.8777 25.9399C42.227 25.9399 44.2227 26.819 45.8563 28.5772C47.4963 30.3354 48.3099 32.5009 48.3099 35.0868C48.3099 37.5676 47.4367 39.6753 45.7008 41.4056C43.9628 43.1359 41.867 44 39.4134 44C35.9886 44 33.1622 42.5849 30.9365 39.7482C28.715 36.9179 27.6054 33.3586 27.6054 29.0767C27.6054 24.1795 28.5595 19.7068 30.4807 15.663C32.3976 11.617 35.2836 7.99337 39.1429 4.7986C43.0086 1.60168 45.4729 0.00214501 46.5442 0.00214501C47.262 0.00214501 47.8499 0.349496 48.312 1.0442C48.77 1.7389 49 2.34355 49 2.85815L48.77 3.47352Z"
                          fill="#68B93A"
                        />
                      </svg>
                    </div>
                    <blockquote className="mt-4 text-lg leading-relaxed text-left">
                      O aplicativo agilizou nosso dia a dia. Temos agora um
                      controle muito maior sobre todos os nossos processos.
                    </blockquote>
                  </div>
                  <div className="flex justify-center my-6 ">
                    <div className="inline-flex w-16 h-1 rounded-full bg-remoteagro-500"></div>
                  </div>{' '}
                  <h2 className="text-sm font-medium tracking-wider text-gray-200 uppercase title-font">
                    Willian Matté{' '}
                  </h2>
                  <p className="text-gray-200">
                    Sócio Propietário, Grupo MEC Agrícola{' '}
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="w-full mx-auto mt-8 text-center xl:w-1/2 lg:w-3/4">
                  <div className="flex flex-row">
                    <div className="mr-2 md:mr-4 text-remoteagro-500">
                      <svg
                        width="49"
                        height="44"
                        viewBox="0 0 49 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 md:w-10"
                      >
                        <path
                          d="M21.1667 3.47352C12.7814 8.87676 8.5898 15.3885 8.5898 23.0002C8.5898 25.3695 9.00087 26.5531 9.81874 26.5531L10.6622 26.3237C11.3267 26.0664 11.8613 25.9377 12.2724 25.9377C14.6727 25.9377 16.6812 26.8168 18.2893 28.575C19.8995 30.3332 20.7046 32.4988 20.7046 35.0846C20.7046 37.5654 19.8313 39.6731 18.0955 41.4034C16.3575 43.1338 14.2617 43.9979 11.808 43.9979C8.3832 43.9979 5.55685 42.5827 3.33113 39.746C1.10967 36.9157 0 33.3565 0 29.0746C0 24.2288 0.941406 19.7969 2.83274 15.7745C4.72833 11.7542 7.61219 8.11988 11.4971 4.8715C15.382 1.62526 17.8612 0 18.9346 0C19.6503 0 20.2381 0.347352 20.6982 1.04205C21.1582 1.73461 21.3882 2.33926 21.3882 2.85386L21.1603 3.47137L21.1667 3.47352ZM48.77 3.47352C40.3846 8.87676 36.1952 15.3864 36.1952 23.0024C36.1952 25.3717 36.6062 26.5552 37.4241 26.5552L38.2675 26.3258C38.9321 26.0685 39.4667 25.9399 39.8777 25.9399C42.227 25.9399 44.2227 26.819 45.8563 28.5772C47.4963 30.3354 48.3099 32.5009 48.3099 35.0868C48.3099 37.5676 47.4367 39.6753 45.7008 41.4056C43.9628 43.1359 41.867 44 39.4134 44C35.9886 44 33.1622 42.5849 30.9365 39.7482C28.715 36.9179 27.6054 33.3586 27.6054 29.0767C27.6054 24.1795 28.5595 19.7068 30.4807 15.663C32.3976 11.617 35.2836 7.99337 39.1429 4.7986C43.0086 1.60168 45.4729 0.00214501 46.5442 0.00214501C47.262 0.00214501 47.8499 0.349496 48.312 1.0442C48.77 1.7389 49 2.34355 49 2.85815L48.77 3.47352Z"
                          fill="#68B93A"
                        />
                      </svg>
                    </div>
                    <blockquote className="mt-4 text-lg leading-relaxed text-left">
                      Nossa rotina aqui da fazenda ficou muito mais ágil.
                      Parabéns pelo que estão desenvolvendo e pelo atendimento
                      constante.
                    </blockquote>
                  </div>
                  <div className="flex justify-center my-6 ">
                    <div className="inline-flex w-16 h-1 rounded-full bg-remoteagro-500"></div>
                  </div>{' '}
                  <h2 className="text-sm font-medium tracking-wider text-gray-200 uppercase title-font">
                    Diego Becker
                  </h2>
                  <p className="text-gray-200">Gerente, Fazenda Reginato</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="w-full mx-auto mt-8 text-center xl:w-1/2 lg:w-3/4">
                  <div className="flex flex-row">
                    <div className="mr-2 md:mr-4 text-remoteagro-500">
                      <svg
                        width="49"
                        height="44"
                        viewBox="0 0 49 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 md:w-10"
                      >
                        <path
                          d="M21.1667 3.47352C12.7814 8.87676 8.5898 15.3885 8.5898 23.0002C8.5898 25.3695 9.00087 26.5531 9.81874 26.5531L10.6622 26.3237C11.3267 26.0664 11.8613 25.9377 12.2724 25.9377C14.6727 25.9377 16.6812 26.8168 18.2893 28.575C19.8995 30.3332 20.7046 32.4988 20.7046 35.0846C20.7046 37.5654 19.8313 39.6731 18.0955 41.4034C16.3575 43.1338 14.2617 43.9979 11.808 43.9979C8.3832 43.9979 5.55685 42.5827 3.33113 39.746C1.10967 36.9157 0 33.3565 0 29.0746C0 24.2288 0.941406 19.7969 2.83274 15.7745C4.72833 11.7542 7.61219 8.11988 11.4971 4.8715C15.382 1.62526 17.8612 0 18.9346 0C19.6503 0 20.2381 0.347352 20.6982 1.04205C21.1582 1.73461 21.3882 2.33926 21.3882 2.85386L21.1603 3.47137L21.1667 3.47352ZM48.77 3.47352C40.3846 8.87676 36.1952 15.3864 36.1952 23.0024C36.1952 25.3717 36.6062 26.5552 37.4241 26.5552L38.2675 26.3258C38.9321 26.0685 39.4667 25.9399 39.8777 25.9399C42.227 25.9399 44.2227 26.819 45.8563 28.5772C47.4963 30.3354 48.3099 32.5009 48.3099 35.0868C48.3099 37.5676 47.4367 39.6753 45.7008 41.4056C43.9628 43.1359 41.867 44 39.4134 44C35.9886 44 33.1622 42.5849 30.9365 39.7482C28.715 36.9179 27.6054 33.3586 27.6054 29.0767C27.6054 24.1795 28.5595 19.7068 30.4807 15.663C32.3976 11.617 35.2836 7.99337 39.1429 4.7986C43.0086 1.60168 45.4729 0.00214501 46.5442 0.00214501C47.262 0.00214501 47.8499 0.349496 48.312 1.0442C48.77 1.7389 49 2.34355 49 2.85815L48.77 3.47352Z"
                          fill="#68B93A"
                        />
                      </svg>
                    </div>
                    <blockquote className="mt-4 text-lg leading-relaxed text-left">
                      Facilitaram muito o meu trabalho, não preciso mais correr
                      atrás de informações desencontradas.
                    </blockquote>
                  </div>
                  <div className="flex justify-center my-6 ">
                    <div className="inline-flex w-16 h-1 rounded-full bg-remoteagro-500"></div>
                  </div>{' '}
                  <h2 className="text-sm font-medium tracking-wider text-gray-200 uppercase title-font">
                    Alessandro Krindges
                  </h2>
                  <p className="text-gray-200">
                    Sócio Proprietário, BK1 Agro Gestão
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="w-full mx-auto mt-8 text-center xl:w-1/2 lg:w-3/4">
                  <div className="flex flex-row">
                    <div className="mr-2 md:mr-4 text-remoteagro-500">
                      <svg
                        width="49"
                        height="44"
                        viewBox="0 0 49 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 md:w-10"
                      >
                        <path
                          d="M21.1667 3.47352C12.7814 8.87676 8.5898 15.3885 8.5898 23.0002C8.5898 25.3695 9.00087 26.5531 9.81874 26.5531L10.6622 26.3237C11.3267 26.0664 11.8613 25.9377 12.2724 25.9377C14.6727 25.9377 16.6812 26.8168 18.2893 28.575C19.8995 30.3332 20.7046 32.4988 20.7046 35.0846C20.7046 37.5654 19.8313 39.6731 18.0955 41.4034C16.3575 43.1338 14.2617 43.9979 11.808 43.9979C8.3832 43.9979 5.55685 42.5827 3.33113 39.746C1.10967 36.9157 0 33.3565 0 29.0746C0 24.2288 0.941406 19.7969 2.83274 15.7745C4.72833 11.7542 7.61219 8.11988 11.4971 4.8715C15.382 1.62526 17.8612 0 18.9346 0C19.6503 0 20.2381 0.347352 20.6982 1.04205C21.1582 1.73461 21.3882 2.33926 21.3882 2.85386L21.1603 3.47137L21.1667 3.47352ZM48.77 3.47352C40.3846 8.87676 36.1952 15.3864 36.1952 23.0024C36.1952 25.3717 36.6062 26.5552 37.4241 26.5552L38.2675 26.3258C38.9321 26.0685 39.4667 25.9399 39.8777 25.9399C42.227 25.9399 44.2227 26.819 45.8563 28.5772C47.4963 30.3354 48.3099 32.5009 48.3099 35.0868C48.3099 37.5676 47.4367 39.6753 45.7008 41.4056C43.9628 43.1359 41.867 44 39.4134 44C35.9886 44 33.1622 42.5849 30.9365 39.7482C28.715 36.9179 27.6054 33.3586 27.6054 29.0767C27.6054 24.1795 28.5595 19.7068 30.4807 15.663C32.3976 11.617 35.2836 7.99337 39.1429 4.7986C43.0086 1.60168 45.4729 0.00214501 46.5442 0.00214501C47.262 0.00214501 47.8499 0.349496 48.312 1.0442C48.77 1.7389 49 2.34355 49 2.85815L48.77 3.47352Z"
                          fill="#68B93A"
                        />
                      </svg>
                    </div>
                    <blockquote className="mt-4 text-lg leading-relaxed text-left">
                      Os relatórios são bons demais! Encontramos todas as
                      informações que precisamos em um só lugar.
                    </blockquote>
                  </div>
                  <div className="flex justify-center my-6 ">
                    <div className="inline-flex w-16 h-1 rounded-full bg-remoteagro-500"></div>
                  </div>{' '}
                  <h2 className="text-sm font-medium tracking-wider text-gray-200 uppercase title-font">
                    Mateus
                  </h2>
                  <p className="text-gray-200">
                    Responsável Administrativo, Fazenda Reginato
                  </p>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>

      <section
        className="relative text-gray-400 bg-gray-900 body-font"
        id="contato"
      >
        <div className="container flex flex-wrap justify-center w-full px-5 py-12 mx-auto md:py-20 sm:flex-nowrap">
          <div className="relative flex items-end justify-start w-full p-10 py-24 overflow-hidden bg-gray-900 rounded-lg">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15358.241051419518!2d-47.8666903!3d-15.7743851!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x807b50c3ed067d68!2sCentro%20de%20Apoio%20ao%20Desenvolvimento%20Tecnol%C3%B3gico%20-%20CDT%2FUnB!5e0!3m2!1spt-BR!2sno!4v1617889446548!5m2!1spt-BR!2sno"
              allowFullScreen=""
              loading="lazy"
              style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.3)' }}
            ></iframe>
            <div className="relative flex flex-wrap py-6 bg-gray-900 rounded shadow-md">
              <div className="px-6 lg:w-1/2">
                <h2 className="text-xs font-semibold tracking-widest text-white title-font">
                  Endereço
                </h2>
                <p className="mt-1">Universidade de Brasília</p>
                <p className="mt-1">
                  Edifício do Centro de Apoio ao Desenvolvimento Tecnológico
                </p>
                <p className="mt-1">Asa Norte - Brasília - DF</p>
              </div>
              <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
                <h2 className="text-xs font-semibold tracking-widest text-white title-font">
                  EMAIL
                </h2>
                <a
                  className="leading-relaxed text-remoteagro-500"
                  href="mailto:contato@remoteagro.com.br"
                >
                  contato@remoteagro.com.br
                </a>
                <h2 className="mt-4 text-xs font-semibold tracking-widest text-white title-font">
                  PHONE
                </h2>
                <p className="leading-relaxed">(61) 99999-3392</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-gray-400 bg-gray-900 body-font">
        <div className="container flex flex-col items-center gap-4 px-5 py-8 mx-auto sm:flex-row">
          <a
            className="flex items-center justify-center font-medium text-gray-300 title-font md:justify-start"
            href="/"
          >
            <span className="ml-3 text-xl">Remote Agro</span>
          </a>
          <p className="py-1 text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200">
            © 2021 Remote Agro —
            <a
              href="https://www.instagram.com/remoteagro/"
              className="ml-1 text-gray-300"
              rel="noopener noreferrer"
              target="_blank"
            >
              @remoteagro
            </a>
          </p>
          <span className="inline-flex justify-center sm:ml-auto sm:justify-start ">
            <a
              className="text-gray-400"
              href="https://www.facebook.com/Remote-Science-102384204827570/?view_public_for=102384204827570"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              className="ml-3 text-gray-400"
              href="https://www.instagram.com/remoteagro/"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              className="ml-3 text-gray-400"
              href="https://api.whatsapp.com/send?phone=5561998568439&text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20mais%20sobre%20os%20servi%C3%A7os%20da%20Remote%20Agro"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="whatsapp"
                className="w-5 h-5 svg-inline--fa fa-whatsapp fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                ></path>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
