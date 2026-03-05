'use client'

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { api } from "@/service/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import * as S from "./style";

type State = { id: number; name: string; uf: string };
type City = { id: number; name: string };

const schema = Yup.object({
  name: Yup.string().required("Nome é obrigatório"),
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: Yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required(),
  phone: Yup.string().required("Telefone é obrigatório"),
  state: Yup.string().required("Estado é obrigatório"),
  city: Yup.string().required("Cidade é obrigatória"),
}).required();

type RegisterCardData = {
  name: string;
  email: string;
  password: string;
  phone: string;
  state: string;
  city: string;
};

const RegisterCard = () => {
  const router = useRouter();

  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterCardData>({
    resolver: yupResolver(schema),
  });

  const selectedState = watch("state");

  
  useEffect(() => {
    const fetchStates = async () => {
      setLoadingStates(true);
      try {
        const { data } = await api.get<State[]>("/ibge-geocoding/states");
        setStates(data);
      } catch (err) {
        console.error("Erro ao buscar estados:", err);
        toast.error("Não foi possível carregar os estados.");
      } finally {
        setLoadingStates(false);
      }
    };
    fetchStates();
  }, []);
  
  useEffect(() => {
    if (!selectedState) {
      setCities([]);
      return;
    }
    
    const fetchCities = async () => {
      setLoadingCities(true);
      try {
        const { data } = await api.get<City[]>(`/ibge-geocoding/states/${selectedState}/cities`);
        setCities(data);
      } catch (err) {
        console.error("Erro ao buscar cidades:", err);
        toast.error("Não foi possível carregar as cidades.");
      } finally {
        setLoadingCities(false);
      }
    };
    
    fetchCities();
  }, [selectedState]);
  
  useEffect(() => {
    setMounted(true);
  },[]);

  if (!mounted) return null;
  
  const onSubmit = async (data: RegisterCardData) => {
    try {
      await toast.promise(
        api.post("/users", data),
        {
          pending: "Criando conta...",
          success: "Conta criada com sucesso!",
          error: "Erro ao criar conta :(",
        }
      );
      router.push("/auth");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <S.Card>
      <S.CardContent>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Field>
            <S.Label htmlFor="name">Nome</S.Label>
            <S.Input id="name" {...register("name")} placeholder="Seu nome" />
            {errors.name && <S.Error>{errors.name.message}</S.Error>}
          </S.Field>

          <S.Field>
            <S.Label htmlFor="email">E-mail</S.Label>
            <S.Input id="email" {...register("email")} placeholder="seu@email.com" />
            {errors.email && <S.Error>{errors.email.message}</S.Error>}
          </S.Field>

          <S.Field>
            <S.Label htmlFor="password">Senha</S.Label>
            <S.Input id="password" type="password" {...register("password")} placeholder="••••••••" />
            {errors.password && <S.Error>{errors.password.message}</S.Error>}
          </S.Field>

          <S.Field>
            <S.Label htmlFor="phone">Telefone</S.Label>
            <S.Input id="phone" {...register("phone")} placeholder="(63) 98444-1453" />
            {errors.phone && <S.Error>{errors.phone.message}</S.Error>}
          </S.Field>

          <S.Field>
            <S.Label htmlFor="state">Estado</S.Label>
            {loadingStates ? (
              <S.Select disabled>
                <option>Carregando estados...</option>
              </S.Select>
            ) : (
              <S.Select id="state" {...register("state")}>
                <option value="">Selecione um estado</option>
                {states.map(s => (
                  <option key={s.id} value={s.uf}>{s.name}</option>
                ))}
              </S.Select>
            )}
            {errors.state && <S.Error>{errors.state.message}</S.Error>}
          </S.Field>

          <S.Field>
            <S.Label htmlFor="city">Cidade</S.Label>
            {loadingCities ? (
              <S.Select disabled>
                <option>Carregando cidades...</option>
              </S.Select>
            ) : (
              <S.Select id="city" {...register("city")} disabled={!selectedState || loadingCities}>
                <option value="">Selecione uma cidade</option>
                {cities.map(c => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </S.Select>
            )}
            {errors.city && <S.Error>{errors.city.message}</S.Error>}
          </S.Field>

          <S.SubmitButton type="submit">Cadastrar</S.SubmitButton>
        </S.Form>
      </S.CardContent>
    </S.Card>
  );
};

export default RegisterCard;
