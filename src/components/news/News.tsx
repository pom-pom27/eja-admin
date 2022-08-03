import styles from "./news.module.scss";
interface INews {}

const data = [
  {
    title: "Nihil blanditiis at in nihil autem",
    id: 1,
    description:
      "Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum",
  },
  {
    title: "Nihil blanditiis at in nihil autem",
    id: 2,
    description:
      "Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum",
  },
  {
    title: "Nihil blanditiis at in nihil autem",
    id: 3,
    description:
      "Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum",
  },
  {
    title: "Nihil blanditiis at in nihil autem",
    id: 4,
    description:
      "Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum",
  },
  {
    title: "Nihil blanditiis at in nihil autem",
    id: 5,
    description:
      "Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum",
  },
];

const News = ({}: INews) => {
  return (
    <div className={styles.news}>
      {data.map((news) => (
        <div key={news.id} className={styles["news-item"]}>
          <img
            src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/news-1.jpg"
            alt="news"
          />
          <div className={styles.text}>
            <h3>{news.title}</h3>
            <p>{news.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
