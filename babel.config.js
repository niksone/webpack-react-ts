module.exports = {
    presets: [
        '@babel/preset-react',
        '@babel/preset-typescript', 
        ['@babel/preset-env', {
            useBuiltIns: 'usage',
            corejs: '3.0.0',
        }]
    ],
}