"use client";

import { useRouter } from "next/navigation";
import { Moon, Star } from "lucide-react";
import styled, { keyframes } from "styled-components";
import { useMemo } from "react";

export default function NotFoundPage() {
  const router = useRouter();

  const stars = useMemo(
    () =>
      Array.from({ length: 50 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 2,
      })),
    []
  );

  return (
    <Container>
      <LunarScene>
        <Moon size={100} color="#f3f4f6" />
        {stars.map((star, i) => (
          <StarWrapper
            key={i}
            top={star.top}
            left={star.left}
            size={star.size}
            delay={star.delay}
          >
            <Star size={star.size} color="#fff" />
          </StarWrapper>
        ))}
      </LunarScene>

      <Content>
        <h1>404</h1>
        <h2>Página Perdida na Lua</h2>
        <p>Ops! Você parece ter se perdido no espaço.</p>
        <Button onClick={() => router.push("/")}>Voltar para Terra</Button>
      </Content>
    </Container>
  );
}

const twinkle = keyframes`
  0%, 100% { opacity: 0.8; }
  50% { opacity: 0.3; }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, #0b0c1e, #1a1c40);
  color: #fff;
  overflow: hidden;
  position: relative;
`;

const LunarScene = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StarWrapper = styled.div<{
  top: number;
  left: number;
  size: number;
  delay: number;
}>`
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  animation: ${twinkle} 2s infinite ease-in-out;
  animation-delay: ${(props) => props.delay}s;
`;

const Content = styled.div`
  position: relative;
  text-align: center;
  z-index: 1;

  h1 {
    font-size: 6rem;
    color: #f3f4f6;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #cbd5e1;
  }

  p {
    font-size: 1rem;
    margin-bottom: 2rem;
    color: #94a3b8;
  }
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  font-size: 1rem;
  background-color: #6366f1;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #4f46e5;
  }
`;
