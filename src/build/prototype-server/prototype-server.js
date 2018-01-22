const express = require('express');
const Path = require('path');
const middleware = require('webpack-dev-middleware');
const webpack = require('webpack');
import webpackConfig from '../../../webpack.config';
const PrototypeServer = {
    startLocal(config, port) {
        const httpApp = express();
        ['http'].concat(config.indexServingPaths).forEach(path => {
            httpApp.get(path, (req,res) => {
                res.sendFile(Path.resolve(process.cwd() + '/' + config.index ))
            })
        });

        config.staticAssets.forEach(staticAssets => {
            httpApp.use(staticAssets.as, express.static(process.cwd() + '/' + staticAssets.dir));
        });
        const compiler = webpack(webpackConfig);
        httpApp.use(middleware(compiler, {
            noInfo: true,
            publicPath: '/'
        }));
        const server = require('http').createServer(httpApp);
        server.listen(port, () => {
            console.log(`Server start port: ${port}`);
        })
    }
}

exports.PrototypeServer = PrototypeServer;