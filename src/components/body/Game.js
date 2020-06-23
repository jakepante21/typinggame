import React, {Fragment,useState,useEffect} from "react";
import {words} from "./../words/Words";
import GameFrame from "./GameFrame";
import GameButton from "./GameButton";
import GameCountdown from "./GameCountDown";
import GameTryAgain from "./GameTryAgain";
import time from "./../../assets/images/Time.mp3";

const Game = ({startGame,isloaded,gameStart,startCountdown,startTheGame,gameStarted,gameWord,isMatched,newMatch,newLevel,isEndGame,passScore,endGame,setStart,tryAgain,newEndGame}) =>{

	const [game,setGame] = useState({
		level : 1,
		score : 0,
		matched : 0
	})

	const [gameStartedTwo , setGameStartedTwo] = useState({
		gameStartedThree : false
	})

	const [audio] = useState(new Audio(time));

	const [music,setMusic] = useState({
		aMusic : true
	});

	useEffect(() =>{
		if(music.aMusic){
			audio.play();
			console.log("MUSIC ON")
		}else{
			audio.load();
			console.log("MUSIC OFF")
		}
	},[music])

	useEffect(() => {
		
			addScore();
			// changeWord();
			isMatched(game.matched);
		
	},[game.matched])

	useEffect(() => {
		checkLevel();
		passScore(game.score);
	},[game.score])

	useEffect(() => {
		newLevel(game.level);
	},[game.level])

	const addScore = () =>{
		let newScore = 0;
		if(game.level === 1){
			newScore = game.score + 10;
			// console.log(newScore);
			setGame({...game,score : newScore});
		}else if(game.level === 2){
			newScore = game.score + 15;
			setGame({...game,score : newScore});
		}else if(game.level === 3){
			newScore = game.score + 20;
			setGame({...game,score : newScore});
		}else if(game.level === 4){
			newScore = game.score + 30;
			setGame({...game,score : newScore});
		}else if(game.level === 5){
			newScore = game.score + 40;
			setGame({...game,score : newScore});
		}else if(game.level === 2){
			newScore = game.score + 50;
			setGame({...game,score : newScore});
		}else{
			newScore = game.score + 100;
			setGame({...game,score : newScore});
		}
	}

	const matchedHandle = (isMatch) =>{
		let newMatch = game.matched + isMatch
		setGame({...game,matched : newMatch});
	}

	const checkLevel = () =>{
		if(game.score <= 100){
			setGame({...game,level : 1});
		}else if(game.score > 100 && game.score <= 400){
			setGame({...game,level : 2});
		}else if(game.score > 400 && game.score <= 1000){
			setGame({...game,level : 3});
		}else if(game.score > 600 && game.score <= 1200){
			setGame({...game,level : 4});
		}else if(game.score > 1200 && game.score <= 2000){
			setGame({...game,level : 5});
		}else if(game.score > 2000 && game.score <= 3000){
			setGame({...game,level : 6});
		}else{
			setGame({...game,level : 7});
		}
	}

	const startGameHandle = (start) =>{
		gameStart(start)
	}

	const gameStartedNow = (started) =>{
		startTheGame(started);
	}

	useEffect(() => {
		setGameStartedTwo({gameStartedThree : gameStarted});
	},[gameStarted])

	useEffect(() => {
		if(gameStartedTwo.gameStartedThree){

			let cdCaption = document.querySelector(".countdown-caption-container");
			let cdSubCaption = document.querySelector(".countdown-subcaption-container");
			let cdContainer = document.querySelector(".countdown-container");
			let levelCont = document.querySelector(".level-container");
			let wordCont = document.querySelector(".word-container");
			let scoreCont = document.querySelector(".score-container");
			let answerCont = document.querySelector(".answer-container");
			let timerCont = document.querySelector(".timer-container");

			// AFTER THE COUNTDOWN = HIDE THE COUNTDOWN DOM

			cdCaption.classList.toggle("countdown-on");
			cdSubCaption.classList.toggle("countdown-on");
			cdContainer.classList.toggle("countdown-on");

			// THEN SHOW THE GAME DOM

			levelCont.classList.add("game-on");
			wordCont.classList.add("game-on");
			scoreCont.classList.add("game-on");
			answerCont.classList.add("game-on");
			timerCont.classList.add("game-on");

		}else{
			let levelCont = document.querySelector(".level-container");
			let wordCont = document.querySelector(".word-container");
			let scoreCont = document.querySelector(".score-container");
			let answerCont = document.querySelector(".answer-container");
			let timerCont = document.querySelector(".timer-container");
			setGame({...game,score : 0})

			// THEN SHOW THE GAME DOM

			levelCont.classList.remove("game-on");
			wordCont.classList.remove("game-on");
			scoreCont.classList.remove("game-on");
			answerCont.classList.remove("game-on");
			timerCont.classList.remove("game-on");
		}
	},[gameStartedTwo])

	const changeMusic = () =>{
		if(music.aMusic){
			setMusic({aMusic : false});
		}else{
			setMusic({aMusic : true});
		}
	}

	return(
		<Fragment>
			<section>
				<div className="caption">
					<h1>Welcome to Type As You Can!</h1>
					<span>where you can type as you can!</span>
				</div>
				<div className="game-container">
					<GameButton start={startGameHandle} />
					<GameCountdown startCountdown={startCountdown} started={gameStartedNow}/>
					<GameFrame word={gameWord} isMatch={matchedHandle} level={game.level} score={game.score} isEndGame={isEndGame} newEndGame={newEndGame} />
				</div>
				<GameTryAgain endGame={endGame} setStart={setStart} tryAgain={tryAgain} newEndGame={newEndGame}/>
				<div className="audio-button">
					<button onClick={changeMusic}>Music {music.aMusic ? "Off" : "On"}</button>
				</div>
			</section>
		</Fragment>
	)
}

export default Game;