import Animation from "../Animation";

export function Title({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <Animation position="fade-left">
      <h2
        className={`${className} xs:text-3xl xs:text-center md:text-left md:text-5xl leading-loose font-InterBold`}
      >
        {label}
      </h2>
    </Animation>
  );
}
