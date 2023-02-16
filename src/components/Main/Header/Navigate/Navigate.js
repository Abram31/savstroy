import React, { createRef } from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from 'react-router-dom';
import { basePath, routes } from '../../../../routes/routes';
import module from './Navigate.module.scss'

export const navRef = createRef(null)
export const Navigate = () => {
    const { pathname } = useLocation()
    const path = pathname.split('/').join('');
    return (
        <div ref={navRef} className={module.wrapper_navigate}>
            <Nav
                activeKey="/home"
                className={module.navigate}
            >
                {Object.entries(routes).map((route, index) => {
                    return (
                        <Nav.Item key={index}>
                            <Link className={`${module.link} ${path === route[1].path.split('/').join('') ? module.active : null}` } to={route[1].path}>{route[1].title}</Link>
                        </Nav.Item>
            )
                })}
        </Nav>
        </div >
    )
}
