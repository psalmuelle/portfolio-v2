import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { Options } from '@contentful/rich-text-react-renderer';
import type { Block, Inline } from '@contentful/rich-text-types';
import Link from 'next/link';
import Image from 'next/image';

// Text styling components
const Bold = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-semibold" style={{ color: '#1c1c1c' }}>
    {children}
  </strong>
);

const Italic = ({ children }: { children: React.ReactNode }) => (
  <em className="italic">{children}</em>
);

const Underline = ({ children }: { children: React.ReactNode }) => (
  <span className="underline">{children}</span>
);

const Code = ({ children }: { children: React.ReactNode }) => (
  <code
    className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm"
    style={{ color: '#1c1c1c' }}
  >
    {children}
  </code>
);

// Block components
const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-6 leading-relaxed text-gray-700">{children}</p>
);

const Heading1 = ({ children }: { children: React.ReactNode }) => (
  <h1
    className="font-clash mt-12 mb-6 text-3xl font-bold first:mt-0 md:text-4xl"
    style={{ color: '#1c1c1c' }}
  >
    {children}
  </h1>
);

const Heading2 = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="font-clash mt-10 mb-5 text-2xl font-semibold first:mt-0 md:text-3xl"
    style={{ color: '#1c1c1c' }}
  >
    {children}
  </h2>
);

const Heading3 = ({ children }: { children: React.ReactNode }) => (
  <h3
    className="font-clash mt-8 mb-4 text-xl font-semibold first:mt-0 md:text-2xl"
    style={{ color: '#1c1c1c' }}
  >
    {children}
  </h3>
);

const Heading4 = ({ children }: { children: React.ReactNode }) => (
  <h4
    className="font-clash mt-6 mb-3 text-lg font-semibold first:mt-0 md:text-xl"
    style={{ color: '#1c1c1c' }}
  >
    {children}
  </h4>
);

const Heading5 = ({ children }: { children: React.ReactNode }) => (
  <h5
    className="font-clash mt-5 mb-3 text-base font-semibold first:mt-0 md:text-lg"
    style={{ color: '#1c1c1c' }}
  >
    {children}
  </h5>
);

const Heading6 = ({ children }: { children: React.ReactNode }) => (
  <h6
    className="font-clash mt-4 mb-2 text-sm font-semibold first:mt-0 md:text-base"
    style={{ color: '#1c1c1c' }}
  >
    {children}
  </h6>
);

// List components
const UnorderedList = ({ children }: { children: React.ReactNode }) => (
  <ul className="mb-6 space-y-2 pl-6">{children}</ul>
);

const OrderedList = ({ children }: { children: React.ReactNode }) => (
  <ol className="mb-6 list-decimal space-y-2 pl-6">{children}</ol>
);

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="leading-relaxed marker:text-[#1c1c1c]">{children}</li>
);

// Quote component
const Blockquote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-primary-200 bg-primary-50 my-8 border-l-4 py-4 pl-6 text-gray-700 italic">
    {children}
  </blockquote>
);

// Table components
const Table = ({ children }: { children: React.ReactNode }) => (
  <div className="my-8 overflow-x-auto">
    <table className="min-w-full border-collapse border border-gray-300 bg-white text-sm">
      <tbody className="divide-y divide-gray-200">{children}</tbody>
    </table>
  </div>
);

const TableRow = ({ children }: { children: React.ReactNode }) => (
  <tr className="hover:bg-gray-50">{children}</tr>
);

const TableHeaderCell = ({ children }: { children: React.ReactNode }) => (
  <th
    className="border border-gray-300 px-4 py-3 text-left font-semibold"
    style={{ color: '#1c1c1c' }}
  >
    {children}
  </th>
);

const TableCell = ({ children }: { children: React.ReactNode }) => (
  <td className="border border-gray-300 px-4 py-3 text-gray-700">{children}</td>
);

