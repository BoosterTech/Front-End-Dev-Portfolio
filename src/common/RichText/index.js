const RichText = ({ html, className }) => (
  <div
    className={className}
    data-testid="rich-text"
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

export default RichText;
