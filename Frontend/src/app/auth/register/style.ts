import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const LeftContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    background: linear-gradient(180deg, #06402B 0%, #0B5B3B 100%);
    color: #ffffff;

    .attribution {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 80%;
        height: 40%;
        margin: 0 auto;
        text-align: justify;

        .header-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 10px;
            line-height: 30px;

            h1 {
                font-size: 32px;
                font-weight: 700;
                color: #FACC15;
            }

            p {
                font-size: 16px;
                font-weight: 400;
                margin-bottom: 20px;
                color: #f3f3f3;
            }
        }

        .objective {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 12px;
            margin-bottom: 10px;

            svg {
                color: #FACC15;
                font-size: 2rem;
            }

            .objective-info {
                h3 {
                    font-size: 16px;
                    font-weight: 700;
                    color: #ffffff;
                }

                span {
                    font-size: 14px;
                    font-weight: 400;
                    text-align: justify;
                    color: #d1d5db;
                }
            }
        }
    }
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    background-color: #ffffff;
`;

export const FormAuth = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    gap: 15px;
    margin-bottom: 20px;

    input {
        width: 100%;
        padding: 10px;
        border: 1px solid #cccccc;
        border-radius: 8px;
        font-size: 16px;
        background-color: #f9fafb;
    }

    button {
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 8px;
        background: linear-gradient(to right, #FACC15, #F97316);
        color: #ffffff;
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
        transition: background 0.3s ease;

        &:hover {
            background: linear-gradient(to right, #F97316, #FACC15);
        }

        &:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
        }
    }
`;
