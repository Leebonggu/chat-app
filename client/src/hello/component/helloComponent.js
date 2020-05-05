import React, { memo } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
`;

const helloComponent = memo(() => (
	<Wrapper>
		hello Sample
	</Wrapper>
));

export default helloComponent;
