export interface CardResponse {
    artist: string;
    artist_ids?: string[] | null;
    booster: boolean;
    border_color: string;
    card_back_id: string;
    cmc: number;
    collector_number: string;
    color_identity?: string[] | null;
    colors?: string[] | null;
    digital: boolean;
    edhrec_rank: number;
    finishes?: string[] | null;
    foil: boolean;
    frame: string;
    full_art: boolean;
    games?: string[] | null;
    highres_image: boolean;
    id: string;
    illustration_id: string;
    image_status: string;
    image_uris: ImageUris;
    keywords?: null[] | null;
    lang: string;
    layout: string;
    legalities: Legalities;
    mana_cost: string;
    multiverse_ids?: null[] | null;
    name: string;
    nonfoil: boolean;
    object: string;
    oracle_id: string;
    oracle_text: string;
    oversized: boolean;
    penny_rank: number;
    prices: Prices;
    prints_search_uri: string;
    promo: boolean;
    purchase_uris: PurchaseUris;
    rarity: string;
    related_uris: RelatedUris;
    released_at: string;
    reprint: boolean;
    reserved: boolean;
    rulings_uri: string;
    scryfall_set_uri: string;
    scryfall_uri: string;
    set: string;
    set_id: string;
    set_name: string;
    set_search_uri: string;
    set_type: string;
    set_uri: string;
    story_spotlight: boolean;
    tcgplayer_id: number;
    textless: boolean;
    type_line: string;
    uri: string;
    variation: boolean;
}
export interface ImageUris {
    art_crop: string;
    border_crop: string;
    large: string;
    normal: string;
    png: string;
    small: string;
}
export interface Legalities {
    alchemy: string;
    brawl: string;
    commander: string;
    duel: string;
    explorer: string;
    future: string;
    gladiator: string;
    historic: string;
    historicbrawl: string;
    legacy: string;
    modern: string;
    oldschool: string;
    pauper: string;
    paupercommander: string;
    penny: string;
    pioneer: string;
    premodern: string;
    standard: string;
    vintage: string;
}
export interface Prices {
    eur?: null;
    eur_foil?: null;
    tix?: null;
    usd?: null;
    usd_etched?: null;
    usd_foil?: null;
}
export interface PurchaseUris {
    cardhoarder: string;
    cardmarket: string;
    tcgplayer: string;
}
export interface RelatedUris {
    edhrec: string;
    tcgplayer_infinite_articles: string;
    tcgplayer_infinite_decks: string;
}
