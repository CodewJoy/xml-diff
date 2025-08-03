import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import XmlDiffViewer from "./components/XmlDiffViewer";

const Wrapper = styled.div`
  padding: 1rem;
  font-family: Arial, sans-serif;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const TextArea = styled.textarea`
  flex: 1;
  font-family: monospace;
  font-size: 14px;
  padding: 10px;
  border: 1px solid #ccc;
  resize: none;
  height: 300px;
  line-height: 1.5;
  overflow: auto;
  white-space: pre-wrap;
`;

const App: React.FC = () => {
  const [leftXml, setLeftXml] = useState<string>(
    `<note>
    <to>Tove</to>
    <from>Jani</from>
    <to>Jani</to>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
</note>`
  );
  const [rightXml, setRightXml] = useState<string>(
    `<note>
    <to>Tove</to>
    <from>Janni</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
</note>`
  );

  const leftRef = useRef<HTMLTextAreaElement>(null);
  const rightRef = useRef<HTMLTextAreaElement>(null);

  return (
    <Wrapper>
      <h1>XML Diff Viewer with Live Input</h1>

      <InputContainer>
        <TextArea
          ref={leftRef}
          value={leftXml}
          onChange={(e) => setLeftXml(e.target.value)}
          aria-label="Old XML input"
        />
        <TextArea
          ref={rightRef}
          value={rightXml}
          onChange={(e) => setRightXml(e.target.value)}
          aria-label="New XML input"
        />
      </InputContainer>

      <XmlDiffViewer oldText={leftXml} newText={rightXml} />
    </Wrapper>
  );
};

export default App;
