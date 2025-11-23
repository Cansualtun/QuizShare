import { useParams } from "react-router";

const Detail = () => {
  const { slug } = useParams();
  return <div>{slug}</div>;
};

export default Detail;
