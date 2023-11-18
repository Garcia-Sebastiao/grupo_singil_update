import { video1 } from "@/assets";

export function VideoBanner() {
  return (
    <div className="w-full h-full absolute top-0 brightness-50 left-0">
      <video
        src={video1}
        className="w-full h-full object-cover brightness-75"
        autoPlay
        muted
        loop
      />
    </div>
  );
}
