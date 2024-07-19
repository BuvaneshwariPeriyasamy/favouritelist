import React from 'react';

function FavList({ favorites, removeFromFavorites }) {
    return (
        <div className="text-xl flex flex-col gap-4 p-10 justify-center">
            {favorites.length > 0 ? (
                favorites.map((user, index) => (
                    <div key={index} className="flex justify-center gap-60 items-center my-7">
                        <div>
                            {index + 1}. {user.studentName}
                        </div>
                        <div>
                            <button 
                                onClick={() => removeFromFavorites(user.studentName)} 
                                className="border border-red-600 rounded-xl p-2 text-white bg-red-600"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p className='text-center'>No favorite students yet.</p>
            )}
        </div>
    );
}

export default FavList;
