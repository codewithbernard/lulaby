import io from 'socket.io-client';
const host = process.env.PORT ? "https://lulaby.herokuapp.com/" : 'http://localhost:5000';
export default io(host);
