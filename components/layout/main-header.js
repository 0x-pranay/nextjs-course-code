import Link from 'next/link';
import classes from './main-header.module.css';

export default function MainHeader(props) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href='/events'>Browser all events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
