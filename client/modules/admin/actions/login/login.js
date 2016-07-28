export default {

  login(context, username, password) {
    const {Meteor, FlowRouter} = context

    // console.log(`Username: ${username}, Password: ${password}`)
    Meteor.loginWithPassword(username, password, (err) => {
      if (err) {
        // handle error;
        // console.log(err);
      } else {
        // if (queryParams.redirect) FlowRouter.go(queryParams.redirect);
        // else console.log('success');//FlowRouter.go('core.root');
        FlowRouter.redirect('/admin')
      }
    });
  }
}