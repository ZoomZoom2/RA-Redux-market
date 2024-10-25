import React from 'react';
import Market from './components/Market';

function App() {
  return (
    <div className={'wrapper'}>
      <header className={'header'} id={'header'}>
        <div className={'header__body _container'}>
          <h2 className={'header__title'}>Домашнее задание «Redux»</h2>
        </div>
      </header>

      <main className={'main'}>
        <div className={'main__item task _container'} id={'task3'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>Маркет (Каталог)*</h3>
          </header>
          <div className={'task__body task__body_task3'}>
            <Market />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
