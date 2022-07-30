import { MoreVertRounded, ShoppingCartOutlined } from "@mui/icons-material";
import { ReactNode } from "react";
import styles from "./card.module.scss";

type TTime = "Today" | "This Month" | "This Year";

type IconColor = { bg: string; icon: string };

export const blueIcon: IconColor = { bg: "#f6f6fe", icon: "#4154f1" };
export const greenIcon: IconColor = { bg: "#e0f8e9", icon: "#2eca6a" };
export const orangeIcon: IconColor = { bg: "#ffecdf", icon: "#ff771d" };

interface ICard {
  title: string;
  time?: TTime;
  value?: string;
  children?: ReactNode;
  iconColor?: IconColor;
}

const Card = ({
  title,
  time = "Today",
  value,
  iconColor = blueIcon,
  children,
}: ICard) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.title}>{title}</div>
          <span> | </span>
          <div className={styles.subtitle}>{time}</div>
        </div>
        <div className={styles.right}>
          <MoreVertRounded fontSize="inherit" />
        </div>
      </div>
      <div className={styles.body}>
        {children ? (
          children
        ) : (
          <div className={styles.data}>
            <div
              style={{ backgroundColor: iconColor.bg, color: iconColor.icon }}
              className={styles.icon}
            >
              <ShoppingCartOutlined fontSize="inherit" color="inherit" />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>{value}</div>
              <div className={styles.subtitle}>
                <span>12%</span> increase
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
