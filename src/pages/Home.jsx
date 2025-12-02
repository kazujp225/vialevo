import React from 'react';
import Hero from '../components/Hero';
import Message from '../components/Message';
import NavigationHub from '../components/NavigationHub';
import Gallery from '../components/Gallery';
import ContentLists from '../components/ContentLists';
import ClientSection from '../components/ClientSection';
import GlobalCTA from '../components/GlobalCTA';
import ForConsidering from '../components/ForConsidering';
import LineCTA from '../components/LineCTA';

const Home = () => {
    return (
        <>
            <Hero />
            <Message />
            <NavigationHub />
            <Gallery />
            <ContentLists />
            <ClientSection />
            <GlobalCTA />
            <ForConsidering />
            <LineCTA />
        </>
    );
};

export default Home;
