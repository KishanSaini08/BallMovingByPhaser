// // // import React, { useEffect, useRef } from 'react';
// // // import Phaser from "phaser";
// // // import './App.css';

// // // function App() {
// // //   const gameInitialized = useRef(false);
// // //   let ball;

// // //   useEffect(() => {
// // //     if (!gameInitialized.current) {
// // //       let GameScene = new Phaser.Scene('Game');

// // //       GameScene.preload = function () {
// // //         this.load.image('background', '/assets/background.jpg');
// // //         this.load.image('ball', '/assets/ball.png');
// // //       };


// // //        GameScene.create = function () {
// // //         const width = this.cameras.main.width;
// // //         const height = this.cameras.main.height;
// // //         const backgroundImage = this.add.image(width / 2, height / 2, 'background');
// // //         // Scale the background image to fill the entire canvas
// // //         backgroundImage.displayWidth = width;
// // //         backgroundImage.displayHeight = height;
        
// // //         ball = this.matter.add.sprite(400, 514, 'ball');
// // //         let body = ball.body;
// // //         this.matter.body.setInertia(body, Infinity);
// // //         ball.setScale(0.1);
// // //         ball.setVelocity(10, 10);
// // //         ball.setFriction(0, 0);
// // //         ball.setBounce(1);
// // //       };

// // //     //   GameScene.create = function () {
// // //     //     this.add.image(400,300 , 'background');
// // //     //     ball = this.matter.add.sprite(400, 514, 'ball');
// // //     //     let body = ball.body;
// // //     //     this.matter.body.setInertia(body, Infinity);
// // //     //     ball.setScale(0.1);
// // //     //     ball.setVelocity(10, 10);a
// // //     //     ball.setFriction(0, 0);
// // //     //     ball.setBounce(1);
// // //     //   };

// // //       let config = {
// // //         type: Phaser.AUTO,
// // //         width: 800,
// // //         height: 600,
// // //         physics: {
// // //           default: 'matter',
// // //           matter: {
// // //             gravity: { y: 0 },
// // //             setBounds: true,
// // //             debug: false,
// // //           },
// // //         },
// // //         scene: GameScene,
// // //       };

// // //       new Phaser.Game(config);
// // //       gameInitialized.current = true;
// // //     }
// // //   }, []);

// // //   const handleButtonClick = (x, y) => {
// // //     if (ball) {
// // //       ballTween(x, y);
// // //     }
// // //   };

// // //   const ballTween = (x, y) => {
// // //     const scene = ball.scene;
// // //     const distance = Phaser.Math.Distance.Between(ball.x, ball.y, x, y);
// // //     const duration = distance / 550 * 500; 
  
// // //     scene.tweens.add({
// // //       targets: ball,
// // //       x: x,
// // //       y: y,
// // //       duration: duration,
// // //       ease: 'Linear',
// // //       onComplete: () => {
// // //         ball.setVelocity(10, 10);
// // //       }
// // //     });
  
// // //   };
// // //   return (
// // //     <div className='main'>
// // //     <div className="canvas"></div>
// // //     <div className="left">
// // //       <button onClick={() => handleButtonClick(0,200)}>1</button>
// // //       <button onClick={() => handleButtonClick(0,400)}>2</button>
// // //     </div>
// // //     <div className="top">
// // //       <button onClick={() => handleButtonClick(200,0)}>3</button>
// // //       <button onClick={() => handleButtonClick(600,0)}>4</button>
// // //     </div>
// // //     <div className="right">
// // //       <button onClick={() => handleButtonClick(800,200)}>5</button>
// // //       <button onClick={() => handleButtonClick(800,400)}>6</button>
// // //     </div>
// // //     <div className="bottom">
// // //       <button onClick={() => handleButtonClick(200,600)}>7</button>
// // //       <button onClick={() => handleButtonClick( 600,600)}>8</button>
// // //     </div>
// // //   </div>
// // //   )
// // // }

// // // export default App;


// // import React, { useEffect, useRef } from 'react';
// // import Phaser from "phaser";
// // import './App.css';

// // function App() {
// //   const gameInitialized = useRef(false);
// //   let ball;

// //   useEffect(() => {
// //     if (!gameInitialized.current) {
// //       let GameScene = new Phaser.Scene('Game');

