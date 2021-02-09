import "./exerciseList.css";
import React, { Component } from 'react';
import axios from 'axios';

export class ExerciseList extends Component {
    constructor(props){
        super(props);
        this.state = {
            create: []
        }
        this.getList = this.getList.bind(this);
    }

deleteTask(id){
    axios.post('http://localhost:3001/create/delete', {createId: id})
    .then(res => {
        if(res.data.message == 'error') {
            alert('CAN NOT DELETE!');
        }
        if (res.data.message = 'success'){
            this.getList();
        }
    })
}

getList(){
    axios.get('http://localhost:3001/create')
    .then(res => {
        this.setState({
            create: res.data
        })
    })
}

componentDidMount(){
    this.getList()
// axios.get('http://localhost:3001/create')
// .then(res => {
//     // console.log(res.data);
//     this.setState({

//         create : res.data
//     })
// })

}

    render() {
        let createRows = this.state.create.map(createObj => {
            return (
                <tr>
                <td> {createObj.fullname} </td>
                <td> {createObj.description} </td>
                <td> {createObj.duration} </td>
                <td> {createObj.price} </td>
                <td> {createObj.date} </td>
                <td  className='delete' onClick={() => this.deleteTask(createObj['_id'])}>DELETE</td>
                </tr>)
        })
        return (
            <div>
               <table>
    <thead>
        <tr>
            <th>Full Name</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Price</th>
            <th>Date</th>
            <th>... </th>
        </tr>
        {createRows}
    </thead>
</table>
 
            </div>
        )
    }
}

export default ExerciseList;