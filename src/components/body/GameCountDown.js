import React, {Fragment,useState,useEffect} from "react";
import sound from "./../../assets/images/3.mp3";

const GameCountdown = ({startCountdown,started}) =>{

	const [audio] = useState(new Audio(sound));

	const [countdownStart,setCountdownStart] = useState({
		gameCountdown : false
	})

	const [timer,setTimer] = useState();
	let intervalId = null;

	const countDown = () =>{
		let newTimer = timer - 1;
		setTimer(newTimer);
		clearInterval(intervalId);
	}

	useEffect(() => {
		if(startCountdown){
			setCountdownStart({gameCountdown : startCountdown})
		}
	},[startCountdown])

	useEffect(() => {
		if(countdownStart.gameCountdown){
			setTimer(3);
			audio.play();
		}
	},[countdownStart])

	useEffect(() => {
		let timeDom = document.querySelector("#time");
		timeDom.innerHTML = timer;
		if(timer > 0){
			intervalId = setInterval(countDown,1000);
		}
	},[timer])

	useEffect(() => {
		if(timer === 0){
			started(true);
		}
	},[timer])

	return(
		<Fragment>
			<div className="countdown-caption-container">
				<h1>Get Ready!</h1>
			</div>
			<div className="countdown-subcaption-container">
				<span>game will start in...</span>
			</div>
			<div className="countdown-container">
				<span id="time"></span>
			</div>
		</Fragment>
	)
}

export default GameCountdown;