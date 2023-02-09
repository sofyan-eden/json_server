"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("node:fs/promises"));
const products = ["citation", "ticket", "package"];
const channels = ["Meter", "Enforcement_Web", "Enforcement_Mobile", "Thakii", "Motorist"];
const METER_HOUR_LIMIT = 1000;
const ENFORCEMENT_DATABASE_LIMIT = 1000;
const data = {
    meterHoursCollections: [],
    enforcementDatabaseCollections: []
};
const generateRandomMeterHour = () => {
    let tmpChannel = channels[Math.floor(Math.random() * channels.length)];
    let tmpProduct = products[Math.floor(Math.random() * products.length)];
    let tmpHour = Math.floor(Math.random() * 24);
    let tmpRevenue = Math.floor(Math.random() * 1000);
    return {
        operation: "",
        product: tmpProduct,
        channel: tmpChannel,
        hours: tmpHour,
        total_Revenue: tmpRevenue
    };
};
const generateRandomEnforcementDatabase = () => {
    let tmpLatitude = (Math.random() * (26.278657 - 26.303268)) + 26.303268;
    let tmpLongitude = (Math.random() * (50.223123 - 50.204998)) + 50.204998;
    let tmpRevenue = Math.floor(Math.random() * 1000);
    return {
        latitude: tmpLatitude,
        longitude: tmpLongitude,
        revenue: tmpRevenue
    };
};
for (let i = 0; i < METER_HOUR_LIMIT; i++) {
    let tmpMeterHour = generateRandomMeterHour();
    data.meterHoursCollections.push(tmpMeterHour);
}
for (let i = 0; i < ENFORCEMENT_DATABASE_LIMIT; i++) {
    let tmpEnforcementDatabase = generateRandomEnforcementDatabase();
    data.enforcementDatabaseCollections.push(tmpEnforcementDatabase);
}
promises_1.default.writeFile("data.json", JSON.stringify(data))
    .then(() => {
    console.log("The data have been written to the file");
}).catch(() => {
    console.log("The data can't be written to the file");
});
