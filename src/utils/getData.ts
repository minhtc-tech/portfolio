import { gql, GraphQLClient } from 'graphql-request'

import {
  BlogDetail,
  BlogItem,
  GetBlogDetailResponse,
  GetBlogResponse,
} from '@/types/blog'

const client = new GraphQLClient(process.env.BLOG_API_URL)

export const getBlogData = async () => {
  const blogData: BlogItem[] = []

  const query = gql`
    query ($host: String!, $endCursor: String) {
      publication(host: $host) {
        posts(first: 50, after: $endCursor) {
          edges {
            node {
              title
              coverImage {
                url
              }
              slug
              publishedAt
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    }
  `

  let hasNextPage = true
  let endCursor: string | null = null
  while (hasNextPage) {
    const response: GetBlogResponse = await client.request(query, {
      host: process.env.BLOG_HOST,
      endCursor,
    })

    const data = response.publication.posts
    blogData.push(...data.edges)

    hasNextPage = data.pageInfo.hasNextPage
    endCursor = data.pageInfo.endCursor
  }

  return blogData
}

export const getBlogDetailData = async (slug: string) => {
  const query = gql`
    query ($host: String!, $slug: String!) {
      publication(host: $host) {
        post(slug: $slug) {
          title
          publishedAt
          content {
            markdown
          }
        }
      }
    }
  `

  const response: GetBlogDetailResponse = await client.request(query, {
    host: process.env.BLOG_HOST,
    slug,
  })
  const blogDetail: BlogDetail = response.publication.post

  return blogDetail
}
