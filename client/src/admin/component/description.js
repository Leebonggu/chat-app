import React, { memo } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
`;

const Description = memo(() => (
	<Wrapper>
		ADMIN
	</Wrapper>
));

export default Description;
