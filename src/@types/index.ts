export type ImageType = {
  childImageSharp: {
    fluid: {
      aspectRatio: number;
      base64: string;
      sizes: string;
      src: string;
      srcSet: string;
    };
  };
};

export type FrontmatterType = {
  title: string;
  date: string;
  featured: boolean;
  published: boolean;
  category: string;
  tags: Array<string>;
  thumbnail: ImageType;
};

// fields type
export type FieldsType = {
  slug: string;
};

// node types
export type NodeType = {
  node: {
    excerpt: string;
    timeToRead: number;
    html: string;
    frontmatter: FrontmatterType;
    fields: FieldsType;
  };
};

export type MarkdownPostType = {
  edges: NodeType[];
};

// context types
export type ContextType = {
  currentPage: number;
  limit: number;
  numPages: number;
  skip: number;
};

// index page types
export type IndexPagePropsType = {
  allMdx: {
    edges: NodeType[];
  };
};

//mardownremark type
export type markdownRemarkTypes = {
  frontmatter: FrontmatterType;
  body: string;
  timeToRead: number;
};

// single post types
export type BlogPostPagePropsType = {
  mdx: markdownRemarkTypes;
  next: {
    frontmatter: FrontmatterType;
    fields: FieldsType;
  };
  previous: {
    frontmatter: FrontmatterType;
    fields: FieldsType;
  };
};

//CategoryPropsTypes
export type CategoryPropsTypes = {
  allMdx: {
    nodes: {
      fields: FieldsType;
      excerpt: string;
      timeToRead: string;
      frontmatter: FrontmatterType;
    }[];
    totalCount: string;
  };
};
// CategoryPageContext
export type CategoryPageContext = {
  category: string;
};
// TagsPageContext
export type TagsPageContext = {
  tag: string;
};

// postType
export type PostType = {
  index?: number;
  post: {
    fields: FieldsType;
    excerpt: string;
    timeToRead: number | string;
    frontmatter: FrontmatterType;
  };
};