// //       GameScene.preload = function () {
// //         this.load.image('background', '/assets/background.jpg');
// //         this.load.image('ball', '/assets/ball.png');
// //       };

// //       GameScene.create = function () {
// //         const width = this.cameras.main.width;
// //         const height = this.cameras.main.height;
// //         const backgroundImage = this.add.image(width / 2, height / 2, 'background');
// //         // Scale the background image to fill the entire canvas
// //         backgroundImage.displayWidth = width;
// //         backgroundImage.displayHeight = height;

// //         // Initialize ball position from localStorage or default
// //         const storedPosition = JSON.parse(localStorage.getItem('ballPosition'));
// //         const initialX = storedPosition ? storedPosition.x : 400;
// //         const initialY = storedPosition ? storedPosition.y : 514;

// //         ball = this.matter.add.sprite(initialX, initialY, 'ball');
// //         let body = ball.body;
// //         this.matter.body.setInertia(body, Infinity);
// //         ball.setScale(0.1);
// //         ball.setVelocity(10, 10);
// //         ball.setFriction(0, 0);
// //         ball.setBounce(1);
// //       };

// //       let config = {
// //         type: Phaser.AUTO,
// //         width: 800,
// //         height: 600,
// //         physics: {
// //           default: 'matter',
// //           matter: {
// //             gravity: { y: 0 },
// //             setBounds: true,
// //             debug: false,
// //           },
// //         },
// //         scene: GameScene,
// //       };

// //       new Phaser.Game(config);
// //       gameInitialized.current = true;
// //     }
// //   }, []);

// //   const handleButtonClick = (x, y) => {
// //     if (ball) {
// //       ballTween(x, y);
// //     }
// //   };

// //   const ballTween = (x, y) => {
// //     const scene = ball.scene;
// //     const distance = Phaser.Math.Distance.Between(ball.x, ball.y, x, y);
// //     const duration = distance / 550 * 500;

// //     scene.tweens.add({
// //       targets: ball,
// //       x: x,
// //       y: y,
// //       duration: duration,
// //       ease: 'Linear',
// //       onComplete: () => {
// //         ball.setVelocity(10, 10);
// //         // Store ball position in localStorage
// //         localStorage.setItem('ballPosition', JSON.stringify({ x: ball.x, y: ball.y }));
// //       }
// //     });

// //   };
// //   return (
// //     <div className='main'>
// //     <div className="canvas"></div>
// //     <div className="left">
// //       <button onClick={() => handleButtonClick(0,200)}>1</button>
// //       <button onClick={() => handleButtonClick(0,400)}>2</button>
// //     </div>
// //     <div className="top">
// //       <button onClick={() => handleButtonClick(200,0)}>3</button>
// //       <button onClick={() => handleButtonClick(600,0)}>4</button>
// //     </div>
// //     <div className="right">
// //       <button onClick={() => handleButtonClick(800,200)}>5</button>
// //       <button onClick={() => handleButtonClick(800,400)}>6</button>
// //     </div>
// //     <div className="bottom">
// //       <button onClick={() => handleButtonClick(200,600)}>7</button>
// //       <button onClick={() => handleButtonClick( 600,600)}>8</button>
// //     </div>
// //   </div>
// //   )
// // }

// // export default App;



// import React, { useEffect, useRef, useState } from 'react';
// import Phaser from "phaser";
// import io from 'socket.io-client';
// import './App.css';

// function App() {
//   const gameInitialized = useRef(false);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [socket, setSocket] = useState(null);
//   const [ball, setBall] = useState(null);

//   useEffect(() => {
//     const newSocket = io('http://localhost:3001'); // Change URL to your server address
//     setSocket(newSocket);

//     newSocket.on('connect', () => {
//       console.log('Connected to server');
//     });

//     newSocket.on('admin', () => {
//       setIsAdmin(true);
//     });

//     newSocket.on('user', () => {
//       setIsAdmin(false);
//     });

//     newSocket.on('ballMoved', ({ x, y }) => {
//       if (ball) {
//         ballTween(x, y);
//       }
//     });

//     newSocket.on('adminButtonClicked', ({ x, y }) => {
//       if (isAdmin && ball) {
//         ballTween(x, y);
//         newSocket.emit('ballMoved', { x, y });
//       }
//     });

