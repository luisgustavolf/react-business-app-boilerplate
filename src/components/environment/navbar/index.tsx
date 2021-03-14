import * as React from 'react'
import { NavbarItem } from './types'

export interface NavbarProps {
    items: NavbarItem[],
    onNavigate: (path: string) => void
}

export function Navbar(props:NavbarProps) {

    // ---------------------------------------------
    // Render

    return (
        <div className={'dc-navbar'}>
            <ul>
                {props.items.map((item, idx) => 
                    <li key={idx}>
                        <a 
                            href={'#a'}
                            onClick={(evt) => { 
                                evt.preventDefault(); 
                                props.onNavigate(item.path)
                            }}
                        >
                            {item.title}
                        </a>
                    </li>
                )}
            </ul>
            <hr />
        </div>
    )
}