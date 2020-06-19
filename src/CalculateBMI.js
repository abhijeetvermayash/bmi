import React from 'react';

class CalculateBMI extends React.Component {
	constructor(props) {
		super(props);
		this.state = { bmi: 0 };

	}
	render() {
		if (this.props.show && this.props.bmi ) {
			return (
               < div className="ui items" >
                        <div class="item">
                            <div class="content">
                            <a class="header"><h1>Your BMI is {this.props.bmi}</h1></a>
						</div>
					</div><Discription bmi={this.props.bmi} name={this.props.name} />
               </div>


			);
		}
		else {
			return <div></div>
		}

	}
}
const Discription = (props) => {
	if (props.bmi < 18.5) {
		return <div><p style={{ fontSize: '20px' }}>{props.name} You are under Weight.<br/>Maintaining a healthy BMI takes some work.
			For starters, it's important to exercise at least 60-90 minutes most days of the week.
			Staying hydrated and eat a balanced diet are equally important.</p></div>;
	}
	else if (18.5 < props.bmi < 24.9) {
		return <div><p style={{ fontSize: '20px' }}>{props.name} You are Healthy.<br/>Just try to mantain your BMI.It is important
			to Exercise at least 30 mins a day.</p></div>;
	}
	else if (25 < props.bmi < 29.9) {
		return <div><p style={{ fontSize: '20px' }}>{props.name} You are Over Weight.</p></div>;
	}
	else {
		return <div><p style={{ fontSize: '20px' }}>{props.name} you're in the obese range.</p></div>;
		}
		}
export default CalculateBMI;