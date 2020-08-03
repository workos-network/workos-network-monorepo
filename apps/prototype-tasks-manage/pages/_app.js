import React from "react";
import App from "next/app";
import Head from "next/head";
import { Providers } from "../components";

class Application extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Providers>
        <>
          <Head>
            <title>Task Management - Work OS Network</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
            <Component {...pageProps} />
          </main>

          <footer>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by <strong>WorkOS Network</strong>
              {/* <img src="/vercel.svg" alt="Vercel Logo" /> */}
            </a>
          </footer>

          <style jsx>{`
            .container {
              min-height: 100vh;
              max-width: 1200px;
              padding: 0 0.5rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            footer a {
              display: flex;
              justify-content: center;
              align-items: center;
            }

            a {
              color: inherit;
              text-decoration: none;
            }

            .title a {
              color: #0070f3;
              text-decoration: none;
            }

            .title a:hover,
            .title a:focus,
            .title a:active {
              text-decoration: underline;
            }

            .title {
              margin: 0;
              line-height: 1.15;
              font-size: 4rem;
            }

            .title,
            .description {
              text-align: center;
            }

            .description {
              line-height: 1.5;
              font-size: 1.5rem;
            }

            code {
              background: #fafafa;
              border-radius: 5px;
              padding: 0.75rem;
              font-size: 1.1rem;
              font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New,
                monospace;
            }

            .grid {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-wrap: wrap;

              max-width: 800px;
              margin-top: 3rem;
            }

            .card {
              margin: 1rem;
              flex-basis: 45%;
              padding: 1.5rem;
              text-align: left;
              color: inherit;
              text-decoration: none;
              border: 1px solid #eaeaea;
              border-radius: 10px;
              transition: color 0.15s ease, border-color 0.15s ease;
            }

            .card:hover,
            .card:focus,
            .card:active {
              color: #0070f3;
              border-color: #0070f3;
            }

            .card h3 {
              margin: 0 0 1rem 0;
              font-size: 1.5rem;
            }

            .card p {
              margin: 0;
              font-size: 1.25rem;
              line-height: 1.5;
            }

            @media (max-width: 600px) {
              .grid {
                width: 100%;
                flex-direction: column;
              }
            }
          `}</style>

          <style jsx global>{`
            html,
            body {
              padding: 0;
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
            }

            main {
              padding: 0;
              flex: 1;
              display: flex;
              flex-direction: column;
              // justify-content: center;
              // align-items: center;
            }

            footer {
              width: 100%;
              height: 100px;
              border-top: 1px solid #eaeaea;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            footer img {
              margin-left: 0.5rem;
            }

            button {
              border: none;
              border-radius: 6px;
              padding: 7px 12px;
              cursor: pointer;
            }

            input {
              box-shadow: none;
              box-sizing: border-box;
              display: inline-block;
              font-family: var(--font-sans);
              font-size: 14px;
              line-height: 26px;
              // width: 100%;
              color: #000;
              background-color: transparent;
              caret-color: #000;
              text-overflow: ellipsis;
              appearance: none;
              border-radius: 0px;
              border-width: 1px;
              border-style: solid;
              border-color: gray;
              border-image: initial;
              padding: 4px;
              outline: 0px;
            }

            * {
              box-sizing: border-box;
            }
          `}</style>
        </>
      </Providers>
    );
  }
}

export default Application;
