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