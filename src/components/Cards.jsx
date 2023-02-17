import Card from "./Card";
import { data } from "../utils/data";
import styles from "./Cards.module.scss";

const Cards = () => {
  return (
    <>
      <h1>Photo Gallery</h1>
      <div className={styles.container}>
        {data.map((item, index) => {
          return <Card key={index} {...item} />;
        })}
      </div>
    </>
  );
};

export default Cards;
