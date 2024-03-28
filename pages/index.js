import styles from "@/styles/Home.module.css";
// you can change the name of the page (e.g. ParentOne renamed to ParentToChild but make sure the filepath is the same)
import ParentToChild from "./ParentOne";
import ChildToParent from "./ParentTwo";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <ParentToChild/>
        <ChildToParent/>
      </main>
    </>
  );
}
