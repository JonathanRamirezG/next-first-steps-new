import type { Metadata } from "next";

export const metadata : Metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
 keywords: ['About Page', 'Jonathan', 'next']
};

export default function AboutPage(){
    return(
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}