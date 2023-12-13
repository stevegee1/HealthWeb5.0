import Link from 'next/link';

interface IHyperLinkProps {
  info?: string;
  hrefText: string;
  href?: string;
}

const HyperLink = ({ href, info, hrefText }: IHyperLinkProps) => {
  return (
    <p className="font-book text-sm font-light">
      {info}&nbsp;
      <Link href={href || ''} legacyBehavior className="hover:underline">
        <a className="font-groteskM hover:underline">{hrefText}</a>
      </Link>
    </p>
  );
};

export default HyperLink;
