import React from 'react'
import "./dashboard.css"

const Dashboard = () => {
    return (
        <div>
            <div className="status-box">
                <div className="tasks-box box">
                    <div className="left">
                        <h3>Tasks</h3>
                        <p>{"task-current-status"}</p>
                        <p>completed</p>
                    </div>
                    <div className="right">
                        {"task-icon"}
                    </div>
                </div>
                <div className="habbits-box box"></div>
                <div className="balance-box box"></div>
                <div className="goals-box box"></div>
            </div>
        </div>
    )
}

export default Dashboard