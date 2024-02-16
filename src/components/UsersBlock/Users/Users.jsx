import UsersItem from '../UsersItem/UsersItem';

export default function UsersList({ data }) {
    return (
        <ul>
            {data?.items.map((item) => (
                <UsersItem key={Math.random()} item={item} />
            ))}
        </ul>
    );
}
