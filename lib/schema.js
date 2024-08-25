// here goes database table create commands aka schema

import { pgTable, serial,text, varchar, timestamp } from "drizzle-orm/pg-core";
export const Crops = pgTable("crops",{
    id: serial("id").primaryKey(),
    createdBy: varchar("createdBy").notNull(),
    createdAt:timestamp("createdAt").defaultNow().notNull(),
    location:varchar("location").notNull(), 
    soilType: varchar("soilType").notNull(),
    cropType:varchar("cropType").notNull(),
    temperature:varchar("temperature").notNull(),
    rainfall:varchar("rainfall").notNull(),
    predictionResults:text("predictionResults"),
    suggestions:text("suggestions"),
    cropID:varchar("cropID").notNull(),
});

