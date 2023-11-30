import { feature1, rightIcon, singilImage, video1 } from "@/assets";
import { Button } from "@/components/common/Button/Button";
import Carrousel from "@/components/common/Carrousel/Carrousel";
import { Title } from "@/components/common/Title/Title";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Navigation } from "swiper/modules";
import { clients } from "@/infra/clinets";
import { motion } from "framer-motion";
import Animation from "@/components/common/Animation";

export function About() {
  return (
    <div className="w-full overflow-x-hidden">
      <section className="w-full xs:h-screen md:h-[90vh] lg:h-screen flex flex-col relative">
        <Header dark />

        <div className="relative z-10 flex-1 max-h-full w-full flex flex-col gap-8 xs:px-12 md:px-24 pt-16 2xl:px-40">
          <div className="w-full justify-between flex items-center md:flex-wrap lg:flex-row xs:flex-col gap-y-8">
            <motion.h1
              initial={{ x: -200, opacity: 0.3 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="xs:text-4xl md:text-6xl xs:text-center lg:text-left max-w-4xl text-black font-InterSemiBold leading-tight"
            >
              Atendemos às suas necessidades com serviços especializados.
            </motion.h1>

            <motion.span
              initial={{ x: 200, opacity: 0.3 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-sm xs:text-center lg:text-left leading-loose text-zinc-500 max-w-sm text-justify"
            >
              Seja você uma empresa do setor marítimo, uma instituição de saúde
              ou uma entidade tecnológica, o Grupo Singil está aqui para atender
              às suas necessidades com um amplo espectro de serviços
              especializados.
            </motion.span>
          </div>

          <motion.div
            initial={{ y: 200, opacity: 0.3 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full xs:h-48 md:h-96 2xl:h-[480px]"
          >
            <video
              src={video1}
              className="w-full h-full object-cover brightness-75"
              autoPlay
              muted
              loop
            />
          </motion.div>
        </div>
      </section>

      <Container>
        <div className="grid w-full xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-28">
          <Animation
            position="zoom-in-up"
            className="flex flex-col xs:items-center md:items-start gap-6"
          >
            <h2 className="text-5xl text-black font-InterBold">+ 232</h2>
            <div className="w-full h-[1px] bg-black opacity-20" />

            <div className="flex flex-col xs:items-center md:items-start">
              <span className="text-sm text-black xs:text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </Animation>

          <Animation
            position="zoom-in-up"
            className="flex flex-col xs:items-center md:items-start gap-6"
          >
            <h2 className="text-5xl text-black font-InterBold">+ 232</h2>
            <div className="w-full h-[1px] bg-black opacity-20" />

            <div className="flex flex-col xs:items-center md:items-start">
              <span className="text-sm text-black xs:text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </Animation>

          <Animation
            position="zoom-in-up"
            className="flex flex-col xs:items-center md:items-start gap-6"
          >
            <h2 className="text-5xl text-black font-InterBold">+ 232</h2>
            <div className="w-full h-[1px] bg-black opacity-20" />

            <div className="flex flex-col xs:items-center md:items-start">
              <span className="text-sm text-black xs:text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </Animation>
        </div>
      </Container>

      <Container className="py-32">
        <div className="w-full grid xs:grid-cols-1 lg:grid-cols-2 gap-10 place-items-center place-content-center">
          <Animation position="fade-right">
            <img
              src={singilImage}
              className="w-full h-full object-cover rounded-xl"
              alt=""
            />
          </Animation>

          <div className="flex flex-col items-start gap-6">
            <Animation position="fade-left" className="flex flex-col gap-2">
              <Title label="Quem somos" />
              <span className="text-lg text-zinc-600 font-medium">
                Atuando desde 2012.
              </span>
            </Animation>

            <Animation position="fade-left">
              <p className=" text-zinc-500 leading-relaxed max-w-2xl">
                Grupo Singil que foi iniciado em 2012. Somos empresa de renome
                na prestação de serviços marítimos em Angola. Tendo servido mais
                de 2000 navios em Luanda e Cabinda. Desejo aproveitar esta
                oportunidade para informá-lo sobre nossos serviços e como eles
                podem ser úteis para sua empresa.
              </p>
            </Animation>

            <Animation position="fade-left">
              <p className="text-zinc-500 leading-relaxed max-w-2xl">
                A nossa visão é continuar a ser uma dos 10 empresas de
                referência em Angola, prestando serviços logísticos a navios e
                transportes sólidos e líquidos serviços de coleta de lixo
                urbano. Na província de Cabinda, recentemente recebeu a
                autorização privilegiada de ser o única empresa a fornecer os
                itens acima mencionados serviços e por estar localizado no porto
                de Cabinda.
              </p>
            </Animation>

            <Button
              href=""
              label="Saber mais"
              icon={<img src={rightIcon} className="w-5" alt="" />}
            />
          </div>
        </div>
      </Container>

      <Container className="py-32 flex-col items-start gap-12">
        <div className="w-full flex justify-between">
          <Title label="Somos a melhor opção" className="max-w-2xl" />
        </div>

        <Animation
          position="fade-right"
          className="flex w-full items-center gap-8 justify-between xs:flex-wrap lg:flex-nowrap"
        >
          <span className="max-w-3xl xs:text-center md:text-left leading-relaxed">
            Acreditamos que nossa parceria pode beneficiar a sua empresa para
            facilitar o seu actividades marítimas em Angola. O nosso grupo não
            só garante a qualidade certificada dos seus serviços, mas também o
            estrito cumprimento do acordado prazos.
          </span>

          <div className="flex items-center gap-4">
            <button className="text-white border-colors-primary-color border-2 bg-colors-primary-color rounded-md px-8 py-4 hover:bg-colors-primary-color hover:text-white focus:bg-colors-primary-color focus:text-white transition duration-200">
              Eficiência
            </button>

            <button className="text-colors-primary-color border-2 border-colors-primary-color rounded-md px-8 py-4 hover:bg-colors-primary-color hover:text-white focus:bg-colors-primary-color focus:text-white transition duration-200">
              Preços
            </button>
          </div>
        </Animation>

        <div className="w-full grid xs:grid-cols-1 md:grid-cols-3 gap-6">
          <Animation position="fade-up" className="col-span-2 h-96">
            <img src={feature1} className="w-full h-full object-cover" alt="" />
          </Animation>

          <Animation
            position="fade-up"
            className="xs:col-span-2 md:col-span-1 h-96"
          >
            <img src={feature1} className="w-full h-full object-cover" alt="" />
          </Animation>
        </div>
      </Container>

      <Container className="pt-32 flex-col items-start gap-12">
        <div className="w-full flex justify-between">
          <Title label="Temos os melhores clientes." className="max-w-2xl" />
        </div>

        <div className="flex justify-center pt-10 w-full">
          <Carrousel
            style={{ paddingBottom: "70px" }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            settings={{
              pagination: {
                clickable: true,
              },
              spaceBetween: 0,
              grabCursor: true,
              loop: true,
              breakpoints: {
                360: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                },
                640: {
                  slidesPerView: 5,
                  slidesPerGroup: 2,
                },
                1200: {
                  slidesPerView: 6,
                  slidesPerGroup: 2,
                },
              },
            }}
            modules={[Navigation, FreeMode]}
          >
            {clients.map((client: any, index: number) => (
              <SwiperSlide key={index}>
                <Animation position="fade-up">
                  <img src={client} className="w-32" alt="" />
                </Animation>
              </SwiperSlide>
            ))}
          </Carrousel>
        </div>
      </Container>

      <section className="pt-36 ">
        <Title label="Testemunhos" className="2xl:px-40 xs:px-12 md:px-24" />
        <div className="bg-colors-primary-color pt-32 pb-20 mt-24 2xl:px-40 xs:px-12 md:px-24">
          <Carrousel
            style={{ paddingBottom: "70px" }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            settings={{
              pagination: {
                clickable: true,
              },
              spaceBetween: 0,
              grabCursor: true,
              loop: true,
              breakpoints: {
                360: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                640: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                1200: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
              },
            }}
            modules={[Navigation, FreeMode, Pagination]}
          >
            <SwiperSlide>
              <Animation
                position="fade-left"
                className="flex flex-col gap-y-8 "
              >
                <p className="text-white lg:text-3xl leading-relaxed font-InterSemiBold text-justify">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                  voluptatem nesciunt. Eius iste error asperiores neque tempore
                  obcaecati ratione. Voluptatibus eaque exercitationem
                  perferendis sed modi amet eveniet omnis cupiditate quis."
                </p>

                <span className="text-xl font-light text-white">
                  <span className="font-InterSemiBold">Harvey Michael</span>
                  Office Manager of Designspace
                </span>
              </Animation>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col gap-y-8 ">
                <p className="text-white lg:text-3xl leading-relaxed font-InterSemiBold text-justify">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                  voluptatem nesciunt. Eius iste error asperiores neque tempore
                  obcaecati ratione. Voluptatibus eaque exercitationem
                  perferendis sed modi amet eveniet omnis cupiditate quis."
                </p>

                <span className="text-xl font-light text-white">
                  <span className="font-InterSemiBold">Harvey Michael</span>
                  Office Manager of Designspace
                </span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col gap-y-8 ">
                <p className="text-white lg:text-3xl leading-relaxed font-InterSemiBold text-justify">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                  voluptatem nesciunt. Eius iste error asperiores neque tempore
                  obcaecati ratione. Voluptatibus eaque exercitationem
                  perferendis sed modi amet eveniet omnis cupiditate quis."
                </p>

                <span className="text-xl font-light text-white">
                  <span className="font-InterSemiBold">Harvey Michael</span>
                  Office Manager of Designspace
                </span>
              </div>
            </SwiperSlide>
          </Carrousel>
        </div>
      </section>

      <Footer />
    </div>
  );
}
