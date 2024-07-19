import React from 'react';

function Cards({ index, username, isFavorite, addToFavorites }) {
    return (
        <div className="text-xl flex flex-col gap-4 p-10 justify-center">
            <div className="flex justify-center items-center gap-20">
                <span className="pr-60">{index}. {username}</span>
                <button 
                    onClick={() => addToFavorites(username)} 
                    className={`border border-black rounded-xl p-2 text-white bg-black ${isFavorite ? 'opacity-60' : ''}`}
                    disabled={isFavorite}
                >
                    Add To Favourite
                </button>
            </div>
        </div>
    );
}

export default Cards;
