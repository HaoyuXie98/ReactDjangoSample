import React, { Component } from 'react';
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const HomePageContent = () => (
    <div>
        <h1>This is the homepage</h1>
    </div>
);

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
            <Routes>
                <Route path="/join" element={<RoomJoinPage />} />
                <Route path="/create" element={<CreateRoomPage />} />
                <Route path='/' element={<HomePageContent />} />
            </Routes>
        </Router>
        );
    }
}