import React from 'react';
import Image from 'next/image';

const Page = () => {
    return (
        <div>
            <Image src="/homepage.jpg" alt="Home Page" width={1000} height={650} />
        </div>
    );
};

export default Page;
