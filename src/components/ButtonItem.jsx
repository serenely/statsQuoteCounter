import s from './index.module.scss'

export const ButtonItem = ({title, clickHandler}) => {
  return (
    <>
      <button className={s.link} onClick={clickHandler}>{title}</button>
    </>
  )
}