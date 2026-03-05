'use client'

import * as S from './style'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Sun, Layout, Activity, BarChart, Cpu, Settings, Users } from 'lucide-react';

const Menu = [
  {
    label: 'Análises',
    icon: <BarChart />,
    ref: '/analytics'
  },
  {
    label: 'AgenteIA',
    icon: <Cpu />,
    ref: '/agent'
  }
];


const SideBar = () => {
    const path = usePathname();

    return(
        <S.Container>
            <S.Header>
                <Image src="/logo-luminus-sun.png" alt="Luminus Sun Logo" width={60} height={55} />
                <div>
                    <h3>Luminus Sun</h3>
                    <span>Gestão de energia</span>
                </div>
            </S.Header>

            <S.Content>
                <span>Menu Principal</span>
                <S.LinkContainer>
                    {Menu.map((item, index) => (
                        <S.MenuLink href={item.ref} key={index} $isActivated={path.startsWith(item.ref)}>
                            {item.icon}
                            {item.label}
                        </S.MenuLink>
                    ))}
                </S.LinkContainer>
            </S.Content>
        </S.Container>
    );
}

export default SideBar;