const LayoutBox = ({ children, left, right }) => {
  return (
    <section>
      <div>
        {children}
        {left}
        {right}
      </div>
    </section>
  );
};

export default LayoutBox;
