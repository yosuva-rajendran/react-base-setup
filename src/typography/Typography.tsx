interface ITypo {
  variant: string;
  children: string;
}
const Typography = ({ variant, children }: ITypo) => {
  return (
    <>
      {(() => {
        switch (variant) {
          case 'h1':
            return <h1 className="text-3xl">{children}</h1>;
          case 'h2':
            return <h2 className="text-2xl">{children}</h2>;
          case 'h3':
            return <h3 className="text-xl">{children}</h3>;
          case 'h4':
            return <h4 className="text-lg">{children}</h4>;
          case 'h5':
            return <h5 className="text-base">{children}</h5>;
          case 'h6':
            return <h6 className="text-sm">{children}</h6>;
          case 'body1':
            return <p className="text-xs leading-5 font-sans">{children}</p>;
          case 'title':
            return <h4 className="text-lg font-semibold">{children}</h4>;
          case 'sub-title':
            return <h4 className="text-base text-slate-400">{children}</h4>;
          default:
            return null;
        }
      })()}
    </>
  );
};
export default Typography;