//     return () => {
//       newSocket.disconnect();
//     };
//   }, [isAdmin, ball]);

//   useEffect(() => {
//     if (!gameInitialized.current && socket) {
//       let GameScene = new Phaser.Scene('Game');

//       GameScene.preload = function () {
//         this.load.image('background', '/assets/background.jpg');
//         this.load.image('ball', '/assets/ball.png');
//       };

//       GameScene.create = function () {
//         const width = this.cameras.main.width;
//         const height = this.cameras.main.height;
//         const backgroundImage = this.add.image(width / 2, height / 2, 'background');
//         // Scale the background image to fill the entire canvas
//         backgroundImage.displayWidth = width;
//         backgroundImage.displayHeight = height;

//         // Initialize ball position from localStorage or default
//         const storedPosition = JSON.parse(localStorage.getItem('ballPosition'));
//         const initialX = storedPosition ? storedPosition.x : 400;
//         const initialY = storedPosition ? storedPosition.y : 514;

//         const newBall = this.matter.add.sprite(initialX, initialY, 'ball');
//         let body = newBall.body;
//         this.matter.body.setInertia(body, Infinity);
//         newBall.setScale(0.1);
//         newBall.setVelocity(10, 10);
//         newBall.setFriction(0, 0);
//         newBall.setBounce(1);
//         setBall(newBall);
//       };

//       let config = {
//         type: Phaser.AUTO,
//         width: 800,
//         height: 600,
//         physics: {
//           default: 'matter',
//           matter: {
//             gravity: { y: 0 },
//             setBounds: true,
//             debug: false,
//           },
//         },
//         scene: GameScene,
//       };

//       new Phaser.Game(config);
//       gameInitialized.current = true;
//     }
//   }, [socket]);

//   const handleButtonClick = (x, y) => {
//     if (ball && socket) {
//       ballTween(x, y);
//       socket.emit('adminButtonClicked', { x, y });
//     }
//   };

//   const ballTween = (x, y) => {
//     const scene = ball.scene;
//     const distance = Phaser.Math.Distance.Between(ball.x, ball.y, x, y);
//     const duration = distance / 550 * 500;

//     scene.tweens.add({
//       targets: ball,
//       x: x,
//       y: y,
//       duration: duration,
//       ease: 'Linear',
//       onComplete: () => {
//         ball.setVelocity(10, 10);
//         // Store ball position in localStorage
//         localStorage.setItem('ballPosition', JSON.stringify({ x: ball.x, y: ball.y }));
//       }
//     });

//   };

//   return (
//     <div className='main'>
//       <div className="canvas"></div>
//       <div className="left">
//         <button onClick={() => handleButtonClick(0,200)}>1</button>
//         <button onClick={() => handleButtonClick(0,400)}>2</button>
//       </div>
//       <div className="top">
//         <button onClick={() => handleButtonClick(200,0)}>3</button>
//         <button onClick={() => handleButtonClick(600,0)}>4</button>
//       </div>
//       <div className="right">
//         <button onClick={() => handleButtonClick(800,200)}>5</button>
//         <button onClick={() => handleButtonClick(800,400)}>6</button>
//       </div>
//       <div className="bottom">
//         <button onClick={() => handleButtonClick(200,600)}>7</button>
//         <button onClick={() => handleButtonClick(600,600)}>8</button>
//       </div>
//     </div>
//   );
// }

// export default App;



import React, { useEffect, useRef, useState } from 'react';
import Phaser from "phaser";
import './App.css';
import socket from './socket';

