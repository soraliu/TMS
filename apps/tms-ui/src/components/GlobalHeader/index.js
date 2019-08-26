import PropTypes from 'prop-types';
import { Icon } from 'antd';

import HeaderUser from '../HeaderUser';
import styles from './index.less';

const Header = ({
  collapsed,
  onCollapse,
}) => (
  <div className={styles.header}>
    <Icon
      className={styles.trigger}
      type={collapsed ? 'menu-unfold' : 'menu-fold'}
      onClick={onCollapse}
    />
    <div className={styles.right}>
      <HeaderUser
        username="sora"
        headImgUrl="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
      />
    </div>
  </div>
);

Header.propTypes = {
  collapsed: PropTypes.bool,
  onCollapse: PropTypes.func,
};

export default Header;
