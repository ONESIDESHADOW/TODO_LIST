import styles from "../components/Netflix.Module.css";
import styled from "styled-components";

export const SeriesCard = ({ data }) => {
  const { _id, name, img_url, rating, description, genre, cast, watch_url } =
    data;

  // const btn_style = {

  //   padding: " 1.2rem",
  //   border: "none",
  //   fontSize: "1.6rem",
  //   backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //   color: "var(--heading-color)",
  //   fontWeight: "bold",
  //   cursor: "pointer",

  // };

  const ButtonThapa = styled.button({
    padding: " 1.2rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color: "var(--heading-color)",
    fontWeight: "bold",
    cursor: "pointer",
  });

  const Rating = styled.h3`
    font-size: 1.6rem;
    color: #7dcea0;
    text-tramsform: capitalize;
  `;

  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} alt="" width="40%" height="40%" />
      </div>
      {/* <div className={styles["card-content"]}> */}
      <div className="flex flex-col gap-6 py-[3.2rem] px-[1.2rem] p">
        <h2>Name: {name}</h2>
        <Rating>
          Rating:
          <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
        </Rating>
        <p className="text-3xl font-bold underline"> Summary: {description} </p>
        <p>Genre: {genre.join(",")}</p>
        <p>Cast: {cast.join(",")}</p>
        <a href={watch_url} target="_blank">
          {/* <button style={btn_style}>Watch Now</button> */}
          <ButtonThapa>Watch Now</ButtonThapa>
        </a>
      </div>
    </li>
  );
};
