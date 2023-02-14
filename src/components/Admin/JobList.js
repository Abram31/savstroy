import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

export const JobList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='title' />
                <TextField source='publishedAt' />
                <EditButton basepath='/posts' />
                <DeleteButton basepath='/posts' />
            </Datagrid>
        </List>
    )
}
