import styles from "@/app/page.module.css";
type Props = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
