import styles from "./skeleton.module.css";

export default function Skeleton() {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonBox}></div>
      <div className={styles.skeletonBox}></div>
      <div className={styles.skeletonBox}></div>
    </div>
  );
}
