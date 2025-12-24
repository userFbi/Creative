import React, { useState } from "react";

const StudentResult = () => {
    const [name, setName] = useState("");
    const [maths, setMaths] = useState("");
    const [science, setScience] = useState("");
    const [english, setEnglish] = useState("");
    const [result, setResult] = useState(null);

    const calculateResult = () => {
        const m = Number(maths);
        const s = Number(science);
        const e = Number(english);

        const total = m + s + e;
        const percentage = (total / 300) * 100;
        const status = m >= 35 && s >= 35 && e >= 35 ? "Pass" : "Fail";

        setResult({
            name,
            total,
            percentage: percentage.toFixed(2),
            status,
        });

        // ✅ Clear inputs after button click
        setName("");
        setMaths("");
        setScience("");
        setEnglish("");
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto" }}>
            <h2>Student Result</h2>


            <div className="input-div">
                <input className="temp"
                    type="text"
                    placeholder="Student Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input className="temp"
                    type="number"
                    placeholder="Maths Marks"
                    value={maths}
                    onChange={(e) => setMaths(e.target.value)}
                />

                <input className="temp"
                    type="number"
                    placeholder="Science Marks"
                    value={science}
                    onChange={(e) => setScience(e.target.value)}
                />

                <input className="temp"
                    type="number"
                    placeholder="English Marks"
                    value={english}
                    onChange={(e) => setEnglish(e.target.value)}
                />
            </div>
            <button className="btn" onClick={calculateResult}>Calculate</button>

            {result && (
                <div>
                    <h3>Result</h3>
                    <p>Name: {result.name}</p>
                    <p>Total: {result.total}</p>
                    <p>Percentage: {result.percentage}%</p>
                    <p>Status: {result.status}</p>
                </div>
            )}
        </div>
    );
};

export default StudentResult;
