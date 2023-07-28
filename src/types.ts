export interface LaunchBrief {
    id: React.Key | null | undefined,
    name: String,
    date: Date,
    flight_number: number,
}

interface Fairing {
    reused: Boolean | null,
    recovery_attempt: Boolean | null,
    recovered: Boolean | null,
    ships: Array<String | null>,
}

interface Patch {
    small: String | null,
    large: String | null,
}

interface Reddit {
    campaign: String | null,
    launch: String | null,
    media: String | null,
    recovery: String | null,
}

interface Flickr {
    small: Array<String | null>,
    original: Array<String | null>,
}

interface Links {
    patch: Patch | null,
    reddit: Reddit | null,
    flickr: Flickr | null,
    presskit: String  | null,
    webcast: String | null,
    youtube_id: String | null,
    article: String | null,
    wikipedia: String | null,
}

export interface Failure {
    time: number | null,
    altitude: number | null,
    reason: String | null,
}

export interface Crew {
    crew: String,
    role: String,
}

export interface Core {
    core: String | null,
    flight: number | null,
    gridfins: Boolean | null,
    legs: Boolean | null,
    reused: Boolean | null,
    landing_attempt: Boolean | null,
    landing_success: Boolean | null,
    landing_type: String | null,
    landpad: String | null,
}

export interface LaunchDetailed {
    id: String, //
    fairings: Fairing | null, //
    links: Links
    net: Boolean,
    window: Number | null,
    rocket: String, //
    success: Boolean, //
    failures: Array<Failure | null> //
    details: String, // 
    crew: Array<Crew | null> //
    ships: Array<String | null> //
    capsules: Array<String | null> //
    payloads: Array<String | null> // 
    launchpad: String, // 
    flight_number: number, //
    name: String, // 
    date_utc: Date, //
    upcoming: Boolean, //
    cores: Array<Core>
    auto_update: Boolean,
    tbd: Boolean, //
    launch_library_id: String | null,    
}