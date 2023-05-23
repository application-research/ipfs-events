import styles from '@components/NavbarLogoMiddle.module.scss';
import GutterContainer from './GutterContainer';
import Link from './Link';

export default function NavbarLogoMiddle({ navContent }) {
  return (
    <GutterContainer>
      <div className={`${styles.container} ${styles.navbar}`}>
        <div className={styles.container}>
          <Link style="animated" href="/ipfs-thing">
            <p>IPFS Thing</p>
          </Link>
          <Link href="https://2022.ipfs.camp/" style="animated">
            <p>IPFS Camp</p>
          </Link>
          <Link href="https://www.youtube.com/watch?v=FII_9VTgDy8" style="animated">
            <p>IPFS Friends + Cafe</p>
          </Link>
        </div>
        <img src="/media/colored-logo.png" className={styles.logo} />

        <div className={styles.container}>
          <Link href="https://twitter.com/IPFS?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" style="animated">
            <p>Scholars</p>
          </Link>
          <Link href="https://docs.ipfs.tech/community/contribute/ways-to-contribute/" style="animated">
            <p>Get Involved</p>
          </Link>
          <Link href="https://blog.ipfs.tech/2023-01-ipfs-community-calendar/" style="animated">
            <p>Calendar</p>
          </Link>
        </div>
      </div>
    </GutterContainer>
  );
}
