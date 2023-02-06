import React from 'react'
import Nav from 'react-bootstrap/Nav';
import module from './Navigate.module.scss'

export const Navigate = () => {
    return (
        <div className={module.wrapper_navigate}>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                className={module.navigate}
            >
                <Nav.Item>
                    <Nav.Link className={module.link} href="/home">Услуги</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={module.link} eventKey="link-1">Наши работы</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={module.link} eventKey="link-2">Вакансии</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={module.link} eventKey="link-2">О компании</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                <Nav.Link className={module.link} eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav.Item> */}
            </Nav>
        </div>
    )
}
