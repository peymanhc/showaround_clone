import { makeStyles } from "@material-ui/styles";
import Brands from "./Brands";
import NewUsers from "./NewUsers";
import Post from "./Post";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadingCards } from "../../store/actions/cards";
import Spinner from "../Spinner/Spinner";

const useStyles = makeStyles({
  title: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 20,
  },
  imgprofile: {
    borderRadius: "50%",
    width: 60,
    height: 60,
    objectFit: "cover",
  },
  decription: {
    maxHeight: 45,
    fontSize: 12,
    color: "rgba(0,0,0,0.4)",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
  checked: {
    color: "orange",
  },
});
interface Props {}
const BlogArchive = (props: Props) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const Cardsdata = useSelector((state: any) => state.card);
  useEffect(() => {
    dispatch(loadingCards());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let lastUser = Cardsdata.data?.length - 3;
  // Cardsdata.data?.slice(lastUser)
  return (
    <div className="mt-5 p-4">
      <h2 className={styles.title}>Recently booked locals</h2>
      {Cardsdata.loading ? (
        <Spinner />
      ) : Cardsdata.error !== null ? (
        <h6 className="text-center mb-5">ERROR...</h6>
      ) : (
        Cardsdata.data
          ?.slice(lastUser)
          .map((item: any) => (
            <NewUsers name={item.name} text={item.text} image={item.image[0]} star={item.star} />
          ))
      )}
      <div className="d-flex justify-content-between">
        <Brands bgcolor="#0075bb" icon="fa fa-facebook" />
        <Brands bgcolor="#f1255e" icon="fa fa-instagram" />
        <Brands bgcolor="#02c9ff" icon="fa fa-twitter" />
        <Brands bgcolor="#cf3427" icon="fa fa-youtube" />
        <Brands bgcolor="#63b4e4" icon="fa fa-telegram" />
      </div>
      <h2 className={`${styles.title} mt-4`}>New Posts</h2>
      <Post />
      <Post />
    </div>
  );
};

export default BlogArchive;
