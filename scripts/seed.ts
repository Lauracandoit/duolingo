import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"
import * as schema from "../db/schema";
import { isGeneratorObject } from "util/types";
const sql = neon(process.env.DATABASE_URL!);
//@ts-ignore
const db = drizzle(sql, { schema });;
const main = async () => {
    try {
        console.log("Seeding database");

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);
        await db.delete(schema.userSubscription);

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Le Thi",
                imageSrc: "/es.svg",
            },
            {
                id: 2,
                title: "Japanese",
                imageSrc: "/jp.svg",
            },
            {
                id: 3,
                title: "Italian",
                imageSrc: "/it.svg",
            },
            {
                id: 4,
                title: "French",
                imageSrc: "/fr.svg",
            },
        ]),

            await db.insert(schema.units).values([
                {
                    id: 1,
                    courseId: 1,
                    title: "Unit 1",
                    description: "Let's check if you understand Le Nguyet",
                    order: 1,
                }
            ]);
        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1,
                order: 1,
                title: "Nouns"
            },
            {
                id: 2,
                unitId: 1,
                order: 2,
                title: "Verds"
            },
            {
                id: 3,
                unitId: 1,
                order: 3,
                title: "Verds"
            },
            {
                id: 4,
                unitId: 1,
                order: 4,
                title: "Verds"
            },
            {
                id: 5,
                unitId: 1,
                order: 5,
                title: "Verds"
            },
        ]),

            await db.insert(schema.challenges).values([
                {
                    id: 1,
                    lessonId: 1,
                    type: "SELECT",
                    order: 1,
                    question: 'When is Le Nguyet birthday? '
                },
                {
                    id: 2,
                    lessonId: 1,
                    type: "ASSIST",
                    order: 2,
                    question: '"Which is le Thi favorite color"'
                },
                {
                    id: 3,
                    lessonId: 1,
                    type: "SELECT",
                    order: 3,
                    question: 'which food Le Nguyet like the most"'
                },
            ])
        await db.insert(schema.challenges).values([
            {
                id: 4,
                lessonId: 2,
                type: "SELECT",
                order: 1,
                question: 'Which one of these is the "the man"? '
            },
            {
                id: 5,
                lessonId: 2,
                type: "ASSIST",
                order: 2,
                question: '"the man"'
            },
            {
                id: 6,
                lessonId: 2,
                type: "SELECT",
                order: 3,
                question: 'which one of this is "the robot"'
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                id: 1,
                challengeId: 1, //Which one of these is the "the man"?
                imageSrc: "/man.svg",
                correct: true,
                text: "7/4",
                audioSrc: "/es_man.mp3",
            },

            {
                id: 2,
                challengeId: 1, //Which one of these is the "the man"?
                imageSrc: "/woman.svg",
                correct: false,
                text: "6/4",
                audioSrc: "/es_woman.mp3",
            },

            {
                id: 3,
                challengeId: 1, //Which one of these is the "the man"?
                imageSrc: "/robot.svg",
                correct: false,
                text: "4/8",
                audioSrc: "/es_robot.mp3",
            },

        ])

        await db.insert(schema.challengeOptions).values([
            {
                id: 4,
                challengeId: 2, // "the man"?
                correct: true,
                text: "blue",
                audioSrc: "/es_man.mp3",
            },
            {
                id: 5,
                challengeId: 2, // "the man"?
                correct: false,
                text: "red",
                audioSrc: "/es_robot.mp3",
            },
            {
                id: 6,
                challengeId: 2, // "the man"?
                correct: false,
                text: "orange",
                audioSrc: "/es_robot.mp3",
            },
        ])
        await db.insert(schema.challengeOptions).values([
            {
                id: 7,
                challengeId: 3, // which one of this is "the robot"
                imageSrc: "/woman.svg",
                correct: false,
                text: "mushroom",
                audioSrc: "/es_man.mp3",
            },
            {
                id: 8,
                challengeId: 3, // which one of this is "the robot"
                imageSrc: "/woman.svg",
                correct: false,
                text: "chicken",
                audioSrc: "/es_robot.mp3",
            },
            {
                id: 9,
                challengeId: 3, // which one of this is "the robot"
                imageSrc: "/robot.svg",
                correct: true,
                text: "pork",
                audioSrc: "/es_robot.mp3",
            },
        ])


        console.log("seeeding finsihed")

    } catch (error) {
        console.error(error);
        throw new Error("Failed to seed the database")
    }
}
main()