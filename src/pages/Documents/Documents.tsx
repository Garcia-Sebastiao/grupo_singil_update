import {
  singilMedical,
  singilIntroduction,
  singilTech,
  medicineBlue,
  rightIcon,
  techBlue,
} from "@/assets";
import Animation from "@/components/common/Animation";
import { Modal } from "@/components/common/Modal/Modal";
import { Title } from "@/components/common/Title/Title";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { motion } from "framer-motion";
import { useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

export function Documents() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [doc, setDoc] = useState<string>("");

  return (
    <div className="w-full relative overflow-x-hidden">
      <Modal onClose={() => setOpenModal(false)} isOpen={openModal}>
        <div
          style={{
            border: "1px solid rgba(0, 0, 0, 0.3)",
            height: "750px",
          }}
        >
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer
              fileUrl={
                doc == "medical"
                  ? singilMedical
                  : doc == "tech"
                  ? singilTech
                  : singilIntroduction
              }
              plugins={[]}
            />
          </Worker>
        </div>
      </Modal>
      <section className="w-full xs:h-screen md:h-[90vh] bg-colors-primary-color lg:h-screen flex flex-col relative">
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

      <Container className="py-32 gap-y-12 flex-col">
        <Title label="Documentos de serviços" />

        <div className="w-full grid xs:grid-cols-1 md:grid-cols-2 gap-8">
          <Animation
            position="fade-up"
            className="p-8 rounded-md border-2 flex flex-col items-start gap-y-10 border-zinc-200"
          >
            <div className="flex w-full items-center gap-x-6">
              <img src={techBlue} className="w-10" alt="" />
              <h3 className="text-xl font-InterBold">Singil - introdução</h3>
            </div>

            <span className="max-w-2xl text-zinc-500 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              ratione quasi quaerat nihil ipsam veritatis atque molestiae minus!
              Commodi rem nulla velit quaerat.
            </span>

            <div className="w-full h-[1px] bg-zinc-300" />

            <button
              onClick={() => {
                setOpenModal(true);
                setDoc("intro");
              }}
              className="px-6 py-3 text-white bg-colors-primary-color rounded-md flex items-center gap-x-6"
            >
              Ler <img src={rightIcon} className="w-4" alt="" />
            </button>
          </Animation>

          <Animation
            position="fade-up"
            className="p-8 rounded-md border-2 flex flex-col items-start gap-y-10 border-zinc-200"
          >
            <div className="flex w-full items-center gap-x-6">
              <img src={techBlue} className="w-10" alt="" />
              <h3 className="text-xl font-InterBold">Singil - Starlink</h3>
            </div>

            <span className="max-w-2xl text-zinc-500 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              ratione quasi quaerat nihil ipsam veritatis atque molestiae minus!
              Commodi rem nulla velit quaerat.
            </span>

            <div className="w-full h-[1px] bg-zinc-300" />

            <button
              onClick={() => {
                setOpenModal(true);
                setDoc("starlink");
              }}
              className="px-6 py-3 text-white bg-colors-primary-color rounded-md flex items-center gap-x-6"
            >
              Ler <img src={rightIcon} className="w-4" alt="" />
            </button>
          </Animation>

          <Animation
            position="fade-up"
            className="p-8 rounded-md border-2 flex flex-col items-start gap-y-10 border-zinc-200"
          >
            <div className="flex w-full items-center gap-x-6">
              <img src={medicineBlue} className="w-10" alt="" />
              <h3 className="text-xl font-InterBold">Singil - Medical</h3>
            </div>

            <span className="max-w-2xl text-zinc-500 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              ratione quasi quaerat nihil ipsam veritatis atque molestiae minus!
              Commodi rem nulla velit quaerat.
            </span>

            <div className="w-full h-[1px] bg-zinc-300" />

            <button
              onClick={() => {
                setOpenModal(true);
                setDoc("medical");
              }}
              className="px-6 py-3 text-white bg-colors-primary-color rounded-md flex items-center gap-x-6"
            >
              Ler <img src={rightIcon} className="w-4" alt="" />
            </button>
          </Animation>

          <Animation
            position="fade-up"
            className="p-8 rounded-md border-2 flex flex-col items-start gap-y-10 border-zinc-200"
          >
            <div className="flex w-full items-center gap-x-6">
              <img src={techBlue} className="w-10" alt="" />
              <h3 className="text-xl font-InterBold">Singil - Technology</h3>
            </div>

            <span className="max-w-2xl text-zinc-500 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              ratione quasi quaerat nihil ipsam veritatis atque molestiae minus!
              Commodi rem nulla velit quaerat.
            </span>

            <div className="w-full h-[1px] bg-zinc-300" />

            <button
              onClick={() => {
                setOpenModal(true);
                setDoc("tech");
              }}
              className="px-6 py-3 text-white bg-colors-primary-color rounded-md flex items-center gap-x-6"
            >
              Ler <img src={rightIcon} className="w-4" alt="" />
            </button>
          </Animation>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
