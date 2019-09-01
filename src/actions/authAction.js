export const REQ_LOGIN = 'REQ_LOGIN';
export const SET_PAGE = 'SET_PAGE';

export const setPage = (pageName) => {
  console.log('action setPage:', pageName);
  return {
    type: SET_PAGE,
    payload: pageName
  };
};

