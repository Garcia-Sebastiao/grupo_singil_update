import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./style.css";
import "swiper/css/pagination";

export default function Carrousel({
  children,
  settings,
  autoplay,
  modules = [],
  style = {},
}: {
  children: React.ReactNode;
  settings?: any;
  autoplay?: any;
  modules?: any[];
  style?: any;
}) {
  return (
    <Swiper
      navigation={true}
      style={style}
      modules={[Autoplay, ...modules]}
      {...settings}
      autoplay={autoplay}
    >
      {children}
    </Swiper>
  );
}
