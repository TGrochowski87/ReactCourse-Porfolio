import React from "react";
//Styles
import styled from "styled-components";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";

import { About } from "../styles";
import { scrollReveal } from "../animation";
import Toggle from "./Toggle";

const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              architecto.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              architecto.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different payment methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              architecto.
            </p>
          </div>
        </Toggle>
        <Toggle title="What products do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              architecto.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;

  span {
    display: block;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
