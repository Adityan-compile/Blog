import React, { lazy } from 'react';

const Cover = lazy(()=>import('../components/cover'));
const Recommended = lazy(()=>import('../components/recommended'));


function Home() {
    return (
        <div>
            <section>
                <Cover />
            </section>
            <section>
                <Recommended />
            </section>
        </div>
    )
}

export default Home;

