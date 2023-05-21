import React from 'react'

import appLogo from '../images/logo.png'

import appleStoreBadge from '../images/apple_store_badge.svg'
import googlePlayBadge from '../images/google_play_badge.png'

import coverImage from '../images/amplichat_iphones_two.png'

// endorsement images
import java from '../images/java.png'
import studio from '../images/studio.png'
import gradle from '../images/gradle.png'
import sql from '../images/sql.png'
import spindrifthome_filled from '../images/sh_unfill_1024.png'


// section images
import guitar from '../images/guitar.jpg'
import event_phones from '../images/event_phones.jpeg'
import foggy_blue from '../images/foggy_blue.jpg'
import purple_phones from '../images/purple_phones.png'
import purple_light from '../images/purple_light.jpg'
import concert_classic from '../images/concert_classic.jpg'

import discordImage from '../images/discord.png'

export const initialState = {
    // when in dev, change appURL to local url
    // appURL: 'http://localhost:3000',  
    // when in production, change appURL to real url
    appURL: 'http://localhost:3000',

    appLogo: appLogo,
    appName: 'Fitness Time',

    coverTitle: 'Get in shape with Fitness Time',
    coverText: 'Fitness Time is a fitness app that helps you get in shape and stay in shape. It is a great way to track your progress and stay motivated. You can also connect with other users to share tips and tricks for staying healthy. Join today!',
    appleStoreBadge: appleStoreBadge,
    appleStoreLink: '/',
    googlePlayBadge: googlePlayBadge,
    googlePlayLink: '/',

    coverImage: coverImage,

    endorsementTitle: `Fitness Time is built using various technologies `,
    endorsementText: `In order to build a great product, we need to use the best tools available. We use a variety of technologies to build our products, including Java, Android Studio, SQLlite,Gradle and more.`,
    endorsementList: [
        {
            title: `Java`,
            titleColor: `orangeRed`,
            image: java,
            URL: `https://www.java.com/en/`,
        },
        {
            title: `Android Studio: Mobile App Development`,
            titleColor: `forestGreen`,
            image: studio,
            URL: `https://developer.android.com/studio`,
        },
        {
            title: `Gradle`,
            titleColor: `blue`,
            image: gradle,
            URL: `https://gradle.org/`,
        },
        {
            title: `SQLite`,
            titleColor: `black`,
            image: sql,
            URL: `https://www.sqlite.org/index.html`,
        },
    ],

    sectionList: [
        {
            'title': `Event Networking Made Easy`,
            'text': `Tired of shouting over the music to talk to your friends at concerts and events? Our app makes it easy to chat with others in real-time, so you can enjoy the experience without missing out on socializing.`,
            'image': guitar,
        },
        {
            'title': `Expand Your Event Community`,
            'text': `Meet like-minded people and share your excitement for the latest events and concerts.`,
            'image': event_phones,
        },
        {
            'title': `Enhance Event Experience`,
            'text': `Get instant access to a community of passionate event and concert-goers with our app! Chat with others before, during, and after the event to enhance your experience and create memories that last a lifetime.`,
            'image': foggy_blue,
        },
        {
            'title': `Chat with Attendees`,
            'text': `Don't let social anxiety get in the way of enjoying your favorite events and concerts! With our app, you can chat with others and make new friends in a safe, welcoming environment.`,
            'image': purple_phones,
        },
        {
            'title': `Discover New Events and Friends`,
            'text': `Our app is the perfect way to enhance your experience at events and concerts! Connect with others, share your thoughts and opinions, and discover new artists and events to love.`,
            'image': purple_light,
        },
        {
            'title': `Connect with Concert Fans`,
            'text': `Whether you're a seasoned concert-goer or a first-time attendee, our app is the perfect way to connect with others and make the most of your experience. Download now and start chatting!`,
            'image': concert_classic,
        },
    ],

    discordImage: discordImage,
    discordLink: 'https://discord.com/invite/aFQPYyAVDq',
}

const initialContext = {
    state: initialState,
    dispatch: () => null,
}

export const Context = React.createContext(initialContext)
