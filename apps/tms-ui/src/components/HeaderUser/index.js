import PropTypes from 'prop-types';
import { Menu, Icon, Dropdown, Avatar, Spin } from 'antd';

import styles from './index.less';

const HeaderUser = ({
  username,
  headImgUrl,
  onMenuClick,
}) => {
  const menu = (
    <Menu className={styles.menu} onClick={onMenuClick}>
      <Menu.Item disabled>
        <Icon type="user" />User Center
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
        <Icon type="logout" />Sign Out
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      {
        username ? (
          <Dropdown overlay={menu}>
            <span className={styles.action}>
              <Avatar size="small" className={styles.avatar} src={headImgUrl} />
              <span>{username}</span>
            </span>
          </Dropdown>
        ) : <Spin size="small" style={{ marginLeft: 8 }} />
      }
    </>
  );
};

HeaderUser.propTypes = {
  username: PropTypes.string,
  headImgUrl: PropTypes.string,
  onMenuClick: PropTypes.func,
};

export default HeaderUser;
