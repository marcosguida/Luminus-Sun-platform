import Link from "next/link";
import styled from "styled-components";

interface MenuLinkPros{
    $isActivated: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 280px;
    height: 100%;
    border-right: 2px solid #FACC15; /* borda amarela */
`;

export const Header = styled.div`
    display: flex;
    gap: 12px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    border-bottom: 2px solid #FACC15;

    div{
        display: flex;
        flex-direction: column;
        line-height: 25px;

        h3{
            font-weight: 700;
            font-size: 20px;
            color: #F97316; /* laranja solar */
        }

        span{
            font-weight: 500;
            font-size: 14px;
            color: #06402B; /* verde escuro para contraste */
        }
    }
`;

export const Content = styled.div`
    padding-top: 20px;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    span{
        font-size: 12px;
        font-weight: 500;
        margin-left: 20px;
        color: #F97316;
    }
`;

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    gap: 10px;
`;

export const MenuLink = styled(Link)<MenuLinkPros>`
    display: flex;
    align-items: center;
    text-align: center;
    color: ${(props) => props.$isActivated ? '#FFF' : '#F97316'};
    padding: 8px 0;
    font-weight: 700;
    font-size: 15px;
    text-align: left;
    border-radius: 12px;
    padding-left: 12px;
    background: ${(props) => props.$isActivated ? 'linear-gradient(to right, #FACC15, #F97316)' : '#FFF8F0'};
    gap: 8px;
    transition: all 0.2s ease-in-out;

    &:hover{
        color: #FFF;
        background: linear-gradient(to right, #F97316, #FACC15);
        transition: all 0.1s ease;
    }

    svg {
        color: ${(props) => props.$isActivated ? '#FFF' : '#FACC15'};
    }
`;

