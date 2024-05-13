import { io } from 'socket.io-client';

let socket = io("https://phaser2backend-p1ve.onrender.com")
// let socket = io("http://localhost:3000")
export default socket
