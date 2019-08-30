/* eslint no-useless-escape:0 */
/* eslint max-len:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;

export function isUrl(path) {
  return reg.test(path);
}

const menuData = [
  {
    name: 'Project',
    icon: 'tms-project',
    path: 'project',
  }, {
    name: 'Language',
    icon: 'tms-language',
    path: 'language',
  }, {
    name: 'Namespace',
    icon: 'tms-namespace',
    path: 'namespace',
  }, {
    name: 'User',
    icon: 'tms-user-group',
    path: 'user',
  },
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
