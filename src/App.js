import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavList from "./pages/FavList"; // Ensure this path is correct
import Student from "./pages/Student"; // Ensure this path is correct
import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
    const [users, setUsers] = useState([
        { studentName: "John", isFavorite: false },
        { studentName: "Barath", isFavorite: false },
        { studentName: "Divya", isFavorite: false },
        { studentName: "Ramya", isFavorite: false }
    ]);

    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (username) => {
        setUsers(users.map(user => 
            user.studentName === username ? { ...user, isFavorite: true } : user
        ));
        setFavorites([...favorites, { studentName: username }]);
    };

    const removeFromFavorites = (username) => {
        setUsers(users.map(user => 
            user.studentName === username ? { ...user, isFavorite: false } : user
        ));
        setFavorites(favorites.filter(user => user.studentName !== username));
    };

    return (
        <BrowserRouter>
            <div>
                <div className="bg-red-400 flex justify-center gap-40 p-10 text-3xl text-white underline">
                    <Link to="/">Go to Student List</Link>
                    <Link to="/favorites">Go to Favorites</Link>
                </div>
                <Routes>
                    <Route
                        path="/"
                        element={<Student users={users} addToFavorites={addToFavorites} />}
                    />
                    <Route
                        path="/favorites"
                        element={<FavList favorites={favorites} removeFromFavorites={removeFromFavorites} />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
