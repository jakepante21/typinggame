import React, {Fragment} from "react";

const GameButton = ({start}) =>{

	return(
		<Fragment>
			<div className="button-container">
				<button onClick={() => start(true)}>start game</button>
			</div>
		</Fragment>
	)
}

export default GameButton;