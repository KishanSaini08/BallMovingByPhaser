import React, { useEffect, useRef } from 'react';
import Phaser from "phaser";
import './App.css';

function App() {
  const gameInitialized = useRef(false);
  let ball;

  useEffect(() => {
    if (!gameInitialized.current) {
      let GameScene = new Phaser.Scene('Game');

      GameScene.preload = function () {
        this.load.image('background', '/assets/background.jpg');
        this.load.image('ball', '/assets/ball.png');
      };


       GameScene.create = function () {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;
        const backgroundImage = this.add.image(width / 2, height / 2, 'background');
        // Scale the background image to fill the entire canvas
        backgroundImage.displayWidth = width;
        backgroundImage.displayHeight = height;
        
        ball = this.matter.add.sprite(400, 514, 'ball');
        let body = ball.body;
        this.matter.body.setInertia(body, Infinity);
        ball.setScale(0.1);
        ball.setVelocity(10, 10);
        ball.setFriction(0, 0);
        ball.setBounce(1);
      };

    //   GameScene.create = function () {
    //     this.add.image(400,300 , 'background');
    //     ball = this.matter.add.sprite(400, 514, 'ball');
    //     let body = ball.body;
    //     this.matter.body.setInertia(body, Infinity);
    //     ball.setScale(0.1);
    //     ball.setVelocity(10, 10);
    //     ball.setFriction(0, 0);
    //     ball.setBounce(1);
    //   };

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
      };

      new Phaser.Game(config);
      gameInitialized.current = true;
    }
  }, []);

  const handleButtonClick = (x, y) => {
    if (ball) {
      ballTween(x, y);
    }
  };

  const ballTween = (x, y) => {
    const scene = ball.scene;
    const distance = Phaser.Math.Distance.Between(ball.x, ball.y, x, y);
    const duration = distance / 550 * 500; 
  
    scene.tweens.add({
      targets: ball,
      x: x,
      y: y,
      duration: duration,
      ease: 'Linear',
      onComplete: () => {
        ball.setVelocity(10, 10);
      }
    });
  
  };
  return (
    <div className='main'>
    <div className="canvas"></div>
    <div className="left">
      <button onClick={() => handleButtonClick(0,200)}>1</button>
      <button onClick={() => handleButtonClick(0,400)}>2</button>
    </div>
    <div className="top">
      <button onClick={() => handleButtonClick(200,0)}>3</button>
      <button onClick={() => handleButtonClick(600,0)}>4</button>
    </div>
    <div className="right">
      <button onClick={() => handleButtonClick(800,200)}>5</button>
      <button onClick={() => handleButtonClick(800,400)}>6</button>
    </div>
    <div className="bottom">
      <button onClick={() => handleButtonClick(200,600)}>7</button>
      <button onClick={() => handleButtonClick( 600,600)}>8</button>
    </div>
  </div>
  )
}

export default App;