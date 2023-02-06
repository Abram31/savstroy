import React from 'react'
import { typesWorks } from '../../../../../../constants/constants'
import module from './TypeWork.module.scss'
import Button from 'react-bootstrap/Button';


export const TypeWork = ({type}) => {
    return (
        <Button className={module.wrapper}>
            {type}
        </Button>
    )
}
