import io from 'socket.io-client';
const host = process.env.PORT ? `https://localhost:${process.env.PORT`
export default io(`http://localhost:${process.env.PORT || 5000}`);
