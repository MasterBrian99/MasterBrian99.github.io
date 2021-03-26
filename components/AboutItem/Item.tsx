interface Prop {
  text: string;
  img: string;
}

const Item = ({ text, img }: Prop) => {
  return (
    <div className=" is-flex is-flex-direction-column is-align-items-center is-justify-content-space-between">
      <img src={img} alt={img} />
      <h2>{text}</h2>
    </div>
  );
};

export default Item;