function App() {
  const gameInitialized = useRef(false);
  const ballRef = useRef(null);
  
  const [check, setCheck] = useState("");
  const [data, setData] = useState([])

  useEffect(() => {
    if (!gameInitialized.current) {
      let GameScene = new Phaser.Scene('Game');

      GameScene.preload = function () {
        this.load.image('background', '/assets/background.jpg');
        this.load.image('ball', '/assets/ball.png');
      };

      GameScene.create = function () {
        this.add.image(400, 300, 'background');
        ballRef.current = this.matter.add.sprite(400, 514, 'ball');
        let body = ballRef.current.body;
        this.matter.body.setInertia(body, Infinity);
        ballRef.current.setScale(0.1);
        ballRef.current.setVelocity(10, 10);
        ballRef.current.setFriction(0, 0);
        ballRef.current.setBounce(1);
      };

      let config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
          default: 'matter',
          matter: {
            gravity: { y: 0 },
            setBounds: true,
            debug: false,
          },
        },
        scene: GameScene,
        disableVisibilityChange : true
      };
      new Phaser.Game(config);
      gameInitialized.current = true;
    }

  }, []);



  useEffect(() => {
    socket.on("connected", (arr) => {
      console.log(arr[0], socket.id)
      if (arr[0] === socket.id) {
        setCheck("admin")
      }
    })

  }, [])

  function changeBallState() {
    if (document.visibilityState === "hidden") {
      // Emit position and velocity when tab is hidden
      socket.emit("position", { x: ballRef.current.x, y: ballRef.current.y, vx: ballRef.current.body.velocity.x, vy: ballRef.current.body.velocity.y });
    }
    if (document.visibilityState === "visible") {
      // Listen for updates to position and velocity when tab is visible
      socket.on("newPos", (msg) => {
        if (msg !== null) {
          ballRef.current.setPosition(msg.x, msg.y);
          // If the velocity is zero, set a default velocity to prevent the ball from falling
          const vx = msg.vx !== 0 ? msg.vx : 10;
          const vy = msg.vy !== 0 ? msg.vy : 10;
          ballRef.current.setVelocity(vx, vy);
          ballTween(msg.x, msg.y);
        }
      })
    }
  }
  

  useEffect(() => {
    document.addEventListener("visibilitychange", changeBallState)

    socket.on("newPos", (msg) => {
      if (msg !== null) {
        ballRef.current.setPosition(msg.x, msg.y)
        ballTween(msg.x, msg.y);
      }
    })
    return () => {
      socket.off("newPos");
      document.removeEventListener('visibilitychange', changeBallState);
    };
  }, [])

  socket.on("newclick", ({x , y , btn})=>{
    ballTween(x ,y)
  })
  const handleButtonClick = (x, y, btn) => {
    socket.emit("click", btn)
    socket.emit("clickPos", {x, y})
    if (ballRef.current) {
      ballTween(x, y);
    }
  };

  const ballTween = (x, y) => {
    const scene = ballRef.current.scene;
    const distance = Phaser.Math.Distance.Between(ballRef.current.x, ballRef.current.y, x, y);
    const duration = distance / 550 * 500;

    scene.tweens.add({
      targets: ballRef.current,
      x: x,
      y: y,
      duration: duration,
      ease: 'Linear',
      onComplete: () => {
        ballRef.current.setVelocity(10, 10);
      },
    });
  };

  socket.on("btnClicks", (btn) => {
    setData([...data, btn])
  })
  return (
    <div className='main'>
      {check === "admin" && <div className="admin"><h2>Admin</h2></div>}
      {check === "" && <div className="user">
        <h2>User</h2>
        <ul>
          {data.map((item, index) => {
            return <li key={index}>Admin Clicked on {item}</li>
          })}
        </ul>
      </div>}

      <div className="canvas"></div>
      <div className="left">
        <button onClick={() => handleButtonClick(0, 200, 1)}  disabled = {check !== "admin"}>Button 1</button>
        <button onClick={() => handleButtonClick(0, 400, 2)}  disabled = {check !== "admin"}>Button 2</button>
      </div>
      <div className="top">
        <button onClick={() => handleButtonClick(200, 0, 3)}  disabled = {check !== "admin"}>Button 3</button>
        <button onClick={() => handleButtonClick(600, 0, 4)}  disabled = {check !== "admin"}>Button 4</button>
      </div>
      <div className="right">
        <button onClick={() => handleButtonClick(800, 200, 5)}  disabled = {check !== "admin"}>Button 5</button>
        <button onClick={() => handleButtonClick(800, 400, 6)}  disabled = {check !== "admin"}>Button 6</button>
      </div>
      <div className="bottom">
        <button onClick={() => handleButtonClick(200, 600, 7)}  disabled = {check !== "admin"}>Button 7</button>
        <button onClick={() => handleButtonClick(600, 600, 8)}  disabled = {check !== "admin"}>Button 8</button>
      </div>
    </div>
  )
}

export default App;