import './App.css'
import { Homepage } from './pages/Homepage/Homepage';
import { WebSocketProvider } from './provider/useWebSocketProvider';

function App() {
  return (
    <WebSocketProvider url={'wss://trade.termplat.com:8800/?password=1234'}>
        <div className="App">
          <Homepage/>
        </div>
    </WebSocketProvider>


  );
}

export default App;
