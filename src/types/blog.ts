export type BlogItem = {
  node: {
    title: string
    coverImage: { url: string }
    slug: string
    publishedAt: string
  }
}

export type GetBlogResponse = {
  publication: {
    posts: {
      edges: BlogItem[]
      pageInfo: { hasNextPage: boolean; endCursor: string }
    }
  }
}

export type BlogDetail = {
  title: string
  publishedAt: string
  content: { markdown: string }
}

export type GetBlogDetailResponse = { publication: { post: BlogDetail } }
