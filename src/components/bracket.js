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
					<div class = "row">
						<div class = "col-12 t-center">
							<h1>2021 Turkey Tourney</h1>
						</div>
					</div>
					<div class = "row">
						<div class = "col-12">
							<h2>Bracket:</h2>
						</div>
					</div>
					<div class = "row ">
						<div class = "col-2 bord-bottom">
							Team 1
						</div>
						<div class = "col-8">

						</div>
						<div class = "col-2 bord-bottom t-right">
							Team 5
						</div>
					</div>
					<div class = "row ">
						<div class = "col-2 bord-right">
						</div>
						<div class = "col-2 bord-bottom">
							TBD
						</div>
						<div class = "col-1">

						</div>
						<div class = "col-2 bord-full t-center">
							WINNER
						</div>
						<div class = "col-1">

						</div>
						<div class = "col-2 bord-bottom t-right">
							TBD
						</div>
						<div class = "col-2 bord-left">
						</div>
					</div>
					<div class = "row ">
						<div class = "col-2 bord-bottom-right">
							Team 2
						</div>
						<div class = "col-2 bord-right">

						</div>
						<div class = "col-4">
						</div>
						<div class = "col-2 bord-left">

						</div>
						<div class = "col-2 bord-bottom-left t-right">
							Team 6
						</div>
					</div>
					<div class = "row ">
						<div class = "col-4">
						</div>
						<div class = "col-2 bord-bottom-right t-center">
							TBD
						</div>
						<div class = "col-2 bord-bottom-left t-center">
							TBD
						</div>
						<div class = "col-4">
						</div>
					</div>
					<div class = "row ">
						<div class = "col-2 bord-bottom">
							Team 3
						</div>
						<div class = "col-8">

						</div>
						<div class = "col-2 bord-bottom t-right">
							Team 7
						</div>
					</div>
					<div class = "row ">
						<div class = "col-2 bord-right">
						</div>
						<div class = "col-2 bord-bottom">
							TBD
						</div>
						<div class = "col-4">
						</div>
						<div class = "col-2 bord-bottom t-right">
							TBD
						</div>
						<div class = "col-2 bord-left">
						</div>
					</div>
					<div class = "row ">
						<div class = "col-2 bord-bottom-right">
							Team 4
						</div>
						<div class = "col-8">

						</div>
						<div class = "col-2 bord-bottom-left t-right">
							Team 8
						</div>
					</div>
					<br />
					<div class = "row">
						<div class = "col-12">
							<h2>Group Stage:</h2>
						</div>
					</div>
					<br/>
					<div class = "row">
						<div class = "col-3 bord-full">
							<div class = "row t-center">
								<div class = "label col-12">
										Group 1
								</div>
							</div>
							<div class = "row">
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
							<div class = "row">
								<div class = "col-4 ">
									Team 1
								</div>
								<div class = "col-4 ">
									0-0
								</div>
								<div class = "col-4 ">
									0
								</div>
							</div>
							<div class = "row">
								<div class = "col-4 ">
									Team 2
								</div>
								<div class = "col-4 ">
									0-0
								</div>
								<div class = "col-4 ">
									0
								</div>
							</div>
							<div class = "row">
								<div class = "col-4 ">
									Team 3
								</div>
								<div class = "col-4 ">
									0-0
								</div>
								<div class = "col-4 ">
									0
								</div>
							</div>
							<div class = "row">
								<div class = "col-4 ">
									Team 4
								</div>
								<div class = "col-4 ">
									0-0
								</div>
								<div class = "col-4 ">
									0
								</div>
							</div>
						</div>
						<div class = "col-3 bord-full">
							<div class = "row t-center">
								<div class = "label col-12">
										Group 2
								</div>
							</div>
							<div class = "row">
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
							<div class = "row">
								<div class = "col-4 ">
									Team 5
								</div>
								<div class = "col-4 ">
									0-0
								</div>
								<div class = "col-4 ">
									0
								</div>
							</div>
							<div class = "row">
								<div class = "col-4 ">
									Team 6
								</div>
								<div class = "col-4 ">
									0-0
								</div>
								<div class = "col-4 ">
									0
								</div>
							</div>
							<div class = "row">
								<div class = "col-4 ">
									Team 7
								</div>
								<div class = "col-4 ">
									0-0
								</div>
								<div class = "col-4 ">
									0
								</div>
							</div>
							<div class = "row">
								<div class = "col-4 ">
									Team 8
								</div>
								<div class = "col-4 ">
									0-0
								</div>
								<div class = "col-4 ">
									0
								</div>
							</div>
						</div>
						<div class = "col-3 bord-full">
							<div class = "row t-center">
								<div class = "label col-12">
										Group 3
								</div>
							</div>
							<div class = "row">
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
							<div class = "row">
								<div class = "col-4 ">
									Team 9
								</div>
								<div class = "col-4 ">
									0-0
								</div>
								<div class = "col-4 ">
									0
								</div>
							</div>
							<div class = "row">
								<div class = "col-4 ">
									Team 10
								</div>
								<div class = "col-4 ">
									0-0
								</div>
								<div class = "col-4 ">
									0
								</div>
							</div>
							<div class = "row">
								<div class = "col-4 ">
									Team 11
								</div>
								<div class = "col-4 ">
									0-0
								</div>
								<div class = "col-4 ">
									0
								</div>
							</div>
							<div class = "row">
								<div class = "col-4 ">
									Team 12
								</div>
								<div class = "col-4 ">
									0-0
								</div>
								<div class = "col-4 ">
									0
								</div>
							</div>
						</div>
						<div class = "col-3 bord-full">
							<div class = "row t-center">
								<div class = "label col-12">
										Group 4
								</div>
							</div>
							<div class = "row">
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
							<div class = "row">
								<div class = "col-4 ">
									Team 13
								</div>
								<div class = "col-4 ">
									0-0
								</div>
								<div class = "col-4 ">
									0
								</div>
							</div>
							<div class = "row">
								<div class = "col-4 ">
									Team 14
								</div>
								<div class = "col-4 ">
									0-0
								</div>
								<div class = "col-4 ">
									0
								</div>
							</div>
							<div class = "row">
								<div class = "col-4 ">
									Team 15
								</div>
								<div class = "col-4 ">
									0-0
								</div>
								<div class = "col-4 ">
									0
								</div>
							</div>
							<div class = "row">
								<div class = "col-4 ">
									Team 16
								</div>
								<div class = "col-4 ">
									0-0
								</div>
								<div class = "col-4 ">
									0
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
