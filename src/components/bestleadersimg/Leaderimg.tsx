import React from "react";

interface Props {
  image: string;
}
const Leaderimg = (props: Props) => {
  return <img alt="profile" src={props.image} />;
};
export default Leaderimg;
