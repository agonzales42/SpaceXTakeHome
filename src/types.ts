export interface LaunchBrief {
    id: React.Key | null | undefined,
    name: string,
    date: Date,
    flight_number: number,
}

interface Fairing {
    reused: boolean | null,
    recovery_attempt: boolean | null,
    recovered: boolean | null,
    ships: Array<string | null>,
}

interface Patch {
    small: string | null,
    large: string | null,
}

interface Reddit {
    campaign: string | null,
    launch: string | null,
    media: string | null,
    recovery: string | null,
}

interface Flickr {
    small: Array<string | null>,
    original: Array<string | null>,
}

interface Links {
    patch: Patch | null,
    reddit: Reddit | null,
    flickr: Flickr | null,
    presskit: string  | null,
    webcast: string | null,
    youtube_id: string | null,
    article: string | null,
    wikipedia: string | null,
}

export interface Failure {
    time: number | null,
    altitude: number | null,
    reason: string | null,
}

export interface Crew {
    crew: string,
    role: string,
}

export interface Core {
    core: string | null,
    flight: number | null,
    gridfins: boolean | null,
    legs: boolean | null,
    reused: boolean | null,
    landing_attempt: boolean | null,
    landing_success: boolean | null,
    landing_type: string | null,
    landpad: string | null,
}

export interface LaunchDetailed {
    id: string, //
    fairings: Fairing | null, //
    links: Links
    net: boolean,
    window: Number | null,
    rocket: string, //
    success: boolean, //
    failures: Array<Failure | null> //
    details: string, // 
    crew: Array<Crew | null> //
    ships: Array<string | null> //
    capsules: Array<string | null> //
    payloads: Array<string | null> // 
    launchpad: string, // 
    flight_number: number, //
    name: string, // 
    date_utc: Date, //
    upcoming: boolean, //
    cores: Array<Core>
    auto_update: boolean,
    tbd: boolean, //
    launch_library_id: string | null,    
}