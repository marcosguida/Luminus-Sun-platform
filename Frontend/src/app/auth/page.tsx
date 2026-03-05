"use client";

import Image from 'next/image';
import * as S from './style';
import { Sun, BarChart3, Leaf } from 'lucide-react';
import LoginCard from '@/components/Auth/LoginCard';

const Auth = () => {
    return (
        <S.Container>
            <S.LeftContainer>
                <div className='attribution'>
                    <div className="header-info">
                        <h1>Bem-vindo ao Luminus Sun</h1>
                        <p>
                            Monitore sua geração de energia solar, reduza custos e
                            contribua para um futuro mais sustentável.
                        </p>
                    </div>

                    <div className="objective">
                        <Sun />
                        <div className="objective-info">
                            <h3>Energia Limpa</h3>
                            <span>
                                Acompanhe em tempo real o desempenho dos seus painéis solares.
                            </span>
                        </div>
                    </div>

                    <div className="objective">
                        <BarChart3 />
                        <div className="objective-info">
                            <h3>Eficiência e Economia</h3>
                            <span>
                                Veja relatórios claros sobre consumo, produção e economia gerada.
                            </span>
                        </div>
                    </div>

                    <div className="objective">
                        <Leaf />
                        <div className="objective-info">
                            <h3>Impacto Sustentável</h3>
                            <span>
                                Calcule a quantidade de CO₂ evitada e sua contribuição ao planeta.
                            </span>
                        </div>
                    </div>
                </div>

                <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.1.0&auto=format&fit=crop&w=1080&q=80"
                    alt="Painéis solares ao pôr do sol"
                    fill
                    style={{ objectFit: "cover", opacity: 0.25, position: "absolute" }}
                    priority
                />
            </S.LeftContainer>

            <S.RightContainer>
                <LoginCard />
            </S.RightContainer>
        </S.Container>
    );
}

export default Auth;
