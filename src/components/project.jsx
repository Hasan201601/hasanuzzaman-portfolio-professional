import { Link } from "react-router-dom";

const Product = (props) => {
  const { item } = props;
  console.log(item)
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <Link to={`/projects/${item.id}`}>
        <img src={item.img1} alt="" className="p-img" />
      </Link>
    </div>
  );
};

export default Product;
