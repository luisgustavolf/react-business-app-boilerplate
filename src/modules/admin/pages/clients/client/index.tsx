import * as React from 'react'
import { RouteChildrenProps } from 'react-router'

export interface ClientPageUrlParams {
    clientUuid?: string
}

export function ClientPage(props: RouteChildrenProps<ClientPageUrlParams> ) {

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <div className={'mc2-ClientPage'}>
            Crud de cliente
        </div>
    )
}