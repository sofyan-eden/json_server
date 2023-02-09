import fs from "node:fs/promises"

const products: string[] = ["citation", "ticket", "package"]
const channels: string[] = ["Meter", "Enforcement_Web", "Enforcement_Mobile", "Thakii", "Motorist"]

const METER_HOUR_LIMIT: number = 1000
const ENFORCEMENT_DATABASE_LIMIT: number = 1000

type meterHour = {
  operation: string,
  product: string,
  channel: string,
  hours: number,
  total_Revenue: number,
}

type enforcmentDatabase = {
  latitude: number,
  longitude: number,
  revenue: number,
}

const data: {
  meterHoursCollections: meterHour[],
  enforcementDatabaseCollections: enforcmentDatabase[]
} = {
  meterHoursCollections: [],
  enforcementDatabaseCollections: []
}

const generateRandomMeterHour = (): meterHour => {
  let tmpChannel = channels[Math.floor(Math.random()*channels.length)];
  let tmpProduct = products[Math.floor(Math.random()*products.length)];
  let tmpHour = Math.floor(Math.random()*24)
  let tmpRevenue = Math.floor(Math.random()*1000)
  return {
    operation: "",
    product: tmpProduct,
    channel: tmpChannel,
    hours: tmpHour,
    total_Revenue: tmpRevenue
  }
}

const generateRandomEnforcementDatabase = (): enforcmentDatabase => {
  let tmpLatitude = (Math.random() * ( 26.278657 - 26.303268)) + 26.303268
  let tmpLongitude = (Math.random() * ( 50.223123 - 50.204998)) + 50.204998
  let tmpRevenue = Math.floor(Math.random()*1000)
  return {
    latitude: tmpLatitude,
    longitude: tmpLongitude,
    revenue: tmpRevenue
  }
}

for(let i = 0; i < METER_HOUR_LIMIT; i++) {
  let tmpMeterHour: meterHour = generateRandomMeterHour();
  data.meterHoursCollections.push(tmpMeterHour)
}

for(let i = 0; i < ENFORCEMENT_DATABASE_LIMIT; i++) {
  let tmpEnforcementDatabase: enforcmentDatabase = generateRandomEnforcementDatabase();
  data.enforcementDatabaseCollections.push(tmpEnforcementDatabase)
}


fs.writeFile("data.json", JSON.stringify(data))
.then(() => {
  console.log("The data have been written to the file")
}).catch(() => {
  console.log("The data can't be written to the file")
})

