import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersQuery = createApi({
    reducerPath: 'usersQuery',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com',
    }),
    tagTypes: ['Users'],

    endpoints: (build) => ({
        getUsers: build.query({
            query: (params) => `search/users?${params}`,
        }),
    }),
});

export const { useGetUsersQuery } = usersQuery;
