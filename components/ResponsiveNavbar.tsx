import styles from '@components/ResponsiveNavbar.module.scss';
import Image from './Image';
import GutterContainer from './GutterContainer';
import Link from './Link';

export default function ResponsiveNavbar({ navContent }) {
  let { logo, navItems } = navContent;
  return (
    <nav className={styles.navbar}>
      <GutterContainer>
        <div className={styles.container}>
          <div className={styles.logo}>
            {/* <Image image={logo} layout="fill" /> */}
            <img src={logo.src} className={styles.logo} />
          </div>
          <div className={styles.container}>
            {navItems && (
              <ul className={styles.list} style={{ paddingRight: '2rem' }}>
                {navItems.map((navItem, index) => {
                  return (
                    <li className={styles.listItem} key={index}>
                      <Link style="animated" href={navItem.href}>
                        {navItem.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}{' '}
            <button className={styles.button}>Get Tickets</button>
          </div>
        </div>
      </GutterContainer>
    </nav>
  );
}
