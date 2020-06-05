import React, { memo } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
`;

const Description = memo(() => (
	<Wrapper>
		A 와 B 가 대화할 수 있는 방을 만들기.
	</Wrapper>
));

export default Description;
