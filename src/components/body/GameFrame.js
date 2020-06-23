import React, {Fragment,useState,useEffect} from "react";
import sound from "./../../assets/images/3.mp3";
import correct from "./../../assets/images/correct2.mp3";

const GameFrame = ({word,isMatch,level,score,isEndGame,tryAgain,newEndGame}) =>{

	const [gameWord,setGameWord] = useState({
		aWord : null,
		aMatch : 0
	})

	const [audio] = useState(new Audio(sound));
	const [check] = useState(new Audio(correct));

	const [timer,setTimer] = useState(15);

	useEffect(() => {
		setGameWord({...gameWord,aWord : word});
		// newMatch(false);
	},[word])

	let intervalId = null;

	useEffect(() => {
		if(gameWord.aWord !== null){
			// setTimer(15);
		}
	},[gameWord.aWord])

	useEffect(() => {
		// stop();
	},[score])

	// useEffect(() => {
	// 	if(gameWord.aMatch > 0){
	// 		clearInterval(intervalId);
	// 		if(level === 1){
	// 			clearInterval(intervalId);
	// 		}else if(level === 2){
	// 			clearInterval(intervalId);
	// 		}else if(level === 3){
	// 			clearInterval(intervalId);
	// 		}else if(level === 4){
	// 			clearInterval(intervalId);
	// 		}else if(level === 5){
	// 			clearInterval(intervalId);
	// 		}else if(level === 6){
	// 			clearInterval(intervalId);
	// 		}else{
	// 			clearInterval(intervalId);
	// 		}
	// 	}
	// },[gameWord.aMatch])

	useEffect(() => {
		let wordDom = document.querySelector(".word");
		let answerDom = document.querySelector("#answer");
		let levelDom = document.querySelector("#level");
		let scoreDom = document.querySelector("#score");
		let timerDom = document.querySelector("#timer");

		levelDom.innerHTML = level;
		scoreDom.innerHTML = score;
		// timerDom.innerHTML = timer;

		if(gameWord.aWord !== null){
			wordDom.innerHTML = gameWord.aWord;
			let maxChar = gameWord.aWord.length;
			answerDom.focus();
			answerDom.setAttribute("maxLength", maxChar);
			answerDom.value = "";
		}
	},[gameWord])

	// useEffect(() => {
	// 	if(gameWord.aWord !== null){
	// 		if(timer > 0){
	// 			let newTimer = timer - 1;
	// 			setTimer(newTimer + 1);
	// 		}
	// 	}
	// },[gameWord])

	// useEffect(() =>{
	// 	if(gameWord.aWord !== null){
	// 		if(timer > 0){
	// 			let timerDom = document.querySelector("#timer");
	// 			timerDom.innerHTML = timer;
	// 			intervalId = setInterval(minusTimer,1000);
	// 		}
	// 	}
	// },[timer])

	// const minusTimer = () =>{
	// 	let newTimer = timer - 1;
	// 	setTimer(newTimer);
	// 	clearInterval(intervalId);
	// }

	const setAMatch = () =>{
		let newAMatch = gameWord.aMatch + 1;
		setGameWord({...gameWord,aMatch : newAMatch});
	}

	const inputChangeHandle = (e) =>{
		// let visibleCurrentWord = document.querySelector(".word");
		const answer = e.target.value;
		let ansMatch = new RegExp(answer,'g');
		console.log(ansMatch)
		let wordDom = document.querySelector(".word");
		wordDom.innerHTML = gameWord.aWord;
		if(answer.trim() !== ''){
			console.log(answer)
			wordDom.innerHTML = gameWord.aWord.replace(ansMatch,(match) => {
				return "<span class='ans-match'>"+ match +"</span>";
			})
		}

		if(answer === gameWord.aWord){
			isMatch(1);
			let inputDom = document.querySelector("#answer");
			inputDom.value = "";
			// clearInterval(intervalId);
			// stop();
			stopWew();
			console.log("WEW")
			setAMatch();
			check.load();
			check.play();
		}
	}

	// const stop = () => {
	// 	console.log(intervalId)
	// 	clearInterval(intervalId);
	// 	console.log(intervalId)
	// }

	let wewid = null;

	const [wew,setWew] = useState(0);

	const minusWew = () =>{
		let newWew = wew - 1;
		setWew(newWew);
		clearInterval(wewid);
	}

	const stopWew = () =>{
		clearInterval(wewid);
		setWew(-1)
	}

	useEffect(() => {
		if(wew > 0){
			if(wew > 3){
				let wewDom = document.querySelector("#timer");
				wewDom.innerHTML = wew;
				wewDom.classList.remove("danger");
				audio.load();
				wewid = setInterval(minusWew,1000);
			}else{
				let wewDom = document.querySelector("#timer");
				wewDom.innerHTML = wew;
				wewDom.classList.add("danger");
				wewid = setInterval(minusWew,1000);
				audio.play();
			}
			
			console.log(wewid)
		}

		if(gameWord.aWord !== null){
			if(wew === 0){
				isEndGame(true);
				let answerDom = document.querySelector("#answer");
				answerDom.value = "";
			}
		}
	},[wew])

	useEffect(()=>{
		if(gameWord.aWord !== null){
			if(level === 1){
				setWew(10);
			}else if(level === 2){
				setWew(10);
			}else if(level === 3){
				setWew(8);
			}else if(level === 4){
				setWew(8);
			}else if(level === 5){
				setWew(5);
			}else if(level === 6){
				setWew(5);
			}else{
				setWew(5);
			}
		}
	},[gameWord.aWord])
	
	return(
		<Fragment>
			<div className="level-container">
				<span>Level: <span id="level"></span></span>
			</div>
			<div className="word-container">
				<h6 className="word"></h6>
			</div>
			<div className="score-container">
				<span>Score: <span id="score"></span></span>
			</div>
			<div className="answer-container">
				<input type="text" name="answer" id="answer" placeholder="start typing here" onChange={inputChangeHandle}/>
			</div>
			<div className="timer-container">
				<span id="timer"></span>
			</div>
		</Fragment>
	)
}

export default GameFrame;