import type { Driver, ManageDriverOptions } from "../@types";
import type TrackSim from "./TrackSim";

class DriverManager {
    private TrackSim: TrackSim;

    constructor(TrackSim: TrackSim) {
        this.TrackSim = TrackSim;
    };

    /**
     * Add a driver to your company.
     * @param steamId The Steam ID of the driver.
     * @example
     * const driver = await tracksim.drivers.add("76561198000000000");
     * console.log(driver);
     * @returns {Promise<Driver>}
     * @see https://docs.tracksim.app/docs/api/adding-removing-drivers#adding-drivers-via-our-api
     */
    async add(steamId: string): Promise<Driver> {
        if (!steamId) throw new Error("No Steam ID provided.");
        if (!steamId.length) throw new Error("Steam ID should be a non-empty string.");

        const response = await this.TrackSim.AxiosInstance.post<Driver>("/drivers", {
            steam_id: steamId
        });
        return response.data;
    };

    /**
     * Remove a driver from your company.
     * Returns 200 if the driver was removed successfully.
     * @param steamId The Steam ID of the driver.
     * @example
     * const status = await tracksim.drivers.remove("76561198000000000");
     * console.log(status);
     * @returns {Promise<number>}
     * @see https://docs.tracksim.app/docs/api/adding-removing-drivers#removing-drivers-via-our-api
     */
    async remove(steamId: string): Promise<number> {
        if (!steamId) throw new Error("No Steam ID provided.");
        if (!steamId.length) throw new Error("Steam ID should be a non-empty string.");

        const response = await this.TrackSim.AxiosInstance.delete("/drivers", {
            data: {
                steam_id: steamId
            }
        });
        return response.status;
    };

    /**
     * Get details about a driver.
     * @param steamId The Steam ID of the driver.
     * @example
     * const driver = await tracksim.drivers.details("76561198000000000");
     * console.log(driver);
     * @returns {Promise<Driver>}
     * @see https://docs.tracksim.app/docs/api/endpoints#get-driver-details
     */
    async details(steamId: string): Promise<Driver> {
        if (!steamId) throw new Error("No Steam ID provided.");
        if (!steamId.length) throw new Error("Steam ID should be a non-empty string.");

        const response = await this.TrackSim.AxiosInstance.get<Driver>(`/drivers/${steamId}/details`);
        return response.data;
    };

    /**
     * Change driver's settings.
     * @param steamId The Steam ID of the driver.
     * @param options New settings for the driver.
     * @example
     * const driver = await tracksim.drivers.manage("76561198000000000", {
     *     eut2_job_logging: true,
     *     eut2_live_tracking: true,
     *     ats_job_logging: true,
     *     ats_live_tracking: true
     * });
     * console.log(driver);
     * @returns {Promise<Driver>}
     * @see https://docs.tracksim.app/docs/api/endpoints#managing-drivers-via-our-api
     */
    async manage(steamId: string, options: ManageDriverOptions): Promise<Driver> {
        if (!steamId) throw new Error("No Steam ID provided.");
        if (!steamId.length) throw new Error("Steam ID should be a non-empty string.");

        if (!options) throw new Error("No options provided.");
        if (typeof options !== "object") throw new Error("Options should be an object.");

        const response = await this.TrackSim.AxiosInstance.patch<Driver>(`/drivers/${steamId}/manage`, {
            options
        });
        return response.data;
    };
};

export = DriverManager;