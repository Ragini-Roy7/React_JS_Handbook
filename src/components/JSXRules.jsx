const JSXRules = () => {
  return (
    <div>
      <h1>JSX Rules</h1>
      <p>JSX must return only one parent element or root element</p>
      <p>JSX must have self closing tags like in tags ie. img,br,input</p>
      <p>JSX attributes are written in camel case </p>
      <p>
        className is used instead of class, htmlFor is used instead For. Because
        JSX behind the scenes uses JS , so react gets confused thus , these
        alterations are applied
      </p>
    </div>
  );
};
export default JSXRules;
