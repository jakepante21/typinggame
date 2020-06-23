import React, {Fragment,useState,useEffect} from "react";

const GameTryAgain = ({endGame,setStart,newEndGame}) =>{

	const [game,setGame] = useState({
		isendGame : false,
		startGame : false
	})

	useEffect(() => {
		if(endGame){
			setGame({...game,isendGame : endGame});
		}
	},[endGame])

	useEffect(() => {
		if(game.isendGame){
			let modalMainDom = document.querySelector(".modal-main-container");
			let modalDom = document.querySelector(".modal-container");
			let highDom = document.querySelector("#high");
			let preDom = document.querySelector("#pre");
			let high;
			let pre;
			if(localStorage.getItem("HighestScore") !== null && localStorage.getItem("PreviousScore") !== null){
				high = localStorage.getItem("HighestScore");
				pre = localStorage.getItem("PreviousScore");
			}

			highDom.innerHTML = high;
			preDom.innerHTML = pre;
			modalMainDom.classList.add("modal-on");
			modalDom.classList.add("modal-container-on");
		}else{
			let modalMainDom = document.querySelector(".modal-main-container");
			let modalDom = document.querySelector(".modal-container");
			modalMainDom.classList.remove("modal-on");
			modalDom.classList.remove("modal-container-on");
		}
	},[game.isendGame])

	useEffect(() => {
		if(game.startGame){
			setStart(true)
		}
	},[game])

	useEffect(() => {
		if(game.isendGame === false){
			newEndGame(false);
		}
	},[game.isendGame])

	const tryAgainHandle = () =>{
		setGame({...game,startGame : true,isendGame : false})
	}

	return(
		<Fragment>
			<div className="modal-main-container">
				<div className="modal-container">
					<div className="game-over">
						<h1>Game Over!</h1>
					</div>
					<div className="prevhigh-score">
						<h1>Highest Score : <span id="high"></span></h1>
						<h1>Previous Score : <span id="pre"></span></h1>
					</div>
					<div className="try-again">
						<h1>try again?</h1>
					</div>
					<div className="yes-button">
						<button onClick={tryAgainHandle}>Yes</button>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default GameTryAgain;