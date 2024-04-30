import { Edit, SelectInput,  ReferenceInput, BooleanField, SimpleForm, TextInput, required, BooleanInput } from "react-admin";

export const ChallengeOptionEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source="text" validate={[required()]} label="Question" />
                < BooleanInput source="correct" label="Correct Option" />
                <ReferenceInput source="challengeId" reference="challenges" perPage={100} sort={{ field: 'id', order: 'ASC' }}>
                    <SelectInput optionText="question" />
                </ReferenceInput>
                <TextInput source="imageSrc" label="Image Url" />
                <TextInput source="audioSrc" label="Audio Url" />

            </SimpleForm>
        </Edit>
    )

}