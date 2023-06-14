import './App.css';
import { RecoilRoot } from 'recoil';
import Counter from './Counter';

function App() {
  return (
    <RecoilRoot>
      <div className="container">
        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="card chat-app">
            <div className="chat">

            <Counter />
            </div>
            </div>
          </div>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;