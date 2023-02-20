export interface Company {
    id: number;
    name: string;
    logo_url: string;
    discord_rpc: {
        eut2_app_id: string;
        ats_app_id: string;
    };
    driver_count: { current: 110, max: 500 };
};

export interface Driver {
    id: number;
    steam_id: string;
    username: string;
    profile_photo_url: string;
    client: {
        is_installed: boolean;
        version: {
            version: string;
            branch: string;
            platform: string;
        }
    },
    settings: {
        eut2: {
            job_logging: boolean;
            live_tracking: boolean;
        },
        ats: {
            job_logging: boolean;
            live_tracking: boolean;
        }
    },
    is_banned: boolean;
    last_active: string;
};