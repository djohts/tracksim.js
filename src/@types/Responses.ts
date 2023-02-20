export interface MeResponse {
    id: number;
    name: string;
    logo_url: string;
    discord_rpc: {
        eut2_app_id: string;
        ats_app_id: string;
    };
    driver_count: { current: 110, max: 500 };
};