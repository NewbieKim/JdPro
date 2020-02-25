module.exports = {
    //这里写webpack的配置
    configureWebpack: {
        devServer: {
            contentBase: './dist',
            hot: true,
            open: true,
            //compress: true,
            port: 9000,
            //mock接口编写
            before(app) {
                //注册接口
                //用户信息池
                let userpool = [
                    { username: 'kim', password: '123456' },
                    { username: 'kily', password: '123456' },
                    { username: '江艳芳', password: '123456' }
                ]
                app.get('/api/register', (req, res) => {
                        //请求返回的一个对象 解构赋值
                        const { username, password } = req.query
                        const userlength = userpool.filter(u => u.username == username).length
                        if (userlength > 0) {
                            res.json({
                                success: false,
                                message: '用户名已存在'
                            })
                        } else {
                            res.json({
                                success: true,
                                message: '注册成功'
                            })
                        }
                    })
                    //登录接口
                let tokenkey = 'jdpro'
                app.get('/api/login', (req, res) => {
                        //从页面中获取一个数据 并返回给一个对象
                        const { username, password } = req.query
                        if (username == 'kim' && password == '123456' || username == 'kily' && password == '123456') {
                            res.json({
                                code: 0,
                                message: '登录成功',
                                //相当于一个秘钥 一个小时后失效
                                token: tokenkey + '-' + username + '-' + (new Date().getTime() + 60 * 60 * 1000)
                            })
                        } else {
                            res.json({
                                code: 1,
                                message: '账号或者密码错误'
                            })
                        }
                    })
                    //轮播图的接口
                app.get('/api/baner', (req, res) => {
                        res.json({
                            data: [{
                                    url: '',
                                    image: '//img20.360buyimg.com/mcpageview/jfs/t1/96334/26/10177/185003/5e16fb24Edf796774/4b4660cac79d5852.jpg'
                                },
                                {
                                    url: '',
                                    image: '//img20.360buyimg.com/mcpageview/jfs/t1/93607/27/9768/38387/5e11d688E04270824/2d9495f7de2365ca.jpg'
                                },
                                {
                                    url: '',
                                    image: '//img20.360buyimg.com/mcpageview/jfs/t1/95208/39/9858/41488/5e11d67eE007e4d4b/c7fe2048ac932c6f.jpg'
                                }
                            ]
                        })
                    })
                    //分类页的品牌接口
                app.get('/api/classify', (req, res) => {
                    switch (req.query.type) {
                        case '0':
                            res.json({
                                data: [{
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    },
                                    {
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                    {
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    },
                                    {
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                    {
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    },
                                    {
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                    {
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    },
                                    {
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                    {
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    },
                                    {
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                    {
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },

                                ]
                            });
                            break;
                        case '1':
                            res.json({
                                data: [{
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                ]
                            });
                            break;
                        case '2':
                            res.json({
                                data: [{
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    },
                                    {
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    },
                                    {
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    },
                                    {
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    }
                                ]
                            });
                            break;
                        case '3':
                            res.json({
                                data: [{
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                    {
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                    {
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                    {
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                ]
                            });
                            break;
                        case '4':
                            res.json({
                                data: [{
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                ]
                            });
                            break;
                        case '5':
                            res.json({
                                data: [{
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },
                                    {
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },
                                    {
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },
                                    {
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },
                                ]
                            });
                            break;
                        case '6':
                            res.json({
                                data: [{
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                ]
                            });
                            break;
                    }
                })

            }
        },
    },
    css: {
        loaderOptions: {
            stylus: {
                'resolve url': true,
                'import': [
                    './src/theme'
                ]
            }
        }
    },
    pluginOptions: {
        'cube-ui': {
            postCompile: true,
            theme: true
        }
    }
}