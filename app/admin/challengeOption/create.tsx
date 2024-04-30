import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput, required, BooleanInput } from "react-admin";

export const ChallengeOptionCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="text" validate={[required()]} label="Text" />
                < BooleanInput source="correct" label="Correct Option" />
                <ReferenceInput source="challengeId" reference="challenges" perPage={100} sort={{ field: 'id', order: 'ASC' }}>
                    <SelectInput optionText="question" />
                
                </ReferenceInput>
                <TextInput source="imageSrc" label="Image Url" />
                <TextInput source="audioSrc" label="Audio Url" />
            </SimpleForm>
        </Create>
    )

}

// export const challengeOptions = pgTable("challenge_options", {
//     id: serial("id").primaryKey(),
//     challengeId: integer("challenge_id")
//         .references(() => challenges.id, {
//             onDelete: "cascade",
//         })
//         .notNull(),
//     text: text("text").notNull(),
//     correct: boolean("correct").notNull(),
//     imageSrc: text("image_src"),
//     audioSrc: text("audio_src"),
// });