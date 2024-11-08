import { useWebSocketContext } from '../../provider/useWebSocketProvider';
import s from './index.module.scss';

export const Start = () => {
  const { quotes, isConnected } = useWebSocketContext();

  return (
    <div className={s.container}>
       
      <h2>Котировки</h2>
      {isConnected ? (
        <ul>
          {quotes.slice(-10).map((quote, index) => (
            <li key={index}>ID: {quote.id}, Value: {quote.value}</li>
          ))}
        </ul>
      ) : (
        <p>Подключение...</p>
      )}
      
    </div>
  );
};
