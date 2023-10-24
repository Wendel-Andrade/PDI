import { useState } from 'react';

export function SharingStateBetweenComponents() {
  return (
    <>
      <Accordion />
    </>
  );
}

function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <>
      <Panel title="About" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout.
      </Panel>
      <Panel title="Etymology" isActive={activeIndex === 2} onShow={() => setActiveIndex(2)}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Panel>
    </>
  );
}

interface PanelProps {
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  onShow: () => void;
}

function Panel({ title, children, isActive, onShow }: PanelProps) {
  return (
    <div>
      <section>
        <h3>{title}</h3>
        {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
      </section>
    </div>
  );
}
