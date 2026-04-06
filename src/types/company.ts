export interface Company {
    id: string;
    name: string;
    lat: number;
    lng: number;
    description: string;
    category: string[];
    logoUrl: string;
    headquarters: string;
    teamSize?: string;
    city?: string;
    state?: string;
    website?: string;
    linkedin?: string;
}
