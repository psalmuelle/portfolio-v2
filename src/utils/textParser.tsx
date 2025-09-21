import React from 'react';

/**
 * Utility function to parse dash-separated text into a proper HTML list
 * @param description - String containing text with dash-separated items
 * @returns JSX element - either a list or paragraph
 */
export const parseDescriptionToList = (
  description: string,
): React.JSX.Element => {
  if (!description || typeof description !== 'string') {
    return (
      <p className="leading-relaxed text-gray-700">No description available</p>
    );
  }

  // Split by dashes and clean up the text
  const items = description
    .split(/(?=- [A-Z])/) // Split before dash followed by space and capital letter
    .map((item) => item.replace(/^- /, '').trim()) // Remove leading dash and space, then trim
    .filter((item) => item.length > 0); // Remove empty items

  if (items.length > 1) {
    return (
      <ul className="list-disc space-y-1.5 pl-5">
        {items.map((item, index) => (
          <li key={index} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  // If no dashes found or only one item, return as paragraph
  return <p className="leading-relaxed">{description}</p>;
};
