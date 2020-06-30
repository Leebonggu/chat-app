import React, { useState, useEffect }from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import socketIO from 'socket.io-client';
import queryString from 'query-string';
import Description from './component/description';


const StyledSpan = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 1rem;
  color: lightblue;
  &:hover {
    color: darkblue;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

let socket;

const Admin = () => {
  const [ unfisnihsedAnswerRoomlist, setUnfisnihsedAnswerRoomlist] = useState([]);
  const [ finishedAnswerRoomlist, setFinishedAnswerRoomlist] = useState([]);
  const ENDPOINT = 'http://localhost:4000/chat';

  const tab = (route, i) => {

    return (
      <StyledSpan 
        onClick={() => handleJoin(route)}
        key={`link-${i}`} to={{
        pathname:`/입장`,
        search: `?username=admin&roomname=${route}`,
      }}>
        {route.toUpperCase()}
      </StyledSpan>
    );
  };
  
  
  useEffect(() => {
    socket = socketIO(ENDPOINT);
    socket.on('initialize', ({ rooms, rooms2 }) => {
      setUnfisnihsedAnswerRoomlist(rooms);
    });

    return () => {
      socket.emit('adminExit', { username: 'admin'});
      socket.off();
    }
  },[ENDPOINT])

  const handleJoin = (route) => {
    socket.emit('join', { username: route });
  }
  
  useEffect(() => {
    axios.get('http://localhost:4000/roomlist')
      .then(({data}) => {
        setRoomlist(data);
      })
  }, []);
  
  return (
    <Container>
      {unfisnihsedAnswerRoomlist.map(({ name }, i) => tab(name, i))}
      {/* {finishedAnswerRoomlist.map((name, i) => tab(name, i))} */}
    </Container>
  );
};

export default Admin;