// Embedded asset component
const EmbeddedAsset = ({ node }: { node: Block | Inline }) => {
  const { file, title, description } = node.data.target.fields;
  const imageUrl = file?.url;
  const imageTitle = title || 'Embedded image';
  const imageAlt = description || imageTitle;

  if (!imageUrl) return null;

  return (
    <figure className="my-8">
      <div className="relative h-64 w-full overflow-hidden rounded-lg md:h-96">
        <Image
          src={imageUrl.startsWith('//') ? `https:${imageUrl}` : imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
      </div>
      {(title || description) && (
        <figcaption className="mt-3 text-center text-sm text-gray-600 italic">
          {description || title}
        </figcaption>
      )}
    </figure>
  );
};

// Hyperlink component
const Hyperlink = ({
  node,
  children,
}: {
  node: Block | Inline;
  children: React.ReactNode;
}) => {
  const uri = node.data.uri;
  const isExternal = uri.startsWith('http') && !uri.includes('erinlesam.com');

  return (
    <Link
      href={uri}
      className="text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors duration-200"
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      {children}
      {isExternal && <span className="ml-1 inline-block text-xs">↗</span>}
    </Link>
  );
};

// Entry hyperlink component (for linking to other Contentful entries)
const EntryHyperlink = ({
  node,
  children,
}: {
  node: Block | Inline;
  children: React.ReactNode;
}) => {
  // You can customize this based on your content structure
  const entryId = node.data.target.sys.id;

  return (
    <Link
      href={`/notes/${entryId}`}
      className="text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors duration-200"
    >
      {children}
    </Link>
  );
};

// Main options configuration
const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    [MARKS.ITALIC]: (text) => <Italic>{text}</Italic>,
    [MARKS.UNDERLINE]: (text) => <Underline>{text}</Underline>,
    [MARKS.CODE]: (text) => <Code>{text}</Code>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <Paragraph>{children}</Paragraph>,
    [BLOCKS.HEADING_1]: (_, children) => <Heading1>{children}</Heading1>,
    [BLOCKS.HEADING_2]: (_, children) => <Heading2>{children}</Heading2>,
    [BLOCKS.HEADING_3]: (_, children) => <Heading3>{children}</Heading3>,
    [BLOCKS.HEADING_4]: (_, children) => <Heading4>{children}</Heading4>,
    [BLOCKS.HEADING_5]: (_, children) => <Heading5>{children}</Heading5>,
    [BLOCKS.HEADING_6]: (_, children) => <Heading6>{children}</Heading6>,
    [BLOCKS.UL_LIST]: (_, children) => (
      <UnorderedList>{children}</UnorderedList>
    ),
    [BLOCKS.OL_LIST]: (_, children) => <OrderedList>{children}</OrderedList>,
    [BLOCKS.LIST_ITEM]: (_, children) => <ListItem>{children}</ListItem>,
    [BLOCKS.QUOTE]: (_, children) => <Blockquote>{children}</Blockquote>,
    [BLOCKS.TABLE]: (_, children) => <Table>{children}</Table>,
    [BLOCKS.TABLE_HEADER_CELL]: (_, children) => (
      <TableHeaderCell>{children}</TableHeaderCell>
    ),
    [BLOCKS.TABLE_CELL]: (_, children) => <TableCell>{children}</TableCell>,
    [BLOCKS.TABLE_ROW]: (_, children) => <TableRow>{children}</TableRow>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => <EmbeddedAsset node={node} />,
    [INLINES.HYPERLINK]: (node, children) => (
      <Hyperlink node={node}>{children}</Hyperlink>
    ),
    [INLINES.ENTRY_HYPERLINK]: (node, children) => (
      <EntryHyperlink node={node}>{children}</EntryHyperlink>
    ),
  },
  renderText: (text) => {
    // Handle special characters and formatting
    return text
      .split('\n')
      .reduce((children: React.ReactNode[], textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
  },
};

export { options };
