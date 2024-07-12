import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

function Users(props) {

    //for now setup state to hold our users and set users to an empty array ([])
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])

    //this method/function gets users from the API puts them in state user the settter 
    //create above
    let getUsers = () => {

        //use fetch to make an API call and get a random Jeopardy question (returns a promise)
        fetch(`https://jsonplaceholder.typicode.com/users`)
            //on success of the fetch request, turn the response that came back into JSON
            .then((response) => response.json())
            //on success of turnig the response into JSON (data we can work with), lets add that data to state
            .then((data) => {

                //put the data in the console just so we can see it
                console.log("data from the api", data);

                //update state with the data from the API causing the page to re-render
                setUsers(data);
            })
            //handle any errors/failures with getting data from the API
            .catch((error) => {
                console.log(error)
            })
    }

    let getSelectedUser = (event) => {
        //event.target is the dropdown. .value is the selected value
        let selecteduser = users.find((user)=>{
            return user.id == event.target.value;
        })

        console.log(selecteduser);
    }

    return (
        <div className="Users container mt-5">

            <Form.Select aria-label="Default select example" onChange={getSelectedUser}>
                <option>Open this select menu</option>
                {users.map((user, idx) => {
                        return (
                            <option key={idx} value={user.id}>{user.name}</option>
                        )
                    })}
            </Form.Select>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )

}

export default Users;