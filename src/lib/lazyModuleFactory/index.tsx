import * as React from 'react'
import { ComponentType } from 'react';

export function lazyModuleFactory<T extends ComponentType<any>>(factory: () => Promise<{ default: T }>) {

    const LazyModule = React.lazy(factory) as any;

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return () => (
        <React.Suspense fallback={'...'}>
            <LazyModule />
        </React.Suspense>
    )
}