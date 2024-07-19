import React from 'react';
import Cards from "../components/Cards"; // Ensure this path is correct

function Student({ users, addToFavorites }) {
    return (
        <div>
            {users.map((user, index) => (
                <Cards 
                    key={index} 
                    index={index + 1} 
                    username={user.studentName} 
                    isFavorite={user.isFavorite}
                    addToFavorites={addToFavorites} 
                />
            ))}
        </div>
    );
}

export default Student;
