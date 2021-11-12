import React from 'react';

//import Footer from './Footer'

class Calendar extends React.Component {
	render() {
		return (
			<div className="calendar">
				<div className="timeline">
					<br />
					<div className="calcontainer left">
						<div className="content">
							<h2>Wicked Cup</h2>
							<p>Wicked Cup is the first event of the year! It's a 5v5 Tournament on the lakeside fields during the Fall.</p>
						</div>
					</div>
					<div className="calcontainer right">
						<div className="content">
							<h2>FIFA Tournament</h2>
							<p>The first of two FIFA tournaments during the year. This one is a doubles tournament, so find a partner and show off your skills!</p>
						</div>
					</div>
					{/*<div className="calcontainer left">
						<div className="content">
							<h2>Gonzo Visit</h2>
							<p>NU World Cup meets up with our partner philanthropy for a session of mentoring and soccer.</p>
						</div>
					</div>*/}
					<div className="calcontainer left">
						<div className="content">
							<h2>Futsal Tournament</h2>
							<p>Indoor soccer tournament held in the Henry Crown Sports Pavilion. It's fast paced, high scoring, and always exciting!</p>
						</div>
					</div>
					<div className="calcontainer right">
						<div className="content">
							<h2>FIFA Tournament 2</h2>
							<p>Second of the two FIFA tournaments, except this one is solo! </p>
						</div>
					</div>
					<div className="calcontainer left">
						<div className="content">
							<h2>Bar Night</h2>
							<p>NU World Cup and ISA collaborate for a fun night out!</p>
						</div>
					</div>
					<div className="calcontainer right">
						<div className="content">
							<h2>Cultural Celebration</h2>
							<p>Come celebrate the host country's culture through food, entertainment, and fun!</p>
						</div>
					</div>
					{/*<div className="calcontainer right">
						<div className="content">
							<h2>Gonzo Panel</h2>
							<p>Gonzo members visit Northwestern and NU World Cup members answer questions, guide them around campus, and shed light on the college experience.</p>
						</div>
					</div>*/}
					<div className="calcontainer left">
						<div className="content">
							<h2>Spring Tournament</h2>
							<p>The event you have been waiting for! Form a team and compete in the largest student run soccer tournament at Northwestern!</p>
						</div>
					</div>
					<div className="calcontainer right">
						<div className="content">
							<h2>Chicago Fire Trip</h2>
							<p>A match day outing to close out the year. Join us at Soldier Field to watch a Chicago Fire match.</p>
						</div>
					</div><br /><br />
				</div>
			</div>
		)
	}
}

export default Calendar;
