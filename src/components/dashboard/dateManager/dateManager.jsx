"use client"

import React, { useState } from "react";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";  // Import the CSS if needed

export default function DateManager() {
    const [selectedDates, setSelectedDates] = useState([]);  // Store multiple selected dates
    const [confirmedDates, setConfirmedDates] = useState([]);  // Store confirmed dates

    // Handle day click and toggle selection
    const handleDayClick = (day) => {
        const dayExists = selectedDates.some(date => day.isSame(date, 'day'));
        if (dayExists) {
            // If the day is already selected, remove it
            setSelectedDates(selectedDates.filter(date => !day.isSame(date, 'day')));
        } else {
            // Otherwise, add the new day
            setSelectedDates([...selectedDates, day]);
        }
    };

    // Confirm the selected dates
    const confirmSelection = () => {
        setConfirmedDates(selectedDates);
        alert(`Confirmed dates: ${selectedDates.map(date => date.format('YYYY-MM-DD')).join(', ')}`);
    };

    // Unconfirm the confirmed dates (remove them from confirmedDates)
    const unconfirmSelection = () => {
        const unconfirmedDates = confirmedDates.filter(date => !selectedDates.some(selected => selected.isSame(date, "day")));
        setConfirmedDates(unconfirmedDates);
        alert(`Unconfirmed dates: ${selectedDates.map(date => date.format('YYYY-MM-DD')).join(', ')}`);
    };

    // Render each day with custom styling if it matches a selected or confirmed date
    const renderDay = (props, currentDate) => {
        const isSelected = selectedDates.some(date => currentDate.isSame(date, "day"));
        const isConfirmed = confirmedDates.some(date => currentDate.isSame(date, "day"));

        return (
            <td
                {...props}
                onClick={() => handleDayClick(currentDate)}  // Handle the click on the day
                style={{
                    backgroundColor: isConfirmed ? "lightgreen" : (isSelected ? "lightblue" : ""),  // Color the selected/confirmed days
                    cursor: "pointer"
                }}
            >
                {currentDate.date()}  {/* Display the day number */}
            </td>
        );
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            {/* Show calendar open by default and hide input */}
            <Datetime 
                className="border-2 rounded-md p-2"
                renderDay={renderDay}  // Pass the custom day renderer
                open={true}  // Open calendar by default
                input={false}  // Disable the input field
            />
            <div className="flex space-x-4">
                <button
                    onClick={confirmSelection}
                    className="bg-blue-500 text-white p-2 rounded-md"
                >
                    Confirm Selection
                </button>
                <button
                    onClick={unconfirmSelection}
                    className="bg-red-500 text-white p-2 rounded-md"
                >
                    Unconfirm Selection
                </button>
            </div>
        </div>
    );
}
