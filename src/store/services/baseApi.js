import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com',
    }),
    tagTypes: ['Users'],
    endpoints: () => ({}),
});
