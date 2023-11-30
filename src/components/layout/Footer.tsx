import { facebookIcon, instagramIcon, linkedinIcon, rightIcon } from "@/assets";
import { Title } from "../common/Title/Title";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer id="contacts" className="w-full bg-zinc-100">
      <Container className="flex-col pb-20 gap-28">
        <div className="flex xs:flex-col md:flex-row gap-y-4 items-center justify-between xs:flex-wrap lg:flex-nowrap">
          <Title
            className="max-w-3xl"
            label="Garanta de escolher os melhores serviços para o crescimento de sua empresa."
          />

          <a
            href=""
            className="flex flex-none items-center gap-4 text-white px-6 rounded-md py-4 bg-colors-primary-color font-medium mt-4"
          >
            Contacte-nos
            <img src={rightIcon} className="w-4" alt="" />
          </a>
        </div>

        <div className="w-full h-[2px] bg-zinc-300" />

        <div className="w-full grid lg:grid-cols-4 gap-12 md:grid-cols-2 xs:grid-cols-1">
          <div className="flex flex-col gap-6 items-start">
            <a href="" className="text-3xl font-InterBlack">
              Grupo Singil
            </a>
            <span className="max-w-xs text-zinc-500 leading-relaxed text-sm">
              Grupo Singil está aqui para atender às suas necessidades com um
              amplo espectro de serviços especializados.
            </span>
          </div>

          <div className="flex flex-col items-start gap-6">
            <h2 className="text-3xl font-InterBlack">Links Uteis</h2>

            <ul className="flex flex-col items-start gap-6">
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-500 hover:brightness-50 transition-all duration-150"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-500 hover:brightness-50 transition-all duration-150"
                >
                  Sobre nos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-500 hover:brightness-50 transition-all duration-150"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-500 hover:brightness-50 transition-all duration-150"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-6">
            <h2 className="text-3xl font-InterBlack">Setor Marítimo</h2>

            <ul className="flex flex-col items-start gap-6">
              <li className="text-sm text-zinc-500">Bunkering</li>
              <li className="text-sm text-zinc-500">
                Abastecimento de água potável
              </li>
              <li className="text-sm text-zinc-500">Shipchandler</li>
              <li className="text-sm text-zinc-500">
                Remoção de resíduos sólidos e líquidos (slop, sludge, blidge,
                garbage, etc)
              </li>
              <li className="text-sm text-zinc-500">
                Mergulho (Limpeza de casco entre outros);
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-6">
            <h2 className="text-3xl font-InterBlack">Medicina</h2>

            <ul className="flex flex-col items-start gap-6">
              <li className="text-sm text-zinc-500">
                Fornecimento de Medicamentos;
              </li>
              <li className="text-sm text-zinc-500">
                Equipamentos de Laboratório, Odontologia, Oftalmologia,
                Imagiologia , Inceneradora Hospitalar;
              </li>
              <li className="text-sm text-zinc-500">
                Manutenção preventiva e corretiva dos equipamentos;
              </li>
              <li className="text-sm text-zinc-500">Reparação;</li>
              <li className="text-sm text-zinc-500">Formação pós venda;</li>
            </ul>
          </div>
        </div>

        <div className="flex xs:flex-col lg:flex-row gap-y-4 w-full justify-between items-center">
          <span className="text-sm xs:text-center lg:text-left font-medium text-zinc-600">
            Todos os direitos reservados. Desenvolvido pela <b>NjilaBrand.</b>
          </span>

          <div className="flex items-center gap-4">
            <a href="">
              <img src={facebookIcon} className="w-5" alt="" />
            </a>
            <a href="">
              <img src={instagramIcon} className="w-5" alt="" />
            </a>
            <a href="">
              <img src={linkedinIcon} className="w-5" alt="" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
