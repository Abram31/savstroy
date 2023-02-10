import React, { createRef } from 'react'
import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';
import { basePath, routes } from '../../../../routes/routes';
import module from './Navigate.module.scss'

export const navRef = createRef(null)
export const Navigate = () => {
    const { pathname } = useLocation()
    return (
        <div ref={navRef} className={module.wrapper_navigate}>
            <Nav
                activeKey="/home"
                // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                className={module.navigate}
            >
                {Object.entries(routes).map((route, index) => {
                    return (
                        <Nav.Item key={index}>
                            <Nav.Link className={`${module.link} ${pathname===route[1].path ? module.active : null}` } href={basePath + route[1].path}>{route[1].title}</Nav.Link>
                        </Nav.Item>
            )
                })}
        </Nav>
        </div >
    )
}
