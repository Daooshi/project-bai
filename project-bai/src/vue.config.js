module.exports = {
    devServer: {
        open: process.platform === 'darwin',
        host: '192.168.0.17',
        port: 8080, // CHANGE YOUR PORT HERE!
        https: true,
        hotOnly: false,
    },
}