module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve : {
        root: __dirname,
        alias: {
            // Greeter: 'public/components/Greeter.jsx',
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            About: 'app/components/About.jsx',
            NumConverter: 'app/components/NumConverter.jsx',
            NumberForm: 'app/components/NumberForm.jsx',
            BinTable: 'app/components/BinTable.jsx'
        },
        extensions: ['','.js','.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query : {
                    presets: ['react','es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};