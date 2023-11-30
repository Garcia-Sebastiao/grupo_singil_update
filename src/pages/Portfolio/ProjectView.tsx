import { medicineImage, rightBlack } from "@/assets";
import Animation from "@/components/common/Animation";
import Carrousel from "@/components/common/Carrousel/Carrousel";
import { Title } from "@/components/common/Title/Title";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { motion } from "framer-motion";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

export function ProjectView() {
  return (
    <div className="-full overflow-x-hidden">
      <section className="w-full xs:h-screen md:h-[70vh] bg-colors-primary-color lg:h-[70] flex flex-col relative">
        <Header />

        <div className="relative z-10 flex-1 w-full flex flex-col xs:justify-center lg:justify-end xs:px-12 md:px-24 py-32 2xl:px-40">
          <div className="w-full justify-between flex items-center md:flex-wrap lg:flex-row xs:flex-col gap-y-8">
            <motion.h1
              initial={{ x: -200, opacity: 0.3 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="xs:text-4xl md:text-6xl xs:text-center lg:text-left max-w-4xl text-white font-InterSemiBold leading-tight"
            >
              Atendemos às suas necessidades com serviços especializados.
            </motion.h1>

            <motion.span
              initial={{ x: 200, opacity: 0.3 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-sm xs:text-center lg:text-left leading-loose text-zinc-300 max-w-sm text-justify"
            >
              Seja você uma empresa do setor marítimo, uma instituição de saúde
              ou uma entidade tecnológica, o Grupo Singil está aqui para atender
              às suas necessidades com um amplo espectro de serviços
              especializados.
            </motion.span>
          </div>
        </div>
      </section>

      <Container className="flex-col py-32 gap-y-20">
        <div className="flex items-center gap-y-6 w-full justify-between xs:flex-wrap lg:flex-nowrap">
          <Animation position="fade-left">
            <Title label="Levantamento de cargas" className="max-w-xs" />
          </Animation>

          <Animation position="fade-up">
            <p className="text-zinc-500 xs:max-w-sm md:max-w-full lg:max-w-sm leading-relaxed text-sm xs:text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et atque
              officia laborum, odit quos, quisquam saepe quaerat distinctio
              veniam placeat culpa dolor doloremque! Corporis obcaecati illo
              reprehenderit, explicabo fugiat laudantium.
            </p>
          </Animation>
        </div>

        <Animation position="fade-up" className="w-full xs:h-80  lg:h-[40rem]">
          <img
            src={medicineImage}
            className="w-full h-full object-cover"
            alt=""
          />
        </Animation>

        <div className="w-full grid xs:grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
          <a href="#" className="flex flex-col gap-y-8 w-full">
            <div className="flex items-center gap-4">
              <img src={rightBlack} className="w-4" alt="" />
              <h3 className="text-xl font-InterBold">Levantamento de Cargas</h3>
            </div>

            <div className="h-[1px] bg-zinc-300 w-full" />
          </a>

          <a href="#" className="flex flex-col gap-y-8 w-full">
            <div className="flex items-center gap-4">
              <img src={rightBlack} className="w-4" alt="" />
              <h3 className="text-xl font-InterBold">Levantamento de Cargas</h3>
            </div>

            <div className="h-[1px] bg-zinc-300 w-full" />
          </a>

          <a href="#" className="flex flex-col gap-y-8 w-full">
            <div className="flex items-center gap-4">
              <img src={rightBlack} className="w-4" alt="" />
              <h3 className="text-xl font-InterBold">Levantamento de Cargas</h3>
            </div>

            <div className="h-[1px] bg-zinc-300 w-full" />
          </a>

          <a href="#" className="flex flex-col gap-y-8 w-full">
            <div className="flex items-center gap-4">
              <img src={rightBlack} className="w-4" alt="" />
              <h3 className="text-xl font-InterBold">Levantamento de Cargas</h3>
            </div>

            <div className="h-[1px] bg-zinc-300 w-full" />
          </a>

          <a href="#" className="flex flex-col gap-y-8 w-full">
            <div className="flex items-center gap-4">
              <img src={rightBlack} className="w-4" alt="" />
              <h3 className="text-xl font-InterBold">Levantamento de Cargas</h3>
            </div>

            <div className="h-[1px] bg-zinc-300 w-full" />
          </a>

          <a href="#" className="flex flex-col gap-y-8 w-full">
            <div className="flex items-center gap-4">
              <img src={rightBlack} className="w-4" alt="" />
              <h3 className="text-xl font-InterBold">Levantamento de Cargas</h3>
            </div>

            <div className="h-[1px] bg-zinc-300 w-full" />
          </a>
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
