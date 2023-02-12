import React, { Fragment } from 'react'
import { aboutUs } from '../../../data/aboutUs'
import { jobs } from '../../../data/jobs'
import module from './Block.module.scss'
import { Chapter } from './Chapter/Chapter'



export const Block = () => {
    return (
        <div className={module.wrapper}>
            <div className={module.block_jobs}>
                {jobs.map((data, index) => {
                    return (
                        <Fragment key={index}>
                            <h4 className={module.title}>{data.title}</h4>
                            <Chapter title={data.responsibilities.name} text={data.responsibilities.text} />
                            <Chapter title={data.requirements.name} text={data.requirements.text} />
                            <Chapter title={data.conditions.name} text={data.conditions.text} />
                            <Chapter title={data.wage.name} text={data.wage.text} />
                            <Chapter title={data.contactPerson.name} text={data.contactPerson.phones} name={data.contactPerson.contactPerson} phones={data.contactPerson.phones}/>
                        </Fragment>
                    )
                })}
            </div>
        </div>
    )
}
