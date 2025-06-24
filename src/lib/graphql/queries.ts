import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query GetProjects {
    projectsCollection {
      items {
        _id
        img {
          url
          description
        }
        title
        description
        type
        techStack
        githubUrl
        liveUrl
        demo
      }
    }
  }
`;

export const GET_PROJECTS_WALKTHROUGH_LINKS = gql`
  query getProjectsWithWalkthroughLinks {
    projectsCollection {
      items {
        _id
        title
        demo
      }
    }
  }
`;

export const GET_WORK_EXPERIENCE = gql`
  query GetWorkExperience {
    workExperience {
      id
      role
      company
      description
      location
      startDate
      endDate
    }
  }
`;

export const GET_BLOG_POSTS = gql`
  query GetBlogPosts {
    blogPosts {
      id
      title
      slug
      excerpt
    }
  }
`;

export const GET_BLOG_POST_BY_SLUG = gql`
  query GetBlogPostBySlug($slug: String!) {
    blogPost(slug: $slug) {
      id
      title
      img
      slug
      content
      author {
        name
        avatar
      }
      publishedAt
    }
  }
`;
