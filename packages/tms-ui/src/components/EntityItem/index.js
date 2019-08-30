import PropTypes from 'prop-types';
import Icon from '@/components/IconFont';

import styles from './index.less';

import { Card, Row, Col, Button } from 'antd';

const EntitytItem = ({
  data: {
    iconType,
    iconColor,
    title,
    subTitle,
    desc,
    operations,
  },
  isLoading,
}) => (
  <Card
    hoverable
    bordered={false}
    loading={isLoading}
    style={{ marginBottom: 24 }}
    bodyStyle={{ padding: 16 }}
  >
    <Row type="flex" align="middle">
      <Col span={2}>
        <Icon className={styles.icon} style={{ color: iconColor }} type={iconType} />
      </Col>
      <Col span={18} style={{ paddingLeft: 16 }}>
        <div className={styles.header}>
          <Row type="flex" align="bottom">
            <Col className={styles.title}>{title}</Col>
            <Col className={styles.subtitle}>{subTitle}</Col>
          </Row>
        </div>
        <div className={styles.desc}>
          {desc}
        </div>
      </Col>
      <Col span={4} style={{ textAlign: 'right' }}>
        {
          (operations || []).map(({ icon, onClick }) => (
            <Button
              style={{ marginRight: 16 }}
              key={`${title}/${icon}`}
              size="small"
              type={icon === 'delete' ? 'danger' : 'primary'}
              icon={icon}
              onClick={onClick || console.log}
            />
          ))
        }
      </Col>
    </Row>
  </Card>
);

EntitytItem.propTypes = {
  data: PropTypes.shape({
    iconType: PropTypes.string,
    iconColor: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    desc: PropTypes.string,
    operations: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.string,
      onClick: PropTypes.func,
    })),
  }),
  isLoading: PropTypes.bool,
};

export default EntitytItem;
