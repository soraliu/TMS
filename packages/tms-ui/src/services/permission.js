import request from '@/utils/request';

export const list = async () => await request('/permission');
