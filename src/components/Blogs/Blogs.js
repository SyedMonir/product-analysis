import React from 'react';
import { Container } from 'react-bootstrap';

const Blogs = () => {
  return (
    <Container>
      <section className=" my-3">
        <h1 className="title text-center">RECENT BLOGS</h1>
        {/* Qus 1 */}
        <article>
          <h4>
            <strong>
              Q 1: What is Context API? What is the purpose of Context API?
            </strong>
          </h4>
          <p>
            A: One of the main part of React is to break our application into
            components, for reusability purposes. So when we need to share data
            from one component to another component we need to prop drill. Prop
            drilling is getting data from parent component to child component.
            Context API solves one major problem is prop drilling. Context API
            give us a way to pass data to component without doing props
            drilling. If you only want to avoid passing props through many
            levels, Context API is best.
          </p>
        </article>
        {/* Qus 2  */}
        <article>
          <h4>
            <strong>Q 2: What is Semantic Tag?</strong>
          </h4>
          <p>
            A: Semantic element clearly describes what is the meaning of that
            element not only for us but also for the browsers. Here is some
            semantic elements section , aside , nav , article , header, footer.
            It has best accessibility. Search engines and who has visual problem
            are also able to better understand the content of our website. That
            means a better experience for our users.
          </p>
        </article>
        {/* Qus 3  */}
        <article>
          <h4>
            <strong>
              Q 3: Difference between inline, block, inline-block elements?
            </strong>
          </h4>
          <p>
            A: An inline element have no effect on height and width properties.
            Here are a few inline elements span, a , img, em. strong. An
            inline-block element i can set height and width values. It's same
            thing as inline, except that i can set height and width values.Block
            elements starts on a new line and takes up the full width.
          </p>
        </article>
      </section>
    </Container>
  );
};

export default Blogs;
