import React, { Component } from 'react';
import "./createExercise.css";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export class CreateExercise extends Component {

    constructor(props) {
        super(props);
        this.state = {

            fullname: '',
            description: '',
            duration: '',
            price: '',
            date: '',
        }

        this.onSubmit = this.onSubmit.bind(this);

        this.onChangeFullname = this.onChangeFullname.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.OnchangeDate = this.OnchangeDate.bind(this);
        
    }

    onSubmit(e) {

        e.preventDefault();
 const newCreate = {

    fullname: this.state.fullname,
    description: this.state.description,
    duration: this.state.duration,
    price: this.state.price,
    date: this.state.date
 };

// axios.post("http://localhost:3001/create/add", newCreate)
//   .then(res => console.log(res.data));




        // After submit it make the form clear
        this.setState({

            fullname: '',
            description: '',
            duration: '',
            price: '',
            date: '',
        })
    axios.post('http://localhost:3001/create/add', newCreate) 
        .then(res => {
            console.log("res: ", res);
        })   
}

    onChangeFullname(e) {
        // e is target value
        console.log("E.target.value: ", e.target.value);
        this.setState({
            fullname: e.target.value
        })
    }

    onChangeDescription(e) {
        console.log("E.target.value: ", e.target.value);
        
        this.setState({
            description: e.target.value
        })

    }
    onChangeDuration(e) {
        console.log("E.target.value: ", e.target.value);

            this.setState({
                duration:e.target.value
            })
        }
        onChangePrice(e){
            console.log("E.target.value: ", e.target.value);

            this.setState({
                price: e.target.value
            })
        }

        OnchangeDate(e){
            console.log("E.target.value: ", e.target.value);

            this.setState({
                date: e.target.value
            })
        }



    render() {
        return (
            < div >
                <h1 > Create New Exercise </h1>
                <form onSubmit={this.onSubmit} >
                    <ul className="flex-outer" >
                        <li>
                            <label > Full Name: </label>
                            <input type="text" value={this.state.fullname} onChange={this.onChangeFullname} />
                        </li>
                        <li >
                            <label > Description: </label>
                            <input type="text" value={this.state.description} onChange={this.onChangeDescription} />
                        </li>
                        <li>
                            <label > Duration: </label>
                            <input type="text" value={this.state.duration} onChange={this.onChangeDuration} />
                        </li>
                        <li>
                            <label> Price: </label>
                            <input type="text" value={this.state.price} onChange={this.onChangePrice} />
                        </li>
                        <li>
                            <label> Date: </label>
                            
                            <input type="text" value ={this.state.date} onChange={this.OnchangeDate}/>
                        </li>
                        <li className="form-group">
                            <button type="submit" value="Create Exercise" className="btn btn-primary">Create Exercise</button>
                        </li>

                    </ul>
                </form>
            </div >
        )
    }
}

export default CreateExercise;