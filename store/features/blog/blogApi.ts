import { baseApi } from "@/store/baseApi";

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  content: string;
  author_id: string;
  published: boolean;
  created_at: string;
};

export const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<BlogPost[], { page?: number; published?: boolean } | void>({
      query: (params) => ({ url: "/blog/posts", params: params ?? undefined }),
      providesTags: (result) =>
        result
          ? [...result.map((p) => ({ type: "BlogPost" as const, id: p.id })), { type: "BlogPost", id: "LIST" }]
          : [{ type: "BlogPost", id: "LIST" }],
    }),

    getPost: builder.query<BlogPost, string>({
      query: (slug) => `/blog/posts/${slug}`,
      providesTags: (_result, _err, slug) => [{ type: "BlogPost", id: slug }],
    }),

    createPost: builder.mutation<BlogPost, Partial<BlogPost>>({
      query: (body) => ({ url: "/blog/posts", method: "POST", body }),
      invalidatesTags: [{ type: "BlogPost", id: "LIST" }],
    }),

    updatePost: builder.mutation<BlogPost, { id: string; changes: Partial<BlogPost> }>({
      query: ({ id, changes }) => ({ url: `/blog/posts/${id}`, method: "PATCH", body: changes }),
      invalidatesTags: (_result, _err, { id }) => [{ type: "BlogPost", id }, { type: "BlogPost", id: "LIST" }],
    }),

    deletePost: builder.mutation<void, string>({
      query: (id) => ({ url: `/blog/posts/${id}`, method: "DELETE" }),
      invalidatesTags: (_result, _err, id) => [{ type: "BlogPost", id }, { type: "BlogPost", id: "LIST" }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = blogApi;