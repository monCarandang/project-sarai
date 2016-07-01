import adminAuthenticate from './admin-authenticate';

export default (context, redirect) => {
  // const {queryParams} = context;
  // const {edit} = queryParams;
  // if (edit && edit === 'true') {
  if (!adminAuthenticate()) {
    redirect('/login');
  }
  // }
};
