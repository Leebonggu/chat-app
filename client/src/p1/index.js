import React, { useState, useEffect }from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import socketIO from 'socket.io-client';
import queryString from 'query-string';
import Description from './component/description';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

let socket;

const P1 = (props) => {
  const history = useHistory();
  const [ text, setText] = useState('');
  const [ messages, setMessages] = useState([]);
  const [ username, setUsername] = useState('');
  const [ roomname, setRoomname] = useState('');
  const [currentUserExist, setCurrentUserExist] = useState(false);
  const ENDPOINT = 'http://localhost:4000/chat';
  
  useEffect(() => {
    const {
      username: currentUsername,
      roomname: currentRoomname,
    } = queryString.parse(props.location.search);
    
    socket = socketIO(ENDPOINT);
   
    setUsername(currentUsername);
    setRoomname(currentRoomname);
    // setRoomname(currentRoomname);

    socket.emit('join', { username: currentUsername, roomname: currentRoomname });
    socket.on('dialogInitialize', (data) => {
      setMessages([...data]);
    });

    return () => {
      socket.emit('exit');
      // socket.emit('disconnect');
      socket.off();
    }
  },[ENDPOINT])

  useEffect(() => {
    socket.on('input', (data) => {
      console.log(userExist);
      const { username, msg: newText, userExist } = data;
      if (userExist) {
        setCurrentUserExist(userExist);
      }
      setMessages([...messages, {  username, msg: newText }]);
    });

  }, [messages])

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 메세지 보내주기
    // emit => 보냄
    // on => 받음
    socket.emit('sendMessage', { username, roomname, text });
    setText('');
  };

  const handleExit = (e) => {
    e.preventDefault();
    if (username !== 'admin') {
      socket.emit('exit', { username, roomname });
      socket.off();
      history.push('/');
      history.go();
    } else {
      history.push('/관리자?username=admin');
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    socket.emit('save', { username, roomname });
    socket.on('saveSuccess', (data) => {
      const { success } = data;
      window.alert(success);
      history.push('/관리자?username=admin');
    });
  };

  const handleDeleteMessages = (e) => {
    e.preventDefault();
    socket.emit('deleteMessages', { roomname });
    socket.on('deleteResponse', (data) => {
      const { fail, success } = data;
      if (fail) {
        window.alert(fail);
      } else {
        window.alert(success);
        history.push('/관리자?username=admin');
      }
    });
  };

  return (
    <Container>
      <Description />
      <span>
        <button 
          style={{ background: 'red', color: 'white' }}
          onClick={handleExit}
          type="submit"
        >나가기</button>
        {(username === 'admin' && currentUserExist) && (
          <button
            type="submit"
            style={{ background: 'green', color: 'white' }}
            onClick={handleSave}>대화저장</button>
        )}
        {(username === 'admin' && currentUserExist) && (
          <button
            type="submit"
            style={{ background: 'black', color: 'white' }}
            onClick={handleDeleteMessages}>대화삭제</button>
        )}
      </span>
      <input type="text" value={text} onChange={handleText} />
      <button type="submit" onClick={handleSubmit}>입력</button>
      <div style={{ marginTop: '1rem' }}>
        {messages.length !== 0 && messages.map(({ msg, username: currentUsername }, index) => {
          console.log()
          return (
            <div key={`${msg}-${index + 2}`}>{currentUsername} {msg}</div>
          );
        })}
      </div>
    </Container>
  );
};

export default P1;
