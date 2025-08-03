import React from "react";
import { diffLines } from "diff";
import styled from "styled-components";

interface Props {
  oldText: string;
  newText: string;
}

const DiffContainer = styled.pre`
  background: #f7f7f7;
  padding: 1rem;
  border-radius: 5px;
  white-space: pre-wrap;
  font-family: monospace;
  line-height: 1.5;
`;

const Removed = styled.span`
  background-color: #ffe6e6;
  color: #d32f2f;
  text-decoration: line-through;
  display: block;
`;

const Added = styled.span`
  background-color: #e6ffe6;
  color: #388e3c;
  display: block;
`;

const Normal = styled.span`
  display: block;   
`;

const XmlDiffViewer: React.FC<Props> = ({ oldText, newText }) => {
  const diff = React.useMemo(
    () => diffLines(oldText, newText),
    [oldText, newText]
  );

  return (
    <DiffContainer>
      {diff.map((part, index) => {
        if (part.added) {
          return <Added key={index}>{part.value}</Added>;
        } else if (part.removed) {
          return <Removed key={index}>{part.value}</Removed>;
        } else {
          // 正常行用普通字體顯示，也分行
          return (
            <Normal>
              {part.value}
            </Normal>
          );
        }
      })}
    </DiffContainer>
  );
};

export default XmlDiffViewer;
