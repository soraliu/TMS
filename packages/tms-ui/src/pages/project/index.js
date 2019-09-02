import { useState } from 'react';
import { useSelector } from 'dva';
import EntityListItem from '@/components/EntityItem';
import { Input, Select, Button, Modal, Icon } from 'antd';

const EntityList = () => {
  // set oeprations by permissions
  const { data: permissions } = useSelector(({ permissionList }) => permissionList);
  const operations = [
    permissions['project:update'] && {
      icon: 'setting',
      onClick: () => {

      },
    },
    permissions['project:detail'] && {
      icon: 'edit',
      onClick: () => {

      },
    },
    permissions['project:delete'] && {
      icon: 'delete',
      onClick: () => {

      },
    },
  ].filter(Boolean);

  // transfer state to component's props
  const { isLoading: loading } = useSelector(({ loading: { effects: { 'projectList/list': isLoading } } }) => ({ isLoading }));
  const { data } = useSelector(({ projectList }) => projectList);
  const projects = data.map(({ name, desc, langList }) => ({
    iconType: 'tms-project',
    iconColor: '#9E1068',
    title: name,
    subTitle: (langList || []).map(lang => lang.name).join(', '),
    desc,
    operations,
  }));


  return (
    <div>
      {
        projects.map((project, key) => (
          <EntityListItem
            key={project.title || key}
            data={project}
            isLoading={loading}
          />
        ))
      }
    </div>
  );
};

const EntityCreate = () => {
  // permission
  const { data: permissions } = useSelector(({ permissionList }) => permissionList);
  const canCreate = permissions['project:create'];

  // modal visible
  const [visible, setVisible] = useState(false);

  // modal click
  const handleOk = () => {
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  // form
  const handleLangChange = values => {
    console.log(values);
  };

  return (
    <div>
      {
        canCreate &&
          <Button
            block
            icon="plus"
            type="primary"
            onClick={() => setVisible(true)}
            style={{ marginBottom: 24 }}
          />
      }

      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          placeholder="Enter project name"
          prefix={<Icon type="project" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
        <Input
          placeholder="Enter description"
          prefix={<Icon type="read" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Select languages"
          onChange={handleLangChange}
        />
      </Modal>
    </div>
  );
};

const Page = () => (
  <div>
    <EntityList />
    <EntityCreate />
  </div>
);

export default Page;
