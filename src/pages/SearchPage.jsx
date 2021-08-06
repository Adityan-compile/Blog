import React from 'react';
import Search from '../components/search';

function SearchPage() {
    return (
        <div>
            <div>
                <h1 className="title-text text-center fw-bold pt-3">Search</h1>
            </div>
            <div>
                <Search />
            </div>
        </div>
    )
}

export default SearchPage;
