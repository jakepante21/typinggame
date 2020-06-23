import React,{Fragment,useState,useEffect} from 'react';
import Navbar from "./components/layouts/NavBar";
import {generateWord} from "./components/words/Words";
import Game from "./components/body/Game";

const App = () =>{

    const [game,setGame] = useState({
        startGame : false,
        gameStarted : false,
        isLoaded : false,
        endGame : false,
        gameCountdown : false,
        gameWord : null,
        level : 1,
        matched : 0
    })

    const [score,setScore] = useState(0);

    useEffect(() => {
        if(game.startGame){
            let buttonDom = document.querySelector(".button-container");
            let cdCaption = document.querySelector(".countdown-caption-container");
            let cdSubCaption = document.querySelector(".countdown-subcaption-container");
            let cdContainer = document.querySelector(".countdown-container");
            buttonDom.classList.add("button-off");
            cdCaption.classList.add("countdown-on");
            cdSubCaption.classList.add("countdown-on");
            cdContainer.classList.add("countdown-on");
            setGame({...game,gameCountdown : true});
        }
    },[game.startGame])

    useEffect(() => {

    },[game.gameCountdown])

    useEffect(() => {
        if(game.gameStarted){
            if(game.level === 1){
                let word = generateWord(1);
                setGame({...game,gameWord : word});
            }else if(game.level === 2){
                let word = generateWord(2);
                setGame({...game,gameWord : word});
            }else if(game.level === 3){
                let word = generateWord(3);
                setGame({...game,gameWord : word});
            }else if(game.level === 4){
                let word = generateWord(4);
                setGame({...game,gameWord : word});
            }else if(game.level === 5){
                let word = generateWord(5);
                setGame({...game,gameWord : word});
            }else if(game.level === 6){
                let word = generateWord(6);
                setGame({...game,gameWord : word});
            }else{
                let word = generateWord(7);
                setGame({...game,gameWord : word});
            }
        }
    },[game.gameStarted])

    useEffect(() => {
        
        if(game.matched > 0){
            changeWord();
        }
            // setGame({...game,matched : false});
        
    },[game.matched])

    useEffect(() => {
        if(game.endGame){
            if(localStorage.getItem("HighestScore",score) !== null){
                localStorage.setItem("PreviousScore",score);
                let high = localStorage.getItem("HighestScore");
                let intHigh = parseInt(high);
                let prev = localStorage.getItem("PreviousScore");
                let intPrev = parseInt(prev);
                if(intPrev > intHigh){
                    localStorage.setItem("HighestScore",intPrev);
                }
            }else{
                localStorage.setItem("PreviousScore",score);
                localStorage.setItem("HighestScore",score);
            }

            setGame({...game,startGame : false, gameStarted : false, gameCountdown : false, gameWord : null, level : 1, matched : 0})
            setScore(0);
        }
    },[game.endGame])

    // useEffect(() => {
    //  if(game.startGame){
    //      // setEndGameHandle(false);
    //      // setGame({...game, endGame : false});
    //  }
    // },[game.startGame])

    const setGameStart = (gameStart) =>{
        setGame({...game,startGame : gameStart});
    }

    const startTheGameNow = (startTheGame) =>{
        setGame({...game,gameStarted : startTheGame});
    }

    const setMatched = (isMatched) =>{
        let newMatch = game.matched + isMatched;
        setGame({...game,matched : newMatch});
        console.log(newMatch)
    }

    const setLevelHandle = (newLevel) =>{
        setGame({...game,level : newLevel});
    }

    // const newMatchHandle = (newMatch) =>{
    //  setGame({...game,matched : newMatch});
    // }

    // console.log(game.score)

    const changeWord = () =>{
        if(game.level === 1){
            let word = generateWord(1);
            setGame({...game,gameWord : word});
        }else if(game.level === 2){
            let word = generateWord(2);
            setGame({...game,gameWord : word});
        }else if(game.level === 3){
            let word = generateWord(3);
            setGame({...game,gameWord : word});
        }else if(game.level === 4){
            let word = generateWord(4);
            setGame({...game,gameWord : word});
        }else if(game.level === 5){
            let word = generateWord(5);
            setGame({...game,gameWord : word});
        }else if(game.level === 6){
            let word = generateWord(6);
            setGame({...game,gameWord : word});
        }else{
            let word = generateWord(7);
            setGame({...game,gameWord : word});
        }
    }

    const setEndGameHandle = (isEndGame) =>{
        if(isEndGame === false){
            setGame({...game,startGame : true,endGame : isEndGame});
        }else{
            setGame({...game,endGame : isEndGame});
        }
    }

    const passScoreHandle = (passScore) =>{
        setScore(passScore);
    }

    return(
        <Fragment>
            <Navbar/>
            <Game startGame={game.startGame} isLoaded={game.isLoaded} gameStart={setGameStart} startCountdown={game.gameCountdown} startTheGame={startTheGameNow} gameStarted={game.gameStarted} gameWord={game.gameWord} isMatched={setMatched} newLevel={setLevelHandle} isEndGame={setEndGameHandle} passScore={passScoreHandle} endGame={game.endGame} setStart={setGameStart} tryAgain={game.startGame} newEndGame={setEndGameHandle}/>
        </Fragment>
    )
}

export default App;
