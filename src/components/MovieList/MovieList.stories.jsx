import React from 'react'
import MovieList from './MovieList'

export default {
    component: MovieList,
    title: 'components/MovieList'
};

const Template = (args) => <MovieList {...args} />;

export const Default = Template.bind({});

Default.args = {
    movies: [
        {
            "adult": false,
            "backdrop_path": "/436mzGC6sSM1YsHxdtHD6jVtGxX.jpg",
            "genre_ids": [
                35,
                28
            ],
            "id": 866346,
            "original_language": "en",
            "original_title": "The Retirement Plan",
            "overview": "When Ashley and her young daughter Sarah get caught up in a criminal enterprise that puts their lives at risk, she turns to the only person who can help: her estranged father Matt, currently living the life of a retired beach bum in the Cayman Islands. Their reunion is fleeting as they are soon tracked down on the island by crime boss Donnie and his lieutenant Bobo. As Ashley, Sarah, and Matt become entangled in an increasingly dangerous web, Ashley quickly learns her father had a secret past that she knew nothing about and that there is more to her father than meets the eye.",
            "popularity": 100.103,
            "poster_path": "/kv4n3xgRWtkldaD4kyy1FvpW6bO.jpg",
            "release_date": "2023-08-24",
            "title": "The Retirement Plan",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 70
        },
        {
            "adult": false,
            "backdrop_path": "/dsWxCsAdsocMNQFbhe39ynAOhBa.jpg",
            "genre_ids": [
                28,
                80
            ],
            "id": 1049233,
            "original_language": "pl",
            "original_title": "Plan lekcji",
            "overview": "After a teacher dies, his best friend — a former cop — takes a job at the school where he worked to confront the gang he thinks was responsible.",
            "popularity": 23.534,
            "poster_path": "/wawP3mOUeRBrAtnbPwWK5eFaMdV.jpg",
            "release_date": "2022-11-23",
            "title": "Lesson Plan",
            "video": false,
            "vote_average": 6.255,
            "vote_count": 145
        },
        {
            "adult": false,
            "backdrop_path": "/3tkDMNfM2YuIAJlvGO6rfIzAnfG.jpg",
            "genre_ids": [
                18,
                878,
                53
            ],
            "id": 619264,
            "original_language": "es",
            "original_title": "El hoyo",
            "overview": "A mysterious place, an indescribable prison, a deep hole. An unknown number of levels. Two inmates living on each level. A descending platform containing food for all of them. An inhuman fight for survival, but also an opportunity for solidarity.",
            "popularity": 30.109,
            "poster_path": "/8ZX18L5m6rH5viSYpRnTSbb9eXh.jpg",
            "release_date": "2019-11-08",
            "title": "The Platform",
            "video": false,
            "vote_average": 6.986,
            "vote_count": 6353
        },
        {
            "adult": false,
            "backdrop_path": "/c535NH6JGgeJtJu8CvUFYnwltf6.jpg",
            "genre_ids": [
                16,
                878
            ],
            "id": 16306,
            "original_language": "fr",
            "original_title": "La Planète sauvage",
            "overview": "On the planet Ygam, the Draags, extremely technologically and spiritually advanced blue humanoids, consider the tiny Oms, human beings descendants of Terra's inhabitants, as ignorant animals. Those who live in slavery are treated as simple pets and used to entertain Draag children; those who live hidden in the hostile wilderness of the planet are periodically hunted and ruthlessly slaughtered as if they were vermin.",
            "popularity": 17.261,
            "poster_path": "/prq0j1S0K07UjwLZLF6oMGflRUI.jpg",
            "release_date": "1973-12-01",
            "title": "Fantastic Planet",
            "video": false,
            "vote_average": 7.677,
            "vote_count": 837
        },
        {
            "adult": false,
            "backdrop_path": "/50Wq7fY21obXVRICuljdlSigWvH.jpg",
            "genre_ids": [
                18,
                53
            ],
            "id": 910571,
            "original_language": "en",
            "original_title": "Fair Play",
            "overview": "An unexpected promotion at a cutthroat hedge fund pushes a young couple's relationship to the brink, threatening to unravel not only their recent engagement but their lives.",
            "popularity": 101.676,
            "poster_path": "/tGgojtD6vJKYeCfktAhhA1pmH0n.jpg",
            "release_date": "2023-09-28",
            "title": "Fair Play",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 245
        },
        {
            "adult": false,
            "backdrop_path": "/3LzSMuatf6E6xw6i9F8LnvBZmAy.jpg",
            "genre_ids": [
                18,
                10749,
                53
            ],
            "id": 988762,
            "original_language": "fr",
            "original_title": "Une zone à défendre",
            "overview": "Greg is a police lieutenant; he must collect informations on eco-activists, infiltrating them for months. Myriam, a young free woman, is fighting to save a forest from the building of a dam. They meet and fall in love on the Zone. A beautiful life, a joy that Greg discovers, despite the risks of being unmasked. For each of them, time is short: soon everything will disappear.",
            "popularity": 27.723,
            "poster_path": "/36wyM5ceCCIpu8lU88mxonYET71.jpg",
            "release_date": "2023-06-08",
            "title": "A Place to Fight For",
            "video": false,
            "vote_average": 6.854,
            "vote_count": 103
        }
    ],
    Images: 'https://image.tmdb.org/t/p/w500'
};

