import io from 'socket.io-client';
const host = process.env.PORT ? `https://localhost:${process.env.PORT}` : 'http://localhost:5000';
export default io(host);
