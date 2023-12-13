import React from 'react';

interface ITypographyProps {
  text: string;
  css?: string;
}

export const Title = ({ text, css }: ITypographyProps) => {
  return <h2 className={`text-2xl lg:text-3xl font-groteskM mb-2 ${css}`}>{text}</h2>;
};

export const Paragraph = ({ text, css }: ITypographyProps) => {
  return <p className={`font-book text-sm ${css}`}>{text}</p>;
};
