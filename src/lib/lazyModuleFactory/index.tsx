import * as React from 'react'
import { ComponentType } from 'react';

export function getLazyLoadContainerFor<T extends ComponentType<any>>(factory: () => Promise<{ default: T }>) {

    const LazyModule = React.lazy(factory) as React.LazyExoticComponent<any>;

    return () => {
        return (
            <React.Suspense fallback={'Loading...'}>
                <LazyModule />
            </React.Suspense>
        )
    }
}