function ButtonStarted(props) {
  const { href, title, className, style } = props;
  if (!href) {
    return;
  }
  return (
    <>
      <a href={href} className={className} style={style}>
        {title}
      </a>
    </>
  );
}
export default ButtonStarted;
