import Link from "next/link";
import styled from "styled-components";

export const Card = styled.div`
  width: 80%;
  max-width: 520px;
  margin: 0 auto;
  background: #fffaf0; /* amarelo bem suave */
  border-radius: 14px;
  box-shadow: 0 6px 25px rgba(249, 115, 22, 0.25);
  border: 1px solid rgba(250, 204, 21, 0.3);
  padding: 2rem;
`;

export const CardHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const IconWrapper = styled.div`
  background: linear-gradient(to bottom right, #facc15, #f97316);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem;
  border-radius: 50%;
  margin-bottom: 0.75rem;
  box-shadow: 0 0 12px rgba(250, 204, 21, 0.5);
`;

export const Title = styled.h2`
  color: #f97316;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0.5rem 0;
`;

export const Description = styled.p`
  color: #6b4f1d;
  font-size: 0.95rem;
`;

export const CardContent = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  color: #d97706;
  font-weight: 600;
`;

export const Input = styled.input`
  border: 1px solid rgba(249, 115, 22, 0.4);
  background-color: #fffdf5;
  border-radius: 8px;
  padding: 0.6rem 0.75rem;
  font-size: 0.95rem;
  outline: none;
  transition: border 0.2s ease, box-shadow 0.2s ease;
  width: 100%;
  color: #3b2f2f;

  &:focus {
    border-color: #f97316;
    box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.3);
  }

  &::placeholder {
    color: #a17434;
    opacity: 0.7;
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const TogglePassword = styled.button`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #facc15;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #f97316;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RememberWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  border: 1px solid rgba(249, 115, 22, 0.5);
  border-radius: 4px;
  accent-color: #f97316;
  cursor: pointer;
`;

export const RememberLabel = styled.label`
  font-size: 0.85rem;
  color: #5c4630;
  cursor: pointer;
`;

export const ForgotPassword = styled(Link)`
  color: #d97706;
  font-size: 0.85rem;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(to bottom right, #facc15, #f97316);
  color: white;
  font-weight: 600;
  padding: 0.85rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(249, 115, 22, 0.4);
  }
`;

export const Error = styled.span`
  color: #e63946;
  font-size: 0.875rem;
  margin-top: 4px;
  display: block;
  font-weight: 500;
  animation: fadeIn 0.2s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
