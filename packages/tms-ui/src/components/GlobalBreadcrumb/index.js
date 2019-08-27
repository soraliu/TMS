import router from 'umi/router';
import { Breadcrumb } from 'antd';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

import './index.less';

// 更多配置请移步 https://github.com/icd2k3/react-router-breadcrumbs-hoc
const routes = [
  {
    path: '/',
    breadcrumb: 'Home',
  },
  {
    path: '/project',
    breadcrumb: 'Project',
  },
  {
    path: '/language',
    breadcrumb: 'Language',
  },
  {
    path: '/namespace',
    breadcrumb: 'Namespace',
  },
  {
    path: '/user',
    breadcrumb: 'User',
  },
];

export default withBreadcrumbs(routes)(({ breadcrumbs }) => (
  <Breadcrumb>
    {breadcrumbs.map((breadcrumb) => (
      <Breadcrumb.Item
        key={breadcrumb.key}
        href={breadcrumb.match.url}
        onClick={(e) => {
            e.preventDefault();
            router.push(breadcrumb.match.url);
        }}
      >
        {breadcrumb.breadcrumb.props.children}
      </Breadcrumb.Item>
    ))}
  </Breadcrumb>
));
