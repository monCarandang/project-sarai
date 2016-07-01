import {NavMenu} from '/lib/collections';

if (!NavMenu.findOne({module: 'admin'})) {
  NavMenu.insert({
    module: 'admin',
    navs: [
      {
        href: '/admin',
        label: 'Dashboard',
        id: 'dashboard'
      },
      {
        href: '/admin/homepage',
        label: 'Homepage',
        id: 'homepage'
      },
      {
        href: '/admin/accounts',
        label: 'Accounts',
        id: 'accounts'
      }
    ]
  });
}