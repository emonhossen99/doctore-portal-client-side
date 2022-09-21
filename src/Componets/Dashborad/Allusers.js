import { useQuery } from 'react-query';
import Loading from '../Shered/Loading/Loading';
import UsersTable from './UsersTable';

const Allusers = () => {


const {data : users,isLoading,refetch} = useQuery('users', () =>  fetch(`https://morning-wave-20718.herokuapp.com/users`,{
    method : 'GET',
    headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
}).then(res => res.json()))

if(isLoading){
    return <Loading></Loading>
}
    return (
        <div>
            <h1>This is a all users : {users?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>_Id</th>
                            <th>Email</th>
                            <th>Admit</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UsersTable 
                                key={user._id}
                                patient = {user}
                                refetch={refetch}>
                        </UsersTable>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;