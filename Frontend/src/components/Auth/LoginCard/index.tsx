'use client';

import { useState } from "react";
import * as S from "./style";
import { Sun, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/UserContext";
import { useAuth } from "@/hooks/useAuth";

const schema = Yup.object({
  email: Yup.string()
    .email("O formato do e-mail deve ser válido")
    .required("O e-mail é obrigatório"),
  password: Yup.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("A senha é obrigatória"),
}).required();

type LoginFormData = {
  email: string;
  password: string;
};

const LoginCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const { putUserData } = useUser();
  const { useLogin } = useAuth();
  const loginMutation = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginFormData) => {
    toast.promise(
      loginMutation.mutateAsync(data, {
        onSuccess: (response) => {
          putUserData(response); // salva no contexto global
          setTimeout(() => {
            if (response?.user) {
              router.push("/analytics");
            }
          }, 800);
        },
      }),
      {
        pending: "Aguardando resposta do servidor...",
        success: "Login realizado com sucesso! 🚀",
        error: "Falha na autenticação. Verifique suas credenciais.",
      }
    );
  };

  return (
    <S.Card>
      <S.CardHeader>
        <S.IconWrapper>
          <Sun size={32} color="#fff" />
        </S.IconWrapper>
        <S.Title>Luminus Sun</S.Title>
        <S.Description>
          Entre com suas credenciais para acessar o sistema
        </S.Description>
      </S.CardHeader>

      <S.CardContent>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Field>
            <S.Label htmlFor="email">E-mail</S.Label>
            <S.Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              {...register("email")}
            />
            {errors.email && <S.Error>{errors.email.message}</S.Error>}
          </S.Field>

          <S.Field>
            <S.Label htmlFor="password">Senha</S.Label>
            <S.PasswordWrapper>
              <S.Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                {...register("password")}
              />
              <S.TogglePassword
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </S.TogglePassword>
            </S.PasswordWrapper>
            {errors.password && <S.Error>{errors.password.message}</S.Error>}
          </S.Field>

          <S.Options>
            <S.RememberWrapper>
              <S.Checkbox
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <S.RememberLabel>Lembrar-me</S.RememberLabel>
            </S.RememberWrapper>

            <S.ForgotPassword href="/auth/register">
              Esqueceu a senha?
            </S.ForgotPassword>
          </S.Options>

          <S.SubmitButton type="submit" disabled={loginMutation.isPending}>
            {loginMutation.isPending ? "Entrando..." : "Entrar"}
          </S.SubmitButton>
        </S.Form>
      </S.CardContent>
    </S.Card>
  );
};

export default LoginCard;
