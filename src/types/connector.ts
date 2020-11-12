export type ConnectorParams = {
    url: string,
    auth?: string
};

export type QueryString = {
    offset: string
}

export type Header = {
    'User-Agent': string,
    'Content-Type': string,
    'Accept': string
    'Connection': string
    'Authorization': string | null
};


