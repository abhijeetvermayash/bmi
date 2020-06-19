import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import CalculateBMI from './CalculateBMI';
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: '', age:'', weight:'', height:'',gender:'',show:false,bmi:null };
    }

    render() {
        return (
            <div className="ui container">
                <h1 style={{ fontSize:'50px' }}>BMI CALCULATOR</h1>
                <form >
                    <label className="ui label" style={{ color: 'black', fontSize:'20px' }} for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." onChange={this.name}/>
                    <label className="ui label" style={{ color: 'black', fontSize: '20px' }} for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                    <select id="gender" name="gender"  onChange={this.gender}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                    <label className="ui label" style={{ color: 'black', fontSize: '20px' }} for="age">Age</label>
                    <input type="number" id="age" name="Age" placeholder="Age" onChange={this.age} />
                    <label className="ui label" style={{ color: 'black', fontSize: '20px' }}  for="Weight">Weight</label>
                    <input type="number" id="weight" name="Weight" placeholder="Weight" onChange={this.weight}/>
                    <label className="ui label" style={{ color: 'black', fontSize: '20px' }} for="Height">Height</label>
                    <input type="number" id="height" name="height" placeholder="height in meters.." onChange={this.height} />
                    <button className="ui green button btn" onClick={this.btn}>Click To Get Your BMI</button>
                </form>
                <CalculateBMI
                    name={this.state.name}
                    bmi={this.state.bmi}
                    height={this.state.height}
                    weight={this.state.weight}
                    show={this.state.show}/>
                    
            </div>
           );
    }

    name = (event) => {
        this.setState({ name: event.target.value });
    }
    gender = (event) => {
        console.log(event.target.value);
        this.setState({ gender: event.target.value });
    }
    age = (event) => {
        this.setState({ age: event.target.value });   
    }
    height = (event) => {
        this.setState({ height: event.target.value });
    }
    weight = (event) => {
        this.setState({ weight: event.target.value });
    }
    btn = (event) => {
        event.preventDefault();
        const div = Number(this.state.height) * Number(this.state.height);
        const bmi = Number(this.state.weight) / div;
        this.setState({ show: true, bmi: bmi });
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));