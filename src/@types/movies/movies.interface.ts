export interface ListResponse<T> {
    page:          number;
    results:       T[];
    dates?:         Dates;
    total_pages:   number;
    total_results: number;
}

export interface Identification {
    name: string,
    id: number | string
}

export interface Dates {
    maximum: Date;
    minimum: Date;
}

// List response from API
export interface Genres {
    genres: Identification[]
}

// Field from data

export interface SpokenLanguage {
    english_name: string;
    iso_639_1:    string;
    name:         string;
}

export interface CreateBy extends Identification{
    credit_id: string,
    gender: number,
    profile_path: null | string;    
}

export interface ProductionCountry {
    iso_3166_1: string;
    name:       string;
}

export interface Network extends Identification{
    logo_path:      string;
    origin_country: string;
}

export interface TEpisodeToAir extends Identification{
    air_date: Date,
    episode_number: number,
    overview: string,
    production_code: string,
    runtime: number | null,
    season_number: number,
    show_id: number,
    still_path: string,
    vote_average: number,
    vote_count: number
}

export interface Season {
    air_date:      Date;
    episode_count: number;
    id:            number;
    name:          string;
    overview:      string;
    poster_path:   null;
    season_number: number;
}


// -------------------------------------------------------- Movie -------------------------------------------------------- //
export interface IMovie{
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title?:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date?:      Date;
    title?:             string;
    video?:             boolean;
    vote_average:      number;
    vote_count:        number;
    first_air_date?:    Date;
    name?:              string;
    origin_country?:    string[];
    original_name?:     string;
}

// -------------------------------------------------------- Movie Details -------------------------------------------------------- //

export interface IDetailMovie extends IMovie{
    genres: Identification[],
    seasons?: Season[],
    created_by?: CreateBy[],
    in_production: boolean,
    homepage: string | null,
    languages: string[],
    status: string,
    last_air_date: Date,
    last_episode_to_air?: TEpisodeToAir,
    next_episode_to_air?: TEpisodeToAir,
    networks?: Network[],
    production_companies: Network[],
    production_countries: ProductionCountry[],
    episode_run_time: number[],
    number_of_episodes: number,
    number_of_seasons: number,
    spoken_languages: SpokenLanguage[],
    tagline: string,
    type: string,
    belongs_to_collection?: any;
    budget?: number;
    imdb_id?: string;
    revenue?: number;
}

// -------------------------------------------------------- Append to Response -------------------------------------------------------- //


export interface Credits {
    cast: Cast[];
    crew: Cast[];
}

export interface Cast {
    adult:                boolean;
    gender:               number;
    id:                   number;
    known_for_department: string;
    name:                 string;
    original_name:        string;
    popularity:           number;
    profile_path:         null | string;
    character?:           string;
    credit_id:            string;
    order?:               number;
    department?:          string;
    job?:                 string;
}

export interface Videos{
    results: VideoDetail[];
}

interface VideoDetail{
    iso_639_1:    string;
    iso_3166_1:   string;
    name:         string;
    key:          string;
    site:         string;
    size:         number;
    type:         string;
    official:     boolean;
    published_at: Date;
    id:           string;
}








