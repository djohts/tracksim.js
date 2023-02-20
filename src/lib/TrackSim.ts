import type { Company } from "../@types";
import DriverManager from "./DriverManager";
import type { AxiosInstance } from "axios";
import axios from "axios";

class TrackSim {
    apiKey: string;
    AxiosInstance: AxiosInstance;

    /**
     * @param apiKey Your TrackSim API key.
     * @example
     * const tracksim = new TrackSim("your-api-key");
     */
    constructor(apiKey: string) {
        if (!apiKey) throw new Error("No API key provided.");
        if (!apiKey.length) throw new Error("API key should be a non-empty string.");

        this.apiKey = apiKey;

        this.AxiosInstance = axios.create({
            baseURL: "https://api.tracksim.app/v1",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Api-Key ${this.apiKey}`
            }
        });
    };

    /**
     * Get information about your company.
     * @example
     * const company = await tracksim.company();
     * console.log(company);
     * @returns {Promise<Company>}
     * @see https://docs.tracksim.app/docs/api/authentication#run-a-test
     */
    async company(): Promise<Company> {
        const response = await this.AxiosInstance.get<Company>("/me");
        return response.data;
    };

    /**
     * Manage your company's drivers.
     * @type {DriverManager}
     * @readonly
     */
    get drivers(): DriverManager {
        return new DriverManager(this);
    };
};

export = TrackSim;