import React from 'react';
import Cover from '../components/cover';
import Recommended from '../components/recommended';


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

