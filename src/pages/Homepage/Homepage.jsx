import { useState } from 'react';
import { ButtonItem } from '../../components/ButtonItem.jsx';
import s from './index.module.scss';
import { Start } from '../../components/Start/Start.jsx';
import { Stats } from '../../components/Statistic/Stats.jsx';

export const Homepage = () => {
  const [isOpenStart, setIsOpenStart] = useState(false)
  const [isOpenStats, setIsOpenStats] = useState(false)

  const ButtonTogleHandler = () => {
    return setIsOpenStart(!isOpenStart)
  }

  const ButtonToogleHandler = () => {
    return setIsOpenStats(!isOpenStats)
  }

  const StartTitle = 'Start'
  const StatsTitle = 'Stats'

  return (
    <div className={s.container}>
      <div className={s.container__item}>
      <ButtonItem title={StartTitle} clickHandler={ButtonTogleHandler}/>
      {isOpenStart && (
      <div className={s.container__content}>
          <Start/>
      </div>)}
      </div>
      <div className={s.container__item}>
      <ButtonItem title={StatsTitle} clickHandler={ButtonToogleHandler} />
      {isOpenStats && (
      <div className={s.container__content}>
        <Stats/>
      </div>

      )}
     </div>
    </div>
  );
};
