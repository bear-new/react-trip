import React from 'react';
import { renderTostring } from 'react-dom/server';

export function render() {
    return renderTostring(<hl >Hello,Webpack</hl>)
}
