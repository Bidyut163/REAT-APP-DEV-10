import Dashboard from '../../components/official/admin/Dashboard';
import Users from '../../components/official/admin/users/Users';
import UserForm from '../../components/official/admin/users/UserForm';
import UserEdit from '../../components/official/admin/users/UserEdit';

const routes = [
    { path: '/official/admin', exact: true, name: 'Admin' },
    {
        path: '/official/admin/dashboard',
        exact: true,
        name: 'Users',
        component: Users,
    },
    {
        path: '/official/admin/users/new',
        exact: true,
        name: 'UserFrom',
        component: UserForm,
    },
    {
        path: '/official/admin/users',
        exact: true,
        name: 'Users',
        component: Users,
    },
    {
        path: '/official/admin/users/:id/edit',
        exact: true,
        name: 'UserEdit',
        component: UserEdit,
    },
];

export default routes;
