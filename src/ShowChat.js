function ShowChat({data, setChatBtn}) {
  let [text, setText] = useState('');
  let [chat, setChat] = useState([]);

  const handleChatInput = (e) => {
    setText(e.target.value);
  };

  const handleSubmitBtn = () => {
    let copyChat = [...chat];
    if(text != '') {
      copyChat.push(text);
      setChat(copyChat);
      setText('');
    }
  }

  return(
    <section className={cn(style.absolute)}>
      <article className={cn(style.chatContainer)}>
        <header className={cn(style.header)}>
          <div className={cn(style.imgContainer)}>
            <img src={data.img} alt="상품 이미지" />
          </div>
          
          <div className={cn(style.itemInfo)}>
            <h2>{data.title}</h2>
            <strong>{data.author}</strong>
          </div>
          
          <button type="button" className={cn(style.closeBtn)} onClick={() => {setChatBtn(false)}}>
            <img src="/public-assets/apply-content/close.png" alt="close button" />
          </button>
        </header>

        <article className={cn(style.chatList)}>
          <div className={cn(style.dateContainer)}>
            <span className={cn(style.date)}>
              <Clock format={'YYYY-MM-DD'} ticking={false} timezone={"Asia/Seoul"} />
            </span>
          </div>
          
          <section className={cn(style.myChat)}>
          {
            <ShowChatList chatList={chat} />
          }
          </section>
        </article>
        
        <div className={cn(style.sendContainer)}>
          <input type="text" value={text} className={cn(style.inputStyle)} onChange={handleChatInput} placeholder="내용입력" />
          
          <button type="button" onClick={handleSubmitBtn} className={cn(style.sendBtn)}>
            <img src="/public-assets/one-content/share.png" alt="share button" />
          </button>
        </div>
      </article>
    </section>
  );
}


function ShowChatList({chatList}) {
  return (
    chatList.map((chat, i) => {
      return(
        <div key={i}>
          <article className={cn(style.chatBox)}>
            <p className={cn(style.myMsg)}>{chat}</p>
            <span className={cn(style.chatTime)}>
              <Clock format={'A HH:mm'} ticking={false} timezone={"Asia/Seoul"} />
            </span>
          </article>
        </div>
      );
    })
  );
}