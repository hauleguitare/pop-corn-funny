import { Identification } from "@/@types/movies";
import { type } from "os";


export interface IListProps extends Identification {
    url?: string
    subMenu?: IListProps[]
}


export const MenuList: IListProps[] =[
    {
        id: 'movie',
        name: 'movies',
        subMenu: [
            {
                id: 'movie_popular',
                name: 'popular',
                url: '/popular'
            },
            {
                id: 'movie_top-rated',
                name: 'top rated',
                url: '/top-rated'
            },
            {
                id: 'movie_now-playing',
                name: 'now playing',
                url: '/now-playing'
            },
            {
                id: 'movie_upcoming',
                name: 'up coming',
                url: '/upcoming'
            }
        ]
    },
    {
        id: 'tv',
        name: 'tv shows',
        subMenu: [
            {
                id: 'tv_popular',
                name: 'popular',
                url: '/upcoming'
            },
            {
                id: 'tv_top-rated',
                name: 'top rated',
                url: '/top-rated'
            },
            {
                id: 'tv_airing-today',
                name: 'airing today',
                url: '/airing-today'
            },
            {
                id: 'tv_on-tv',
                name: 'on tv',
                url: '/on-tv'
            }
        ]
    },
    {
        id: 'people',
        name: 'people',
        subMenu: [{
            id: 'people_popular',
            name: 'popular',
            url: '/popular'
        }]
    },
    {
        id: 'more',
        name: 'more',
        subMenu: [
            {
                id: 'more_information',
                name: 'information',
                url: '/information'
            },
            {
                id: 'more_support',
                name: 'support',
                url: '/support'
            }
        ]
    },
]

export const LoginList: IListProps[] = [
    {
        id: 'login',
        name: 'login',
        url: '/login'
    },
    {
        id: 'register',
        name: 'register',
        url: 'register'
    }
]

export const TrendingProps = {
    time_windows: ['day', 'week'],
    media_type: [
        {
            id: 'all',
            name: 'all'
        },
        {
            id: 'movie',
            name: 'movies'
        },
        {
            id: 'tv',
            name: 'tv shows'
        }
    ]
}

export const PopularProps = {
    id: 'popular',
    name: 'popular',
    type: [
        {
            id: 'movie',
            name: 'movies'
        },
        {
            id: 'tv',
            name: 'tv shows'
        }
    ]
}

export const TopRatedProps = {
    id: 'top-rated',
    name: 'top rated',
    type: [
        {
            id: 'movie',
            name: 'movies'
        },
        {
            id: 'tv',
            name: 'tv shows'
        }
    ]
}


export const OnTvProps = {
    id: 'on-the-air',
    name: 'on the air',
    type: [
        {
            id: 'tv',
            name: 'tv shows'
        }
    ]
}

export const UpcomingProps = {
    id: 'upcoming',
    name: 'upcoming',
    type: [
        {
            id: 'movie',
            name: 'movies'
        }
    ]
}

export const AiringTodayProps = {
    id: 'airing-today',
    name: 'aringtoday',
    type: [
        {
            id: 'tv',
            name: 'tv shows'
        }
    ]
}
