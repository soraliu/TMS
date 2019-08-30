import { useSelector } from 'dva';
import EntityListItem from '@/components/EntityItem';
import { Button } from 'antd';

const Page = () => {
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
  const canCreate = permissions['project:create'];

  // transfer state to component's props
  const { data, isLoading } = useSelector(({ projectList }) => projectList);
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
            isLoading={isLoading}
          />
        ))
      }
      {canCreate && <Button block icon="plus" type="primary" style={{ marginBottom: 24 }} />}
    </div>
  );
};

export default Page;
