const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// 用于存储用户信息（仅用于示例，实际应使用数据库）
let userProfile = {
    nickname: '未设置',
    email: '未设置',
    password: '' // 密码通常需要加密存储
};

// 中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 提供静态文件服务（前端页面）
app.use(express.static('c:\\Users\\Lucky\\Desktop\\selindell'));

// 获取用户信息
app.get('/api/profile', (req, res) => {
    res.json(userProfile);
});

// 更新用户信息
app.post('/api/profile', (req, res) => {
    const { nickname, email, password } = req.body;

    if (nickname) userProfile.nickname = nickname;
    if (email) userProfile.email = email;
    if (password) userProfile.password = password; // 实际应用中应加密存储密码

    res.json({ message: '个人信息已更新', userProfile });
});

// 启动服务器
app.listen(port, () => {
    console.log(`服务器已启动：http://localhost:${port}`);
});