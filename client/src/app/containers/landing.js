import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const ENDPOINT = "http://localhost:8080";

const Landing = () => {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.on('FromAPI', (data) => {
      setResponse(data);
    });
  }, []);

  return (
    <p>
      It&apos;s <time dateTime={response}>{response}</time>
    </p>
  );
}

export default Landing;