import styles from "./Card.module.scss";

const Card = ({ photographer, src }) => {
  return (
    <div className={styles.card}>
      <h2>{photographer} </h2>
      <div className={styles.img}>
        <img src={src.large} alt="" />
      </div>
    </div>
  );
};

export default Card;
