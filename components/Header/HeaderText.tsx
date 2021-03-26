interface Prop {
  text: string;
}

const HeaderText = ({ text }: Prop) => {
  return (
    <>
      <h2>{text}</h2>
      <style jsx>{`
        h2 {
          font-size: 2.3rem;
          font-weight: 900;
          text-transform: uppercase;
          text-align: center;
          margin-bottom: 3rem;
        }
      `}</style>
    </>
  );
};

export default HeaderText;
