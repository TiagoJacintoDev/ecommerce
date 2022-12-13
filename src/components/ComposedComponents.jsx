export function ComposedComponents({ components = [], children }) {
  return (
    <>
      {components.reduceRight((acc, Component) => {
        return <Component>{acc}</Component>;
      }, children)}
    </>
  );
}
