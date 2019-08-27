exports.router = {
  prefix: '/api',
};
exports.keys = 'f30cbfedbcaad8e0753b24ab60d42c734c81475a';
exports.middleware = [
  'robot',
];
exports.robot = {
  ua: [
    /Baiduspider/i,
  ],
};
