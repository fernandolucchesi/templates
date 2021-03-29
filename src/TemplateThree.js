import React from 'react';

export default function TemplateThree() {
  const check = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      viewBox="0 0 492 492"
      fill="#68B83A"
    >
      <path d="M393.401 124.425L179.603 338.208c-15.832 15.835-41.514 15.835-57.361 0L11.878 227.836c-15.838-15.835-15.838-41.52 0-57.358 15.841-15.841 41.521-15.841 57.355-.006l81.698 81.699L336.037 67.064c15.841-15.841 41.523-15.829 57.358 0 15.835 15.838 15.835 41.514.006 57.361z" />
    </svg>
  );

  const close = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="red"
    >
      <path d="M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L12 10.5858L21.2929 1.29289C21.6834 0.902369 22.3166 0.902369 22.7071 1.29289C23.0976 1.68342 23.0976 2.31658 22.7071 2.70711L13.4142 12L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L12 13.4142L2.70711 22.7071C2.31658 23.0976 1.68342 23.0976 1.29289 22.7071C0.902369 22.3166 0.902369 21.6834 1.29289 21.2929L10.5858 12L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z" />
    </svg>
  );

  return (
    <>
      <header className="text-gray-600 body-font md:px-16 lg:px-20 xl:px-32">
        <div className="container flex flex-col flex-wrap items-center py-5 mx-auto md:flex-row">
          <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
            <img className="h-10" src="logoRA-01-01.png" />
            <span className="ml-3 text-xl">Remote Agro</span>
          </a>
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
            <a className="mr-5 hover:text-gray-900" href="">
              Funcionalidades
            </a>
            <a className="mr-5 hover:text-gray-900" href="">
              Serviços
            </a>
            <a className="mr-5 hover:text-gray-900" href="">
              Clientes
            </a>
            <a className="mr-5 hover:text-gray-900" href="">
              Contato
            </a>
          </nav>
          <button className="inline-flex items-center px-3 py-3 mt-4 text-base text-white border-0 rounded bg-remoteagro-500 hover:bg-remoteagro-600 focus:outline-none md:mt-0">
            Agende uma demonstração gratuita
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
      <section className="text-gray-600 body-font">
        <div className="container flex flex-col items-center px-4 py-24 mx-auto md:px-6 md:flex-row">
          <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-2/3 xl:1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="mb-6 text-5xl font-medium leading-tight text-gray-900">
              Seu agronegócio pode gerar muito mais frutos!
            </h1>
            <p className="mb-8 text-xl leading-relaxed">
              Oferecemos uma visão centralizada, gerência, monitoramento e
              automação do seu agronegócio, do plantio ao financeiro. Parece bom
              demais para ser verdade?
            </p>
            <div className="flex justify-center">
              <button className="inline-flex px-6 py-6 text-xl text-white border-0 rounded bg-remoteagro-500 focus:outline-none hover:bg-remoteagro-600">
                Agende uma demonstração gratuita
              </button>
            </div>
          </div>
          <div className="w-5/6 xl:max-w-xl xl:w-full md:w-1/3">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="hero.png"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container flex flex-col items-center px-4 py-5 mx-auto md:px-6 md:flex-row">
          <div className="flex flex-col w-full pr-0 mb-6 text-center md:pr-10 md:mb-0 md:w-auto md:text-left">
            <h2 className="mb-1 text-xs font-medium tracking-widest text-remoteagro-500 title-font">
              A Startup que surgiu para a sua fazenda
            </h2>
            <h1 className="text-2xl font-medium text-gray-500 md:text-3xl title-font">
              Parceiros e Apoiadores
            </h1>
          </div>
          <div className="flex items-center flex-shrink-0 gap-8 mx-auto space-x-4 md:ml-auto md:mr-0">
            <img
              className="h-20"
              src="http://nic.cdt.unb.br/imagem/programaseprojetos/multincubadora/logo_multincubadora.png"
            />
            <img
              className="h-20"
              src="http://obsis.unb.br/portalsis/img/layout/cdt.png"
            />
            <img
              className="h-20"
              src="https://digital.ufms.br/files/2017/06/unb.png"
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font ">
        <div className="container flex flex-col items-center px-4 mx-auto my-40 text-center md:px-6">
          <svg
            id="fi_3459454"
            enable-background="new 0 0 512 512"
            height="56"
            viewBox="0 0 512 512"
            width="56"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m376 0c-74.439 0-135 61.009-135 136 0 74.439 60.561 135 135 135 74.99 0 136-60.561 136-135 0-74.776-61.528-136-136-136zm-105 136c0-53.307 39.183-97.543 90-104.914v32.494c-17.459 6.192-30 22.865-30 42.42 0 24.813 20.187 45 45 45 8.271 0 15 6.729 15 15s-6.729 15-15 15-15-6.729-15-15h-30c0 19.555 12.541 36.228 30 42.42v31.504c-50.817-7.301-90-51.119-90-103.924zm120 103.944v-31.524c17.459-6.192 30-22.865 30-42.42 0-24.813-20.187-45-45-45-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15h30c0-19.555-12.541-36.228-30-42.42v-32.514c51.37 7.309 91 51.577 91 104.934 0 52.854-39.63 96.704-91 103.944z"></path>
              <path d="m391 422h-90v60h-30v-91h-90v91h-30v-181h-90v181h-31v-301h-30v331h512v-30h-121zm-60 30h30v30h-30zm-120-31h30v61h-30zm-120-90h30v151h-30z"></path>
              <path d="m68.282 208.862 236.91 142.147-29.9 3.028 3.021 29.847 94.823-9.602-36.15-88.186-27.757 11.379 11.399 27.809-236.91-142.146z"></path>
            </g>
          </svg>
          <h2 className="mt-6 text-3xl font-medium text-gray-900 title-font">
            Não ter rotinas otimizadas está impactando o seu bolso
          </h2>
          <div class="flex justify-center mt-6 mb-12">
            <div class="inline-flex w-16 h-1 rounded-full bg-remoteagro-500"></div>
          </div>
          <p className="text-xl leading-relaxed lg:w-3/4">
            Você já pensou quanto tempo é gasto em tarefas repetitivas na gestão
            de sua propriedade? Quantos dados de produção de coleita e de
            comercialização se perdem ao longo do ano? E como é dificil garantir
            uma comunicação eficaz entre sua equipe de campo e os responsáveis
            técnicos?{' '}
            <u>
              A não digitalização da sua fazenda faz com que você perca dinheiro
              e recursos
            </u>
            .
          </p>
        </div>
      </section>
      <section className="text-gray-100 body-font bg-remoteagro-800">
        <div className="container flex flex-col items-center px-4 mx-auto text-center my-36 md:px-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="56"
            height="56"
            fill="white"
          >
            <path d="M201.949 278.072c5.522 0 9.997-4.476 9.997-9.997V198.03c0-16.538-13.455-29.992-29.992-29.992H29.992C13.455 168.037 0 181.492 0 198.029v256.935c0 16.538 13.455 29.992 29.992 29.992h151.961c16.538 0 29.992-13.455 29.992-29.992V344.992c0-5.522-4.476-9.997-9.997-9.997s-9.997 4.476-9.997 9.997v71.899H19.995v-186.9h171.956v38.083c0 5.522 4.476 9.998 9.998 9.998zm-9.998 158.814v18.078c0 5.513-4.485 9.997-9.997 9.997H29.992c-5.513 0-9.997-4.485-9.997-9.997v-18.078h171.956zM19.995 209.996v-11.967c0-5.513 4.485-9.997 9.997-9.997h151.961c5.513 0 9.997 4.485 9.997 9.997v11.967H19.995z" />
            <path d="M209.017 297.934c-1.859-1.859-4.439-2.929-7.068-2.929s-5.209 1.07-7.068 2.929c-1.859 1.859-2.929 4.439-2.929 7.068s1.07 5.209 2.929 7.068c1.86 1.859 4.439 2.929 7.068 2.929s5.209-1.07 7.068-2.929c1.86-1.859 2.929-4.439 2.929-7.068s-1.07-5.208-2.929-7.068zM114.591 443.897c-1.859-1.859-4.439-2.929-7.068-2.929s-5.209 1.07-7.068 2.929c-1.859 1.859-2.929 4.439-2.929 7.068s1.07 5.209 2.929 7.068c1.86 1.86 4.439 2.929 7.068 2.929s5.209-1.07 7.068-2.929c1.86-1.859 2.929-4.439 2.929-7.068s-1.07-5.208-2.929-7.068zM142.664 84.162c-20.231-20.23-53.149-20.23-73.38 0-3.904 3.904-3.905 10.234 0 14.138 3.905 3.905 10.235 3.905 14.138 0 12.435-12.435 32.67-12.435 45.105 0a9.958 9.958 0 007.068 2.928 9.97 9.97 0 007.069-2.928c3.904-3.903 3.904-10.234 0-14.138z" />
            <path d="M172.284 54.54c-17.711-17.711-41.262-27.467-66.311-27.467s-48.6 9.755-66.312 27.467c-3.904 3.904-3.904 10.234 0 14.139 3.904 3.904 10.234 3.904 14.138 0 28.768-28.769 75.579-28.769 104.347 0a9.962 9.962 0 007.069 2.928 9.965 9.965 0 007.069-2.928c3.904-3.904 3.904-10.234 0-14.139zM113.041 113.981c-1.86-1.86-4.439-2.929-7.068-2.929s-5.209 1.07-7.068 2.929c-1.86 1.859-2.929 4.439-2.929 7.068s1.07 5.209 2.929 7.068c1.859 1.859 4.439 2.929 7.068 2.929s5.209-1.07 7.068-2.929c1.859-1.86 2.929-4.439 2.929-7.068s-1.069-5.209-2.929-7.068zM501.873 464.962H394.078V288.057c4.288.553 9.732 1.018 15.969 1.018 20.615 0 49.761-5.068 73.436-28.743 40.554-40.555 26.16-96.771 25.527-99.145a9.997 9.997 0 00-7.085-7.085c-2.374-.632-58.59-15.026-99.145 25.528a96.107 96.107 0 00-8.704 9.989v-71.451c.409-17.995-3.401-44.764-24.963-66.325-35.26-35.26-84.11-22.753-86.172-22.202a9.997 9.997 0 00-7.085 7.085c-.55 2.063-13.057 50.912 22.203 86.172 20.588 20.588 45.922 24.993 63.835 24.993 4.632 0 8.758-.296 12.187-.682v144.857a103.076 103.076 0 00-10.948-12.895c-43.737-43.737-104.381-28.21-106.942-27.527a9.997 9.997 0 00-7.085 7.085c-.683 2.56-16.21 63.206 27.526 106.942 25.533 25.532 56.969 30.997 79.208 30.997 7.226 0 13.476-.578 18.241-1.231v69.524h-75.158c-5.522 0-9.997 4.476-9.997 9.997s4.476 9.997 9.997 9.997h202.948c5.522 0 9.997-4.476 9.997-9.997s-4.474-9.996-9.995-9.996zm-150.09-373.54c-3.904-3.904-10.234-3.904-14.139 0s-3.904 10.234 0 14.139l22.294 22.294c-13.907-.324-32.711-4.073-47.737-19.1-20.982-20.98-19.877-48.803-18.152-60.896 12.077-1.678 40.061-2.749 60.927 18.119 14.905 14.905 18.665 33.719 19.026 47.662l-22.219-22.218zm22.177 270.935l-32.863-32.862c-3.904-3.904-10.234-3.904-14.138 0s-3.904 10.234 0 14.138l32.861 32.86c-18.535.563-47-2.912-69.047-24.961-28.335-28.335-25.735-67.044-23.481-81.703 14.681-2.255 53.378-4.847 81.705 23.48 22.05 22.051 25.525 50.519 24.963 69.048zm20.116-110.39c.202-16.703 4.456-39.811 22.844-58.199 25.466-25.467 60.182-23.484 73.916-21.459 2.075 13.724 4.116 48.275-21.493 73.883-19.354 19.354-44.156 22.987-61.052 22.765l28.898-28.898c3.904-3.904 3.905-10.234 0-14.138-3.904-3.904-10.234-3.904-14.138 0l-28.966 28.965c-.003-.182-.008-.359-.01-.543v-2.376zM263.133 467.891a10.074 10.074 0 00-7.068-2.929c-2.639 0-5.209 1.07-7.068 2.929a10.027 10.027 0 00-2.929 7.068c0 2.629 1.06 5.209 2.929 7.068 1.86 1.859 4.439 2.929 7.068 2.929s5.199-1.07 7.068-2.929a10.07 10.07 0 002.929-7.068 10.07 10.07 0 00-2.929-7.068z" />
          </svg>
          <h2 className="mt-6 text-3xl font-medium text-white title-font">
            Outras soluções não foram pensadas exclusivamente para o seu
            agronegócio
          </h2>
          <div class="flex justify-center mt-6 mb-12">
            <div class="inline-flex w-16 h-1 rounded-full bg-remoteagro-500"></div>
          </div>
          <div class="lg:w-2/3 w-full mx-auto overflow-auto">
            <table class="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th class="px-4 py-3 title-font tracking-wider font-medium bg-remoteagro-600 text-medium  rounded-tl rounded-bl"></th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium bg-remoteagro-600 text-medium ">
                    Outros
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium bg-remoteagro-600 text-medium rounded-tr rounded-br">
                    RemoteAgro
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-4 py-3">Controle de estoque</td>
                  <td class="px-4 py-3 ">
                    <div className="flex justify-center">{check}</div>
                  </td>
                  <td class="px-4 py-3 ">
                    <div className="flex justify-center">{check}</div>
                  </td>
                </tr>
                <tr>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3">
                    Controle de máquinas
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center">{check}</div>
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center">{check}</div>
                  </td>
                </tr>
                <tr>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3">
                    Gestão de receitas
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center">{check}</div>
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center">{check}</div>
                  </td>
                </tr>
                <tr>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3">
                    Custos de safra/talhões
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center">{check}</div>
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center">{check}</div>
                  </td>
                </tr>
                <tr>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3">
                    Mapas NDVI
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center">{check}</div>
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center text-remoteagro-500">
                      {check}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3">
                    Controle de atividades
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center">{check}</div>
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center">{check}</div>
                  </td>
                </tr>
                <tr>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3">
                    Gestão financeira e de patrimônio completa
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center">{check}</div>
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center">{check}</div>
                  </td>
                </tr>
                <tr>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3">
                    Planejamento agrícola
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center">{check}</div>
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center ">{check}</div>
                  </td>
                </tr>
                <tr>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3">
                    Sistemas diferenciados voltados para cada função
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center">{close}</div>
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center">{check}</div>
                  </td>
                </tr>
                <tr>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3">
                    Realização de pesagens direta pelo sistema e integração com
                    talhões e contratos{' '}
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center">{close}</div>
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center">{check}</div>
                  </td>
                </tr>
                <tr>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3">
                    Envio de recomendações diárias entre equipe técnica e
                    operacional{' '}
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center">{close}</div>
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center">{check}</div>
                  </td>
                </tr>
                <tr>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3">
                    Acompanhamento técnico e personalizado da sua produção por
                    consultores agrícolas
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center">{close}</div>
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center">{check}</div>
                  </td>
                </tr>
                <tr>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3">
                    Relatórios personalizados de acordo com a sua demanda
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center">{close}</div>
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center">{check}</div>
                  </td>
                </tr>
                <tr>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3">
                    Monitoramento climático e de solo completo sob encomenda
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center">{close}</div>
                  </td>
                  <td class="border-t-2 border-opacity-20 border-white px-4 py-3 text-center">
                    <div className="flex justify-center">{check}</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-20">
              <button className="inline-flex items-center px-6 py-6 text-base text-white border-0 rounded bg-remoteagro-500 hover:bg-remoteagro-600 focus:outline-none ">
                Agende uma demonstração gratuita
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-4 py-24 mx-auto md:px-6">
          <div className="flex flex-col w-full mb-20 text-center">
            <h2 className="mb-1 text-xs font-medium tracking-widest text-remoteagro-500 title-font">
              PENSADO PARA VOCÊ
            </h2>
            <h1 className="text-2xl font-medium text-gray-900 sm:text-3xl title-font">
              Como ajudamos o seu agronegócio
            </h1>
            <div class="flex justify-center mt-6 ">
              <div class="inline-flex w-16 h-1 rounded-full bg-remoteagro-500"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex flex-col h-full p-8 border rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white rounded-full bg-remoteagro-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
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
                  <a className="inline-flex items-center mt-3 text-remoteagro-500">
                    Veja na prática
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex flex-col h-full p-8 border rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white rounded-full bg-remoteagro-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
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
                  <a className="inline-flex items-center mt-3 text-remoteagro-500">
                    Veja na prática
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex flex-col h-full p-8 border rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white rounded-full bg-remoteagro-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
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
                  <a className="inline-flex items-center mt-3 text-remoteagro-500">
                    Veja na prática
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex flex-col h-full p-8 border rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white rounded-full bg-remoteagro-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
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
                  <a className="inline-flex items-center mt-3 text-remoteagro-500">
                    Veja na prática
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex flex-col h-full p-8 border rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white rounded-full bg-remoteagro-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
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
                  <a className="inline-flex items-center mt-3 text-remoteagro-500">
                    Veja na prática
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex flex-col h-full p-8 border rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white rounded-full bg-remoteagro-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
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
                  <a className="inline-flex items-center mt-3 text-remoteagro-500">
                    Veja na prática
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex flex-col h-full p-8 border rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white rounded-full bg-remoteagro-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
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
                  <a className="inline-flex items-center mt-3 text-remoteagro-500">
                    Veja na prática
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 bg-gray-700 body-font">
        <div className="container px-4 py-12 mx-auto md:px-6">
          <div className="flex flex-col items-start mx-auto lg:w-2/3 sm:flex-row sm:items-center">
            <h1 className="flex-grow text-2xl font-medium text-white sm:pr-16 title-font">
              Pronto para digitalizar a sua fazenda?
            </h1>
            <button className="flex-shrink-0 px-8 py-6 mt-10 text-lg text-white border-0 rounded bg-remoteagro-500 focus:outline-none hover:bg-remoteagro-600 sm:mt-0">
              Agende uma demonstração gratuita
            </button>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-4 py-24 mx-auto md:px-6">
          <div className="text-center">
            <h2 className="mb-1 text-xs font-medium tracking-widest text-remoteagro-500 title-font">
              DEPOIMENTOS
            </h2>
            <h1 className="text-3xl font-medium text-gray-900 title-font">
              O que nossos clientes dizem?
            </h1>
            <div class="flex justify-center mt-6 mb-12">
              <div class="inline-flex w-16 h-1 rounded-full bg-remoteagro-500"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="w-full p-4 md:w-1/3">
              <div className="h-full p-8 bg-gray-100 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 mb-4 text-gray-400"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="mb-6 leading-relaxed">
                  A gente já usou mais de 10 programas, mas nunca encontramos
                  nada parecido com a idéia de vocês
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://dummyimage.com/106x106"
                    className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
                  />
                  <span className="flex flex-col flex-grow pl-4">
                    <span className="font-medium text-gray-900 title-font">
                      Giovani Reginato
                    </span>
                    <span className="text-sm text-gray-500">
                      Proprietário, Fazenda Reginato
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="w-full p-4 md:w-1/3">
              <div className="h-full p-8 bg-gray-100 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 mb-4 text-gray-400"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="mb-6 leading-relaxed">
                  O aplicativo agilizou nosso dia a dia. Temos agora um controle
                  muito maior sobre todos os nossos processos
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://dummyimage.com/106x106"
                    className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
                  />
                  <span className="flex flex-col flex-grow pl-4">
                    <span className="font-medium text-gray-900 title-font">
                      Willian Matté
                    </span>
                    <span className="text-sm text-gray-500">
                      Sócio Propietário, Grupo MEC Agrícola
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="w-full p-4 md:w-1/3">
              <div className="h-full p-8 bg-gray-100 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 mb-4 text-gray-400"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="mb-6 leading-relaxed">
                  Com a integração de todos os setores da fazenda num só lugar
                  identificamos nossos erros muito mais rapidamente.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://dummyimage.com/107x107"
                    className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
                  />
                  <span className="flex flex-col flex-grow pl-4">
                    <span className="font-medium text-gray-900 title-font">
                      Tatiane Castro
                    </span>
                    <span className="text-sm text-gray-500">
                      Responsável Administrativa, Fazenda Alvorada
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative text-gray-600 bg-gray-100 body-font">
        <div className="container flex flex-wrap px-4 py-24 mx-auto md:px-6 sm:flex-nowrap">
          <div className="relative flex items-end justify-start p-10 overflow-hidden bg-gray-300 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameborder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15358.241051419518!2d-47.8666903!3d-15.7743851!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x807b50c3ed067d68!2sCentro%20de%20Apoio%20ao%20Desenvolvimento%20Tecnol%C3%B3gico%20-%20CDT%2FUnB!5e0!3m2!1spt-BR!2sno!4v1615727196257!5m2!1spt-BR!2sno"
            ></iframe>
            <div className="relative flex flex-wrap py-6 bg-white rounded shadow-md">
              <div className="px-6 lg:w-1/2">
                <h2 className="text-xs font-semibold tracking-widest text-gray-900 title-font">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Universidade de Brasília - Edifício do Centro de Apoio ao
                  Desenvolvimento Tecnológico Campus Universitário Darcy Ribeiro
                  - Asa Norte - Brasília-DF
                </p>
              </div>
              <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
                <h2 className="text-xs font-semibold tracking-widest text-gray-800 title-font">
                  EMAIL
                </h2>
                <a
                  className="leading-relaxed text-remoteagro-500"
                  href="mailto:contato@remoteagro.com.br"
                >
                  contato@remoteagro.com.br
                </a>
                <h2 className="mt-4 text-xs font-semibold tracking-widest text-gray-900 title-font">
                  TELEFONE
                </h2>
                <p className="leading-relaxed">
                  <a href="tel:061999993392">(61) 99999-3392</a>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mt-8 lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
            <h2 className="mb-1 text-xl font-medium text-gray-900 title-font">
              Fale Conosco
            </h2>
            <p className="mb-5 leading-relaxed text-gray-600">
              Envie uma mensagem ou contate-nos
              <a href="" className="text-remoteagro-500">
                {' '}
                diretamente pelo whatsapp
              </a>
            </p>
            <div className="relative mb-4">
              <label for="name" className="text-sm leading-7 text-gray-600">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-remoteagro-500 focus:ring-2 focus:ring-remoteagro-200"
              />
            </div>
            <div className="relative mb-4">
              <label
                for="cellphone"
                className="text-sm leading-7 text-gray-600"
              >
                Telefone ou email
              </label>
              <input
                type="text"
                id="cellphone"
                name="cellphone"
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-remoteagro-500 focus:ring-2 focus:ring-remoteagro-200"
              />
            </div>
            <div className="relative mb-4">
              <label for="message" className="text-sm leading-7 text-gray-600">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-remoteagro-500 focus:ring-2 focus:ring-remoteagro-200"
              ></textarea>
            </div>
            <button className="px-6 py-2 text-lg text-white border-0 rounded bg-remoteagro-500 focus:outline-none hover:bg-remoteagro-600">
              Enviar
            </button>
            <p className="mt-3 text-xs text-gray-500">
              Espaço caso exista informação extra a ser dada pro cliente.
            </p>
          </div>
        </div>
      </section>
      <footer className="text-white bg-gray-900 body-font">
        <div className="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
          <a className="flex items-center justify-center font-medium title-font md:justify-start">
            <img className="h-10" src="Logo_Branca_simbolo.png" />
            <span className="ml-3 text-xl text-white">RemoteAgro</span>
          </a>
          <p className="mt-4 text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">
            © 2020 Remote Agro —
            <a
              href="https://twitter.com/knyttneve"
              className="ml-1 text-gray-300"
              rel="noopener noreferrer"
              target="_blank"
            >
              @remoteagro
            </a>
          </p>
          <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
            <a className="text-gray-300">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-300">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-300">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-300">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
