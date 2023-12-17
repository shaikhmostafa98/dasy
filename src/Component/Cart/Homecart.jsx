const Homecart = ({ data }) => {
  const { id, name, img } = data;
  const detailsProduct = () => {
    console.log(id);
  };
  return (
    <div className="m-2 shadow-lg rounded-lg">
      <img className="p-3 h-[220px] mx-auto " src={img} alt="" />

      <h2 className="text-lg px-4 py-2 font-semibold">{name}</h2>
    </div>
  );
};

export default Homecart;
