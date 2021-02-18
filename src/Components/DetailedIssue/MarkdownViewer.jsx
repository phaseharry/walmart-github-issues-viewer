import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { SECONDARY } from '../../constants/colors';

const MarkdownViewer = styled(ReactMarkdown)`
  background-color: #292834;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 0 1rem;
  border: 0.5px solid ${SECONDARY};
  overflow: auto;
`;

export default MarkdownViewer;