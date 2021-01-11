import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../images/logo.png";
import Blogpost from "../../components/blogPost/Blogpost";
import BlogArchive from "../../components/blogArchive/BlogArchive";
import { useDispatch, useSelector } from "react-redux";
import { loadingCards } from "../../store/actions/blogpost";
import Spinner from "../../components/Spinner/Spinner";

const useStyles = makeStyles({
  head: {
    width: "100%",
    minHeight: 70,
    background: "#bdc1ad",
  },
  headtext: {
    display: "flex",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    fontSize: 25,
  },
});

interface Props {}

const Blog = (props: Props) => {
  const dispatch = useDispatch();
  const BlogPost = useSelector((state: any) => state.BlogPosts);

  useEffect(() => {
    dispatch(loadingCards());
    window.scroll(0,0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const styles = useStyles();
  return (
    <>
      <div className={styles.head}>
        <Container className={styles.headtext}>
          <p className="mb-0">
            The ultimate source for travel inspiration and insider tips by
            locals
          </p>
          <img className="mt-2" alt="logo" src={logo} />
        </Container>
      </div>
      <Container>
        <Row>
          <Col className="mt-5" md="8">
            {BlogPost.loading ? (
              <Spinner />
            ) : BlogPost.error !== null ? (
              <h6 className="text-center mb-5">ERROR...</h6>
            ) : (
              <>
                {BlogPost?.data?.map((item: any) => (
                  <Blogpost
                    img={item.img}
                    title={item.title}
                    text={item.text}
                    telegram={item.telegram}
                    instagram={item.instagram}
                  />
                ))}
              </>
            )}
          </Col>
          <Col md="4">
            <BlogArchive />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Blog;
