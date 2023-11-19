import { Header } from "@/components/layout/Header";
import { Container } from "@/components/layout/Container";
import { VideoBanner } from "@/components/layout/VideoBanner";
import { Title } from "@/components/common/Title/Title";
import { motion } from "framer-motion";

import {
  directorImage,
  goalIcon,
  mapIllustration,
  medicine,
  medicineImage,
  rightArrow,
  rightIcon,
  ship,
  tech,
  valuesIcon,
  visionIcon,
} from "@/assets";
import { Footer } from "@/components/layout/Footer";
import Animation from "@/components/common/Animation";

export function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <section className="w-full xs:h-screen md:h-[90vh] flex flex-col bg-zinc-400 relative">
        <Header />
        <VideoBanner />

        <div className="relative z-10 flex-1 w-full flex flex-col xs:justify-center lg:justify-end xs:px-12 md:px-24 py-32 2xl:px-40">
          <div className="w-full justify-between flex items-center md:flex-wrap lg:flex-row xs:flex-col gap-y-8">
            <motion.h1
              initial={{ x: -200, opacity: 0.3 }}
              whileInView={{ x: 0,  opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="xs:text-4xl md:text-6xl xs:text-center lg:text-left max-w-4xl text-white font-InterSemiBold leading-tight"
            >
              Atendemos às suas necessidades com serviços especializados.
            </motion.h1>

            <motion.span initial={{ x: 200, opacity: 0.3 }}
              whileInView={{ x: 0,  opacity: 1 }}
              transition={{ duration: 0.3 }} className="text-sm xs:text-center lg:text-left leading-loose text-zinc-300 max-w-sm text-justify">
              Seja você uma empresa do setor marítimo, uma instituição de saúde
              ou uma entidade tecnológica, o Grupo Singil está aqui para atender
              às suas necessidades com um amplo espectro de serviços
              especializados.
            </motion.span>
          </div>
        </div>
      </section>

      <Container className="flex-col gap-14">
        <Animation position="fade-left">
          <Title label="Porquê Escolher-nos?" />
        </Animation>

        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-8 gap-y-14">
          <Animation
            position="fade-up"
            className="flex flex-col xs:items-center md:items-start gap-5"
          >
            <img src={visionIcon} className="w-12" alt="" />
            <h4 className="text-2xl font-InterSemiBold">Nossa Visão</h4>

            <span className="text-sm max-w-md text-zinc-300 md:text-left xs:text-center leading-relaxed">
              Os nossos clientes a tornarem-se organizações de grande desempenho
            </span>
            <a
              href="#"
              className="text-sm flex items-center gap-4 text-colors-primary-color font-InterSemiBold"
            >
              Ler mais
              <img src={rightArrow} className="w-3" alt="" />
            </a>
          </Animation>

          <Animation
            position="fade-up"
            className="flex flex-col xs:items-center md:items-start gap-5"
          >
            <img src={goalIcon} className="w-12" alt="" />
            <h4 className="text-2xl font-InterSemiBold">Nossa Missão</h4>

            <span className="text-sm max-w-md text-zinc-300 md:text-left xs:text-center leading-relaxed">
              A parceria partilha com o sseus clientes uma experiente equipa de
              especialistas e proporciona aos clientes, serviços de elevada
              qualidade e tendo prestado a empresas.
            </span>
            <a
              href="#"
              className="text-sm flex items-center gap-4 text-colors-primary-color font-InterSemiBold"
            >
              Ler mais
              <img src={rightArrow} className="w-3" alt="" />
            </a>
          </Animation>

          <Animation
            position="fade-up"
            className="flex flex-col xs:items-center md:items-start gap-5"
          >
            <img src={valuesIcon} className="w-12" alt="" />
            <h4 className="text-2xl font-InterSemiBold">Nossos Valores</h4>

            <span className="text-sm max-w-md text-zinc-300 md:text-left xs:text-center leading-relaxed">
              O grupo não s+o garante qualidade certificada dos seus serviços,
              mas também o cumprimento rigor dos prazos acordados.
            </span>
            <a
              href="#"
              className="text-sm flex items-center gap-4 text-colors-primary-color font-InterSemiBold"
            >
              Ler mais
              <img src={rightArrow} className="w-3" alt="" />
            </a>
          </Animation>
        </div>
      </Container>

      <Container className="flex-col gap-14" id="services">
        <Animation position="fade-left">
          <Title
            label="Apresentamos a você os melhores serviços."
            className="leading-tight max-w-xl"
          />
        </Animation>

        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-8 gap-y-14">
          <Animation
            position="fade-up"
            className="flex flex-col xs:items-center md:items-start gap-5"
          >
            <img src={ship} className="w-14" alt="" />
            <h4 className="text-2xl font-InterSemiBold">Serviços Maritimos</h4>

            <ul className="flex flex-col xs:items-center md:items-start gap-4">
              <li className="text-sm max-w-sm xs:text-center md:text-left text-zinc-300 leading-relaxed list-disc ml-4">
                Bunkering
              </li>
              <li className="text-sm max-w-sm xs:text-center md:text-left text-zinc-300 leading-relaxed list-disc ml-4">
                Abastecimento de água potável
              </li>
              <li className="text-sm max-w-sm xs:text-center md:text-left text-zinc-300 leading-relaxed list-disc ml-4">
                Shipchandler
              </li>
              <li className="text-sm max-w-sm xs:text-center md:text-left text-zinc-300 leading-relaxed list-disc ml-4">
                Remoção de resíduos sólidos e líquidos (slop, sludge, blidge,
                garbage, etc)
              </li>
              <li className="text-sm max-w-sm xs:text-center md:text-left text-zinc-300 leading-relaxed list-disc ml-4">
                Mergulho (Limpeza de casco entre outros)
              </li>
            </ul>
            <a
              href="#"
              className="text-sm flex items-center gap-4 text-white px-6 rounded-md py-3 bg-colors-primary-color font-InterSemiBold mt-4"
            >
              Ler mais
              <img src={rightIcon} className="w-4" alt="" />
            </a>
          </Animation>

          <Animation
            position="fade-up"
            className="flex flex-col xs:items-center md:items-start gap-5"
          >
            <img src={medicine} className="w-14" alt="" />
            <h4 className="text-2xl font-InterSemiBold">Singil Medical</h4>

            <ul className="flex flex-col xs:items-center md:items-start gap-4">
              <li className="text-sm max-w-sm xs:text-center md:text-left text-zinc-300 leading-relaxed list-disc ml-4">
                Fornecimento de Medicamentos
              </li>
              <li className="text-sm max-w-sm xs:text-center md:text-left text-zinc-300 leading-relaxed list-disc ml-4">
                Equipamentos de Laboratório
              </li>
              <li className="text-sm max-w-sm xs:text-center md:text-left text-zinc-300 leading-relaxed list-disc ml-4">
                Odontologia, Oftalmologia, Imagiologia , Inceneradora Hospitalar
              </li>
              <li className="text-sm max-w-sm xs:text-center md:text-left text-zinc-300 leading-relaxed list-disc ml-4">
                Manutenção preventiva e corretiva dos equipamentos
              </li>
              <li className="text-sm max-w-sm xs:text-center md:text-left text-zinc-300 leading-relaxed list-disc ml-4">
                Reparação
              </li>
              <li className="text-sm max-w-sm xs:text-center md:text-left text-zinc-300 leading-relaxed list-disc ml-4">
                Formação pós venda
              </li>
            </ul>
            <a
              href="#"
              className="text-sm flex items-center gap-4 text-white px-6 rounded-md py-3 bg-colors-primary-color font-InterSemiBold mt-4"
            >
              Ler mais
              <img src={rightIcon} className="w-4" alt="" />
            </a>
          </Animation>

          <Animation
            position="fade-up"
            className="flex flex-col xs:items-center md:items-start gap-5"
          >
            <img src={tech} className="w-14" alt="" />
            <h4 className="text-2xl font-InterSemiBold">Singil Technology</h4>

            <ul className="flex flex-col xs:items-center md:items-start gap-4">
              <li className="text-sm max-w-sm text-zinc-300 leading-relaxed list-disc ml-4">
                Cameras Térmicas
              </li>
              <li className="text-sm max-w-sm xs:text-center md:text-left text-zinc-300 leading-relaxed list-disc ml-4">
                VHF
              </li>
              <li className="text-sm max-w-sm xs:text-center md:text-left text-zinc-300 leading-relaxed list-disc ml-4">
                AIS
              </li>
              <li className="text-sm max-w-sm xs:text-center md:text-left text-zinc-300 leading-relaxed list-disc ml-4">
                Radares marítimos
              </li>
              <li className="text-sm max-w-sm xs:text-center md:text-left text-zinc-300 leading-relaxed list-disc ml-4">
                VTS
              </li>
              <li className="text-sm max-w-sm xs:text-center md:text-left text-zinc-300 leading-relaxed list-disc ml-4">
                AIRMAR Estação metereológica 220WX
              </li>
              <li className="text-sm max-w-sm xs:text-center md:text-left text-zinc-300 leading-relaxed list-disc ml-4">
                Internet via satélite
              </li>
            </ul>
            <a
              href="#"
              className="text-sm flex items-center gap-4 text-white px-6 rounded-md py-3 bg-colors-primary-color font-InterSemiBold mt-4"
            >
              Ler mais
              <img src={rightIcon} className="w-4" alt="" />
            </a>
          </Animation>
        </div>
      </Container>

      <Container className="bg-colors-primary-color mt-32 py-32 flex-col gap-32">
        <Animation position="fade-left">
          <Title
            label="Expandindoa nacionalmente marcando industrias."
            className="leading-tight max-w-2xl text-white"
          />
        </Animation>

        <Animation
          position="zoom-in-up"
          className="w-full flex items-center justify-center"
        >
          <img src={mapIllustration} alt="" className="opacity-50 lg:w-[90%]" />
        </Animation>

        <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-28">
          <Animation
            position="zoom-in-up"
            className="flex flex-col xs:items-center md:items-start gap-6"
          >
            <h2 className="text-5xl text-white font-InterBold">+ 232</h2>
            <div className="w-full h-[1px] bg-white opacity-20" />

            <div className="flex flex-col xs:items-center md:items-start">
              <h3 className="text-lg text-white font-medium">Clientes</h3>
              <span className="text-sm text-white xs:text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                labore fugit.
              </span>
            </div>
          </Animation>

          <Animation
            position="zoom-in-up"
            className="flex flex-col xs:items-center md:items-start gap-6"
          >
            <h2 className="text-5xl text-white font-InterBold">+ 17</h2>
            <div className="w-full h-[1px] bg-white opacity-20" />
            <div className="flex flex-col xs:items-center md:items-start">
              <h3 className="text-lg text-white font-medium">Empresas</h3>
              <span className="text-sm text-white xs:text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                labore fugit.
              </span>
            </div>
          </Animation>

          <Animation
            position="zoom-in-up"
            className="flex flex-col xs:items-center md:items-start gap-6"
          >
            <h2 className="text-5xl text-white font-InterBold">+ 1463</h2>
            <div className="w-full h-[1px] bg-white opacity-20" />
            <div className="flex flex-col xs:items-center md:items-start">
              <h3 className="text-lg text-white font-medium">
                Horas de trabalho
              </h3>
              <span className="text-sm text-white xs:text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                labore fugit.
              </span>
            </div>
          </Animation>

          <Animation
            position="zoom-in-up"
            className="flex flex-col xs:items-center md:items-start gap-6"
          >
            <h2 className="text-5xl text-white font-InterBold">+ 30</h2>
            <div className="w-full h-[1px] bg-white opacity-20" />
            <div className="flex flex-col xs:items-center md:items-start">
              <h3 className="text-lg text-white font-medium">Colaboradores</h3>
              <span className="text-sm text-white xs:text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                labore fugit.
              </span>
            </div>
          </Animation>
        </div>
      </Container>

      <Container>
        <div className="flex w-full xs:flex-wrap lg:flex-nowrap items-center bg-zinc-100">
          <div className="xs:w-full lg:w-[530px] xs:h-80 lg:h-full">
            <img
              src={directorImage}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="flex-1 xs:px-6 xs:py-8 lg:py-4 md:px-14 flex flex-col items-start gap-6">
            <span className="text-lg text-zinc-500 italic font-medium leading-relaxed">
              "Sinclesio Zacarias formou-se Bachelar of Arts In Business and
              International Languages na East London na cidade de Londes 9 anos
              com extensa experiência na coordenação de pilotagem da barra do
              Porto de Luanda 9 anos como CEO do Grupo Singil especializando-se
              na venda de petróleo e os seus derivados. Liderando um vasto time
              na logística de todo o tipo de navios a fornecer todo o tipo de
              equipamento, ship chandler, limpeza de caso etc, remoção de
              residuos sólidos e líquidos sendo representante com a 3ª maior
              empresa do mercado internacional de diamante. Gestor na área
              medicinal como farmácia representante de uma fábrica fornecedora
              de diversos equipamentos como teste rápido para Covid-19 e outros.
              Professor didático por alguns anos Entendedor na área de
              comunicação e satélite.""
            </span>

            <div>
              <h3 className="font-InterBold text-xl">Sinclesio Zazarias</h3>
              <span className="text-lg text-zinc-500 font-medium leading-relaxed">
                Diretor Geral
              </span>
            </div>
          </div>
        </div>
      </Container>

      <Container className="flex-col gap-y-16 py-32">
        <Title
          label="Veja os nossos projectos em nosso portfolio"
          className="leading-tight max-w-2xl"
        />

        <div className="w-full">
          <div className="w-full grid gap-8 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Animation position="fade-up" className="flex flex-col gap-3">
              <div className="h-80 relative">
                <img
                  src={medicineImage}
                  className="w-full h-full object-cove rounded-xl"
                  alt=""
                />

                <span className="absolute top-4 left-4 text-xs text-white bg-colors-primary-color p-3 font-medium">
                  Levantamento de Cargas
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <a href="/project_view/1" className="text-xl font-InterSemiBold">
                  Levantamento de cargas
                </a>

                <span className="text-sm ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorem tenetur earum veritatis dolor odit ess.
                </span>
              </div>
            </Animation>

            <Animation position="fade-up" className="flex flex-col gap-3">
              <div className="h-80 relative">
                <img
                  src={medicineImage}
                  className="w-full h-full object-cove rounded-xl"
                  alt=""
                />

                <span className="absolute top-4 left-4 text-xs text-white bg-colors-primary-color p-3 font-medium">
                  Levantamento de Cargas
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <a href="/project_view/1" className="text-xl font-InterSemiBold">
                  Levantamento de cargas
                </a>

                <span className="text-sm ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorem tenetur earum veritatis dolor odit ess.
                </span>
              </div>
            </Animation>

            <Animation position="fade-up" className="flex flex-col gap-3">
              <div className="h-80 relative">
                <img
                  src={medicineImage}
                  className="w-full h-full object-cove rounded-xl"
                  alt=""
                />

                <span className="absolute top-4 left-4 text-xs text-white bg-colors-primary-color p-3 font-medium">
                  Levantamento de Cargas
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <a href="/project_view/1" className="text-xl font-InterSemiBold">
                  Levantamento de cargas
                </a>

                <span className="text-sm ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorem tenetur earum veritatis dolor odit ess.
                </span>
              </div>
            </Animation>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
}
