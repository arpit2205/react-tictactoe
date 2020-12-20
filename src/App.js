import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Row, Col, Button, Card } from 'reactstrap';
import './App.css';

import Icon from './components/icon.js';

const gameArray = new Array(9).fill('empty');

function App() {
  const [isCross, setIsCross] = useState(false);
  const [winnerMsg, setWinnerMsg] = useState('');

  const reloadGame = () => {
    setIsCross(false);
    setWinnerMsg('');
    gameArray.fill('empty', 0, 9);
  };

  const checkWinner = () => {
    if (
      gameArray[0] === gameArray[1] &&
      gameArray[0] === gameArray[2] &&
      gameArray[0] !== 'empty'
    ) {
      setWinnerMsg(`${gameArray[0]} wins`);
    }
    if (
      gameArray[3] === gameArray[4] &&
      gameArray[3] === gameArray[5] &&
      gameArray[3] !== 'empty'
    ) {
      setWinnerMsg(`${gameArray[3]} wins`);
    }
    if (
      gameArray[6] === gameArray[7] &&
      gameArray[6] === gameArray[8] &&
      gameArray[6] !== 'empty'
    ) {
      setWinnerMsg(`${gameArray[6]} wins`);
    }
    if (
      gameArray[0] === gameArray[4] &&
      gameArray[0] === gameArray[8] &&
      gameArray[0] !== 'empty'
    ) {
      setWinnerMsg(`${gameArray[0]} wins`);
    }
    if (
      gameArray[2] === gameArray[3] &&
      gameArray[2] === gameArray[7] &&
      gameArray[2] !== 'empty'
    ) {
      setWinnerMsg(`${gameArray[2]} wins`);
    }
  };

  const changeItem = (block) => {
    checkWinner();
    if (winnerMsg) {
      return toast(winnerMsg, { type: 'success' });
    }

    if (gameArray[block] === 'empty') {
      gameArray[block] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else {
      return toast('Block already filled!', { type: 'error' });
    }

    checkWinner();
  };

  return (
    <Container className="App p-5">
      <Row>
        <h1 className="mx-auto">TIC-TAC-TOE</h1>
      </Row>
      <Row>{winnerMsg ? <h2 className="mx-auto">{winnerMsg}</h2> : null}</Row>
      <Row className="mt-5">
        {gameArray.map((el, i) => {
          return (
            <Col xs={4} className="my-3">
              <Card className="mx-auto card" onClick={() => changeItem(i)}>
                <Icon name={el} />
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row>
        <Button
          className="btn-block p-4 m-3"
          color="primary"
          onClick={reloadGame}
        >
          RELOAD GAME
        </Button>
      </Row>
      <ToastContainer position="bottom-center" />
    </Container>
  );
}

export default App;
