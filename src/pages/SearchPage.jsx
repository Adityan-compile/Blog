import React, { lazy } from 'react';

const Search = lazy(()=>import('../components/search'));

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
