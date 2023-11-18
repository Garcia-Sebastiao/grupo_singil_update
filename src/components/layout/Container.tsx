type TContainer = {
  className?: string;
  id?: string;
  children?: React.ReactNode;
};

export function Container({ className, id, children }: TContainer) {
  return <section id={id} className={`${className} xs:px-12 md:px-24 pt-36 2xl:px-40 w-full flex`}>{children}</section>;
}
