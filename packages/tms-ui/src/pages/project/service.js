import request from '@/utils/request';

export const list = async () => await request('/project');

export const create = async body => await request('/project', {
    method: 'POST',
    body: JSON.stringify(body),
  });

export const updateById = async (id, body) => await request(`/project/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
  });

export const deleteById = async id => await request(`/project/${id}`, { method: 'DELETE' });
