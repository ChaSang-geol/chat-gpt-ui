// selector.js
import { selector } from 'recoil';
import { countState, inputState } from './Atoms';

const countStateSelector = selector({
  key: 'CountState',

  get: ({ get }) => {
    const inputVal = get(inputState);
    const count = get(countState);

    // return `추가된 카운트는 ${inputVal}이고, 현재 카운트는 ${count}입니다.`;
    return (
      <li className="clearfix">
        <div className="message-data text-right">
          <span className="message-data-time">{inputVal}</span>
          <img src="/static/img/avatar/avatar7.png" alt="avatar" />
        </div>
        <div className="message other-message float-right">{count}</div>
      </li>
    )
  },
});

export default countStateSelector;