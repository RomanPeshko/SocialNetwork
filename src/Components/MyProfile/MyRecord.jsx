import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SvgHeart from "assets/svg/heart.svg";
import SvgTrash from "assets/svg/trash.svg";


const StyledMyRecord = styled.div`
    .heart {
        color: #db2020;
        width: 30px;
    }

    .record__wrap {
        border-radius: 5px;
        background-color: rgba(49, 46, 46, 0.863);
        width: 100%;
        padding: 30px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.7);
        margin-bottom: 20px;
    }

    .item__text {
        margin-bottom: 30px;
        color: rgb(165, 140, 1);
    }

    .remove__record {
        width: 15px;
        border: 0;
        cursor: pointer;
        font-size: 16px;
        color: rgba(165, 140, 1, 0.4);
        &:hover {
            color: rgba(165, 140, 1, 1);
            
        }
       
    }

    .remove__blok {
        display: flex;
        justify-content: flex-end;
        button {
            margin-bottom: 10px;
            background-color: rgba(49, 46, 46, 0);
            border: 0;
            position: relative;
            &:hover::after {
                content: 'Удалить запись';
                position: absolute; 
                left: -630%; top: -120%;
                width: 80px;
                z-index: 1000; 
                background: #f8f8f6e4; 
                font-size: 11px;
                padding: 5px 10px;
                border: 1px solid #333;
                border-radius: 5px;
            }
        }
    }
`;



const MyRecord = (props) => {


    return (
        <StyledMyRecord>
            <div className={'record__wrap'}>
                <div className={'remove__blok'}>
                    <button>
                        <SvgTrash className={'remove__record'} />
                    </button>
                </div>
                <div className={'item__text'}>
                    {props.record}
                </div>
                <div>
                    <SvgHeart className={'heart'} />
                </div>
            </div>
        </StyledMyRecord>
    )
}

export default MyRecord;