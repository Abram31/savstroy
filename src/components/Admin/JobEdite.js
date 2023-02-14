import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';

export const JobEdite = (props) => {
    return (
        <Edit title='Edite Post' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='title' />
                <TextInput multiline source='body' />
                <DateInput label='Published' source='publishedAt' />
            </SimpleForm>
        </Edit>
    )
}
