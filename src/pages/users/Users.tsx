import styles from "./users.module.scss";
interface IUsers {}

const Users = ({}: IUsers) => {
  return <div className={styles.users}>Users</div>;
};

export default Users;
