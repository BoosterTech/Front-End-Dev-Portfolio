const RichText = ({ html, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
);

export default RichText;
