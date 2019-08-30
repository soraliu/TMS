import { Icon as AntIcon } from 'antd';

const Iconfont = props => {
  const Icon = AntIcon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1357981_8ceqtz5xuzs.js',
  });

  return <Icon {...props} />;
};

export default Iconfont;
