import plugin from 'tailwindcss/plugin'
import { button } from './lib/button'
import { Layout } from './lib/Layout/Layout'
import { accrodian } from './lib/arcrodian';
import { loading } from './lib/loading';
import { slider } from './lib/slider';
import { text } from './lib/text';
import { blob } from './lib/blob';
import { parallax } from './lib/parallax';
import { snap } from './lib/snap';

const components = Object.assign({}, 
    button, 
    Layout , 
    accrodian , 
    loading , 
    slider,
    text,
    blob,
    parallax,
    snap
);

module.exports = plugin(
    function({addComponents}){
        addComponents(components)
    }
)