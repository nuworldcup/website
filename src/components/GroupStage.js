import React, { Component } from 'react';
import GroupScores from './GroupScores';
import Group from './Group';
import ThreeGroup from './ThreeGroup';
import FiveGroup from './FiveGroup';

//import WomenGroup from './WomenGroup';

class GroupStage extends Component {
    render() {
		return (
				<div className="container">
					<div className="groupstage-title">Groups</div>

					<div className="bracket-title">Women's World Cup 2019</div>
					<div className="row align-items-center">
						<ThreeGroup group="A" team1="Australia" team2="Argentina" team3="Ukraine" tournament="women"/>
					</div>

					<div className="bracket-title-top-space">Co-Rec World Cup 2019</div>
					<div className="row align-items-center">
						<FiveGroup group="A" team1="Nigeria" team2="Cuba" team3="Croatia" team4="Portugal" team5="Argentina" tournament="co-rec"/>
						<FiveGroup group="B" team1="Russia" team2="Brazil" team3="China" team4="Kazakhstan" team5="Vatican City" tournament="co-rec"/>
						<Group group="C" team1="Tanzania" team2="Ottoman Empire" team3="France" team4="Hong Kong" tournament="co-rec"/>
						<Group group="D" team1="Bulgaria" team2="Cameroon" team3="Bhutan" team4="England" tournament="co-rec"/>

					</div>




					<hr />




					<div className="groupstage-title">Fixtures</div>

					<div className="bracket-title">Women's World Cup 2019</div>
					<div className="group">
						<div className="group-header">Group A</div>
						<GroupScores team1="Ukraine" flag1="ua" team2="Australia" flag2="au" tournament="women" field="1" time="May 4, 10:00AM"/>
						<GroupScores team1="Argentina" flag1="ar" team2="Australia" flag2="au" tournament="women" field="1" time="May 4, 10:40AM"/>
						<GroupScores team1="Argentina" flag1="ar" team2="Ukraine" flag2="ua" tournament="women" field="1" time="May 4, 12:00PM"/>
						<GroupScores team1="Australia" flag1="au" team2="Argentina" flag2="ar" tournament="women" field="1" time="May 4, 12:40PM"/>
						<GroupScores team1="Australia" flag1="au" team2="Ukraine" flag2="ua" tournament="women" field="1" time="May 4, 2:00PM"/>
						<GroupScores team1="Ukraine" flag1="ua" team2="Argentina" flag2="ar" tournament="women" field="1" time="May 4, 2:40PM"/>
					</div>

					<div className="bracket-title-top-space">Co-Rec World Cup 2019</div>
					<div className="group">
						<div className="group-header">Group A</div>
						<GroupScores team1="Nigeria" flag1="ng" team2="Cuba" flag2="cu" tournament="co-rec" field="3" time="May 4, 10:40AM"/>
						<GroupScores team1="Croatia" flag1="hr" team2="Portugal" flag2="pt" tournament="co-rec" field="4" time="May 4, 10:40AM"/>
						<GroupScores team1="Nigeria" flag1="ng" team2="Croatia" flag2="hr" tournament="co-rec" field="4" time="May 4, 11:20AM"/>
						<GroupScores team1="Cuba" flag1="cu" team2="Argentina" flag2="ar" tournament="co-rec" field="5" time="May 4, 11:20AM"/>
						<GroupScores team1="Nigeria" flag1="ng" team2="Portugal" flag2="pt" tournament="co-rec" field="2" time="May 4, 12:40PM"/>
						<GroupScores team1="Croatia" flag1="hr" team2="Argentina" flag2="ar" tournament="co-rec" field="3" time="May 4, 12:40PM"/>
						<GroupScores team1="Nigeria" flag1="ng" team2="Argentina" flag2="ar" tournament="co-rec" field="2" time="May 4, 1:20PM"/>
						<GroupScores team1="Cuba" flag1="cu" team2="Portugal" flag2="pt" tournament="co-rec" field="3" time="May 4, 1:20PM"/>
						<GroupScores team1="Cuba" flag1="cu" team2="Croatia" flag2="hr" tournament="co-rec" field="2" time="May 4, 2:00PM"/>
						<GroupScores team1="Portugal" flag1="pt" team2="Argentina" flag2="ar" tournament="co-rec" field="3" time="May 4, 2:00PM"/>
					</div>
					<div className="group">
						<div className="group-header">Group B</div>
						<GroupScores team1="Russia" flag1="ru" team2="Brazil" flag2="br" tournament="co-rec" field="6" time="May 4, 10:00AM"/>
						<GroupScores team1="China" flag1="cn" team2="Kazakhstan" flag2="kz" tournament="co-rec" field="2" time="May 4, 10:40AM"/>
						<GroupScores team1="Russia" flag1="ru" team2="China" flag2="cn" tournament="co-rec" field="6" time="May 4, 11:20AM"/>
						<GroupScores team1="Brazil" flag1="br" team2="Vatican City" flag2="va" tournament="co-rec" field="2" time="May 4, 12:00PM"/>
						<GroupScores team1="Russia" flag1="ru" team2="Kazakhstan" flag2="kz" tournament="co-rec" field="4" time="May 4, 12:40PM"/>
						<GroupScores team1="China" flag1="cn" team2="Vatican City" flag2="va" tournament="co-rec" field="5" time="May 4, 12:40PM"/>
						<GroupScores team1="Russia" flag1="ru" team2="Vatican City" flag2="va" tournament="co-rec" field="4" time="May 4, 1:20PM"/>
						<GroupScores team1="Brazil" flag1="br" team2="Kazakhstan" flag2="kz" tournament="co-rec" field="5" time="May 4, 1:20PM"/>
						<GroupScores team1="Brazil" flag1="br" team2="China" flag2="cn" tournament="co-rec" field="4" time="May 4, 2:00PM"/>
						<GroupScores team1="Kazakhstan" flag1="kz" team2="Vatican City" flag2="va" tournament="co-rec" field="5" time="May 4, 2:00PM"/>




					</div>
					<div className="group">
						<div className="group-header">Group C</div>
						<GroupScores team1="Tanzania" flag1="tz" team2="Ottoman Empire" flag2="un" tournament="co-rec" field="4" time="May 4, 10:00AM"/>
						<GroupScores team1="France" flag1="fr" team2="Hong Kong" flag2="hk" tournament="co-rec" field="5" time="May 4, 10:00AM"/>
						<GroupScores team1="Tanzania" flag1="tz" team2="France" flag2="fr" tournament="co-rec" field="2" time="May 4, 11:20AM"/>
						<GroupScores team1="Ottoman Empire" flag1="un" team2="Hong Kong" flag2="hk" tournament="co-rec" field="3" time="May 4, 11:20AM"/>
						<GroupScores team1="Tanzania" flag1="tz" team2="Hong Kong" flag2="hk" tournament="co-rec" field="5" time="May 4, 12:00PM"/>
						<GroupScores team1="Ottoman Empire" flag1="un" team2="France" flag2="fr" tournament="co-rec" field="6" time="May 4, 12:00PM"/>
					</div>
					<div className="group">
						<div className="group-header">Group D</div>
						<GroupScores team1="Bulgaria" flag1="bg" team2="Cameroon" flag2="cm" tournament="co-rec" field="2" time="May 4, 10:00AM"/>
						<GroupScores team1="Bhutan" flag1="bt" team2="England" flag2="gb" tournament="co-rec" field="3" time="May 4, 10:00AM"/>
						<GroupScores team1="Bulgaria" flag1="bg" team2="Bhutan" flag2="bt" tournament="co-rec" field="5" time="May 4, 10:40AM"/>
						<GroupScores team1="Cameroon" flag1="cm" team2="England" flag2="gb" tournament="co-rec" field="6" time="May 4, 10:40AM"/>
						<GroupScores team1="Bulgaria" flag1="bg" team2="England" flag2="gb" tournament="co-rec" field="3" time="May 4, 12:00PM"/>
						<GroupScores team1="Cameroon" flag1="cm" team2="Bhutan" flag2="bt" tournament="co-rec" field="4" time="May 5, 12:00PM"/>
					</div>
			    </div>

	    );
	}
}

export default GroupStage;


// <div className="group">
// 	<div className="group-header">Group A</div>
// 	<GroupScores team1="" flag1="" team2="" flag2="" tournament="co-rec" field="" time=""/>
// 	<GroupScores team1="" flag1="" team2="" flag2="" tournament="co-rec" field="" time=""/>
// 	<GroupScores team1="" flag1="" team2="" flag2="" tournament="co-rec" field="" time=""/>
// 	<GroupScores team1="" flag1="" team2="" flag2="" tournament="co-rec" field="" time=""/>
// 	<GroupScores team1="" flag1="" team2="" flag2="" tournament="co-rec" field="" time=""/>
// 	<GroupScores team1="" flag1="" team2="" flag2="" tournament="co-rec" field="" time=""/>
// </div>



// FOR FUTURE: Write a js function that will loop over an array of the information and populate it using GroupScores
// Pull from database??? Then regular wc users can just update the database with some interface. Maybe a login for execs??
// LOOP FOR NUM GROUPS
// <div className="group">
// 		<div className="group-header">Group </div>
// 		LOOP for game in the groups
//		<GroupScores ...fill in with array...>
// </div>

// SAME FOR GROUPS
