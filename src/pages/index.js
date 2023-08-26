import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
const IndexPage = () => (
  <Layout>
    <h1>Hello Tailwind CSS!</h1>
    <div className="prose mb-6 prose-a:text-emerald-900">
      <p>
        History Lesson:{" "}
        <a
          href="https://adamwathan.me/css-utility-classes-and-separation-of-concerns/"
          target="_blank"
          rel="noreferrer"
        >
          Adam Wathan on Utility Classes and Separation of Content
        </a>
        .
      </p>
      <p>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          tailwindcss.com
        </a>
      </p>
      <p className="italic">
        FYI &mdash; this whole 411/Gatsby{" "}
        <a
          href="https://github.com/danjacquemin/tailwind-411"
          target="_blank"
          rel="noreferrer"
        >
          project is on GitHub
        </a>{" "}
        so you can enjoy the CSS and various config files . You're welcome.
      </p>
      <hr />
      <h2>
        CSS Linter Unhappy with <code>@apply</code>
      </h2>
      <p>
        With the default <em>Tailwind CSS</em> install we needed to add a
        <code>global.css</code> file to the project. The VS Code CSS linter is
        unhappy with the{" "}
        <a
          href="https://tailwindcss.com/docs/functions-and-directives#apply"
          target="_blank"
          rel="noreferrer"
        >
          @apply directives
        </a>{" "}
        added there. This can be corrected by giving VC Code some additional
        rules. See{" "}
        <a
          href="https://github.com/tailwindlabs/tailwindcss/discussions/5258"
          target="_blank"
          rel="noreferrer"
          className="prose"
        >
          Unknown at rule @apply css(unknownAtRules) #5258
        </a>
        .
      </p>
      <h2>Prose?</h2>
      <p className="">
        <em>Prose</em> is a typography plugin for Tailwind:{" "}
        <a
          href="https://tailwindcss.com/docs/typography-plugin"
          target="_blank"
          rel="noreferrer"
        >
          @tailwindcss/typography
        </a>{" "}
        I've added rules in <code>tailwind.config.js</code> to tweak the default
        Prose styles and colors. Bonus: You can also apply global changes, that
        cascade with Prose in <code>global.css</code>.
      </p>
      <ul>
        <li>
          <a
            href="https://tailwindcss.com/docs/typography-plugin#element-modifiers"
            target="_blank"
            rel="noreferrer"
          >
            Prose cheat sheet
          </a>{" "}
          which provided insight on how to change the color of the
          list-item-indicator
        </li>
        <li>The quick brown fox</li> <li>jumps over</li> <li>the lazy dog.</li>
      </ul>
      <p>
        Ut bibendum dignissim augue at sagittis. Nunc mauris arcu, interdum eu
        est ut, congue venenatis tellus. Duis mollis congue porttitor.
      </p>
      <h2>Custom Pseudo Content/Entities</h2>
      <p>
        Pseudo elements won't handle HTML entites or Unicode characters out of
        the box. Tailwind needs some addition instruction on how to make that
        happen. You can find that knowledge in <code>tailwind.config.js</code>
        and implementation is on the author attribution in the sample below.
      </p>
    </div>
    <h2 className="mb-0 text-2xl font-medium">
      Example from Tailwind CSS Home Page
    </h2>
    <p className="mb-4">As a learning experience&hellip;</p>
    <div className="wrap-sample">
      <figure className="wrap-figure mx-auto max-w-xs rounded-lg bg-emerald-900 p-4 text-white drop-shadow-lg md:flex md:max-w-3xl md:p-0">
        <div className="wrap-img mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border border-black drop-shadow-lg md:mb-0 md:h-60 md:w-auto md:flex-initial md:rounded">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9d/General_Douglas_MacArthur_6c_1971_issue_U.S._stamp.jpg"
            alt=""
            className="-translate-y-5 translate-x-1.5 scale-125"
          />
        </div>
        <div className="wrap-text font-extralight md:flex md:flex-col md:justify-center md:p-4 md:py-0">
          <blockquote className="text-balance mb-4">
            <p>
              &ldquo;<em className="font-normal">Duty, Honor, Country:</em>{" "}
              Those three hallowed words reverently dictate what you ought to
              be, what you can be, what you will be. They are your rallying
              points: to build courage when courage seems to fail; to regain
              faith when there seems to be little cause for faith; to create
              hope when hope becomes forlorn.&rdquo;
            </p>
          </blockquote>
          <figcaption className="wrap-attribution text-right">
            <div className="wrap-author mb-2">
              <a
                href="https://en.wikipedia.org/wiki/Douglas_MacArthur"
                target="_blank"
                rel="noreferrer"
                className="before-icon-mdash italic"
              >
                Gen. Douglas MacArthur
              </a>
            </div>
            <div className="wrap-title indent-5 text-xs text-gray-400">
              <span className="block">
                Sylvanus Thayer Award Acceptance Address
              </span>
              <span className="block whitespace-nowrap">
                (12 May 1962, West Point, NY)
              </span>
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  </Layout>
);
/** * Head export to define metadata for the page * * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/ */ export const Head =
  () => <Seo title="Home" />;
export default IndexPage;
