async function fetchGraphQL(
  query: string,
  variables?: Record<string, unknown>,
) {
  // Check if environment variables are set
  if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID) {
    throw new Error(
      'NEXT_PUBLIC_CONTENTFUL_SPACE_ID environment variable is not set',
    );
  }

  if (!process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) {
    throw new Error(
      'NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN environment variable is not set',
    );
  }

  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      // Add cache revalidation for better performance
      next: { revalidate: 900 }, // Revalidate 30 min
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error(
      'GraphQL request failed:',
      response.status,
      response.statusText,
      errorText,
    );
    throw new Error(
      `GraphQL request failed: ${response.statusText} (${response.status})`,
    );
  }

  const responseData = await response.json();
  const { data, errors } = responseData;

  if (errors) {
    console.error('GraphQL errors:', errors);
    throw new Error(`GraphQL errors: ${JSON.stringify(errors)}`);
  }

  return data;
}

// Server-side query functions
export async function getProjects() {
  const query = `
    query GetProjects {
        projectsCollection {
            items {
                _id
                previewImg {
                    url
                    description
                }
                title
                description
                type
                techStack
                githubUrl
                liveUrl
                appScreenshotsCollection {
                  items {
                  url
                  description
                  }
 
                }
            }
        }
    }
`;

  const data = await fetchGraphQL(query);
  return data.projectsCollection.items;
}

export async function getWorkExperience() {
  const query = `
    query GetWorkExperience {
      workExperienceCollection {
        items {
          id
          role
          company
          description
          location
          startDate
          endDate
        }
      }
    }
  `;

  const data = await fetchGraphQL(query);
  return data.workExperienceCollection.items;
}

export async function getNotes() {
  const query = `
    query GetNote {
      notesCollection {
        items {
          id
          title
          slug
          description
          dateCreated
        }
      }
    }
  `;

  const data = await fetchGraphQL(query);
  return data.notesCollection.items;
}

export async function getNoteBySlug(slug: string) {
  const query = `
    query GetNoteBySlug($slug: String!) {
      notesCollection(where: { slug: $slug }, limit: 1) {
        items {
          id
          title
          slug
          description
          dateCreated
          content {
            json
         }
          img {
            url
            description
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL(query, { slug });
  return data.notesCollection.items[0] || null;
}

export async function getAllNoteSlugs() {
  const query = `
    query GetAllNoteSlugs {
      notesCollection {
        items {
          slug
        }
      }
    }
  `;

  const data = await fetchGraphQL(query);
  return data.notesCollection.items.map((note: { slug: string }) => ({
    slug: note.slug,
  }));
}

export async function getBlogPostBySlug(slug: string) {
  const query = `
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

  const data = await fetchGraphQL(query, { slug });
  return data.blogPost;
}
