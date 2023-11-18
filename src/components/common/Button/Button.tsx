export function Button({
  label,
  icon,
  href,
}: {
  label: string;
  href: string;
  icon?: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-white px-6 py-4 flex hover:brightness-75 transition duration-150 items-center gap-4 rounded-md hover: bg-colors-primary-color mt-4"
    >
      {label} {icon}
    </a>
  );
}
