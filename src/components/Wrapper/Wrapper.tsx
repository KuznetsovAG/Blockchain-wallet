import React, { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { github } from '../../assets/icons';
import { Header } from './components';
import styles from './Wrapper.module.scss';

export const Wrapper: FC = () => {
  const currentPath = useLocation().pathname;
  const pageName = currentPath === '/' ? 'Портфель' : 'Конвертер';

  return (
    <div className={styles.page}>
      <header className={styles.page__header}>
        <Header />
      </header>

      <main className={styles.page__content}>
        <p className={styles.page__name}>{pageName}</p>
        <Outlet />
      </main>

      <footer>
        <div>
          <p>Проект крипто-кошелька с подгрузкой данных онлайн.</p>
          <p>
            В проекте использовались TypeScript, React, React-Router, Custom Hooks, Redux, SCSS,
            Axios.
          </p>
          <p>
            Provided by{' '}
            <a href="https://minerstat.com/" target="_blank">
              minerstat
            </a>
            ,{' '}
            <a href="https://www.coinapi.io/" target="_blank">
              coinapi.io
            </a>{' '}
            .
          </p>
        </div>

        <div className={styles.page__links}>
          <a href="https://github.com/KuznetsovAG" target="_blank">
            <img src={github} alt="Icon to my GitHub" />
          </a>
        </div>
      </footer>
    </div>
  );
};
