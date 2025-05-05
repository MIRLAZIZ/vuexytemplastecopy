export default [
  {
    title: 'Home',
    to: { name: 'root' },
    icon: { icon: 'tabler-smart-home' },
    action: 'read',
    subject: 'AclDemo',
  },
  {
    title: 'Second page',
    // to: { name: 'second-page' },
    icon: { icon: 'tabler-file' },
    children: [
      { title: 'Autocomplete', to: 'users',   icon: { icon: 'tabler-user-circle' } },
      { title: 'Autocomplete', to: 'users',  icon: { icon: 'tabler-user-circle' }}],
    action: 'read',
    subject: 'AclDemo',
  },
  {
    title: 'settings',
    to: { name: 'settings' },
    icon: { icon: 'tabler-settings' },
    action: 'read',
    subject: 'AclDemo',
  },
]
