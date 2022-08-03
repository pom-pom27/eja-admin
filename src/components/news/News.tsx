import styles from "./news.module.scss";
interface INews {}

const data = [
  {
    title: "Nihil blanditiis at in nihil autem",
    description:
      "Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum",
  },
  {
    title: "Nihil blanditiis at in nihil autem",
    description:
      "Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum",
  },
  {
    title: "Nihil blanditiis at in nihil autem",
    description:
      "Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum",
  },
  {
    title: "Nihil blanditiis at in nihil autem",
    description:
      "Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum",
  },
  {
    title: "Nihil blanditiis at in nihil autem",
    description:
      "Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum",
  },
];

const News = ({}: INews) => {
  return (
    <div className={styles.news}>
      {data.map((datum) => (
        <div className={styles.name}>Name</div>
      ))}
    </div>
  );
};

export default News;
