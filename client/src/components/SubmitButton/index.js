import React from 'react'
import  styled from 'styled-components';

const Button = styled.button`
	background: #8d00ff;
	border-radius: 3px;
	border: none;
	height: 32px;
	width: 100%;
	text-align: center;
	color: white;
	&[disabled]{
		opacity: .3;
	}
`

export const SubmitButton = ({children, onClick, disabled}) => {
    return (
        <Button onClick={onClick} disabled={disabled}>
            {children}
        </Button>
    )
}
