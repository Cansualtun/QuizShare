import { useParams } from "react-router";

const Detail = () => {
  const { slug } = useParams();
  console.log(slug)
  return <div>{slug}</div>;
};

export default Detail;
