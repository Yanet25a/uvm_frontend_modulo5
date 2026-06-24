const path = require('path');
const yaml = require('yamljs');
const json5 = require('json5');
const WorkboxPlugin =require('workbox-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins:[
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,  //identifica los archivos css
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg)$/i,  //identifica los archivos de imagen
                type: 'asset/resource', //debe ser tipo porque obtiene la img
            },
            {
                test: /\.csv$/i,  //identifica los archivos csv
                use: ['csv-loader'],
            },
            {
                test: /\.yaml$/i,  //identifica los archivos yaml
                type: 'json',
                parser:{
                    parse: yaml.parse
                }
            },
            {
                test: /\.json5$/i,  //identifica los archivos json5
                type: 'json',
                parser: {
                    parse: json5.parse
                }
            },


        ],
    }, 

};