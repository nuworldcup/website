import React, { Component } from 'react';
import '../bracket.css'
import turkey from '../assets/img/turkey.jpg'

//import grouppic from '../assets/img/grouppic.jpeg';

class Bracket extends Component {
	render() {
		return (
			<div>

				<div className="container">
					<br />
					<img src={turkey} class = "title-photo" alt = "Turkey Tourney"/>
					<div class = "row title">
						<div class = "col-12 t-center">
							<h1>2021 Turkey Tourney</h1>
						</div>
					</div>
					<div class = "row bracket-title">
						<div class = "col-12">
							<h2>Bracket:</h2>
						</div>
					</div>
					<div class = "container bracket">
						<div class = "row ">
							<div class = "col-2 bord-bottom">
								Elder Lads
							</div>
							<div class = "col-8">

							</div>
							<div class = "col-2 bord-bottom t-right">
								Toking Turkeys
							</div>
						</div>
						<div class = "row ">
							<div class = "col-2 bord-right">
							</div>
							<div class = "col-2 bord-bottom">
								Puzzles
							</div>
							<div class = "col-1">

							</div>
							<div class = "col-2 bord-full t-center">
								Puzzles
							</div>
							<div class = "col-1">

							</div>
							<div class = "col-2 bord-bottom t-right">
								Toking Turkeys
							</div>
							<div class = "col-2 bord-left">
							</div>
						</div>
						<div class = "row ">
							<div class = "col-2 bord-bottom-right">
								Puzzles
							</div>
							<div class = "col-2 bord-right">

							</div>
							<div class = "col-4">
							</div>
							<div class = "col-2 bord-left">

							</div>
							<div class = "col-2 bord-bottom-left t-right">
								Sturdy Turkeys
							</div>
						</div>
						<div class = "row ">
							<div class = "col-4">
							</div>
							<div class = "col-2 bord-bottom-right t-center">
								Puzzles
							</div>
							<div class = "col-2 bord-bottom-left t-center">
								Viaa
							</div>
							<div class = "col-4">
							</div>
						</div>
						<div class = "row ">
							<div class = "col-2 bord-bottom">
								Manchester Divided
							</div>
							<div class = "col-8">

							</div>
							<div class = "col-2 bord-bottom t-right">
								Turturkeykey
							</div>
						</div>
						<div class = "row ">
							<div class = "col-2 bord-right">
							</div>
							<div class = "col-2 bord-bottom-right">
								Bangers Only
							</div>
							<div class = "col-4">
							</div>
							<div class = "col-2 bord-bottom-left t-right">
								VIAA
							</div>
							<div class = "col-2 bord-left">
							</div>
						</div>
						<div class = "row ">
							<div class = "col-2 bord-bottom-right">
								Bangers Only
							</div>
							<div class = "col-8">

							</div>
							<div class = "col-2 bord-bottom-left t-right">
								VIAA
							</div>
						</div>
					</div>
					<br />
					<div class = "row groups-title">
						<div class = "col-12">
							<h2>Group Stage:</h2>
						</div>
					</div>
					<br/>
					<div class = "row groups">
						<div class = "col-3 bord-full">
							<div class = "row t-center bord-dotted">
								<div class = "label col-12">
										Group 1
								</div>
							</div>
							<div class = "row bord-dotted">
								<div class = "label col-4">
									Name
								</div>
								<div class = "label col-4">
									Record
								</div>
								<div class = "label col-4">
									Points
								</div>
							</div>
							<div class = "row bord-dotted">
								<div class = "col-4 ">
									Bangers Only
								</div>
								<div class = "col-4 ">
									1-1-1
								</div>
								<div class = "col-4 ">
									4
								</div>
							</div>
							<div class = "row bord-dotted">
								<div class = "col-4 ">
									Turtur keykey
								</div>
								<div class = "col-4 ">
									2-1
								</div>
								<div class = "col-4 ">
									6
								</div>
							</div>
							<div class = "row bord-dotted">
								<div class = "col-4 ">
									Bayern Kickerz
								</div>
								<div class = "col-4 ">
									0-2-1
								</div>
								<div class = "col-4 ">
									2
								</div>
							</div>
							<div class = "row">
								<div class = "col-4 ">
									Turkey Tuggers
								</div>
								<div class = "col-4 ">
									1-1-1
								</div>
								<div class = "col-4 ">
									4
								</div>
							</div>
						</div>
						<div class = "col-3 bord-full">
							<div class = "row t-center bord-dotted">
								<div class = "label col-12">
										Group 2
								</div>
							</div>
							<div class = "row bord-dotted">
								<div class = "label col-4">
									Name
								</div>
								<div class = "label col-4">
									Record
								</div>
								<div class = "label col-4">
									Points
								</div>
							</div>
							<div class = "row bord-dotted">
								<div class = "col-4 ">
									Footy Fellas
								</div>
								<div class = "col-4 ">
									0-2
								</div>
								<div class = "col-4 ">
									0
								</div>
							</div>
							<div class = "row bord-dotted">
								<div class = "col-4 ">
									Kante's Smile
								</div>
								<div class = "col-4 ">
									1-2
								</div>
								<div class = "col-4 ">
									3
								</div>
							</div>
							<div class = "row bord-dotted">
								<div class = "col-4 ">
									Man. Divided
								</div>
								<div class = "col-4 ">
									3-0
								</div>
								<div class = "col-4 ">
									9
								</div>
							</div>
							<div class = "row">
								<div class = "col-4 ">
									VIAA
								</div>
								<div class = "col-4 ">
									1-1
								</div>
								<div class = "col-4 ">
									3
								</div>
							</div>
						</div>
						<div class = "col-3 bord-full">
							<div class = "row t-center bord-dotted">
								<div class = "label col-12">
										Group 3
								</div>
							</div>
							<div class = "row bord-dotted">
								<div class = "label col-4">
									Name
								</div>
								<div class = "label col-4">
									Record
								</div>
								<div class = "label col-4">
									Points
								</div>
							</div>
							<div class = "row bord-dotted">
								<div class = "col-4 ">
									Boat Friends
								</div>
								<div class = "col-4 ">
									1-2
								</div>
								<div class = "col-4 ">
									3
								</div>
							</div>
							<div class = "row bord-dotted">
								<div class = "col-4">
									Sturdy Turkeys
								</div>
								<div class = "col-4">
									2-1
								</div>
								<div class = "col-4">
									6
								</div>
							</div>
							<div class = "row bord-dotted">
								<div class = "col-4">
									Elder Lads
								</div>
								<div class = "col-4">
									3-0
								</div>
								<div class = "col-4 ">
									9
								</div>
							</div>
							<div class = "row">
								<div class = "col-4 ">
									Scrambled Meggz
								</div>
								<div class = "col-4 ">
									0-3
								</div>
								<div class = "col-4 ">
									0
								</div>
							</div>
						</div>
						<div class = "col-3 bord-full">
							<div class = "row t-center bord-dotted">
								<div class = "label col-12">
										Group 4
								</div>
							</div>
							<div class = "row bord-dotted">
								<div class = "label col-4">
									Name
								</div>
								<div class = "label col-4">
									Record
								</div>
								<div class = "label col-4">
									Points
								</div>
							</div>
							<div class = "row bord-dotted">
								<div class = "col-4 ">
									Toking Turkeys
								</div>
								<div class = "col-4 ">
									2-1-0
								</div>
								<div class = "col-4 ">
									7
								</div>
							</div>
							<div class = "row bord-dotted">
								<div class = "col-4 ">
									Los Bros
								</div>
								<div class = "col-4 ">
									1-2
								</div>
								<div class = "col-4 ">
									3
								</div>
							</div>
							<div class = "row bord-dotted">
								<div class = "col-4 ">
									Evanston Goons
								</div>
								<div class = "col-4 ">
									0-3
								</div>
								<div class = "col-4 ">
									0
								</div>
							</div>
							<div class = "row">
								<div class = "col-4 ">
									Puzzles
								</div>
								<div class = "col-4 ">
									2-1-0
								</div>
								<div class = "col-4 ">
									7
								</div>
							</div>
						</div>
					</div>
				</div><br /> <br /> <br /> <br />
			</div>
		);
	}
}

export default Bracket;
