import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less';
import { Button } from 'antd';

ReactDOM.render(
    <div>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
    </div>,
    document.getElementById('root')
);
