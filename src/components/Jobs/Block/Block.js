import React, { Fragment, useEffect, useState } from 'react'
import { BASE_PATH_API_SERVER } from '../../../constants/constants'
import { fetchRequest } from '../../../fetch/fetchRequest'
import module from './Block.module.scss'
import { Chapter } from './Chapter/Chapter'
import CircularProgress from '@material-ui/core/CircularProgress';


export const Block = () => {
    const [state, setState] = useState(null)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        (async () => {
            const res = await fetchRequest({ path: BASE_PATH_API_SERVER}) 
            setState(res)
            setLoader(false)
        }
        )()

    }, [])
    return (
        <Fragment>
            {loader && <div className={module.preloader}>
                <CircularProgress color='black' />
            </div>}
            {state && state.map((data, index) => {
                return (
                    <div className={module.wrapper} key={index}>

                        <div className={module.block_jobs}>
                            <h4 className={module.title}>{data.title}</h4>
                            <Chapter title={data.responsibilities.name} text={data.responsibilities.text} />
                            <Chapter title={data.requirements.name} text={data.requirements.text} />
                            <Chapter title={data.conditions.name} text={data.conditions.text} />
                            <Chapter title={data.wage.name} text={data.wage.text} />
                            <Chapter title={data.contactPerson.name} text={data.contactPerson.phones} name={data.contactPerson.contactPerson} phones={data.contactPerson.phones} />
                        </div>
                    </div>

                )
            })}
        </Fragment>
    )
}
